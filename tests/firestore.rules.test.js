import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { after, test } from 'node:test';
import { assertFails, assertSucceeds, initializeTestEnvironment } from '@firebase/rules-unit-testing';
import { collection, deleteDoc, doc, getDoc, getDocs, limit, query, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';

const environment = await initializeTestEnvironment({
  projectId: 'demo-ee-quiz',
  firestore: { rules: await readFile(new URL('../firestore.rules', import.meta.url), 'utf8') }
});
after(() => environment.cleanup());

const student = environment.authenticatedContext('student').firestore();
const classmate = environment.authenticatedContext('classmate').firestore();
const administrator = environment.authenticatedContext('moderator', { admin: true }).firestore();
const visitor = environment.unauthenticatedContext().firestore();
const subject = 'electric_machinery';
const attempt = { kind: 'answer', subject, question: 'em-demo-001', time: 100,
  correct: true, seconds: 4, day: '2026-11-26', daily: false };

test('各帳號隔離，同帳號兩筆獨立作答與重送保留兩筆', async () => {
  const secondDevice = environment.authenticatedContext('student').firestore();
  const first = doc(student, 'users/student/attempts/device-a');
  const second = doc(secondDevice, 'users/student/attempts/device-b');
  await Promise.all([assertSucceeds(setDoc(first, attempt)), assertSucceeds(setDoc(second, { ...attempt, correct: false }))]);
  await assertSucceeds(setDoc(first, attempt));
  await assertFails(setDoc(first, { ...attempt, correct: false }));
  await assertFails(setDoc(doc(student, 'users/student/attempts/invalid'), { ...attempt, seconds: -1 }));
  await assertFails(deleteDoc(first));
  await assertFails(getDoc(doc(classmate, first.path)));
  await assertFails(getDoc(doc(administrator, first.path)));
  await assertFails(setDoc(doc(classmate, first.path), attempt));
  await assertFails(getDocs(collection(visitor, 'users/student/attempts')));
  assert.equal((await assertSucceeds(getDocs(collection(secondDevice, 'users/student/attempts')))).size, 2);
});

test('舊版紀錄與匯入資料為本人專用', async () => {
  await environment.withSecurityRulesDisabled(async context => {
    await setDoc(doc(context.firestore(), 'users/student'), { state: '{}' });
  });
  const old = doc(student, 'users/student');
  await assertSucceeds(getDoc(old));
  await assertFails(setDoc(old, { state: '{}' }));
  await assertFails(getDoc(doc(classmate, old.path)));
  const imported = doc(student, 'users/student/imports/' + 'a'.repeat(64));
  await assertSucceeds(setDoc(imported, { state: '{}' }));
  await assertFails(setDoc(imported, { state: '{"different":true}' }));
  await assertFails(getDoc(doc(classmate, imported.path)));
});

test('題庫可供訪客讀取，只有管理員能寫入或下架', async () => {
  const path = 'subjects/' + subject + '/questions/example';
  const values = { question: '題目', unit: '單元', explanation: '', answer: 0, source: '',
    options: ['一', '二', '三', '四'], type: 'mock', year: null, mock: 1 };
  await assertFails(setDoc(doc(student, path), values));
  await assertFails(setDoc(doc(administrator, path), { ...values, mock: 6 }));
  await assertSucceeds(setDoc(doc(administrator, path), values));
  await assertSucceeds(getDoc(doc(visitor, path)));
  await assertSucceeds(setDoc(doc(administrator, path), { hidden: true }));
});

test('回報須本人建立，管理員才能查看並結案', async () => {
  const path = 'reports/example';
  const report = { uid: 'student', subject, question: 'em-demo-001', message: '選項疑似有誤',
    state: 'open', createdAt: serverTimestamp() };
  await assertFails(setDoc(doc(visitor, path), report));
  await assertFails(setDoc(doc(classmate, path), report));
  await assertSucceeds(setDoc(doc(student, path), report));
  await assertFails(getDoc(doc(student, path)));
  await assertSucceeds(getDoc(doc(administrator, path)));
  await assertFails(updateDoc(doc(administrator, path), { message: '替換文字' }));
  await assertSucceeds(updateDoc(doc(administrator, path), { state: 'resolved' }));
});

test('排行榜可自願加入與退出，且僅暴露允許的欄位', async () => {
  const yours = doc(student, 'ranking/student');
  await assertFails(setDoc(yours, { alias: '同學', score: 4, email: 'test@example.invalid' }));
  await assertFails(setDoc(doc(classmate, yours.path), { alias: '同學', score: 4 }));
  await assertSucceeds(setDoc(yours, { alias: '同學', score: 4 }));
  await assertFails(getDocs(query(collection(visitor, 'ranking'), limit(50))));
  await assertFails(getDocs(collection(student, 'ranking')));
  await assertSucceeds(getDocs(query(collection(classmate, 'ranking'), limit(50))));
  await assertFails(deleteDoc(doc(classmate, yours.path)));
  await assertSucceeds(deleteDoc(yours));
});
