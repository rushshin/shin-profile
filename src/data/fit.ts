import type { Lang } from './profile';
type T = Record<Lang, string>;

export type RoleId = 'delivery' | 'lead';
export const roles: { id: RoleId; name: T }[] = [
  { id: 'delivery', name: { zh: 'AI Delivery Engineer', en: 'AI Delivery Engineer' } },
  { id: 'lead', name: { zh: 'Tech Lead', en: 'Tech Lead' } },
];

// Each requirement reflects recurring asks in 2026 AI delivery / AI platform lead postings.
export interface Requirement { need: T; evidence: T; href: string; roles: RoleId[] }
export const requirements: Requirement[] = [
  { need: { zh: '端到端交付：從 POC 到客戶現場上線', en: 'End-to-end delivery: from POC to on-site production' }, evidence: { zh: '企業客戶技術窗口、POC 與提案、離線安裝器現場交付', en: 'Enterprise technical contact, POCs and proposals, air-gapped on-site installs' }, href: '/work/metamec/#delivery', roles: ['delivery'] },
  { need: { zh: 'LLM Agents 與 AI 工作流導入', en: 'LLM agents and AI-workflow adoption' }, evidence: { zh: '8 個 AI 工作流準則；Claude Code / Codex；MCP 與 Agent skills', en: 'Eight AI-workflow principles; Claude Code / Codex; MCP and agent skills' }, href: '/work/metamec/#ai-workflow', roles: ['delivery', 'lead'] },
  { need: { zh: 'AI 治理：權限、護欄、可觀測性', en: 'AI governance: access, guardrails, observability' }, evidence: { zh: 'Access / Guardrails / Observability 準則；OpenBao PKI 與 SSO', en: 'Access / guardrails / observability principles; OpenBao PKI and SSO' }, href: '/work/metamec/#security', roles: ['delivery', 'lead'] },
  { need: { zh: 'GPU 與 AI 資料中心基礎設施', en: 'GPU and AI data-center infrastructure' }, evidence: { zh: 'NVIDIA NICo、DGX B200 機群模擬、Redfish / PXE 裸機佈建', en: 'NVIDIA NICo, simulated DGX B200 fleet, Redfish / PXE bare-metal provisioning' }, href: '/work/metamec/#ai-dc', roles: ['delivery', 'lead'] },
  { need: { zh: 'Kubernetes 與雲原生平台', en: 'Kubernetes and cloud-native platforms' }, evidence: { zh: 'Kubespray HA、KubeVirt、OpenShift、AWS / GCP', en: 'Kubespray HA, KubeVirt, OpenShift, AWS / GCP' }, href: '/work/metamec/#platform', roles: ['delivery', 'lead'] },
  { need: { zh: 'GitOps 與 IaC 自動化', en: 'GitOps and IaC automation' }, evidence: { zh: 'ArgoCD App-of-Apps、Terraform VM 工廠、共用 CI 範本', en: 'ArgoCD app-of-apps, Terraform VM factory, shared CI template' }, href: '/work/metamec/#gitops', roles: ['delivery', 'lead'] },
  { need: { zh: '可靠性與可觀測性', en: 'Reliability and observability' }, evidence: { zh: '國泰 CUBE 網銀關鍵 gateway、OpenTelemetry 共用監控', en: 'Cathay CUBE banking gateway, shared OpenTelemetry monitoring' }, href: '/work/cathay/#observability', roles: ['lead'] },
  { need: { zh: '帶人與技術方向', en: 'Leading people and technical direction' }, evidence: { zh: '帶領 5–8 人網銀團隊、3–5 人專案小組、code review 與架構決策', en: 'Led a 5–8 person banking team and a 3–5 engineer squad; code review and architecture calls' }, href: '/work/metamec/#lead', roles: ['lead'] },
  { need: { zh: '產品化與商業意識', en: 'Productization and business sense' }, evidence: { zh: '把 MEC 平台做成可授權銷售的產品（SLM、RBAC）', en: 'Turned a MEC platform into a licensed product (SLM, RBAC)' }, href: '/work/alpha-networks/#product', roles: ['delivery', 'lead'] },
];
