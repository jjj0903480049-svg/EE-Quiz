# 電機刷題室 V4.0

統測電機類刷題平台。內附 250 題電工機械原創練習題，第一至第五次模擬考各 50 題。刷題、收藏、錯題本、每日必刷與備份可使用訪客模式。登入後，同一帳號的作答和收藏可在裝置間同步。原題庫為原創模擬題，歷屆試題篩選可以在加入歷屆題目後使用。

## 本機開發

需要 Python 3 和 Node.js 22 或更新版本。

```sh
npm test
python3 scripts/build_site.py
python3 -m http.server 3000 --directory dist
```

開啟 http://localhost:3000。修改網站後重新執行打包命令。Service Worker 會驗證每項發布檔案的 SHA-256，完整下載後才提供新版。首次連網開啟並等待「離線快取完成」後，即可離線重開刷題。網站會在開啟、回到前景、恢復連線和每五分鐘檢查新版。已有頁面可按「套用新版」，關閉所有舊版頁面也會讓新版接手。iPhone 可用 Safari 的「分享 → 加入主畫面」。

## Firebase 與 GitHub Pages 設定

1. 在 Firebase Console 建立 Spark 免費專案，新增 **Web App**，並在 Firestore Database 以 **Production mode** 建立預設資料庫。
2. 到 **Authentication → Sign-in method** 啟用 **Email/Password** 和 **Google**。Google 需要選擇專案支援信箱。到 **Settings → Authorized domains** 加入 `jjj0903480049-svg.github.io`。本機測試可另外加入 `localhost`。彈出式視窗受限時，可使用一般瀏覽器開啟網站並允許 Google 登入視窗。
3. 以 Firebase 專案管理者身分執行下方命令。這會發布本儲存庫的規則與索引設定。應先確認目標 Firebase 專案供此平台使用。
4. 在 GitHub 儲存庫的 **Settings → Secrets and variables → Actions → Variables** 建立 `FIREBASE_WEB_CONFIG`。值為 Web App 的 SDK 設定 JSON，例如 `{"apiKey":"…","authDomain":"…","projectId":"…","appId":"…"}`。Web SDK 設定會出現在公開網站；請將管理憑證和服務帳戶金鑰留在本機。
5. 到 **Settings → Pages → Build and deployment** 選擇 **GitHub Actions**。合併到 `main` 後會自動測試並發布。只變更變數時，可在 **Actions → Test and deploy GitHub Pages → Run workflow** 重新發布。預設站址為 https://jjj0903480049-svg.github.io/EE-Quiz/ 。

```sh
npx firebase-tools login
npx firebase-tools deploy --only firestore --project YOUR_FIREBASE_PROJECT_ID
```

Firebase 設定可用環境變數傳給本機打包程式。GitHub Pages 負責靜態主機，Firebase Spark 有免費用量上限。

### 指定管理員

1. 讓管理員先在網站註冊或使用 Google 登入。從 **Firebase → Authentication → Users** 複製該使用者的 UID。
2. 在儲存庫外的空白資料夾執行 `npm install firebase-admin`。若使用 Application Default Credentials，執行 `gcloud auth application-default login`，以有權管理 Firebase Authentication 的帳號授權。
3. 在該資料夾執行下列命令。替換 UID 與專案 ID。再次登入網站即可刷新權限。撤銷時將程式中的 `admin:true` 改成 `admin:false` 後重新執行。

```sh
node --input-type=commonjs -e 'const {initializeApp,applicationDefault}=require("firebase-admin/app");const {getAuth}=require("firebase-admin/auth");initializeApp({credential:applicationDefault(),projectId:process.argv[3]});const auth=getAuth();auth.getUser(process.argv[2]).then(user=>auth.setCustomUserClaims(user.uid,{...user.customClaims,admin:true})).catch(err=>{console.error(err);process.exitCode=1})' USER_UID YOUR_FIREBASE_PROJECT_ID
```

## 紀錄、權限與題庫

- 新版將作答與收藏逐筆寫入帳號私有的集合。每筆事件有固定 ID，離線重送不會重複計分。兩台裝置可獨立作答，回到線上後保留各自的紀錄。收藏衝突按事件時間與 ID 決定。
- 舊版帳號資料、現有本機進度與舊版備份仍可合併。舊版只保存累計值，匯入時逐題取各欄位最大值以免重複計分，無法重建早先被覆蓋的作答。訪客紀錄可手動匯入帳號。
- 排行榜須主動參加，可隨時退出。登入使用者能看到參加者的公開暱稱與自報分數；分數可在排行榜頁面手動更新。Firestore 規則限制欄位與寫入者。這個靜態部署方案適合同學自願分享進度。
- 登入即可回報題目錯誤。只有帶有 `admin` 自訂聲明的帳號可以讀取與處理回報，或新增、修改、下架題目。所有讀者可以取得雲端題庫變更。
- 原題庫在 `data/electric_machinery.js`。新增科目時，在 `data/subjects.js` 登記 `{id, name, file}`，並將題庫放在 `data/`，使用 `self.QUESTION_BANKS[subjectId]`。題目 ID 必須穩定，答案是 0 到 3。附圖可放在 `images/`。雲端下架以相同題目 ID 隱藏原題，原始檔仍保留。
- 離線紀錄保存在目前的瀏覽器。清除網站資料前可匯出 JSON。在共用裝置使用時，請登出並依需求清除該瀏覽器的網站資料。

## 驗證

`npm test` 驗證題庫數量與 ID、各考次、事件合併、重送去重、舊備份、題庫覆寫與下架、每日題目和本機帳號隔離。Firestore 權限測試可透過模擬器執行。需要 Java 21。發布後，請以兩台裝置驗證同帳號同時離線作答並回到線上，以及真實寄信、Google 登入和手機 PWA 安裝。

```sh
npm ci
npx firebase-tools@14 emulators:exec --only firestore --project demo-ee-quiz "npm run test:rules"
```
