import type { Lang } from './profile';
type T = Record<Lang, string>;

// Written from the reader's side: what they can hand over, then the proof.
export interface Offer { icon: 'city' | 'gpu' | 'truck' | 'spark' | 'pulse' | 'team'; promise: T; proof: Record<Lang, string[]>; href: string }
export const offers: Offer[] = [
  { icon: 'city', promise: { zh: '把一座機房，變成像公有雲一樣好用的平台', en: 'Turn a data center into a platform as easy as public cloud' }, proof: { zh: ['Kubespray HA', 'KubeVirt', 'Terraform', 'ArgoCD'], en: ['Kubespray HA', 'KubeVirt', 'Terraform', 'ArgoCD'] }, href: '/work/metamec/#platform' },
  { icon: 'gpu', promise: { zh: '讓 GPU 機群從上架到可用，全程自動化', en: 'Take GPU fleets from racked to ready, fully automated' }, proof: { zh: ['NVIDIA NICo', 'DGX B200', 'Redfish / PXE'], en: ['NVIDIA NICo', 'DGX B200', 'Redfish / PXE'] }, href: '/work/metamec/#ai-dc' },
  { icon: 'spark', promise: { zh: '把 AI 安全地帶進團隊的日常工作', en: "Bring AI into the team's daily work, safely" }, proof: { zh: ['AI 工作流 8 準則', 'Claude Code / Codex', '護欄與權限'], en: ['8 AI-workflow principles', 'Claude Code / Codex', 'Guardrails'] }, href: '/work/metamec/#ai-workflow' },
  { icon: 'truck', promise: { zh: '交付到客戶現場，沒有網路也裝得起來', en: 'Deliver on-site, even with no internet' }, proof: { zh: ['離線安裝器', 'POC 與提案', '客戶技術窗口'], en: ['Air-gapped installer', 'POCs & proposals', 'Customer-facing'] }, href: '/work/metamec/#delivery' },
  { icon: 'pulse', promise: { zh: '讓服務穩定運作，出事時找得到原因', en: 'Keep services steady, and incidents traceable' }, proof: { zh: ['國泰 CUBE 網銀 gateway', 'OpenTelemetry'], en: ['CUBE banking gateway', 'OpenTelemetry'] }, href: '/work/cathay/#observability' },
  { icon: 'team', promise: { zh: '帶一個小團隊，用工具讓大家一起變強', en: 'Lead a small team, and make everyone stronger with tools' }, proof: { zh: ['帶領 5–8 人 / 3–5 人', 'Code review', '團隊自動化工具'], en: ['Led 5–8 / 3–5 engineers', 'Code review', 'Team tools'] }, href: '/work/metamec/#lead' },
];

export const offersUi = {
  bridge: { zh: '火車停在了現在。接下來——', en: 'The train has reached today. Next —' },
  title: { zh: '你可以把這些交給我', en: 'Things you can hand to me' },
  more: { zh: '想看細節？每一站都有完整的成果頁。', en: 'Want the details? Every stop has a full write-up.' },
};
