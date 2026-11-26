import config from './firebase-config.js';

export async function connect() {
  if (!config) return null;
  const base = 'https://www.gstatic.com/firebasejs/11.10.0/';
  const [app, auth, fs] = await Promise.all(
    ['app', 'auth', 'firestore'].map(name => import(base + 'firebase-' + name + '.js'))
  );
  const instance = app.initializeApp(config);
  const account = auth.getAuth(instance);
  const db = fs.getFirestore(instance);
  const doc = (...path) => fs.doc(db, ...path);
  const collection = (...path) => fs.collection(db, ...path);
  const rows = snapshot => snapshot.docs.map(data => ({ ...data.data(), id: data.id }));
  const attempts = uid => collection('users', uid, 'attempts');
  return {
    observe: (fn, error) => auth.onIdTokenChanged(account, async user => {
      try {
        const token = user && await user.getIdTokenResult();
        if (account.currentUser === user) fn(user, token?.claims.admin === true);
      } catch (reason) { error(reason); }
    }),
    register: (email, password) => auth.createUserWithEmailAndPassword(account, email, password),
    login: (email, password) => auth.signInWithEmailAndPassword(account, email, password),
    google: async () => {
      const provider = new auth.GoogleAuthProvider();
      try { return await auth.signInWithPopup(account, provider); }
      catch (error) {
        if (!['auth/popup-blocked', 'auth/operation-not-supported-in-this-environment'].includes(error.code)) throw error;
        throw new Error('無法開啟 Google 登入視窗。請允許彈出式視窗，或在一般瀏覽器開啟網站。');
      }
    },
    reset: email => auth.sendPasswordResetEmail(account, email),
    logout: () => auth.signOut(account),
    watchAttempts: (uid, fn, error) => fs.onSnapshot(attempts(uid), { includeMetadataChanges: true }, snapshot => {
      fn(rows(snapshot), snapshot.docs.filter(data => !data.metadata.hasPendingWrites).map(data => data.id),
        !snapshot.metadata.fromCache);
    }, error),
    watchLegacy: (uid, fn, error) => fs.onSnapshot(doc('users', uid), snapshot => fn(snapshot.data()?.state), error),
    watchImports: (uid, fn, error) => fs.onSnapshot(collection('users', uid, 'imports'), snapshot => fn(rows(snapshot)), error),
    saveImport: (uid, device, state) => fs.setDoc(doc('users', uid, 'imports', device), { state }),
    writeAttempt: (uid, { id, ...event }) => fs.setDoc(doc('users', uid, 'attempts', id), event),
    ownRanking: async uid => (await fs.getDoc(doc('ranking', uid))).data(),
    ranking: async () => rows(await fs.getDocs(fs.query(collection('ranking'), fs.orderBy('score', 'desc'), fs.limit(50)))),
    join: (uid, alias, score) => fs.setDoc(doc('ranking', uid), { alias, score }),
    leave: uid => fs.deleteDoc(doc('ranking', uid)),
    watchBank: (subject, fn, error) => fs.onSnapshot(collection('subjects', subject, 'questions'), snapshot => fn(rows(snapshot), !snapshot.metadata.fromCache), error),
    saveQuestion: (subject, { id, ...q }) => fs.setDoc(doc('subjects', subject, 'questions', id), q),
    hideQuestion: (subject, id) => fs.setDoc(doc('subjects', subject, 'questions', id), { hidden: true }),
    report: ({ uid, subject, question, message }) => fs.addDoc(collection('reports'), {
      uid, subject, question, message, createdAt: fs.serverTimestamp(), state: 'open'
    }),
    reports: async () => rows(await fs.getDocs(fs.query(collection('reports'), fs.orderBy('createdAt', 'desc'), fs.limit(50)))),
    resolve: id => fs.updateDoc(doc('reports', id), { state: 'resolved' })
  };
}
