import { profile, type Lang } from './profile';
import { works } from './work';

type T = Record<Lang, string>;
type L = Record<Lang, string[]>;

export interface StopSpec {
  slug: string;
  code: string;
  company: T;
  role: T;
  start: string;
  end: string;
  scope: 'ic' | 'owner' | 'lead' | 'architect';
  scopeLabel: T;
  team: T;
  tag: T;
  scene: T;
  story: T;
  challenge: T;
  decision: T;
  tradeoff: T;
  result: T;
}

export interface SwapPair { jargon: T; plain: T }
export interface Engineer { id: string; name: string; task: T; blocker: T; unblock: T }
export interface RcaStep { id: 'drift' | 'root' | 'converge'; label: T; title: T; body: T }
export interface RoleLens {
  id: 'ceo' | 'cto' | 'hr' | 'lead';
  label: T;
  headline: T;
  bullets: L;
  stack: string[];
}

export const valuePillars = [
  {
    title: { zh: '商業落地與客戶信任', en: 'Commercial Delivery & Client Trust' },
    body: {
      zh: '擔任企業客戶技術窗口主導 POC 與提案，讓斷網、合規嚴苛的機敏客戶也能一次部署成功。',
      en: 'Enterprise technical contact leading POCs and proposals so strict, air-gapped customers deploy predictably.',
    },
  },
  {
    title: { zh: '團隊槓桿與 AI 工作流', en: 'Team Leverage & AI Governance' },
    body: {
      zh: '帶過 5–8 人金融維運與 3–5 人專案小組，透過工具開發與 AI 8 準則，讓小團隊發揮倍數戰力。',
      en: 'Led 5–8 banking SREs and 3–5 squad engineers, multiplying output with shared tooling and 8 AI principles.',
    },
  },
  {
    title: { zh: '營運效率與系統韌性', en: 'Operational Velocity & Resilience' },
    body: {
      zh: '把數週人工維運化為可稽核、可重建的自動化流程，守住網銀級高可用並消除單點英雄依賴。',
      en: 'Turns weeks of manual ops into auditable, repeatable automation—protecting banking uptime without heroics.',
    },
  },
];

export const journeyUi = {
  storyTitle: { zh: 'Shin Lin · 互動架構履歷', en: 'Shin Lin · Interactive Profile' } as T,
  storyLabel: { zh: '真實交付與實證紀錄', en: 'Verified deliveries & outcomes' } as T,
  meterLabel: { zh: '探索進度', en: 'Progress' } as T,
  nav: [
    { id: 'act-1', code: '01', ready: 25, label: { zh: '價值定位', en: 'Value' } as T },
    { id: 'act-2', code: '02', ready: 50, label: { zh: '職涯軌跡', en: 'Journey' } as T },
    { id: 'act-3', code: '03', ready: 75, label: { zh: '現場能力', en: 'Craft' } as T },
    { id: 'act-4', code: '04', ready: 100, label: { zh: '角色價值', en: 'ROI' } as T },
  ],
  act1: {
    kicker: { zh: '01 · 價值定位與輪廓', en: '01 · VALUE & PROFILE' } as T,
    headline: {
      zh: '不只寫程式、不只管系統——而是讓團隊與商業一起落地。',
      en: 'Beyond building software — turning infra into business and team outcomes.',
    } as T,
    subline: {
      zh: '從金融核心維運到企業 AI 資料中心，我專注解決三種高價值難題：商業交付卡關、跨團隊對齊摩擦，以及規模化後的效率瓶頸。',
      en: 'From mission-critical banking ops to enterprise AI data centers, I solve three high-leverage problems: commercial delivery blockers, cross-team friction, and scale bottlenecks.',
    } as T,
    trust: {
      zh: '7+ 年 · 國泰 CUBE SRE 帶 5–8 人 · MetaMEC 架構師帶 3–5 人',
      en: '7+ yrs · Cathay CUBE SRE Lead (5–8) · MetaMEC Architect (3–5)',
    } as T,
    values: [
      { zh: '打開企業商機', en: 'Unlocks enterprise deals' },
      { zh: '讓團隊產出放大', en: 'Multiplies team output' },
      { zh: '把交付變成可重複', en: 'Makes delivery repeatable' },
    ] as T[],
    ctaStart: { zh: '下一站：5 站職涯軌跡 ↓', en: 'Next: 5-stop track record ↓' } as T,
    essentialsTitle: { zh: '30 秒履歷重點', en: '30-second essentials' } as T,
  },
  act2: {
    kicker: { zh: '02 · 25% · 一站一站點亮', en: '02 · 25% · Lit one stop at a time' } as T,
    headline: { zh: '5 站經歷，責任範圍一路放大', en: '5 stops, scope growing every time' } as T,
    subline: {
      zh: '選任一站，展開「挑戰 → 決策 → 結果」。',
      en: 'Pick a stop to unfold Challenge → Decision → Result.',
    } as T,
    ladder: [
      { id: 'ic', label: { zh: 'IC', en: 'IC' } as T },
      { id: 'owner', label: { zh: '產品／後端 Owner', en: 'Product / Backend Owner' } as T },
      { id: 'lead', label: { zh: 'SRE Lead 5–8 人', en: 'SRE Lead 5–8' } as T },
      { id: 'architect', label: { zh: '架構師＆客戶窗口 3–5 人', en: 'Architect & Client Lead 3–5' } as T },
    ],
    challenge: { zh: '挑戰', en: 'Challenge' } as T,
    decision: { zh: '決策', en: 'Decision' } as T,
    tradeoff: { zh: '取捨', en: 'Trade-off' } as T,
    result: { zh: '結果', en: 'Result' } as T,
    caseLink: { zh: '完整案例 →', en: 'Full case study →' } as T,
    groupLabel: { zh: '職涯五站', en: 'Five career stops' } as T,
  },
  act3: {
    kicker: { zh: '03 · 60% · 現場能力即時演示', en: '03 · 60% · Skills, live' } as T,
    headline: { zh: '三個當下發生的瞬間', en: 'Three moments, happening live' } as T,
    subline: {
      zh: '琥珀色是人的功夫、青色是機器的功夫。以下為示意情境，非實際事故紀錄。',
      en: 'Amber is human craft, cyan is machine craft. Scenarios are illustrative, not incident records.',
    } as T,
    tabs: [
      { id: 'comm', kind: 'human', label: { zh: '溝通：行話 ↔ 白話', en: 'Communication' } as T },
      { id: 'mgmt', kind: 'human', label: { zh: '管理：3 人小組', en: 'Management' } as T },
      { id: 'rca', kind: 'system', label: { zh: '解題：跨域卡關', en: 'Problem Solving' } as T },
    ],
    commToggle: { zh: '白話模式', en: 'Plain language' } as T,
    commHint: { zh: '對工程師講行話，對客戶、主管與資安講白話，讓非技術的人也能做決定。同一件事，兩種說法。', en: 'Jargon for engineers, plain words for clients, execs and security so non-technical people can decide. Same fact, two registers.' } as T,
    squadHint: {
      zh: '3 位工程師各有任務；有人卡住時，我的工作是移除阻礙，而不是接手。',
      en: 'Three engineers, three tasks. When one blocks, my job is to unblock, not to take over.',
    } as T,
    unblock: { zh: '我來排除阻礙', en: 'Unblock' } as T,
    reset: { zh: '重置', en: 'Reset' } as T,
    blocked: { zh: '卡住', en: 'Blocked' } as T,
    running: { zh: '進行中', en: 'Running' } as T,
    principlesTitle: { zh: 'AI 工作流 8 準則：01–04 能力 · 05–08 治理', en: '8 AI-workflow principles: 01–04 capability · 05–08 governance' } as T,
    rcaNext: { zh: '下一步', en: 'Next step' } as T,
    rcaReset: { zh: '重來', en: 'Replay' } as T,
    desired: { zh: '期望', en: 'Desired' } as T,
    actual: { zh: '實際', en: 'Actual' } as T,
  },
  act4: {
    kicker: { zh: '04 · 角色價值與成果', en: '04 · VALUE FOR YOU' } as T,
    headline: { zh: '不同角色，在這套經歷中拿到什麼價值', en: 'What you gain, by role' } as T,
    subline: {
      zh: '選擇你的角色視角，看我如何為團隊、商業與營運效率創造實質價值。',
      en: 'Pick your lens to see the concrete business, team, and efficiency outcomes.',
    } as T,
    beforeLabel: { zh: '人工維運：排隊與漂移', en: 'Manual: queues & drift' } as T,
    afterLabel: { zh: '架構後：GitOps 自動收斂', en: 'Architected: GitOps reconcile' } as T,
    roleLabel: { zh: '選擇你的角色', en: 'Pick your lens' } as T,
    stackShow: { zh: '顯示底層技術', en: 'Show underlying stack' } as T,
    stackHide: { zh: '隱藏底層技術', en: 'Hide underlying stack' } as T,
    closing: { zh: '下一個需要被點亮的專案與團隊，也許就是你的。', en: 'Ready to bring clarity and velocity to your next platform or team.' } as T,
    cta: { zh: '寄信聊聊', en: 'Email Shin' } as T,
  },
  dossier: {
    header: 'DOSSIER // VERIFIED PROFILE',
    open: { zh: '履歷實證', en: 'Profile Dossier' } as T,
    close: { zh: '關閉', en: 'Close' } as T,
    chrono: { zh: '經歷時序（精確年月）', en: 'Chronology (exact dates)' } as T,
    education: { zh: '學歷', en: 'Education' } as T,
    skills: { zh: '技能矩陣 · 8 大領域', en: 'Skill matrix · 8 domains' } as T,
    openStop: { zh: '開啟此站履歷實證 →', en: 'Open dossier for this stop →' } as T,
    openSkills: { zh: '開啟完整技能矩陣 →', en: 'Open full skill matrix →' } as T,
    storyNote: { zh: '故事為案例縮影；以下為可查證事實。', en: 'The story is a composite; below are checkable facts.' } as T,
  },
};

export const essentials: { key: T; value: T }[] = [
  { key: { zh: '年資', en: 'Tenure' }, value: { zh: '2019.07 → Now', en: '2019.07 → Now' } },
  { key: { zh: '碩士', en: 'M.S.' }, value: { zh: '國立臺北大學 資工碩士 (NTPU CSIE M.S.)', en: 'NTPU CSIE M.S.' } },
  { key: { zh: '學士', en: 'B.S.' }, value: { zh: '銘傳大學 資通工程 (MCU B.S.)', en: 'MCU B.S.' } },
  { key: { zh: '交換', en: 'Exchange' }, value: { zh: '鄭州大學交換生 (Zhengzhou Exchange)', en: 'Zhengzhou Exchange' } },
  { key: { zh: '地點', en: 'Base' }, value: { zh: '台北 · 遠端／混合 · 中英雙語', en: 'Taipei · Remote/Hybrid · Bilingual zh/en' } },
];

export const stops: StopSpec[] = [
  {
    slug: 'syscom',
    code: 'STOP 01',
    company: { zh: '凌群電腦', en: 'SYSCOM' },
    role: { zh: '軟體工程師', en: 'Software Engineer' },
    start: '2019.07',
    end: '2021.09',
    scope: 'ic',
    scopeLabel: { zh: 'IC', en: 'IC' },
    team: { zh: '個人貢獻者', en: 'Individual contributor' },
    tag: { zh: '視覺與容器起步', en: 'Vision & Containers' },
    scene: { zh: '學會握住工具', en: 'Learn the tools' },
    story: {
      zh: '還不認得機房的我，先學會把東西裝進容器、讓它在任何地方跑起來。',
      en: 'Before I knew the room, I learned to pack software into containers that run anywhere.',
    },
    challenge: {
      zh: 'AI 影像分析、Hadoop 資安分析與人事雲服務，都需要可重複部署的執行環境。',
      en: 'An AI image-analysis platform, Hadoop security analytics and an HR cloud service all needed repeatable runtime environments.',
    },
    decision: {
      zh: '以容器與 Kubernetes 承載 YOLOv3 影像分析與 ASP.NET Core 人事雲服務。',
      en: 'Ran the YOLOv3 image analysis and the ASP.NET Core HR service on containers and Kubernetes.',
    },
    tradeoff: {
      zh: '早期投入容器化的學習成本，換取之後每個專案都能沿用的交付方式。',
      en: 'Paid the early learning cost of containers to get a delivery model every later project reused.',
    },
    result: {
      zh: '建立容器與 Kubernetes 的實戰基礎，並提供區塊鏈專案技術諮詢。',
      en: 'Built the container and Kubernetes foundation, and consulted on blockchain system planning.',
    },
  },
  {
    slug: 'alpha-networks',
    code: 'STOP 02',
    company: { zh: '明泰科技', en: 'Alpha Networks' },
    role: { zh: '資深軟體工程師', en: 'Senior Software Engineer' },
    start: '2021.09',
    end: '2023.09',
    scope: 'owner',
    scopeLabel: { zh: '產品／後端 Owner', en: 'Product / Backend Owner' },
    team: { zh: '負責 MEC 平台後端', en: 'Owned the MEC platform backend' },
    tag: { zh: 'MEC 邊緣產品化', en: 'MEC Productized' },
    scene: { zh: '把邊緣做成產品', en: 'Turn edge into product' },
    story: {
      zh: '第一次整個後端都是我的：從授權、權限到節點管理，做成能賣的產品。',
      en: 'The first backend that was entirely mine: licensing, access and nodes, shaped into something sellable.',
    },
    challenge: {
      zh: 'MEC 邊緣運算平台要符合 ETSI / 3GPP，同時要能授權、控權限、管理節點並可重複部署。',
      en: 'The MEC edge platform had to follow ETSI / 3GPP while also handling licensing, access control, node management and repeatable deployment.',
    },
    decision: {
      zh: '以 Go 實作 API server，內建軟體授權（SLM）、RBAC 與 K8s 節點管理，並用 Ansible + GitLab CI 自動部署。',
      en: 'Built Go API servers with software licensing (SLM), RBAC and Kubernetes node management, deployed through Ansible and GitLab CI.',
    },
    tradeoff: {
      zh: '遵循標準規格而非自訂介面，換取產品可對外銷售的相容性。',
      en: 'Followed the standards instead of bespoke interfaces, trading speed for market-ready compatibility.',
    },
    result: {
      zh: 'MEC 平台完成產品化並上市銷售。',
      en: 'The MEC platform was productized and taken to market.',
    },
  },
  {
    slug: 'playsee',
    code: 'STOP 03',
    company: { zh: 'Playsee', en: 'Playsee' },
    role: { zh: '資深軟體工程師', en: 'Senior Software Engineer' },
    start: '2023.09',
    end: '2024.09',
    scope: 'owner',
    scopeLabel: { zh: '產品／後端 Owner', en: 'Product / Backend Owner' },
    team: { zh: '負責推薦服務後端', en: 'Owned the recommendation backend' },
    tag: { zh: '高併發影音推薦', en: 'Video Recs' },
    scene: { zh: '在高併發下做取捨', en: 'Trade-offs under load' },
    story: {
      zh: '流量湧進來時，我學會用最終一致換吞吐，讓推薦不中斷。',
      en: 'When traffic surged I learned to trade strict consistency for throughput so recommendations never stalled.',
    },
    challenge: {
      zh: '首頁 Instream 影片需要個人化推薦，且 API 要撐住高併發。',
      en: 'The home-feed in-stream videos needed personalized recommendations from an API that holds up under high concurrency.',
    },
    decision: {
      zh: '以 Go（gin）與 DDD 設計 API server，並用 GCP Cronjob 與 Pub/Sub 讓資料最終一致。',
      en: 'Designed Go (gin) API servers with DDD, and used GCP cronjobs and Pub/Sub to keep data eventually consistent.',
    },
    tradeoff: {
      zh: '選擇最終一致而非強一致，換取推薦服務的吞吐與可用性。',
      en: 'Chose eventual over strong consistency to protect throughput and availability.',
    },
    result: {
      zh: '個人化推薦服務上線首頁，資料跨 Bigtable / Spanner 維持一致。',
      en: 'The personalized recommendation service shipped to the home feed with data kept consistent across Bigtable / Spanner.',
    },
  },
  {
    slug: 'cathay',
    code: 'STOP 04',
    company: { zh: '國泰世華銀行', en: 'Cathay United Bank' },
    role: { zh: '資深軟體工程師｜SRE', en: 'Senior SWE | SRE' },
    start: '2024.09',
    end: '2025.07',
    scope: 'lead',
    scopeLabel: { zh: 'SRE Lead 5–8 人', en: 'SRE Lead 5–8' },
    team: { zh: '帶領 5–8 人團隊', en: 'Led a team of 5–8' },
    tag: { zh: '網銀 Gateway · 帶 5–8 人', en: 'Banking SRE · Led 5–8' },
    scene: { zh: '守住那扇不能關的門', en: 'Hold the door that cannot close' },
    story: {
      zh: '銀行的入口不能停。我帶著團隊，讓每一次異常都能被追到源頭。',
      en: "A bank's front door cannot close. I led the team so every anomaly could be traced to its source.",
    },
    challenge: {
      zh: 'CUBE 網銀與內部系統的關鍵 gateway 不能停，同時要協助服務上雲。',
      en: 'The critical CUBE banking gateway could not go down, while services were also moving to the cloud.',
    },
    decision: {
      zh: '建立共用的 OpenTelemetry 監控模組，並維運 OpenShift 私有雲與 AWS / GCP 部署。',
      en: 'Built a shared OpenTelemetry monitoring module and operated OpenShift private cloud alongside AWS / GCP.',
    },
    tradeoff: {
      zh: '統一監控標準需要各團隊配合，換取事故時一致、可追蹤的定位方式。',
      en: 'A shared standard needed every team to adopt it, in exchange for consistent, traceable incident isolation.',
    },
    result: {
      zh: '帶領團隊守住網銀關鍵入口，並完成網銀上雲與共用監控。',
      en: 'Led the team that kept the banking gateway running and delivered cloud migration with shared monitoring.',
    },
  },
  {
    slug: 'metamec',
    code: 'STOP 05',
    company: { zh: 'MetaMEC', en: 'MetaMEC' },
    role: { zh: '資深工程師｜技術架構', en: 'Senior SWE | Technical Architect' },
    start: '2025.08',
    end: 'Now',
    scope: 'architect',
    scopeLabel: { zh: '架構師＆客戶窗口 3–5 人', en: 'Architect & Client Lead 3–5' },
    team: { zh: '帶領 3–5 人小組，擔任企業客戶技術窗口', en: 'Leads 3–5 engineers, enterprise technical contact' },
    tag: { zh: 'AI 資料中心 · 帶 3–5 人', en: 'AI DC · Leads 3–5' },
    scene: { zh: '打開那間鎖死的機房', en: 'Open the locked room' },
    story: {
      zh: '沒有外網、沒有實體機群。我把整座機房寫成程式碼，帶進去、點亮它。',
      en: 'No internet, no physical fleet. I wrote the whole room as code, carried it in, and switched it on.',
    },
    challenge: {
      zh: '企業與 AI 資料中心的機房常常沒有外網、也沒有實體 GPU 機群可供開發驗證。',
      en: 'Enterprise and AI data-center rooms often have no internet and no physical GPU fleet to develop against.',
    },
    decision: {
      zh: '一切以程式碼交付：Kubespray HA + Terraform / ArgoCD GitOps、NICo 模擬 DGX B200、Redfish / PXE 佈建、Go 離線安裝器；密鑰選用 OpenBao。',
      en: 'Everything as code: Kubespray HA with Terraform / ArgoCD GitOps, NICo-simulated DGX B200, Redfish / PXE provisioning and a Go air-gapped installer; secrets on OpenBao.',
    },
    tradeoff: {
      zh: '選 OpenBao 而非 Vault，避開 BSL 授權風險；自建離線安裝器，換取斷網現場可重複交付。',
      en: 'Chose OpenBao over Vault to avoid BSL licensing risk, and built the installer in-house to make offline delivery repeatable.',
    },
    result: {
      zh: '實驗室到客戶機房用同一套方式交付，並以 8 個準則把 AI 導入團隊。',
      en: 'One delivery path from lab to customer data center, with 8 principles bringing AI into the team.',
    },
  },
];

export const swapPairs: SwapPair[] = [
  {
    jargon: { zh: 'Redfish / PXE 裸機佈建', en: 'Redfish / PXE bare-metal provisioning' },
    plain: { zh: '遠端開機並自動裝好新伺服器，不用有人站在機櫃前。', en: 'Power on and install a brand-new server remotely, with nobody at the rack.' },
  },
  {
    jargon: { zh: 'GitOps（ArgoCD）收斂', en: 'GitOps (ArgoCD) reconciliation' },
    plain: { zh: '每個變更都留紀錄可審查，系統會自己改回約定的樣子。', en: 'Every change is recorded and reviewable, and the system corrects itself back to what was agreed.' },
  },
  {
    jargon: { zh: 'Air-gapped 離線安裝器', en: 'Air-gapped installer' },
    plain: { zh: '在完全沒有網路的房間裡，也能把整套雲平台裝起來。', en: 'Installs a whole cloud platform in a room with no internet at all.' },
  },
  {
    jargon: { zh: 'OpenTelemetry 分散式追蹤', en: 'OpenTelemetry distributed tracing' },
    plain: { zh: '像收據一樣記下請求走過哪幾站，哪一站慢一眼就知道。', en: 'A receipt trail of every stop a request made, so the slow one is obvious.' },
  },
  {
    jargon: { zh: 'OpenBao PKI 憑證輪替', en: 'OpenBao PKI certificate rotation' },
    plain: { zh: '數位通行證自動發放、自動換新，不會哪天突然過期。', en: 'Digital ID badges issued and renewed automatically, so none quietly expires.' },
  },
];

export const squad: Engineer[] = [
  {
    id: 'e1',
    name: 'Eng A',
    task: { zh: 'Redfish / PXE 裸機佈建', en: 'Redfish / PXE provisioning' },
    blocker: { zh: '需求範圍不清', en: 'Unclear scope' },
    unblock: { zh: '拆解需求、定義驗收', en: 'Break down work, define done' },
  },
  {
    id: 'e2',
    name: 'Eng B',
    task: { zh: 'Go 離線安裝器', en: 'Go air-gapped installer' },
    blocker: { zh: '設計取捨卡關', en: 'Stuck on a design trade-off' },
    unblock: { zh: '一起 review、拍板取捨', en: 'Review together, decide the trade-off' },
  },
  {
    id: 'e3',
    name: 'Eng C',
    task: { zh: 'GitOps 與 PKI 流程', en: 'GitOps & PKI flow' },
    blocker: { zh: '等待客戶端確認', en: 'Waiting on customer input' },
    unblock: { zh: '以客戶窗口身份對齊', en: 'Align as the customer contact' },
  },
];

export const principles = works
  .find((w) => w.slug === 'metamec')!
  .sections.find((s) => s.id === 'ai-workflow')!.stack!.layers;

export const rcaSteps: RcaStep[] = [
  {
    id: 'drift',
    label: { zh: '1 · 卡關', en: '1 · Blocker' },
    title: { zh: '客戶要求機房完全斷網，團隊交接卻卡在「誰來驗收、怎麼算完成」', en: 'The customer demands a fully air-gapped site, and the team handoff stalls on who signs off and what "done" means' },
    body: { zh: '期望與實際不一致：客戶的資安規範，和團隊的交付定義各說各話。先讓雙方把落差說清楚，不急著動手。', en: 'Desired and actual disagree: the customer\'s security rules and the team\'s delivery definition talk past each other. Name the gap first; do not rush to build.' },
  },
  {
    id: 'root',
    label: { zh: '2 · 根因', en: '2 · Root Cause' },
    title: { zh: '根因不是技術，是期望沒對齊', en: 'The root cause is not technical: expectations were never aligned' },
    body: { zh: '跟客戶窗口、資安與硬體維運逐一對話，把隱含假設攤開；技術細節留給履歷實證查證。', en: 'Talk to the customer contact, security and hardware ops one by one and surface the hidden assumptions; technical detail lives in the dossier.' },
  },
  {
    id: 'converge',
    label: { zh: '3 · 收斂', en: '3 · Converge' },
    title: { zh: '把共識寫成交付規格，變成可重複的流程', en: 'Turn the agreement into a delivery spec and a repeatable process' },
    body: { zh: '下一個同類客戶直接沿用，團隊不再靠某個人才能交付。', en: 'The next similar customer reuses it, and delivery no longer depends on one person.' },
  },
];

export const roleLenses: RoleLens[] = [
  {
    id: 'ceo',
    label: { zh: 'CEO / 創辦人', en: 'CEO / Founder' },
    headline: { zh: '讓企業客戶敢簽、讓團隊少靠英雄、讓交付越做越快。', en: 'Unlocks enterprise deals, removes hero dependency, speeds up every delivery.' },
    bullets: {
      zh: [
        '打通企業與機敏客戶：離線安裝器、OpenBao PKI、Keycloak SSO，支援 POC 與技術提案',
        '守住關鍵業務：曾帶 5–8 人維運國泰 CUBE 網銀關鍵 gateway',
        '放大團隊產出：以 8 個 AI 工作流準則與自製工具，讓 3–5 人小組更快',
      ],
      en: [
        'Opens enterprise and sensitive-site deals: air-gapped installer, OpenBao PKI and Keycloak SSO behind POCs and proposals',
        'Protects mission-critical operations: led 5–8 engineers running the Cathay CUBE banking gateway',
        'Multiplies output: 8 AI-workflow principles and in-house tools for a 3–5 engineer squad',
      ],
    },
    stack: ['Air-gapped installer', 'OpenBao', 'Keycloak SSO', 'OpenTelemetry'],
  },
  {
    id: 'cto',
    label: { zh: 'CTO / VP Eng', en: 'CTO / VP Eng' },
    headline: { zh: '把基礎設施從人力瓶頸變成可複製的平台能力。', en: 'Turns infrastructure from a manual bottleneck into a repeatable platform.' },
    bullets: {
      zh: [
        '裸機 → VM → Kubernetes → AI 機群全部以程式碼建置，變更皆可審查、可回滾',
        '依信任域設計受名稱限制的 Intermediate CA，身分、機密、憑證一致處理',
        '以 kube-burner 做 1000+ Pod 壓測並自動出報告',
      ],
      en: [
        'Bare metal → VMs → Kubernetes → AI fleets built as code; every change reviewable and reversible',
        'Name-constrained intermediate CAs per trust domain; one approach to identity, secrets and certificates',
        'kube-burner load tests at 1000+ pods with automatic reports',
      ],
    },
    stack: ['Kubespray HA', 'Terraform', 'ArgoCD', 'KubeVirt', 'Rook-Ceph', 'kube-burner'],
  },
  {
    id: 'hr',
    label: { zh: 'HR / 用人主管', en: 'HR / Hiring Mgr' },
    headline: { zh: '7 年、5 家公司，責任範圍每一站都在放大。', en: '7 years, 5 companies, with scope growing at every stop.' },
    bullets: {
      zh: [
        'IC → 產品／後端 Owner → SRE Lead 5–8 人 → 架構師＆客戶窗口 3–5 人',
        '能寫 Go / Java / Python，也能帶團隊與面對客戶',
        '日期、學歷與每一站的挑戰／決策／結果，都在履歷實證裡可逐項查證',
      ],
      en: [
        'IC → Product/Backend Owner → SRE Lead 5–8 → Architect & Client Lead 3–5',
        'Hands-on in Go / Java / Python, and able to lead a team and face customers',
        'Dates, degrees and every stop\'s challenge / decision / result are checkable in the dossier',
      ],
    },
    stack: ['Go', 'Java', 'Python', 'Kubernetes', 'Terraform'],
  },
  {
    id: 'lead',
    label: { zh: 'Tech Lead', en: 'Tech Lead' },
    headline: { zh: '自己能解難題，也做工具讓整組更快。', en: 'Solves deep problems and builds tools that speed up the whole squad.' },
    bullets: {
      zh: [
        'spec → ticket → 實作 → 跨模型審查 → MR 流程；ArgoCD 排錯、憑證輪替、RCA 寫成可重用 Agent skills',
        '以 OpenTelemetry 統一觀測，事故沿 trace 定位根因',
        '工時自動彙整、憑證自動更新、webhook 推播等團隊小工具',
      ],
      en: [
        'spec → ticket → implementation → cross-model review → MR flow; ArgoCD triage, cert rotation and RCA captured as reusable agent skills',
        'OpenTelemetry as the shared lens; incidents traced back to root cause',
        'Team tools: automatic timesheets, certificate renewal and webhook push',
      ],
    },
    stack: ['OpenTelemetry', 'ArgoCD', 'Claude Code / Codex', 'GitLab CI', 'Go'],
  },
];

export const verifiedStates = [
  { label: 'Redfish / PXE', ok: true },
  { label: 'GitOps / ArgoCD', ok: true },
  { label: 'OTel Traces', ok: true },
  { label: 'Air-Gapped Bundle', ok: true },
  { label: 'Team 3–8 Lead', ok: true },
];

export const identity = { name: profile.name, title: profile.title };
