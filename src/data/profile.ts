// 網站所有文字內容都在這裡，改這個檔案就能更新網站。
export type Lang = 'zh' | 'en';
type T = Record<Lang, string>;

export const profile = {
  name: { zh: 'Shin Lin', en: 'Shin Lin' } as T, // 想放中文姓名可改 zh
  title: {
    zh: '雲原生平台架構師・SRE',
    en: 'Cloud-Native Platform Architect · SRE',
  } as T,
  location: { zh: '台灣・桃園／台北／新竹', en: 'Taoyuan / Taipei / Hsinchu, Taiwan' } as T,
  // Keywords cycled by the typing effect.
  typing: {
    zh: ['設計雲原生私有雲', '用 GitOps 交付平台', '打造 AI 基礎設施', '讓系統穩定運行'],
    en: ['architecting private cloud', 'shipping platforms with GitOps', 'building AI infrastructure', 'keeping systems reliable'],
  } as Record<Lang, string[]>,
  intro: {
    zh: '7 年軟體與基礎設施經驗，走過 MEC 邊緣運算平台、影片推薦系統與銀行等級 SRE，現在設計雲原生私有雲與 AI 基礎設施。',
    en: '7+ years across MEC edge platforms, video recommendation and banking-grade SRE — now architecting cloud-native private cloud and AI infrastructure.',
  } as T,
  stats: [
    { value: '7+', label: { zh: '年開發經驗', en: 'years building software' } as T },
    { value: '5', label: { zh: '家公司歷練', en: 'companies' } as T },
    { value: '3', label: { zh: '雲端平台', en: 'cloud platforms' } as T },
  ],
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shin-lin-451994246/' },
    { label: 'GitHub', href: 'https://github.com/rushshin' },
    // { label: 'Email', href: 'mailto:you@example.com' },
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
        zh: ['設計 Kubernetes 私有雲與 AI 平台架構', '主導專案，規劃並分派任務給 3–5 位工程師', '擔任企業客戶技術窗口，支援 POC 與提案'],
        en: ['Architect the Kubernetes private cloud and AI platform', 'Lead projects; plan and assign work for 3–5 engineers', 'Technical point of contact for enterprise customers, POCs and proposals'],
      } as Record<Lang, string[]>,
      tags: ['Kubernetes', 'ArgoCD', 'Ceph', 'Harbor', 'Keycloak', 'OpenBao', 'OpenTelemetry'],
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
    { group: { zh: '雲端架構', en: 'Cloud Architecture' } as T, items: ['Kubernetes', 'Private Cloud', 'Hybrid Cloud', 'OpenShift', 'AWS', 'GCP', 'Azure'] },
    { group: { zh: 'GitOps 與 IaC', en: 'GitOps & IaC' } as T, items: ['ArgoCD', 'ApplicationSet', 'Helm', 'Kustomize', 'Terraform', 'Ansible', 'GitLab CI'] },
    { group: { zh: 'AI 基礎設施', en: 'AI Infrastructure' } as T, items: ['GPU Scheduling', 'NVIDIA GPU Operator', 'AI Platform on Kubernetes', 'High-Performance Networking'] },
    { group: { zh: '虛擬化與儲存', en: 'Virtualization & Storage' } as T, items: ['KVM', 'VM HA Cluster', 'Ceph', 'Harbor'] },
    { group: { zh: '安全與身分', en: 'Security & Identity' } as T, items: ['Keycloak', 'Dex SSO', 'OpenBao', 'cert-manager / PKI', 'DevSecOps'] },
    { group: { zh: '可觀測性', en: 'Observability' } as T, items: ['OpenTelemetry', 'Prometheus', 'Grafana', 'Logs / Metrics / Traces'] },
    { group: { zh: '後端開發', en: 'Backend' } as T, items: ['Go', 'Java', 'Spring Boot', 'Python', 'C#', 'ASP.NET Core', 'Kong Gateway', 'DDD'] },
    { group: { zh: '資料與訊息', en: 'Data & Messaging' } as T, items: ['PostgreSQL', 'Redis', 'Elasticsearch', 'Bigtable', 'Spanner', 'MongoDB', 'Pub/Sub'] },
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
  status: { zh: 'All systems operational', en: 'All systems operational' },
  viewWork: { zh: '看成果 →', en: 'View work →' },
  home: { zh: '首頁', en: 'Home' },
  prev: { zh: '← 上一份', en: '← Previous' },
  next: { zh: '下一份 →', en: 'Next →' },
  result: { zh: '成果', en: 'Outcome' },
  contactTitle: { zh: '一起聊聊？', en: "Let's talk" },
  contactText: { zh: '歡迎透過 LinkedIn 聯絡。', en: 'Reach out on LinkedIn.' },
  switchLang: { zh: 'EN', en: '中文' },
  palette: { zh: '快速跳轉', en: 'quick jump' },
} satisfies Record<string, Record<string, T> | T>;
