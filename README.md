# shin-profile

Shin Lin 的個人履歷網站（中英雙語）。Astro 靜態網站，部署在 Cloudflare Workers（Static Assets）。

- 中文：`/`　英文：`/en/`
- **內容都在 `src/data/profile.ts`**，改這個檔案就能更新網站

## 本機開發

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 輸出到 dist/
```

## 部署到 Cloudflare（第一次設定）

1. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Import a repository**
2. 選 GitHub `rushshin/shin-profile`
3. 設定：
   - Build command：`npm run build`
   - Deploy command：`npx wrangler deploy`（會讀取 `wrangler.jsonc`）
4. 之後每次 push 到 `main` 都會自動部署

綁定自訂網域後，記得把 `astro.config.mjs` 的 `site` 改成正式網址。

## 動態效果

參考 [Motion Library](https://kittenjam-motion-library.vercel.app/) 實作：

| 效果 | 位置 |
|---|---|
| 亂碼解讀 Scramble Decode | 首頁姓名（滑過會重播） |
| 打字換句 Typing Swap | 首頁 `$ 我專注在…` |
| 捲動逐字點亮 Scroll Text Reveal | 關於我段落 |
| 數據捲到才計數 Count Up | 數據卡片 |
| 捲動繪製路徑 Scroll Draw Path | 經歷時間軸 |
| 邊框聚光 Border Spotlight | 所有卡片 |
| 磁吸按鈕 Magnetic Button | 連結按鈕 |
| 無限跑馬燈 Infinite Wall | 技能區 |
| 指令面板 | `Ctrl/⌘ + K` |

所有動畫都會尊重系統的「減少動態效果」設定。
