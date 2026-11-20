import { profile, type Lang } from './profile';

type T = Record<Lang, string>;
type L = Record<Lang, string[]>;

export interface HopSpec {
  slug: string;
  code: string;
  company: T;
  role: T;
  period: string;
  tag: T;
  // Coordinates inside the 1000x360 Signal Bus SVG viewBox
  cx: number;
  cy: number;
  flowNodes: [string, string, string];
  proof: L;
}

export interface ScenarioSpec {
  id: 'airgap' | 'banking' | 'ai-rollout';
  label: T;
  activeNodes: ('comm' | 'mgmt' | 'rca' | 'tech')[];
  traceLabel: T;
  outcome: T;
}

export interface SubsystemSpec {
  id: 'comm' | 'mgmt' | 'rca' | 'tech';
  kind: 'human' | 'system';
  nodeName: string;
  title: T;
  roleDesc: T;
  years: string;
  evidence: L;
}

export interface RoleRoiSpec {
  id: 'cto' | 'hm' | 'lead';
  label: T;
  status: string;
  summary: T;
  bullets: L;
}

export const journeyUi = {
  nav: [
    { id: 'act-1', code: '01', label: { zh: '身份握手', en: 'Handshake' } as T },
    { id: 'act-2', code: '02', label: { zh: '服務節點', en: '5 Hops' } as T },
    { id: 'act-3', code: '03', label: { zh: '控制平面', en: 'Control Plane' } as T },
    { id: 'act-4', code: '04', label: { zh: '交付回傳', en: '200 OK' } as T },
  ],
  act1: {
    kicker: { zh: '01 · TLS HANDSHAKE', en: '01 · TLS HANDSHAKE' } as T,
    headline: {
      zh: '從裸機到 AI 平台，把機房變成像公有雲一樣好用。',
      en: 'From bare metal to AI platforms.',
    } as T,
    subline: {
      zh: '你正在追蹤一個請求封包——穿過四層架構，看見這套系統如何運作。',
      en: 'Follow one request packet through four acts to see how the platform works.',
    } as T,
    ctaTrace: { zh: '發送請求 →', en: 'Trace Request →' } as T,
    badgeStatus: { zh: 'shin-lin · Ready', en: 'shin-lin · Ready' } as T,
    badgeMeta: {
      zh: '7+ 年經驗 · 台北 · 可全遠端／混合',
      en: '7+ yrs · Taipei · Remote / Hybrid',
    } as T,
    certToggle: { zh: '檢視身份憑證', en: 'Inspect TLS Cert' } as T,
    certClose: { zh: '收合憑證', en: 'Close Cert' } as T,
  },
  act2: {
    kicker: { zh: '02 · DISTRIBUTED TRACE', en: '02 · DISTRIBUTED TRACE' } as T,
    headline: { zh: '5 個服務節點，2019 → 現在', en: '5 service hops, 2019 → now' } as T,
    subline: {
      zh: '點擊任意節點，鏡頭將直接潛入該階段的系統資料流與實戰證明。',
      en: 'Select any hop to zoom the camera into its live data-flow and proof.',
    } as T,
    zoomOut: { zh: '← 返回全景 (Esc)', en: '← Zoom out (Esc)' } as T,
    caseLink: { zh: '完整架構案例 →', en: 'Full case study →' } as T,
  },
  act3: {
    kicker: { zh: '03 · CONTROL PLANE', en: '03 · CONTROL PLANE' } as T,
    headline: { zh: '系統如何思考與協調', en: 'How the system thinks' } as T,
    subline: {
      zh: '青色為硬核技術流，琥珀色為人的溝通與管理；切換真實情境看它們如何協同。',
      en: 'Cyan is machine tech; amber is human craft. Toggle a real scenario to watch them converge.',
    } as T,
  },
  act4: {
    kicker: { zh: '04 · RESPONSE 200 OK', en: '04 · RESPONSE 200 OK' } as T,
    headline: { zh: '交付給你的最終回傳', en: '200 OK — What you get back' } as T,
    subline: {
      zh: '拖動中線對比「傳統人工機房」與「架構重塑後」，並依你的角色檢視回報。',
      en: 'Drag the divider from legacy manual ops to Shin-architected, and pick your role.',
    } as T,
    beforeLabel: { zh: '傳統人工維運', en: 'Legacy Manual DC' } as T,
    afterLabel: { zh: '架構重塑後', en: 'Shin-Architected' } as T,
  },
};

export const certFields = [
  { key: 'CN', value: { zh: profile.name.zh, en: profile.name.en } as T },
  {
    key: 'SAN',
    value: {
      zh: 'Platform Architect · AI Infra · SRE',
      en: 'Platform Architect · AI Infra · SRE',
    } as T,
  },
  { key: 'VALIDITY', value: { zh: '2019.07 → Now (7+ yrs)', en: '2019.07 → Now (7+ yrs)' } as T },
  {
    key: 'ISSUER',
    value: {
      zh: '國立臺北大學 資工碩士 (NTPU CSIE M.S.)',
      en: 'M.S. CSIE, National Taipei University',
    } as T,
  },
  { key: 'ZONE', value: profile.location },
  { key: 'MODE', value: profile.workMode },
];

export const hops: HopSpec[] = [
  {
    slug: 'syscom',
    code: 'HOP 01',
    company: { zh: '凌群電腦', en: 'SYSCOM' },
    role: { zh: '軟體工程師', en: 'Software Engineer' },
    period: '2019—2021',
    tag: { zh: '視覺與容器起步', en: 'Vision & Containers' },
    cx: 110,
    cy: 180,
    flowNodes: ['Camera Feed', 'YOLOv3 / K8s', 'Alert Store'],
    proof: {
      zh: [
        '參與 AI 影像分析平台（Kubernetes、YOLOv3）與 Hadoop 資安分析',
        '以 ASP.NET Core 開發容器化人事雲服務',
        '提供區塊鏈專案技術諮詢與軟硬體規劃',
      ],
      en: [
        'Worked on AI image-analysis platform (K8s, YOLOv3) & Hadoop analytics',
        'Built containerized HR cloud service on ASP.NET Core',
        'Consulted on blockchain architecture and system planning',
      ],
    },
  },
  {
    slug: 'alpha-networks',
    code: 'HOP 02',
    company: { zh: '明泰科技', en: 'Alpha Networks' },
    role: { zh: '資深軟體工程師', en: 'Senior SWE' },
    period: '2021—2023',
    tag: { zh: 'MEC 邊緣產品化', en: 'MEC Productized' },
    cx: 305,
    cy: 120,
    flowNodes: ['5G Edge', 'Go API + SLM', 'K8s Nodes'],
    proof: {
      zh: [
        '依 ETSI / 3GPP 設計 MEC 邊緣運算後端，以 Go 實作 API server',
        '開發軟體授權管理（SLM）、RBAC 權限與 K8s 節點管理',
        '以 Kubernetes、Ansible、GitLab CI 建立自動化部署',
      ],
      en: [
        'Designed ETSI / 3GPP MEC edge backend and Go API servers',
        'Built software license management (SLM), RBAC and K8s node lifecycle',
        'Automated platform deployment and CI/CD via Ansible & GitLab',
      ],
    },
  },
  {
    slug: 'playsee',
    code: 'HOP 03',
    company: { zh: 'Playsee', en: 'Playsee' },
    role: { zh: '資深軟體工程師', en: 'Senior SWE' },
    period: '2023—2024',
    tag: { zh: '高併發影音推薦', en: 'Video Recs' },
    cx: 500,
    cy: 220,
    flowNodes: ['User Feed', 'Go DDD + Redis', 'Pub/Sub Sync'],
    proof: {
      zh: [
        '設計首頁 Instream 影片個人化推薦服務',
        '以 Go（gin）與 DDD 開發高併發推薦 API server',
        '透過 GCP Cronjob 與 Pub/Sub 確保影片資料最終一致',
      ],
      en: [
        'Designed personalized in-stream video recommendation for home feed',
        'Built high-concurrency Go (gin) API servers with DDD',
        'Ensured eventual consistency across Bigtable/Spanner via Pub/Sub',
      ],
    },
  },
  {
    slug: 'cathay',
    code: 'HOP 04',
    company: { zh: '國泰世華銀行', en: 'Cathay Bank' },
    role: { zh: '資深軟體工程師｜SRE', en: 'Senior SWE | SRE' },
    period: '2024—2025',
    tag: { zh: '網銀 Gateway · 帶 5–8 人', en: 'Banking SRE · Led 5–8' },
    cx: 695,
    cy: 125,
    flowNodes: ['CUBE Traffic', 'HA Gateway', 'OTel Traces'],
    proof: {
      zh: [
        '帶領 5–8 人團隊維運 CUBE 網銀與內部系統關鍵 Gateway',
        '協助網銀服務上雲，以 OpenTelemetry 建立共用監控模組',
        '維運 OpenShift 私有雲與 AWS / GCP 混合部署',
      ],
      en: [
        'Led a 5–8 engineer team running critical CUBE banking gateways',
        'Migrated services to cloud with a shared OpenTelemetry module',
        'Operated OpenShift private cloud alongside AWS / GCP',
      ],
    },
  },
  {
    slug: 'metamec',
    code: 'HOP 05',
    company: { zh: 'MetaMEC', en: 'MetaMEC' },
    role: { zh: '資深工程師｜技術架構', en: 'Tech Architect' },
    period: '2025—Now',
    tag: { zh: 'AI 資料中心 · 帶 3–5 人', en: 'AI DC · Leads 3–5' },
    cx: 890,
    cy: 185,
    flowNodes: ['Redfish / PXE', 'K8s + KubeVirt', 'DGX / AI Agents'],
    proof: {
      zh: [
        '設計 K8s 私有雲與 AI 資料中心平台（Kubespray HA、KubeVirt、Rook-Ceph）',
        '建置 NVIDIA NICo 與模擬 DGX B200 機群，開發 Go 離線安裝器',
        '推廣 8 個 AI 工作流準則，帶領 3–5 人小組並擔任企業客戶技術窗口',
      ],
      en: [
        'Architect private cloud & AI DC (Kubespray HA, KubeVirt, Rook-Ceph)',
        'Built NVIDIA NICo DGX B200 sim, Redfish/PXE & Go air-gapped installer',
        'Rolled out 8 AI-workflow principles; leads 3–5 squad & enterprise POCs',
      ],
    },
  },
];

export const subsystems: SubsystemSpec[] = [
  {
    id: 'comm',
    kind: 'human',
    nodeName: 'API SERVER',
    title: { zh: '溝通協作', en: 'Communication' },
    roleDesc: {
      zh: '把複雜基礎設施轉譯為客戶與團隊共識',
      en: 'Translates infra depth into client & team alignment',
    },
    years: '7+ yrs',
    evidence: {
      zh: [
        '擔任 MetaMEC 企業客戶技術窗口，主導 POC 與提案',
        '跨 SRE、後端、資安與硬體維運對齊交付規格',
        '撰寫雙語架構文件、Runbook 與 Agent Skills',
      ],
      en: [
        'Enterprise technical contact leading POCs & proposals at MetaMEC',
        'Aligns SRE, backend, security & hardware ops on shared specs',
        'Authors bilingual architecture docs, runbooks & agent skills',
      ],
    },
  },
  {
    id: 'mgmt',
    kind: 'human',
    nodeName: 'SCHEDULER',
    title: { zh: '團隊管理', en: 'Management' },
    roleDesc: {
      zh: '任務調度、團隊賦能與 AI 工作流治理',
      en: 'Workload scheduling, mentoring & AI governance',
    },
    years: '3–8 ppl',
    evidence: {
      zh: [
        '曾帶領 5–8 人網銀維運團隊，現帶 3–5 人專案小組',
        '落地 8 個 AI 工作流準則（護欄、權限、RAG、可觀測性）',
        '開發工時彙整、憑證自動更新等團隊提效工具',
      ],
      en: [
        'Led 5–8 banking ops engineers; now leads 3–5 engineer squad',
        'Adopted 8 AI-workflow principles (guardrails, access, RAG, OTel)',
        'Built team velocity tools: timesheets, auto-cert rotation, MR alerts',
      ],
    },
  },
  {
    id: 'rca',
    kind: 'system',
    nodeName: 'RECONCILE LOOP',
    title: { zh: '問題拆解', en: 'Problem Solving' },
    roleDesc: {
      zh: '持續偵測偏差並收斂至期望狀態 (RCA)',
      en: 'Detects drift and converges to desired state (RCA)',
    },
    years: '7+ yrs',
    evidence: {
      zh: [
        '無外網客戶現場（Air-gapped）部署排錯與驗證',
        '國泰 CUBE 關鍵 Gateway 事故定位與 OpenTelemetry 追蹤',
        '以 kube-burner 執行 1000+ Pod 壓測提前排除瓶頸',
      ],
      en: [
        'Air-gapped on-site troubleshooting & deterministic install validation',
        'CUBE banking gateway incident isolation with OpenTelemetry',
        '1000+ pod kube-burner load testing to surface limits pre-launch',
      ],
    },
  },
  {
    id: 'tech',
    kind: 'system',
    nodeName: 'ETCD MESH',
    title: { zh: '硬核技術', en: 'Hard Tech' },
    roleDesc: {
      zh: '從裸機、K8s、GitOps 到 GPU 與 Go 後端',
      en: 'Bare metal, K8s, GitOps, GPU fleets & Go',
    },
    years: '8 domains',
    evidence: {
      zh: [
        'Kubernetes HA / KubeVirt / Rook-Ceph / Cilium / Kamaji',
        'Terraform + ArgoCD GitOps · OpenBao PKI · Keycloak SSO',
        'NVIDIA NICo / Redfish PXE · Go / Java / Python / OpenTelemetry',
      ],
      en: [
        'Kubernetes HA / KubeVirt / Rook-Ceph / Cilium / Kamaji',
        'Terraform + ArgoCD GitOps · OpenBao PKI · Keycloak SSO',
        'NVIDIA NICo / Redfish PXE · Go / Java / Python / OpenTelemetry',
      ],
    },
  },
];

export const scenarios: ScenarioSpec[] = [
  {
    id: 'airgap',
    label: { zh: '情境 A：無網路現場交付', en: 'Air-Gapped Field Deploy' },
    activeNodes: ['comm', 'rca', 'tech'],
    traceLabel: {
      zh: '客戶需求對齊 → 離線站點診斷 → Go 安裝器自動佈建',
      en: 'Client alignment → Site validation → Go air-gapped installer',
    },
    outcome: {
      zh: '在完全斷網的機敏機房，依然能從程式碼重複交付整套私有雲。',
      en: 'Repeatable private cloud delivery inside zero-internet enterprise facilities.',
    },
  },
  {
    id: 'banking',
    label: { zh: '情境 B：網銀零中斷維運', en: 'Banking Zero-Drop Ops' },
    activeNodes: ['mgmt', 'rca', 'tech'],
    traceLabel: {
      zh: '5–8 人排班調度 → OTel 秒級追蹤 → Gateway 無縫切換',
      en: '5–8 squad scheduling → OTel trace isolation → HA Gateway',
    },
    outcome: {
      zh: '守住 CUBE 網銀關鍵入口高可用，出事時精準定位根因。',
      en: 'Protected CUBE banking gateway uptime with traceable root-cause isolation.',
    },
  },
  {
    id: 'ai-rollout',
    label: { zh: '情境 C：團隊導入 AI 工作流', en: '8-Principle AI Rollout' },
    activeNodes: ['comm', 'mgmt', 'tech'],
    traceLabel: {
      zh: '8 準則共識 → 跨模型審查調度 → Skills 與護欄落地',
      en: '8-principle alignment → Cross-model review → Guardrails & skills',
    },
    outcome: {
      zh: '讓 3–5 人小組安全地把 AI Agent 納入每日開發與維運流程。',
      en: 'Turned AI agents into a governed, observable daily practice for a 3–5 squad.',
    },
  },
];

export const roleRois: RoleRoiSpec[] = [
  {
    id: 'cto',
    label: { zh: '給 CTO / 技術決策者', en: 'For CTO / VP Eng' },
    status: '200 OK · ARCHITECTURE_ROI',
    summary: {
      zh: '把基礎設施從人力瓶頸，變成可複製、可稽核的產品能力。',
      en: 'Turn infrastructure from a manual bottleneck into a repeatable product asset.',
    },
    bullets: {
      zh: [
        '平台從裸機到 K8s / AI 機群全面 IaC 與 GitOps 化，消除人工漂移',
        'OpenBao PKI + Keycloak SSO + 離線安裝器，直接打通企業與機敏客戶 POC',
        '以 8 個 AI 工作流準則安全放大工程團隊產出',
      ],
      en: [
        'Full IaC & GitOps from bare metal to K8s / GPU fleets — zero config drift',
        'OpenBao PKI + Keycloak SSO + air-gapped installer unlock enterprise deals',
        '8 governed AI-workflow principles multiply engineering velocity safely',
      ],
    },
  },
  {
    id: 'hm',
    label: { zh: '給用人主管 / HR', en: 'For Hiring Manager' },
    status: '200 OK · CANDIDATE_FIT',
    summary: {
      zh: '7+ 年橫跨 SI、邊緣產品、高併發社群、網銀 SRE 到 AI 平台架構。',
      en: '7+ yrs spanning SI, MEC edge, high-scale recs, banking SRE & AI platforms.',
    },
    bullets: {
      zh: [
        '能寫 Go / Java / Python，也能設計 K8s、Terraform 與裸機佈建',
        '帶過 5–8 人金融維運團隊，現任 3–5 人專案小組技術負責人',
        '台北／新竹／桃園，可全遠端或混合辦公，英文可溝通技術規格',
      ],
      en: [
        'Hands-on in Go / Java / Python and full-stack K8s / Terraform / bare metal',
        'Led 5–8 banking SREs; currently leads a 3–5 engineer platform squad',
        'Taipei / Hsinchu / Taoyuan — open to remote or hybrid',
      ],
    },
  },
  {
    id: 'lead',
    label: { zh: '給技術團隊 Lead', en: 'For Engineering Lead' },
    status: '200 OK · TEAM_LEVERAGE',
    summary: {
      zh: '不只自己能解難題，更會做工具讓整組一起變快。',
      en: 'Solves deep incidents and builds tools that make the whole squad faster.',
    },
    bullets: {
      zh: [
        '建立 spec → ticket → 跨模型審查 → MR 流程，把 RCA 寫成可重用 Skills',
        '對齊 OpenTelemetry、kube-burner 壓測與 ArgoCD 排錯標準',
        '務實做過 1000+ Pod 壓測、NVIDIA NICo 模擬機群與現場離線交付',
      ],
      en: [
        'Built spec → ticket → cross-model review → MR flow and reusable ops skills',
        'Standardizes OpenTelemetry, kube-burner load tests & ArgoCD triage',
        'Battle-tested on 1000+ pod load tests, NVIDIA NICo sims & field delivery',
      ],
    },
  },
];

export const verifiedStates = [
  { label: 'Redfish / PXE', ok: true },
  { label: 'GitOps / ArgoCD', ok: true },
  { label: 'OTel Traces', ok: true },
  { label: 'Air-Gapped Bundle', ok: true },
  { label: 'Team 3–8 Lead', ok: true },
];
