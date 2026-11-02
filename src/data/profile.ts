// 網站所有文字內容都在這裡，改這個檔案就能更新網站。
export type Lang = 'zh' | 'en';
type T = Record<Lang, string>;

export const profile = {
  name: { zh: 'Shin Lin', en: 'Shin Lin' } as T, // 想放中文姓名可改 zh
  title: {
    zh: '雲原生平台架構師・SRE',
    en: 'Cloud-Native Platform Architect · SRE',
  } as T,
  location: { zh: '台灣・台北／新竹／桃園', en: 'Taipei / Hsinchu / Taoyuan, Taiwan' } as T,
  workMode: { zh: '可全遠端或混合辦公', en: 'Open to remote or hybrid' } as T,
  // Keywords cycled by the typing effect.
  typing: {
    zh: ['設計雲原生私有雲', '用 AI Agent 加速交付', '用 GitOps 交付平台', '打造 AI 基礎設施', '讓系統穩定運行'],
    en: ['architecting private cloud', 'shipping faster with AI agents', 'shipping platforms with GitOps', 'building AI infrastructure', 'keeping systems reliable'],
  } as Record<Lang, string[]>,
  intro: {
    zh: '現在設計雲原生私有雲與 AI 基礎設施；之前做過網銀 SRE、社群影音推薦系統與 MEC 邊緣運算平台，累積 7 年軟體與基礎設施經驗。',
    en: 'Architecting cloud-native private cloud and AI infrastructure — previously online banking SRE, social video recommendation and MEC edge platforms, across 7+ years in software and infrastructure.',
  } as T,
  trait: { zh: '好的平台與工具，讓整個團隊一起變強', en: 'Good platforms and tools make the whole team stronger' } as T,
  traitEmoji: '🛠️🤝💪',
  pitch: {
    zh: '從裸機到 AI 平台，我把企業的機房變成像公有雲一樣好用。',
    en: 'From bare metal to AI platforms, I make enterprise data centers as easy to use as public cloud.',
  } as T,
  pillars: [
    { key: { zh: '平台', en: 'Platform' } as T, icon: 'box', text: { zh: '裸機 → VM → Kubernetes → AI 機群，全部用程式碼建置與交付。', en: 'Bare metal → VMs → Kubernetes → AI fleets, all built and delivered as code.' } as T },
    { key: { zh: '團隊', en: 'Team' } as T, icon: 'team', text: { zh: '帶過 5–8 人的網銀維運團隊，現在帶 3–5 人專案小組，並打造讓大家更快的工具。', en: 'Led a 5–8 person banking ops team; now leads a 3–5 engineer squad and builds tools that speed everyone up.' } as T },
    { key: { zh: 'AI', en: 'AI' } as T, icon: 'spark', text: { zh: 'AI Agent 是團隊的一員：寫規格、實作、交叉審查，讓小團隊也能穩定交付。', en: 'AI agents are part of the team: specs, implementation and cross-review, so a small team ships steadily.' } as T },
  ],
  proof: [
    { zh: '銀行等級穩定：國泰世華 CUBE 網銀', en: 'Banking-grade: Cathay United Bank CUBE' } as T,
    { zh: '產品化：MEC 平台上市銷售', en: 'Productized: MEC platform taken to market' } as T,
    { zh: 'AI 資料中心：NVIDIA NICo', en: 'AI data center: NVIDIA NICo' } as T,
    { zh: '客戶現場：離線安裝交付', en: 'On-site: air-gapped delivery' } as T,
  ],
  stats: [
    { value: '7+', label: { zh: '年開發經驗', en: 'years building software' } as T },
    { value: '5', label: { zh: '家公司歷練', en: 'companies' } as T },
    { value: '3', label: { zh: '雲端平台', en: 'cloud platforms' } as T },
  ],
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shin-lin-451994246/' },
    { label: 'GitHub', href: 'https://github.com/rushshin' },
    { label: 'Email', href: 'mailto:pig840814@gmail.com' },
  ],
  experience: [
    {
      slug: 'metamec',
      company: { zh: 'MetaMEC', en: 'MetaMEC' } as T,
      role: { zh: '資深軟體工程師｜技術架構', en: 'Senior Software Engineer | Technical Architect' } as T,
      period: '2025.08 — Now',
      current: true,
      team: { zh: '帶領 3–5 人專案小組', en: 'Leads a 3–5 engineer project squad' } as T,
      points: {
        zh: ['設計 Kubernetes 私有雲與 AI 資料中心平台（Kubespray HA、KubeVirt、Rook-Ceph）', '以 Terraform 與 ArgoCD 建立從 VM 到叢集的 IaC 與 GitOps 交付', '建置 NVIDIA NICo 開發環境，模擬 DGX B200 機群，並以 Redfish / PXE 自動化裸機佈建', '開發離線安裝器（Go、Web UI），支援客戶現場交付', '導入 AI Agent 工作流，並開發團隊自動化工具（工時、憑證、訊息推播）', '主導專案、分派任務給 3–5 位工程師，擔任企業客戶技術窗口'],
        en: ['Architect the Kubernetes private cloud and AI data-center platform (Kubespray HA, KubeVirt, Rook-Ceph)', 'Built IaC and GitOps delivery from VMs to clusters with Terraform and ArgoCD', 'Run an NVIDIA NICo dev environment with a simulated DGX B200 fleet and Redfish / PXE bare-metal provisioning', 'Built an air-gapped installer (Go, web UI) for on-site customer delivery', 'Introduced AI-agent workflows and built team automation (timesheets, certificates, message push)', 'Lead projects, assign work to 3–5 engineers, and act as technical contact for enterprise customers'],
      } as Record<Lang, string[]>,
      tags: ['Kubernetes', 'ArgoCD', 'Terraform', 'KubeVirt', 'NVIDIA NICo', 'OpenBao', 'AI Agents'],
    },
    {
      slug: 'cathay',
      company: { zh: '國泰世華銀行', en: 'Cathay United Bank' } as T,
      role: { zh: 'SRE｜資深軟體工程師', en: 'Site Reliability Engineer | Senior Software Engineer' } as T,
      period: '2024.09 — 2025.07',
      team: { zh: '帶領 5–8 人團隊', en: 'Led a team of 5–8 engineers' } as T,
      points: {
        zh: ['帶領 5–8 人團隊，維運 CUBE 網銀與內部系統的關鍵 gateway', '協助網銀服務上雲，以 OpenTelemetry 建立共用監控模組', '維運 OpenShift 私有雲與 AWS / GCP 部署'],
        en: ['Led a 5–8 person team running the critical gateway for CUBE online banking and internal systems', 'Moved online banking to the cloud and built a shared OpenTelemetry monitoring module', 'Operated OpenShift private cloud and AWS / GCP deployments'],
      } as Record<Lang, string[]>,
      tags: ['OpenTelemetry', 'OpenShift', 'Kubernetes', 'AWS', 'GCP', 'Java', 'Spring Boot'],
    },
    {
      slug: 'playsee',
      company: { zh: 'Playsee', en: 'Playsee' } as T,
      role: { zh: '資深軟體工程師', en: 'Senior Software Engineer' } as T,
      period: '2023.09 — 2024.09',
      points: {
        zh: ['設計首頁 Instream 影片個人化推薦服務', '以 Go（gin）與 DDD 開發 API server', '以 GCP cronjob 與 Pub/Sub 確保影片資料最終一致'],
        en: ['Designed the personalized in-stream video recommendation service for the home feed', 'Built API servers in Go (gin) with Domain-Driven Design', 'Kept video data eventually consistent with GCP cronjobs and Pub/Sub'],
      } as Record<Lang, string[]>,
      tags: ['Go', 'GCP', 'Pub/Sub', 'Bigtable', 'Spanner', 'Redis', 'Elasticsearch'],
    },
    {
      slug: 'alpha-networks',
      company: { zh: '明泰科技', en: 'Alpha Networks' } as T,
      role: { zh: '資深軟體工程師', en: 'Senior Software Engineer' } as T,
      period: '2021.09 — 2023.09',
      points: {
        zh: ['依 ETSI / 3GPP 設計 MEC 邊緣運算平台後端，以 Go 實作 API server', '開發軟體授權管理（SLM）、RBAC 權限與 Kubernetes 節點管理', '以 Kubernetes、Ansible、GitLab 建立平台部署與 CI/CD'],
        en: ['Designed the ETSI / 3GPP MEC edge platform backend and built its API servers in Go', 'Built software license management (SLM), RBAC and Kubernetes node management', 'Automated platform deployment and CI/CD with Kubernetes, Ansible and GitLab'],
      } as Record<Lang, string[]>,
      tags: ['Go', 'Kubernetes', 'Docker', 'Ansible', 'PostgreSQL', 'Kong Gateway', 'GitLab CI'],
    },
    {
      slug: 'syscom',
      company: { zh: '凌群電腦', en: 'SYSCOM Computer Engineering' } as T,
      role: { zh: '軟體工程師', en: 'Software Engineer' } as T,
      period: '2019.07 — 2021.09',
      points: {
        zh: ['提供區塊鏈專案技術諮詢與軟硬體規劃', '參與 AI 影像分析平台（Kubernetes、YOLOv3）與 Hadoop 資安分析系統', '以 ASP.NET Core 開發容器化人事雲服務'],
        en: ['Consulted on blockchain projects and system planning', 'Worked on an AI image-analysis platform (Kubernetes, YOLOv3) and a Hadoop security analytics system', 'Built a containerized HR cloud service on ASP.NET Core'],
      } as Record<Lang, string[]>,
      tags: ['Java', 'C#', 'ASP.NET Core', 'Python', 'Docker', 'Kubernetes', 'Hadoop'],
    },
  ],
  skills: [
    { group: { zh: '雲端架構', en: 'Cloud Architecture' } as T, items: ['Kubernetes', 'Docker', 'Kubespray', 'Cilium', 'Hosted Control Plane (Kamaji, CAPI)', 'Private Cloud', 'Hybrid Cloud', 'OpenShift', 'AWS', 'GCP', 'Azure'] },
    { group: { zh: 'GitOps 與 IaC', en: 'GitOps & IaC' } as T, items: ['CI/CD', 'ArgoCD', 'ApplicationSet', 'External Secrets', 'Helm', 'Kustomize', 'Terraform', 'Ansible', 'GitLab CI'] },
    { group: { zh: 'AI 工作流與基礎設施', en: 'AI Workflow & Infrastructure' } as T, items: ['AI Agent Workflow', 'Claude Code / Codex', 'NVIDIA NICo', 'Redfish / PXE Provisioning', 'AI Platform on Kubernetes', 'GPU Scheduling', 'NVIDIA GPU Operator', 'High-Performance Networking', 'Model Training (PyTorch, YOLO)'] },
    { group: { zh: '虛擬化與儲存', en: 'Virtualization & Storage' } as T, items: ['KVM', 'KubeVirt', 'VM HA Cluster', 'Ceph / Rook-Ceph', 'Harbor'] },
    { group: { zh: '安全與身分', en: 'Security & Identity' } as T, items: ['DevSecOps', 'RBAC', 'Keycloak', 'Dex SSO', 'Microsoft Entra ID', 'OpenBao', 'cert-manager / PKI'] },
    { group: { zh: '可觀測性', en: 'Observability' } as T, items: ['OpenTelemetry', 'Logs / Metrics / Traces', 'Prometheus', 'Grafana', 'Load Testing (kube-burner)'] },
    { group: { zh: '後端開發', en: 'Backend' } as T, items: ['Microservices', 'Go', 'Java', 'Spring Boot', 'Python', 'C#', 'ASP.NET Core', 'Kong Gateway', 'DDD'] },
    { group: { zh: '資料與訊息', en: 'Data & Messaging' } as T, items: ['PostgreSQL', 'Redis', 'Elasticsearch', 'Bigtable', 'Spanner', 'MongoDB', 'Pub/Sub', 'Hadoop'] },
  ],
  education: [
    {
      school: { zh: '國立臺北大學', en: 'National Taipei University' } as T,
      degree: { zh: '資訊工程 碩士', en: 'M.S., Computer Science & Information Engineering' } as T,
      period: '2017 — 2019',
    },
    {
      school: { zh: '鄭州大學', en: 'Zhengzhou University' } as T,
      degree: { zh: '資訊工程 交換生', en: 'Exchange Student, Information Engineering' } as T,
      period: '2015 — 2016',
    },
    {
      school: { zh: '銘傳大學', en: 'Ming Chuan University' } as T,
      degree: { zh: '資訊與通訊工程 學士', en: 'B.S., Information & Telecommunications Engineering' } as T,
      period: '2013 — 2017',
    },
  ],
};

export const ui = {
  nav: { about: { zh: '關於', en: 'About' }, experience: { zh: '經歷', en: 'Experience' }, skills: { zh: '技能', en: 'Skills' }, education: { zh: '學歷', en: 'Education' }, contact: { zh: '聯絡', en: 'Contact' } },
  hello: { zh: '你好，我是', en: "Hi, I'm" },
  iAm: { zh: '我專注在', en: "I'm focused on" },
  now: { zh: '現職 MetaMEC：設計雲原生私有雲與 AI 平台', en: 'Now at MetaMEC: architecting private cloud & AI platforms' },
  employerNow: { zh: '現職', en: 'Now' },
  employerPreviously: { zh: '曾任', en: 'Previously' },
  atAGlance: { zh: '一分鐘看懂', en: 'At a glance' },
  careerPath: { zh: '職涯歷程', en: 'Career path' },
  careerCaption: { zh: '點選任一段經歷看成果', en: 'Select a role to see the work' },
  skillCaption: { zh: '點選類別，看每項技能用在哪份工作', en: 'Pick a category to see where each skill was used' },
  resumePdf: { zh: '履歷 PDF', en: 'Resume PDF' },
  viewWork: { zh: '看成果 →', en: 'View work →' },
  home: { zh: '首頁', en: 'Home' },
  prev: { zh: '← 上一份', en: '← Previous' },
  next: { zh: '下一份 →', en: 'Next →' },
  result: { zh: '成果', en: 'Outcome' },
  contactTitle: { zh: '與我聯繫', en: 'Contact' },
  contactText: { zh: '歡迎透過以下方式與我聯繫。', en: 'Feel free to reach out through any of the channels below.' },
  switchLang: { zh: 'EN', en: '中文' },
  palette: { zh: '快速跳轉', en: 'quick jump' },
} satisfies Record<string, Record<string, T> | T>;
