import type { Lang } from './profile';

type T = Record<Lang, string>;
type L = Record<Lang, string[]>;

export type ModuleId = 'identity' | 'experience' | 'capabilities' | 'impact';

export interface BlueprintModule {
  id: ModuleId;
  code: string;
  title: T;
  subtitle: T;
  hook: T;
  metric: T;
  coords: string;
}

export interface CapabilityPillar {
  id: 'tech' | 'communication' | 'problem-solving' | 'management';
  code: string;
  title: T;
  summary: T;
  highlights: L;
}

export interface ValueOutcome {
  id: string;
  tag: T;
  title: T;
  outcome: T;
  proof: string[];
  href: string;
}

export const blueprintUi = {
  badge: {
    zh: '系統架構師 · 現職 MetaMEC',
    en: 'Platform & AI Infra Architect · MetaMEC',
  } as T,
  hook: {
    zh: '把裸機機房，打造成會自己思考的雲端與 AI 平台。',
    en: 'Turning bare metal into self-driving cloud & AI platforms.',
  } as T,
  subhook: {
    zh: '點選下方架構節點，依序展開輪廓、歷練、能力與交付價值。',
    en: 'Select any blueprint node below to inspect identity, track record, craft, and ROI.',
  } as T,
  coreLabel: {
    zh: 'SHIN LIN · 系統核心',
    en: 'SHIN LIN · SYSTEM CORE',
  } as T,
  coreSub: {
    zh: '4-MODULE ARCHITECTURE',
    en: '4-MODULE ARCHITECTURE',
  } as T,
  exploreCta: {
    zh: '展開細節',
    en: 'Explore',
  } as T,
  matrixToggle: {
    zh: '展開完整技術矩陣（依公司歷程對照）',
    en: 'Inspect full skill matrix across companies',
  } as T,
  matrixHide: {
    zh: '收合技術矩陣',
    en: 'Hide skill matrix',
  } as T,
  stationPrompt: {
    zh: '選擇站點切換歷練細節',
    en: 'Select a stop to inspect milestones',
  } as T,
  caseStudy: {
    zh: '查看完整架構案例 →',
    en: 'Read full case study →',
  } as T,
  palette: {
    zh: '快速跳轉模組',
    en: 'Quick jump',
  } as T,
};

export const blueprintModules: BlueprintModule[] = [
  {
    id: 'identity',
    code: '01',
    title: { zh: '基本輪廓', en: 'Identity' },
    subtitle: { zh: 'Core & Origin', en: 'Core & Origin' },
    hook: {
      zh: '7+ 年軟體與基礎設施經驗，專注私有雲與 AI 平台架構。',
      en: '7+ yrs in software & infra, focused on private cloud & AI platforms.',
    },
    metric: { zh: '台北 · 遠端 / 混合', en: 'Taipei · Remote / Hybrid' },
    coords: 'DIM 01 · 25.03°N',
  },
  {
    id: 'experience',
    code: '02',
    title: { zh: '實戰歷練', en: 'Track Record' },
    subtitle: { zh: '5 Stations', en: '5 Stations' },
    hook: {
      zh: '系統整合 → MEC 邊緣 → 影音推薦 → 網銀 SRE → AI 資料中心。',
      en: 'SI → MEC Edge → Video Recs → Banking SRE → AI Data Center.',
    },
    metric: { zh: '5 家企業 · 持續進階', en: '5 Companies · Progressive' },
    coords: 'DIM 02 · 2019—NOW',
  },
  {
    id: 'capabilities',
    code: '03',
    title: { zh: '軟硬實力', en: 'Capabilities' },
    subtitle: { zh: '4-Axis Craft', en: '4-Axis Craft' },
    hook: {
      zh: '硬核技術、跨界溝通、深度排錯、小團隊與 AI 工作流管理。',
      en: 'Hard tech, communication, deep RCA, and team + AI management.',
    },
    metric: { zh: 'Tech · Comms · RCA · Lead', en: 'Tech · Comms · RCA · Lead' },
    coords: 'DIM 03 · 4 PILLARS',
  },
  {
    id: 'impact',
    code: '04',
    title: { zh: '交付價值', en: 'Value & ROI' },
    subtitle: { zh: 'For Audience', en: 'For Audience' },
    hook: {
      zh: '縮短交付週期、支援無網路現場部署、打造金融級穩定與團隊槓桿。',
      en: 'Faster delivery, air-gapped rollouts, banking uptime & team leverage.',
    },
    metric: { zh: '可量化 · 可驗證成果', en: 'Measurable Outcomes' },
    coords: 'DIM 04 · IMPACT',
  },
];

export const capabilityPillars: CapabilityPillar[] = [
  {
    id: 'tech',
    code: 'A1',
    title: { zh: '硬核技術 Tech', en: 'Hard Tech' },
    summary: {
      zh: '從裸機、K8s、GitOps 到 GPU 機群與後端服務的端到端架構能力。',
      en: 'End-to-end architecture from bare metal, K8s & GitOps to GPU fleets and Go backends.',
    },
    highlights: {
      zh: [
        'Kubernetes HA (Kubespray, Cilium, KubeVirt, Rook-Ceph) 與 Multi-tenant',
        'AI Infra：NVIDIA NICo、DGX B200 模擬、Redfish / PXE 自動化佈建',
        'GitOps & Security：ArgoCD、Terraform、OpenBao PKI、Keycloak SSO',
      ],
      en: [
        'Kubernetes HA (Kubespray, Cilium, KubeVirt, Rook-Ceph) & multi-tenancy',
        'AI Infra: NVIDIA NICo, DGX B200 simulation, Redfish / PXE provisioning',
        'GitOps & Security: ArgoCD, Terraform, OpenBao PKI, Keycloak SSO',
      ],
    },
  },
  {
    id: 'communication',
    code: 'A2',
    title: { zh: '溝通協作 Communication', en: 'Communication' },
    summary: {
      zh: '把複雜的底層架構轉譯成客戶、主管與工程師都能對齊的語言。',
      en: 'Translating complex infra into clear alignment across clients, execs, and engineers.',
    },
    highlights: {
      zh: [
        '擔任企業客戶技術窗口，主導 POC 驗證與技術提案簡報',
        '跨團隊對齊（SRE、後端、資安、硬體維運），建立共同交付語言',
        '撰寫雙語架構文件、Runbook 與可重用的 Agent Skills 知識庫',
      ],
      en: [
        'Enterprise technical contact leading POCs and architecture proposals',
        'Cross-functional alignment across SRE, backend, security, and hardware ops',
        'Bilingual architecture docs, runbooks, and reusable agent skill playbooks',
      ],
    },
  },
  {
    id: 'problem-solving',
    code: 'A3',
    title: { zh: '問題拆解 Problem Solving', en: 'Problem Solving' },
    summary: {
      zh: '不做表面補丁，從日誌、網路與系統邊界追出真正根因 (RCA)。',
      en: 'Deep root-cause analysis across logs, networking, and system boundaries.',
    },
    highlights: {
      zh: [
        '客戶無網路現場 (Air-gapped) 交付排錯與自動化診斷設計',
        '國泰 CUBE 網銀關鍵 Gateway 維運，導入 OpenTelemetry 加速事件定位',
        '以 kube-burner 執行 1000+ Pod 壓測，提前暴露效能瓶頸',
      ],
      en: [
        'Air-gapped on-site troubleshooting and deterministic installer design',
        'CUBE banking gateway ops with OpenTelemetry for rapid incident isolation',
        '1000+ pod load testing via kube-burner to surface bottlenecks pre-launch',
      ],
    },
  },
  {
    id: 'management',
    code: 'A4',
    title: { zh: '團隊管理 Management', en: 'Management' },
    summary: {
      zh: '帶過 5–8 人維運與 3–5 人專案小組，用工具與流程放大團隊戰力。',
      en: 'Led 5–8 ops and 3–5 engineer squads, multiplying output via tools & workflows.',
    },
    highlights: {
      zh: [
        '專案拆解、任務分派、Code Review 與工程師成長指導',
        '歸納並落地「AI 工作流 8 準則」（模型、RAG、護欄、可觀測性等）',
        '開發團隊效能工具（工時自動彙整、憑證自動輪替、MR Webhook 通知）',
      ],
      en: [
        'Project scoping, task delegation, code review, and engineer mentoring',
        'Rolled out 8 AI-workflow principles (models, RAG, guardrails, observability)',
        'Built internal velocity tools (timesheets, cert rotation, MR webhook alerts)',
      ],
    },
  },
];

export const valueOutcomes: ValueOutcome[] = [
  {
    id: 'private-cloud',
    tag: { zh: '交付速度', en: 'Time-to-Market' },
    title: {
      zh: '把企業機房，變成可一鍵重建的私有雲',
      en: 'Turn enterprise racks into a reproducible private cloud',
    },
    outcome: {
      zh: '透過 Terraform + ArgoCD + Kubespray，消除人工設定漂移，讓環境交付從數週縮短至可預期流程。',
      en: 'Terraform + ArgoCD + Kubespray eliminate config drift and make cluster delivery repeatable.',
    },
    proof: ['Kubespray HA', 'KubeVirt', 'ArgoCD GitOps'],
    href: '/work/metamec/#platform',
  },
  {
    id: 'air-gapped',
    tag: { zh: '商業落地', en: 'Enterprise Deals' },
    title: {
      zh: '沒有外網的客戶機房，照樣穩定裝起來',
      en: 'Ship reliably to air-gapped customer data centers',
    },
    outcome: {
      zh: '自研 Go 離線安裝器與站點驗證流程，讓機敏企業與政府客戶現場交付一次到位。',
      en: 'Custom Go air-gapped installer & site validation enable predictable on-site delivery.',
    },
    proof: ['Go Air-Gapped Installer', '1000+ Pod Load Test', 'POC'],
    href: '/work/metamec/#delivery',
  },
  {
    id: 'gpu-fleet',
    tag: { zh: 'AI 算力就緒', en: 'AI Readiness' },
    title: {
      zh: 'GPU 機群從上架到可排程，全程自動化',
      en: 'Take GPU fleets from racked to schedulable, automated',
    },
    outcome: {
      zh: '整合 Redfish/PXE 與 NVIDIA NICo 模擬環境，無需等待實體硬體即可開發與驗證 AI 平台。',
      en: 'Redfish/PXE + NVIDIA NICo simulation let teams build and validate before hardware arrives.',
    },
    proof: ['NVIDIA NICo', 'DGX B200 Sim', 'Redfish / PXE'],
    href: '/work/metamec/#ai-dc',
  },
  {
    id: 'reliability',
    tag: { zh: '高可用保障', en: 'Reliability' },
    title: {
      zh: '金融等級穩定度，出事時秒級定位原因',
      en: 'Banking-grade uptime with traceable incidents',
    },
    outcome: {
      zh: '承襲網銀關鍵 Gateway 維運經驗與 OpenTelemetry 全鏈路監控，守住 SLA 與資安底線。',
      en: 'CUBE banking gateway experience & OpenTelemetry tracing protect SLAs and security.',
    },
    proof: ['CUBE Banking Gateway', 'OpenTelemetry', 'OpenBao PKI'],
    href: '/work/cathay/#observability',
  },
];
