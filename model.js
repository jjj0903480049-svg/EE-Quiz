export const blank = () => ({ version: 1, records: {}, days: {}, theme: 'light' });
const validId = id => typeof id === 'string' && /^[a-zA-Z0-9_-]{1,64}$/.test(id);
const count = value => Number.isSafeInteger(value) && value >= 0;
const bounded = (value, length) => typeof value === 'string' && value.length <= length;

export function validateQuestion(q) {
  return q && validId(q.id) && bounded(q.question, 4000) && q.question.trim() &&
    Array.isArray(q.options) && q.options.length === 4 &&
    q.options.every(option => bounded(option, 1000) && option.trim()) &&
    Number.isInteger(q.answer) && q.answer >= 0 && q.answer < 4 &&
    bounded(q.explanation, 4000) && bounded(q.unit, 120) && q.unit.trim() &&
    bounded(q.source, 240) &&
    (q.type === 'mock' && q.year === null && Number.isInteger(q.mock) && q.mock >= 1 && q.mock <= 5 ||
      q.type === 'past' && q.mock === null && Number.isInteger(q.year) && q.year >= 1 && q.year <= 999);
}

export function mergeBank(base, changes) {
  const questions = new Map(base.map(q => [q.id, q]));
  for (const q of changes) {
    if (q.hidden === true) questions.delete(q.id);
    else if (validateQuestion(q)) questions.set(q.id, { ...questions.get(q.id), ...q });
  }
  return [...questions.values()];
}

export function mergeLegacy(...snapshots) {
  const result = blank();
  for (const snapshot of snapshots) {
    if (snapshot?.version !== 1 || !snapshot.records || !snapshot.days) continue;
    for (const [key, value] of Object.entries(snapshot.records)) {
      if (!/^[\w-]{1,64}:[\w-]{1,64}$/.test(key) || !value ||
        !['attempts', 'correct', 'wrong', 'seconds'].every(field => count(value[field])) ||
        typeof value.fav !== 'boolean') continue;
      const old = result.records[key] ?? { attempts: 0, correct: 0, wrong: 0, seconds: 0, fav: false };
      const correct = Math.max(old.correct, value.correct);
      const wrong = Math.max(old.wrong, value.wrong);
      result.records[key] = {
        attempts: Math.max(old.attempts, value.attempts, correct + wrong),
        correct, wrong, seconds: Math.max(old.seconds, value.seconds), fav: old.fav || value.fav
      };
    }
    for (const [day, subjects] of Object.entries(snapshot.days)) {
      if (!/^\d{4}-\d{2}-\d{2}$/.test(day) || !subjects || typeof subjects !== 'object') continue;
      result.days[day] ??= {};
      for (const [subject, task] of Object.entries(subjects)) {
        if (!validId(subject) || ['__proto__', 'constructor', 'prototype'].includes(subject) ||
          !Array.isArray(task?.ids) || !Array.isArray(task.done)) continue;
        const old = result.days[day][subject] ?? { ids: [], done: [] };
        const ids = [...new Set([...old.ids, ...task.ids.filter(validId)])].sort();
        const done = [...new Set([...old.done, ...task.done.filter(id => ids.includes(id))])].sort();
        result.days[day][subject] = { ids, done };
      }
    }
  }
  return result;
}

export function mergeEvents(...lists) {
  return [...new Map(lists.flat().filter(validEvent).map(event => [event.id, event])).values()]
    .sort((a, b) => a.time - b.time || a.id.localeCompare(b.id));
}

export function validEvent(event) {
  if (!event || !validId(event.id) || !validId(event.subject) || !validId(event.question) ||
    !count(event.time)) return false;
  const fields = new Set(['id', 'subject', 'question', 'time', 'kind']);
  const extras = event.kind === 'favorite' ? ['value'] : ['correct', 'seconds', 'day', 'daily'];
  extras.forEach(field => fields.add(field));
  if (Object.keys(event).some(field => !fields.has(field))) return false;
  if (event.kind === 'favorite') return typeof event.value === 'boolean';
  return event.kind === 'answer' && typeof event.correct === 'boolean' && count(event.seconds) &&
    event.seconds <= 86400 && typeof event.day === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(event.day) && typeof event.daily === 'boolean';
}

export function summarize(legacy, events) {
  const records = structuredClone(legacy.records);
  for (const event of events) {
    const key = event.subject + ':' + event.question;
    const record = records[key] ??= { attempts: 0, correct: 0, wrong: 0, seconds: 0, fav: false };
    if (event.kind === 'favorite') record.fav = event.value;
    else {
      record.attempts++;
      record.seconds += event.seconds;
      record[event.correct ? 'correct' : 'wrong']++;
    }
  }
  return records;
}

export function dailyQuestions(bank, seed) {
  const hash = value => {
    let result = 2166136261;
    for (const char of seed + value) result = Math.imul(result ^ char.charCodeAt(0), 16777619);
    return result >>> 0;
  };
  return [...bank].sort((a, b) => hash(a.id) - hash(b.id) || a.id.localeCompare(b.id)).slice(0, 10);
}

export function readJSON(storage, key, fallback = null) {
  try { return JSON.parse(storage.getItem(key)) ?? fallback; } catch { return fallback; }
}

export function journal(storage, uid) {
  const prefix = 'eequiz:v4:' + uid + ':';
  return {
    save(event) {
      const key = prefix + event.id;
      if (!storage.getItem(key)) storage.setItem(key, JSON.stringify(event));
    },
    list() {
      return Object.keys(storage).filter(key => key.startsWith(prefix))
        .map(key => readJSON(storage, key)).filter(validEvent);
    }
  };
}
