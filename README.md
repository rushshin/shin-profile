# shin-profile

Shin Lin 的個人履歷網站，提供中英雙語版本。

| 項目 | 值 |
|---|---|
| 框架 | Astro 7（純靜態，無 UI 框架、無外部字型或 CDN） |
| 部署 | Cloudflare Workers Static Assets（`wrangler.jsonc`） |
| 路由 | `/` 中文、`/en/` 英文、`/work/<slug>/` 成果頁、`/404` |
| 網址 | `https://shin-profile.shin-lin.workers.dev`（暫定，未綁自訂網域） |

## 結構

| 路徑 | 內容 |
|---|---|
| `src/data/profile.ts` | 首頁文字內容（雙語） |
| `src/data/work.ts` | 每段經歷的成果頁內容（雙語） |
| `src/data/visuals.ts` | 架構圖節點、Before/After、事件流程、技能 × 工作對照 |
| `src/components/Resume.astro` | 首頁版面、互動腳本、樣式 |
| `src/components/WorkPage.astro` | 成果頁版面（kubectl describe、事件流程、Before/After） |
| `src/components/ArchDiagram.astro` | 成果頁架構圖（inline SVG、流動動畫） |
| `src/components/CareerLog.astro` | 首頁 `git log --graph` 職涯圖 |
| `src/components/SkillStack.astro` | 首頁技能分層與技能 × 工作矩陣 |
| `src/layouts/Base.astro` | head、SEO / hreflang、CSS tokens、深淺色 |
| `src/pages/` | `index.astro`、`work/[slug].astro`、`en/` 對應頁、`404.astro` |

## 狀態

| 項目 | 狀態 |
|---|---|
| 網站程式碼 | 完成 |
| Cloudflare 自動部署 | 完成（push `main` 觸發 Workers Builds） |
| 經歷內容 | 完成（MetaMEC 前依 104 履歷） |
| 成果頁 | 完成（5 頁，質化成果，無量化數據） |
| 視覺化 | 完成（架構圖、職涯圖、技能矩陣、部署徽章） |
| 自訂網域 | 未購買 |
| OG 分享圖、Web Analytics | 未實作 |

## 動態效果

全部效果遵守 `prefers-reduced-motion`。

| 效果 | 位置 |
|---|---|
| Scramble Decode | Hero 姓名 |
| Typing Swap | Hero 標語 |
| 部署徽章（`main@<sha>`） | Hero |
| Scroll Text Reveal | 關於我 |
| Count Up | 數據卡 |
| Scroll Draw Path | 經歷時間軸 |
| Border Spotlight | 所有卡片 |
| Magnetic Button | 連結按鈕 |
| Infinite Marquee | 技能區 |
| 架構圖流動動畫 | 成果頁 |
| 指令面板 | `Ctrl/⌘ + K` |
