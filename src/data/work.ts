import type { Lang } from './profile';
type T = Record<Lang, string>;
type L = Record<Lang, string[]>;

export interface WorkSection { id: string; title: T; lead: T; points: L; result: T }
export interface Work { slug: string; plain: T; summary: T; sections: WorkSection[] }

export const works: Work[] = [
  {
    slug: 'metamec',
    plain: {
      zh: '幫企業在自己的機房建一套像公有雲一樣好用又安全的平台，並帶領小團隊交付給客戶。',
      en: 'Builds enterprises a secure, cloud-like platform in their own data centers, and leads a small team delivering it to customers.',
    },
    summary: {
      zh: '從裸機到可交付的雲原生私有雲：平台架構、GitOps、安全與 AI 工作負載。',
      en: 'A cloud-native private cloud from bare metal to delivery: platform architecture, GitOps, security and AI workloads.',
    },
    sections: [
      {
        id: 'platform',
        title: { zh: '私有雲平台架構', en: 'Private cloud architecture' },
        lead: { zh: '從裸機到可交付的 Kubernetes 平台', en: 'From bare metal to a deliverable Kubernetes platform' },
        points: {
          zh: ['以 Kubespray 建置 Kubernetes，kube-vip 提供控制平面高可用', '虛擬化叢集採 quorum 設計，避免腦裂', 'Ceph 分散式儲存搭配 Harbor 私有映像倉庫'],
          en: ['Kubernetes built with Kubespray; kube-vip for a highly available control plane', 'Quorum-based virtualization cluster to prevent split brain', 'Ceph distributed storage with a private Harbor registry'],
        },
        result: { zh: '一套可重複交付給企業客戶的私有雲基礎', en: 'A private cloud foundation that ships repeatably to enterprise customers' },
      },
      {
        id: 'gitops',
        title: { zh: 'GitOps 交付', en: 'GitOps delivery' },
        lead: { zh: '所有變更都經過 Git', en: 'Every change goes through Git' },
        points: {
          zh: ['ArgoCD App-of-Apps 與 ApplicationSet 管理多叢集', 'Sync Waves 控制平台元件的部署順序', 'External Secrets 串接 OpenBao，機密不進 Git'],
          en: ['ArgoCD App-of-Apps and ApplicationSet across clusters', 'Sync Waves order platform component rollout', 'External Secrets with OpenBao keeps secrets out of Git'],
        },
        result: { zh: '平台元件可宣告、可審查、可回滾', en: 'Platform components are declarative, reviewable and reversible' },
      },
      {
        id: 'security',
        title: { zh: '安全與可觀測性', en: 'Security & observability' },
        lead: { zh: '安全優先於一切', en: 'Security comes first' },
        points: {
          zh: ['Keycloak + Dex 統一 SSO', '依信任域設計 Intermediate CA，統一憑證輪替', '選用 OpenBao，避開 Vault BSL 授權風險', 'OpenTelemetry、Prometheus、Grafana 建立平台可觀測性'],
          en: ['Unified SSO with Keycloak + Dex', 'Per-trust-domain intermediate CAs for consistent cert rotation', 'OpenBao instead of Vault to avoid BSL licensing risk', 'Platform observability with OpenTelemetry, Prometheus and Grafana'],
        },
        result: { zh: '身分、機密、憑證與監控都有一致的做法', en: 'One consistent approach to identity, secrets, certificates and monitoring' },
      },
      {
        id: 'lead',
        title: { zh: '專案領導', en: 'Project leadership' },
        lead: { zh: '小團隊，高密度', en: 'Small team, high leverage' },
        points: {
          zh: ['主導平台專案，拆解需求並分派任務給 3–5 位工程師', 'Code review 與技術指導，維持架構一致', '建立 spec → ticket → review 的交付流程'],
          en: ['Lead platform projects; break down work and assign it to 3–5 engineers', 'Code review and mentoring to keep the architecture consistent', 'Set up a spec → ticket → review delivery flow'],
        },
        result: { zh: '精簡編制下仍能穩定推進多條產品線', en: 'Several product lines move forward with a lean team' },
      },
      {
        id: 'ai',
        title: { zh: 'AI 平台與客戶導入', en: 'AI platform & adoption' },
        lead: { zh: '讓平台跑得動 AI 工作負載', en: 'Make the platform ready for AI workloads' },
        points: {
          zh: ['規劃 AI 導向 Kubernetes 平台的 GPU 排程與網路', '擔任企業客戶技術窗口，支援 POC 與技術提案'],
          en: ['Plan GPU scheduling and networking for an AI-oriented Kubernetes platform', 'Technical point of contact for enterprise POCs and proposals'],
        },
        result: { zh: '架構設計直接對接客戶需求', en: 'Architecture decisions map directly to customer needs' },
      },
    ],
  },
  {
    slug: 'cathay',
    plain: {
      zh: '確保國泰世華網銀與行動銀行穩定運作，並帶領團隊把服務搬上雲端、建立統一的監控。',
      en: "Kept Cathay United Bank's online and mobile banking running reliably, and led a team moving services to the cloud with unified monitoring.",
    },
    summary: {
      zh: '銀行等級 SRE：維運 CUBE 網銀關鍵 gateway、協助網銀上雲、建立共用監控。',
      en: 'Banking-grade SRE: running the CUBE gateway, moving online banking to the cloud and building shared monitoring.',
    },
    sections: [
      {
        id: 'gateway',
        title: { zh: '關鍵 gateway 維運', en: 'Critical gateway operations' },
        lead: { zh: '網銀流量的第一道門', en: 'The front door for online banking traffic' },
        points: {
          zh: ['帶領 5–8 人團隊，主導內部系統與 CUBE 網銀／行動銀行關鍵 gateway 的維運', '負責服務穩定性與事件處理'],
          en: ['Led a 5–8 person team operating the critical gateway for internal systems and CUBE online/mobile banking', 'Owned service stability and incident handling'],
        },
        result: { zh: '銀行核心入口持續穩定運作', en: 'The bank’s core entry point kept running reliably' },
      },
      {
        id: 'cloud',
        title: { zh: '網銀上雲', en: 'Online banking to the cloud' },
        lead: { zh: '私有雲與公有雲並行', en: 'Private and public cloud side by side' },
        points: {
          zh: ['協助網銀服務遷移上雲', '維運 Red Hat OpenShift 私有雲', '管理並優化 AWS 與 GCP 部署'],
          en: ['Helped migrate online banking services to the cloud', 'Operated Red Hat OpenShift private cloud', 'Managed and optimized AWS and GCP deployments'],
        },
        result: { zh: '網銀服務可在混合雲上運行', en: 'Online banking services run on hybrid cloud' },
      },
      {
        id: 'observability',
        title: { zh: '共用監控模組', en: 'Shared monitoring module' },
        lead: { zh: '可觀測性變成標配', en: 'Observability by default' },
        points: {
          zh: ['導入 OpenTelemetry 建立可觀測性框架', '開發雲端服務共用監控模組，供網銀服務直接使用', 'logs、metrics、traces 即時監控全系統'],
          en: ['Introduced OpenTelemetry as the observability framework', 'Built a shared monitoring module for all online banking services', 'Real-time logs, metrics and traces across the system'],
        },
        result: { zh: '各服務不必各自打造監控', en: 'Services no longer build their own monitoring' },
      },
    ],
  },
  {
    slug: 'playsee',
    plain: {
      zh: '打造社群影音 App 的首頁推薦，讓每位使用者看到自己有興趣的影片。',
      en: 'Built the home-feed recommendations of a social video app so each user sees videos they care about.',
    },
    summary: {
      zh: '社群影音 App 後端：首頁影片推薦、Go API 與 GCP 上的資料一致性。',
      en: 'Social video app backend: home-feed recommendation, Go APIs and data consistency on GCP.',
    },
    sections: [
      {
        id: 'recommendation',
        title: { zh: '首頁影片推薦', en: 'Home-feed recommendation' },
        lead: { zh: '每個人看到不同的首頁', en: 'A different home feed for everyone' },
        points: {
          zh: ['設計並實作推薦演算法服務', '為首頁資訊流提供個人化 Instream 影片'],
          en: ['Designed and built the recommendation service', 'Personalized in-stream videos for the home feed'],
        },
        result: { zh: '提升使用者互動', en: 'Higher user engagement' },
      },
      {
        id: 'api',
        title: { zh: 'API 與領域設計', en: 'APIs & domain design' },
        lead: { zh: '用 DDD 切清楚邊界', en: 'Clear boundaries with DDD' },
        points: {
          zh: ['以 Go（gin）開發 API server', '採用 Domain-Driven Design', '主導 boards 新功能（鄰里話題）開發'],
          en: ['API servers in Go (gin)', 'Domain-Driven Design', 'Led the new boards feature for neighborhood topics'],
        },
        result: { zh: '新功能可在既有架構上快速擴充', en: 'New features extend the existing design quickly' },
      },
      {
        id: 'data',
        title: { zh: '資料一致性與儲存', en: 'Data consistency & storage' },
        lead: { zh: '依存取模式選對資料庫', en: 'The right store for each access pattern' },
        points: {
          zh: ['以 cronjob 與 Pub/Sub 確保 GCP 上影片資料最終一致', 'Bigtable、Spanner、Redis、Elasticsearch 分工儲存與快取', 'Scrum 搭配 Jira、Confluence 管理專案'],
          en: ['Cronjobs and Pub/Sub keep video data eventually consistent on GCP', 'Bigtable, Spanner, Redis and Elasticsearch split storage and caching', 'Scrum with Jira and Confluence'],
        },
        result: { zh: '影片與資料在多個服務間保持同步', en: 'Videos and data stay in sync across services' },
      },
    ],
  },
  {
    slug: 'alpha-networks',
    plain: {
      zh: '把一套電信規格的邊緣運算平台，從技術做成可以授權銷售的產品。',
      en: 'Turned a telecom-standard edge computing platform into a product that could be licensed and sold.',
    },
    summary: {
      zh: 'MEC 邊緣運算平台：依 ETSI / 3GPP 設計，並把平台做成可銷售的商品。',
      en: 'A MEC edge computing platform built to ETSI / 3GPP and turned into a sellable product.',
    },
    sections: [
      {
        id: 'mec',
        title: { zh: 'MEC 平台架構', en: 'MEC platform architecture' },
        lead: { zh: '標準規範加上雲原生技術', en: 'Standards meet cloud native' },
        points: {
          zh: ['依 ETSI 與 3GPP 規範設計 MEC 架構', '訂定 API interface，以 Go 實作 API server', '以 Kong Gateway 管理 API 流量'],
          en: ['Designed the MEC architecture to ETSI and 3GPP', 'Defined API interfaces and built API servers in Go', 'Managed API traffic with Kong Gateway'],
        },
        result: { zh: '以雲原生技術落地的 MEC 平台', en: 'A MEC platform delivered with cloud-native tech' },
      },
      {
        id: 'product',
        title: { zh: '商品化功能', en: 'Productization' },
        lead: { zh: '讓平台可以賣', en: 'Making the platform sellable' },
        points: {
          zh: ['開發軟體授權管理（SLM）', '以 RBAC 控管使用者權限', '透過 Web 介面管理 Kubernetes 叢集節點'],
          en: ['Built software license management (SLM)', 'RBAC for user permissions', 'Kubernetes node management through a web UI'],
        },
        result: { zh: '產品上線並轉為商品銷售', en: 'The product launched and went on sale' },
      },
      {
        id: 'delivery',
        title: { zh: '部署與開發流程', en: 'Delivery & process' },
        lead: { zh: '自動化部署，敏捷開發', en: 'Automated delivery, agile process' },
        points: {
          zh: ['以 Kubernetes、Docker、Ansible、GitLab 建立 CI/CD', '採用 Scrum、TDD 與文件驅動開發'],
          en: ['CI/CD with Kubernetes, Docker, Ansible and GitLab', 'Scrum, TDD and documentation-driven development'],
        },
        result: { zh: '平台部署可重複、可預期', en: 'Repeatable, predictable platform deployment' },
      },
    ],
  },
  {
    slug: 'syscom',
    plain: {
      zh: '在系統整合公司參與區塊鏈、AI 影像辨識與大數據等客戶專案，從諮詢做到交付。',
      en: 'Worked on client projects in blockchain, AI image recognition and big data at a system integrator, from consulting to delivery.',
    },
    summary: {
      zh: '系統整合：區塊鏈顧問、AI 影像分析與大數據專案、容器化人事雲。',
      en: 'System integration: blockchain consulting, AI image analysis, big data and a containerized HR cloud.',
    },
    sections: [
      {
        id: 'blockchain',
        title: { zh: '區塊鏈技術顧問', en: 'Blockchain consulting' },
        lead: { zh: '從研究所延伸到專案', en: 'From graduate research to real projects' },
        points: {
          zh: ['提供區塊鏈專案技術諮詢與軟硬體規劃', '受邀擔任區塊鏈課程講師'],
          en: ['Technical consulting and system planning for blockchain projects', 'Invited instructor for a blockchain course'],
        },
        result: { zh: '把研究成果轉成客戶可用的方案', en: 'Research turned into customer-ready solutions' },
      },
      {
        id: 'ai-data',
        title: { zh: 'AI 與大數據專案', en: 'AI & big data projects' },
        lead: { zh: '支援跨部門 AI 專案', en: 'Supporting AI projects across teams' },
        points: {
          zh: ['AI 影像分析平台：Kubernetes 叢集、YOLOv3 模型訓練、Java + ZK 前端', '資安事件管理：建置 Hadoop 分散式運算系統', '醫院 PoC：以 Python、PyTorch 辨識超音波影像'],
          en: ['AI image-analysis platform: Kubernetes cluster, YOLOv3 training, Java + ZK frontend', 'Security event management on a Hadoop cluster', 'Hospital PoC: ultrasound image recognition with Python and PyTorch'],
        },
        result: { zh: '從模型訓練到前端呈現都有參與', en: 'Hands-on from model training to the frontend' },
      },
      {
        id: 'hr-cloud',
        title: { zh: '容器化人事雲', en: 'Containerized HR cloud' },
        lead: { zh: '微服務的起點', en: 'The first step to microservices' },
        points: {
          zh: ['以 ASP.NET Core MVC 與 Razor Page 開發人事系統', '在 Ubuntu 上以 Docker 與 Kubernetes 部署', '規劃部署到 Microsoft Azure'],
          en: ['HR system on ASP.NET Core MVC and Razor Pages', 'Deployed with Docker and Kubernetes on Ubuntu', 'Planned the move to Microsoft Azure'],
        },
        result: { zh: '內部系統走向微服務的起點', en: 'The starting point for moving internal systems to microservices' },
      },
    ],
  },
];
