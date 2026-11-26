import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';
import { blank, dailyQuestions, journal, mergeBank, mergeEvents, mergeLegacy, summarize, validateQuestion } from '../model.js';

const subject = 'electric_machinery';
const raw = await readFile(new URL('../data/electric_machinery.js', import.meta.url), 'utf8');
const bank = vm.runInNewContext(raw, { self: {} });
const question = bank[0].id;
const answer = (id, correct) => ({ id, subject, question, time: 100, kind: 'answer', correct, day: '2026-11-26', daily: false, seconds: 3 });

test('原題庫有 250 個唯一 ID，各次模擬考 50 題', () => {
  assert.equal(bank.length, 250);
  assert.equal(new Set(bank.map(q => q.id)).size, 250);
  assert.ok(bank.every(validateQuestion));
  for (let exam = 1; exam <= 5; exam++) assert.equal(bank.filter(q => q.mock === exam).length, 50);
});

test('兩台離線裝置作答，調換同步順序與重送皆保留兩筆', () => {
  const a = answer('device-a', true);
  const b = answer('device-b', false);
  assert.deepEqual(mergeEvents([a], [b, a]), mergeEvents([b], [a, a]));
  assert.deepEqual(summarize(blank(), mergeEvents([a, b, a]))[subject + ':' + question],
    { attempts: 2, correct: 1, wrong: 1, seconds: 6, fav: false });
});

test('舊紀錄合併不重算重複備份，仍能疊加新版作答', () => {
  const old = blank();
  const key = subject + ':' + question;
  old.records[key] = { attempts: 3, correct: 1, wrong: 2, seconds: 12, fav: true };
  const local = blank();
  local.records[key] = { attempts: 3, correct: 2, wrong: 1, seconds: 10, fav: false };
  const merged = mergeLegacy(old, local, old);
  assert.deepEqual(merged, mergeLegacy(local, old));
  assert.deepEqual(summarize(merged, [answer('new', true)])[key],
    { attempts: 5, correct: 3, wrong: 2, seconds: 15, fav: true });
});

test('題庫覆寫保留 ID 和附圖，也可下架', () => {
  const q = { ...bank[0], image: 'images/transformer.png' };
  assert.equal(mergeBank([q], [{ ...bank[0], unit: '更新單元' }])[0].image, q.image);
  assert.equal(mergeBank([q], [{ id: q.id, hidden: true }]).length, 0);
});

test('每日題目在不同題庫載入順序下相同', () => {
  const ids = values => dailyQuestions(values, '2026-11-26' + subject).map(q => q.id);
  assert.deepEqual(ids(bank), ids([...bank].reverse()));
  assert.equal(ids(bank).length, 10);
});

test('分帳號儲存，兩次寫入與重新開啟後事件皆保留', () => {
  const storage = {
    setItem(key, value) { this[key] = value; },
    getItem(key) { return this[key] ?? null; }
  };
  journal(storage, 'one').save(answer('a', true));
  journal(storage, 'two').save(answer('a', false));
  journal(storage, 'one').save(answer('b', false));
  assert.deepEqual(journal(storage, 'one').list(), [answer('a', true), answer('b', false)]);
  assert.deepEqual(journal(storage, 'two').list(), [answer('a', false)]);
});
