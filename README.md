# shin-profile

Shin Lin 的個人履歷網站，提供中英雙語版本。

| 項目 | 值 |
|---|---|
| 框架 | Astro 7（純靜態，無 UI 框架、無外部字型或 CDN） |
| 部署 | Cloudflare Workers Static Assets（`wrangler.jsonc`） |
| 路由 | `/` 中文、`/en/` 英文、`/404` |
| 網址 | `https://shin-profile.pig840814.workers.dev`（暫定，未綁自訂網域） |

## 結構

| 路徑 | 內容 |
|---|---|
| `src/data/profile.ts` | 所有文字內容（雙語） |
| `src/components/Resume.astro` | 版面、互動腳本、樣式 |
| `src/layouts/Base.astro` | head、SEO / hreflang、CSS tokens、深淺色 |
| `src/pages/` | `index.astro`、`en/index.astro`、`404.astro` |

## 狀態

| 項目 | 狀態 |
|---|---|
| 網站程式碼 | 完成 |
| Cloudflare 自動部署 | 完成（push `main` 觸發 Workers Builds） |
| 明泰、凌群工作內容 | 未完成（`profile.ts` TODO） |
| 自訂網域 | 未購買 |
| OG 分享圖、Web Analytics | 未實作 |

## 動態效果

全部效果遵守 `prefers-reduced-motion`。

| 效果 | 位置 |
|---|---|
| Scramble Decode | Hero 姓名 |
| Typing Swap | Hero 標語 |
| Uptime 徽章 | Hero |
| Scroll Text Reveal | 關於我 |
| Count Up | 數據卡 |
| Scroll Draw Path | 經歷時間軸 |
| Border Spotlight | 所有卡片 |
| Magnetic Button | 連結按鈕 |
| Infinite Marquee | 技能區 |
| 指令面板 | `Ctrl/⌘ + K` |
