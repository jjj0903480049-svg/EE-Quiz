import { connect } from './cloud.js';
import {
  blank, dailyQuestions, journal, mergeBank, mergeEvents, mergeLegacy, readJSON,
  summarize, validateQuestion, validEvent
} from './model.js';

const $ = id => document.getElementById(id);
const viewButtons = [...document.querySelectorAll('[data-view]')];
const storage = localStorage;
const activeKey = 'ee-quiz-active-account';
const dateKey = (date = new Date()) => new Intl.DateTimeFormat('sv-SE').format(date);
const banks = new Map();
const cacheBank = subject => 'eequiz:bank:' + subject;
const guest = 'guest';
let cloud;
let user = null;
let admin = false;
let cachedAccount = readJSON(storage, activeKey);
let view = 'practice';
let listeners = [];
let bankListener;
let scope;
let round = [];
let index = 0;
let selected = null;
let started = Date.now();
let roundScore = 0;
let roundAnswered = 0;
let records = {};
let events = [];
let legacy = blank();
let rankingVersion = 0;

function element(tag, text, className) {
  const node = document.createElement(tag);
  if (text !== undefined) node.textContent = text;
  if (className) node.className = className;
  return node;
}

function button(text, run) {
  const node = element('button', text);
  node.type = 'button';
  node.onclick = run;
  return node;
}

function options(select, entries) {
  select.replaceChildren(...entries.map(([value, text]) => new Option(text, value)));
}

function message(text) {
  $('status').textContent = text;
}

function showError(error) {
  const errors = {
    'auth/invalid-credential': '電子郵件或密碼有誤。',
    'auth/email-already-in-use': '此電子郵件已註冊，可登入或重設密碼。',
    'auth/weak-password': '請輸入至少六個字元的密碼。',
    'auth/invalid-email': '請輸入有效的電子郵件。',
    'auth/popup-closed-by-user': 'Google 登入視窗已關閉，可再試一次。',
    'auth/unauthorized-domain': '請在 Firebase Authentication 加入目前的網站網域。',
    'auth/network-request-failed': '帳號服務無法連線。',
    'permission-denied': '操作遭拒。請確認 Firebase 規則及帳號權限。'
  };
  message(errors[error.code] ?? error.message ?? '操作未完成，請稍後再試。');
}

function action(run) {
  return async event => {
    event?.preventDefault();
    try { await run(event); } catch (error) { showError(error); }
  };
}

const identity = () => user?.uid ?? cachedAccount?.uid ?? guest;
const legacyKey = uid => uid === guest ? 'ee-quiz-v1' : 'ee-quiz-v1:' + uid;
const importKey = uid => 'eequiz:import:' + uid;
const cloudLegacyKey = uid => 'eequiz:cloud-legacy:' + uid;
const ownJournal = () => journal(storage, identity());
const localLegacy = uid => mergeLegacy(readJSON(storage, legacyKey(uid)), readJSON(storage, importKey(uid)));
const bank = subject => mergeBank(banks.get(subject) ?? [], readJSON(storage, cacheBank(subject), []));
const currentSubject = () => $('subject').value;
const record = (subject, id) => records[subject + ':' + id];

function readProgress() {
  const uid = identity();
  legacy = mergeLegacy(localLegacy(uid), readJSON(storage, cloudLegacyKey(uid)));
  events = mergeEvents(ownJournal().list(), readJSON(storage, 'eequiz:mirror:' + uid, []));
  records = summarize(legacy, events);
  renderHistory();
}

function dailyTask(subject, day) {
  const previous = legacy.days[day]?.[subject];
  const ids = previous?.ids.length ? previous.ids : dailyQuestions(bank(subject), day + subject).map(q => q.id);
  const done = new Set(previous?.done);
  for (const event of events) {
    if (event.kind === 'answer' && event.daily && event.day === day && event.subject === subject && ids.includes(event.question)) {
      done.add(event.question);
    }
  }
  return { ids, done, complete: ids.length > 0 && ids.every(id => done.has(id)) };
}

function renderHistory() {
  const values = Object.values(records);
  const total = values.reduce((sum, r) => sum + r.attempts, 0);
  const correct = values.reduce((sum, r) => sum + r.correct, 0);
  const today = dailyTask(currentSubject(), dateKey());
  const day = new Date();
  const complete = () => {
    const key = dateKey(day);
    return (legacy.days[key] || events.some(event => event.daily && event.day === key)) &&
      self.SUBJECTS.some(subject => dailyTask(subject.id, key).complete);
  };
  if (!complete()) day.setDate(day.getDate() - 1);
  let streak = 0;
  while (complete()) {
    streak++;
    day.setDate(day.getDate() - 1);
  }
  $('summary').textContent = `作答 ${total} 題 · 答對 ${correct} 題${total ? '（' + Math.round(correct / total * 100) + '%）' : ''} · 今日必刷 ${today.done.size}/${today.ids.length} · 連續打卡 ${streak} 天`;
  $('recent').replaceChildren(...events.filter(event => event.kind === 'answer').slice(-20).reverse().map(event => {
    const question = bank(event.subject).find(q => q.id === event.question);
    return element('li', `${event.day} · ${event.correct ? '答對' : '答錯'} · ${question?.question ?? event.question}`);
  }));
}

function appendEvent(event) {
  ownJournal().save({ ...event, id: crypto.randomUUID(), time: Date.now() });
  readProgress();
  syncProgress();
}

function configureFilters() {
  const questions = bank(currentSubject());
  const mode = $('mode').value;
  const period = $('period').value;
  const unit = $('unit').value;
  const periods = mode === 'mock' ? Array.from('一二三四五', (n, i) => [i + 1, '第' + n + '次模擬考'])
    : mode === 'past' ? [...new Set(questions.filter(q => q.type === 'past').map(q => q.year))]
      .sort((a, b) => b - a).map(year => [year, year + ' 年']) : [];
  options($('period'), [['', '全部'], ...periods]);
  options($('unit'), [['', '全部單元'], ...[...new Set(questions.map(q => q.unit))].map(value => [value, value])]);
  if ([...$('period').options].some(option => option.value === period)) $('period').value = period;
  if ([...$('unit').options].some(option => option.value === unit)) $('unit').value = unit;
  $('period').disabled = !periods.length;
  $('unit').disabled = mode === 'daily';
}

function resetRound() {
  const subject = currentSubject();
  const mode = $('mode').value;
  const period = $('period').disabled ? '' : $('period').value;
  const unit = $('unit').disabled ? '' : $('unit').value;
  const task = mode === 'daily' ? dailyTask(subject, dateKey()) : null;
  round = bank(subject).filter(q =>
    (!unit || q.unit === unit) && (!period || Number(period) === (mode === 'past' ? q.year : q.mock)) &&
    (mode === 'all' || mode === q.type || mode === 'fav' && record(subject, q.id)?.fav ||
      mode === 'wrong' && record(subject, q.id)?.wrong > 0 ||
      task && task.ids.includes(q.id) && !task.done.has(q.id))
  );
  index = 0;
  roundScore = 0;
  roundAnswered = 0;
  selected = null;
  started = Date.now();
  renderHistory();
  renderQuestion();
}

function renderQuestion() {
  const root = $('question');
  root.replaceChildren();
  const q = round[index];
  if (!q) {
    root.append(element('h2', round.length ? '本輪完成' : '目前沒有符合條件的題目'));
    if (round.length) root.append(element('p', `作答 ${roundAnswered} 題，答對 ${roundScore} 題。`));
    root.append(button('重新整理題目', resetRound));
    return;
  }
  const subject = currentSubject();
  const exam = q.type === 'past' ? q.year + ' 年' : '第' + '一二三四五'[q.mock - 1] + '次模擬考';
  const favorite = button(record(subject, q.id)?.fav ? '取消收藏' : '加入收藏', action(() => {
    appendEvent({ subject, question: q.id, kind: 'favorite', value: !record(subject, q.id)?.fav });
    favorite.textContent = record(subject, q.id)?.fav ? '取消收藏' : '加入收藏';
  }));
  root.append(element('p', `${index + 1} / ${round.length} · ${exam} · ${q.unit}`, 'metadata'), favorite,
    element('h2', q.question));
  if (q.image) {
    const image = element('img', undefined, 'question-image');
    image.src = q.image;
    image.alt = '題目附圖';
    root.append(image);
  }
  const choices = element('div', undefined, 'options');
  q.options.forEach((option, choice) => {
    const node = button('ABCD'[choice] + '. ' + option, action(() => {
      const correct = choice === q.answer;
      appendEvent({
        subject, question: q.id, kind: 'answer', correct,
        seconds: Math.min(86400, Math.max(0, Math.round((Date.now() - started) / 1000))),
        day: dateKey(), daily: $('mode').value === 'daily'
      });
      selected = choice;
      roundAnswered++;
      if (correct) roundScore++;
      renderQuestion();
      root.querySelector('#feedback').focus({ preventScroll: true });
    }));
    node.disabled = selected !== null;
    if (node.disabled && choice === q.answer) node.classList.add('correct');
    else if (choice === selected) node.classList.add('wrong');
    choices.append(node);
  });
  root.append(choices);
  if (selected !== null) {
    const feedback = element('p', selected === q.answer ? '答對了！' : '答錯了，正確答案是 ' + 'ABCD'[q.answer]);
    feedback.id = 'feedback';
    feedback.tabIndex = -1;
    root.append(feedback, element('p', q.explanation), element('p', q.source, 'metadata'), button('下一題', () => {
      index++;
      selected = null;
      started = Date.now();
      renderQuestion();
      root.scrollIntoView({ block: 'start' });
    }));
  }
  root.append(button('回報題目錯誤', () => openReport(root, subject, q.id)));
}

function openReport(root, subject, question) {
  if (!user) {
    showView('account');
    message('請登入後送出題目回報。');
    return;
  }
  if (root.querySelector('form')) return;
  const form = element('form');
  const label = element('label', '錯誤說明');
  const input = element('textarea');
  input.required = true;
  input.maxLength = 1000;
  label.append(input);
  const submit = element('button', '送出回報');
  form.append(label, submit, button('取消', () => form.remove()));
  form.onsubmit = action(async () => {
    if (!user || !input.value.trim()) return;
    if (!navigator.onLine) throw new Error('請連網後送出回報。');
    submit.disabled = true;
    try {
      await cloud.report({ uid: user.uid, subject, question, message: input.value.trim() });
      form.remove();
      message('已收到題目回報。');
    } finally { submit.disabled = false; }
  });
  root.append(form);
  input.focus();
}

function syncProgress() {
  const active = scope;
  if (!active || !navigator.onLine) return;
  if (!active.ready) return;
  const pending = journal(storage, active.uid).list().filter(event => !active.confirmed.has(event.id) && !active.writing.has(event.id));
  for (const event of pending) {
    active.writing.add(event.id);
    cloud.writeAttempt(active.uid, event).then(() => {
      active.confirmed.add(event.id);
      if (scope === active) renderIdentity();
    }).catch(error => { if (scope === active) showError(error); })
      .finally(() => active.writing.delete(event.id));
  }
  const old = localLegacy(active.uid);
  if (!Object.keys(old.records).length && !Object.keys(old.days).length) return;
  const snapshot = JSON.stringify(old);
  if (snapshot === active.imported || active.importWriting) return;
  if (new TextEncoder().encode(snapshot).length > 750000) {
    message('舊版紀錄超過雲端匯入大小上限，已保留本機紀錄。');
    return;
  }
  try {
    active.importWriting = true;
    const persist = async () => {
      const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(snapshot));
      const id = [...new Uint8Array(digest)].map(byte => byte.toString(16).padStart(2, '0')).join('');
      if (scope === active) await cloud.saveImport(active.uid, id, snapshot);
    };
    persist().then(() => { active.imported = snapshot; })
      .catch(error => { if (scope === active) showError(error); })
      .finally(() => {
        active.importWriting = false;
        if (scope === active && active.imported === snapshot) syncProgress();
      });
  } catch (error) { showError(error); }
}

function applyIdentity(nextUser, nextAdmin) {
  const previous = identity();
  const oldUid = user?.uid;
  user = nextUser;
  admin = nextAdmin;
  cachedAccount = user && { uid: user.uid, email: user.email };
  if (cachedAccount) storage.setItem(activeKey, JSON.stringify(cachedAccount));
  else storage.removeItem(activeKey);
  renderIdentity();
  if (view === 'admin' && !admin) showView('practice');
  if (oldUid === user?.uid && scope) return;

  listeners.forEach(stop => stop());
  listeners = [];
  scope = null;
  readProgress();
  if (previous !== identity()) resetRound();
  if (view === 'rank') loadRanking();
  if (!user) return;
  const uid = user.uid;
  const active = { uid, confirmed: new Set(), writing: new Set(), imports: [], old: null };
  scope = active;
  const onError = error => { if (scope === active) showError(error); };
  const updateLegacy = () => {
    if (scope !== active) return;
    storage.setItem(cloudLegacyKey(uid), JSON.stringify(mergeLegacy(
      readJSON(storage, cloudLegacyKey(uid)), active.old, ...active.imports
    )));
    readProgress();
  };
  const parse = value => { try { return JSON.parse(value); } catch { return null; } };
  listeners.push(
    cloud.watchAttempts(uid, (rows, confirmed, server) => {
      if (scope !== active) return;
      if (server) {
        active.ready = true;
        active.confirmed = new Set([...active.confirmed, ...confirmed]);
      }
      storage.setItem('eequiz:mirror:' + uid, JSON.stringify(mergeEvents(
        readJSON(storage, 'eequiz:mirror:' + uid, []), rows
      )));
      readProgress();
      renderIdentity();
      if (server) syncProgress();
    }, onError),
    cloud.watchLegacy(uid, state => { active.old = parse(state); updateLegacy(); }, onError),
    cloud.watchImports(uid, rows => { active.imports = rows.map(row => parse(row.state)); updateLegacy(); }, onError)
  );
  syncProgress();
}

function renderIdentity() {
  const pending = scope && ownJournal().list().filter(event => !scope.confirmed.has(event.id)).length;
  $('identity').textContent = user
    ? `已登入 ${user.email ?? 'Google 帳號'}${pending ? ' · ' + pending + ' 筆作答或收藏待同步' : ''}`
    : cachedAccount ? '離線帳號紀錄 · 等待連網驗證' : '訪客紀錄會儲存在此裝置。';
  $('login-form').hidden = !cloud || Boolean(user);
  $('logout').hidden = !user;
  $('import-guest').hidden = !user;
  document.querySelector('[data-view="admin"]').hidden = !admin;
}

function watchBank() {
  bankListener?.();
  if (!cloud) return;
  const subject = view === 'admin' ? $('admin-subject').value : currentSubject();
  if (!subject) return;
  bankListener = cloud.watchBank(subject, (rows, server) => {
    if (!server) return;
    const key = cacheBank(subject);
    const content = JSON.stringify(rows);
    if (storage.getItem(key) === content) return;
    storage.setItem(key, content);
    if (view === 'admin') fillAdminPicker();
    if (subject === currentSubject()) {
      configureFilters();
      if (!round.length) resetRound();
    }
  }, showError);
}

function fillAdminPicker() {
  const picker = $('admin-picker');
  const previous = picker.value;
  options(picker, [['', '新增題目'], ...bank($('admin-subject').value).map(q => [q.id, q.id + ' · ' + q.question])]);
  if ([...picker.options].some(option => option.value === previous)) picker.value = previous;
}

function fillEditor() {
  const form = $('editor');
  form.reset();
  const q = bank($('admin-subject').value).find(value => value.id === $('admin-picker').value);
  const fields = form.elements;
  fields.namedItem('id').readOnly = Boolean(q);
  if (!q) return;
  const values = {
    id: q.id, prompt: q.question, unit: q.unit, type: q.type, period: q.mock ?? q.year,
    source: q.source, answer: q.answer, explanation: q.explanation,
    a: q.options[0], b: q.options[1], c: q.options[2], d: q.options[3]
  };
  for (const [key, value] of Object.entries(values)) fields.namedItem(key).value = value ?? '';
}

async function loadReports() {
  if (!admin) return;
  const reports = await cloud.reports();
  if (!admin) return;
  $('reports').replaceChildren(...reports.map(report => {
    const item = element('li', `${report.subject} / ${report.question} · ${report.state === 'resolved' ? '已處理' : '待處理'} · ${report.message}`);
    if (report.state === 'open') item.append(' ', button('標記為已處理', action(async () => {
      await cloud.resolve(report.id);
      await loadReports();
    })));
    return item;
  }));
}

async function loadRanking() {
  const version = ++rankingVersion;
  const uid = user?.uid;
  $('ranking-form').hidden = true;
  $('ranking-list').replaceChildren();
  if (!cloud || !uid) {
    $('ranking-state').textContent = '登入後可查看排行榜及選擇參加。';
    return;
  }
  $('ranking-state').textContent = '載入排行榜中…';
  try {
    const [entries, own] = await Promise.all([cloud.ranking(), cloud.ownRanking(uid)]);
    if (version !== rankingVersion || user?.uid !== uid) return;
    $('ranking-state').textContent = own ? '你已參加排行榜。' : '你尚未參加排行榜。';
    $('ranking-form').hidden = false;
    $('ranking-form').elements.alias.value = own?.alias ?? '';
    $('leave').hidden = !own;
    $('ranking-list').replaceChildren(...entries.map(entry => element('li', entry.alias + ' · ' + entry.score + ' 題')));
  } catch (error) {
    if (version === rankingVersion) {
      $('ranking-state').textContent = '目前無法載入排行榜。';
      showError(error);
    }
  }
}

function showView(next) {
  if (next === 'admin' && !admin) return;
  view = next;
  message('');
  for (const node of viewButtons) {
    const current = node.dataset.view === view;
    $(node.dataset.view).hidden = !current;
    if (current) node.setAttribute('aria-current', 'page');
    else node.removeAttribute('aria-current');
  }
  if (view === 'history') renderHistory();
  if (view === 'practice') { configureFilters(); if (!round.length) resetRound(); }
  if (view === 'rank') loadRanking();
  if (view === 'admin') {
    fillAdminPicker();
    fillEditor();
    loadReports().catch(showError);
  }
  watchBank();
}

function importProgress(uid, snapshot, importedEvents) {
  const merged = mergeLegacy(localLegacy(uid), snapshot);
  storage.setItem(importKey(uid), JSON.stringify(merged));
  const target = journal(storage, uid);
  const known = new Set(readJSON(storage, 'eequiz:mirror:' + uid, []).map(event => event.id));
  for (const event of importedEvents) {
    if (!known.has(event.id)) target.save(event);
  }
  readProgress();
  syncProgress();
  resetRound();
}

function wireControls() {
  viewButtons.forEach(node => { node.onclick = () => showView(node.dataset.view); });
  const theme = $('theme');
  theme.value = storage.getItem('eequiz:theme') ?? readJSON(storage, legacyKey(guest))?.theme ?? 'system';
  document.documentElement.dataset.theme = theme.value;
  theme.onchange = () => {
    document.documentElement.dataset.theme = theme.value;
    storage.setItem('eequiz:theme', theme.value);
  };
  $('subject').onchange = () => { configureFilters(); resetRound(); watchBank(); };
  $('mode').onchange = () => { configureFilters(); resetRound(); };
  $('unit').onchange = $('period').onchange = resetRound;
  const form = $('login-form');
  form.onsubmit = action(async e => {
    if (!navigator.onLine) throw new Error('請連網後登入或註冊。');
    const operation = e.submitter?.value === 'register' ? 'register' : 'login';
    await cloud[operation](form.elements.email.value.trim(), form.elements.password.value);
    form.reset();
    message(operation === 'register' ? '帳號已建立。' : '已登入。');
  });
  $('google').onclick = action(() => cloud.google());
  $('reset').onclick = action(async () => {
    const email = form.elements.email;
    if (!email.reportValidity()) return;
    if (!navigator.onLine) throw new Error('請連網後重設密碼。');
    try { await cloud.reset(email.value.trim()); }
    catch (error) { if (error.code !== 'auth/user-not-found') throw error; }
    message('已提出重設要求。若帳號存在，請查看電子郵件。');
  });
  $('logout').onclick = action(async () => {
    await cloud.logout();
    message('已登出。');
  });
  $('import-guest').onclick = action(() => {
    if (user) importProgress(user.uid, localLegacy(guest), journal(storage, guest).list());
    message('訪客紀錄已匯入。');
  });
  $('export').onclick = () => {
    const link = element('a');
    link.href = URL.createObjectURL(new Blob([JSON.stringify({ format: 4, legacy, events }, null, 2)], { type: 'application/json' }));
    link.download = 'ee-quiz-' + dateKey() + '.json';
    link.click();
    setTimeout(() => URL.revokeObjectURL(link.href), 1000);
  };
  $('import').onclick = () => $('backup-file').click();
  $('backup-file').onchange = action(async () => {
    const input = $('backup-file');
    const file = input.files[0];
    const uid = identity();
    if (!file) return;
    try {
      const data = JSON.parse(await file.text());
      const snapshot = data?.format === 4 ? data.legacy : data;
      const imported = data?.format === 4 ? data.events : [];
      if (snapshot?.version !== 1 || !snapshot.records || !snapshot.days ||
          !Array.isArray(imported) || !imported.every(validEvent)) throw new Error('備份格式不正確。');
      if (uid !== identity()) throw new Error('帳號已切換，請重新選擇備份。');
      importProgress(uid, snapshot, imported);
      message('備份已合併。');
    } finally { input.value = ''; }
  });
  $('ranking-form').onsubmit = action(async () => {
    if (!user || !navigator.onLine) throw new Error('請連網並登入後更新排行榜。');
    const alias = $('ranking-form').elements.alias.value.trim();
    if (!alias) throw new Error('請輸入公開暱稱。');
    const score = Object.entries(records).filter(([key, r]) => {
      const [subject, id] = key.split(':');
      return r.correct > 0 && bank(subject).some(q => q.id === id);
    }).length;
    await cloud.join(user.uid, alias, score);
    await loadRanking();
  });
  $('leave').onclick = action(async () => {
    if (!user || !navigator.onLine) throw new Error('請連網後退出排行榜。');
    await cloud.leave(user.uid);
    await loadRanking();
  });
  $('admin-subject').onchange = () => { fillAdminPicker(); fillEditor(); watchBank(); };
  $('admin-picker').onchange = fillEditor;
  $('editor').onsubmit = action(async () => {
    if (!admin || !navigator.onLine) throw new Error('請連網並以管理員身分登入。');
    const data = new FormData($('editor'));
    const field = name => String(data.get(name)).trim();
    const type = field('type');
    const period = Number(field('period'));
    const q = {
      id: field('id'), question: field('prompt'), unit: field('unit'), type,
      mock: type === 'mock' ? period : null, year: type === 'past' ? period : null,
      explanation: field('explanation'), source: field('source'), answer: Number(field('answer')),
      options: ['a', 'b', 'c', 'd'].map(field)
    };
    if (!validateQuestion(q)) throw new Error('請檢查題目欄位。模擬考次為 1 至 5。');
    const subject = $('admin-subject').value;
    if (!$('admin-picker').value && bank(subject).some(existing => existing.id === q.id)) {
      throw new Error('此題目 ID 已存在，請先選取題目再編輯。');
    }
    await cloud.saveQuestion(subject, q);
    message('已儲存題目。');
  });
  $('hide-question').onclick = action(async () => {
    const id = $('admin-picker').value;
    if (!navigator.onLine) throw new Error('請連網後下架題目。');
    if (!admin || !id || !confirm('確定下架這道題目？')) return;
    await cloud.hideQuestion($('admin-subject').value, id);
    fillEditor();
    message('已下架題目。');
  });
  $('refresh-reports').onclick = action(loadReports);
  window.addEventListener('storage', () => { readProgress(); syncProgress(); });
  window.addEventListener('online', () => { syncProgress(); startCloud(); });
  setInterval(syncProgress, 30000);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) syncProgress(); });
}

let connecting = false;
async function startCloud() {
  if (cloud || connecting || !navigator.onLine) return;
  connecting = true;
  try {
    cloud = await connect();
    if (!cloud) {
      message('目前提供訪客刷題。Firebase 設定完成後即可使用帳號功能。');
      return;
    }
    cloud.observe(applyIdentity, showError);
    watchBank();
    renderIdentity();
  } catch (error) { showError(error); }
  finally { connecting = false; }
}

async function start() {
  await Promise.all(self.SUBJECTS.map(async subject => {
    const script = element('script');
    script.src = subject.file;
    await new Promise((resolve, reject) => {
      script.onload = resolve;
      script.onerror = () => reject(new Error('無法載入題庫：' + subject.name));
      document.head.append(script);
    });
    banks.set(subject.id, (self.QUESTION_BANKS[subject.id] ?? []).filter(validateQuestion));
  }));
  const names = self.SUBJECTS.map(subject => [subject.id, subject.name]);
  options($('subject'), names);
  options($('admin-subject'), names);
  wireControls();
  readProgress();
  configureFilters();
  resetRound();
  renderIdentity();
  startCloud();
  if ('serviceWorker' in navigator) setupUpdates().catch(showError);
}

start().catch(showError);
