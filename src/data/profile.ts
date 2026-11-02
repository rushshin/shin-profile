// 網站所有文字內容都在這裡，改這個檔案就能更新網站。
export type Lang = 'zh' | 'en';
type T = Record<Lang, string>;

export const profile = {
  name: { zh: 'Shin Lin', en: 'Shin Lin' } as T, // 想放中文姓名可改 zh
  title: {
    zh: 'Site Reliability Engineer・資深軟體工程師',
    en: 'Site Reliability Engineer · Senior Software Engineer',
  } as T,
  location: { zh: '台灣・桃園／台北', en: 'Taoyuan / Taipei, Taiwan' } as T,
  // 打字機效果輪播的關鍵字
  typing: {
    zh: ['讓系統穩定運行', '把可觀測性做到位', '用 Go 寫後端服務', '維運混合雲平台'],
    en: ['keeping systems reliable', 'making everything observable', 'building backends in Go', 'running hybrid cloud'],
  } as Record<Lang, string[]>,
  intro: {
    zh: '7 年軟體開發經驗，專注後端與銀行等級系統的穩定性。',
    en: '7+ years in software, focused on backend and banking-grade reliability.',
  } as T,
  stats: [
    { value: '7+', label: { zh: '年開發經驗', en: 'years building software' } as T },
    { value: '4', label: { zh: '家公司歷練', en: 'companies' } as T },
    { value: '3', label: { zh: '雲端平台', en: 'cloud platforms' } as T },
  ],
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shin-lin-451994246/' },
    { label: 'GitHub', href: 'https://github.com/rushshin' },
    // { label: 'Email', href: 'mailto:you@example.com' },
  ],
  experience: [
    {
      company: { zh: '國泰世華銀行', en: 'Cathay United Bank' } as T,
      role: { zh: 'SRE｜資深軟體工程師', en: 'Site Reliability Engineer | Senior Software Engineer' } as T,
      period: '2024.09 — Now',
      current: true,
      points: {
        zh: ['維運 CUBE App 關鍵 gateway', '導入 OpenTelemetry 全鏈路可觀測性', '維運 OpenShift 與 AWS / GCP'],
        en: ['Run the critical gateway behind the CUBE app', 'Rolled out OpenTelemetry end to end', 'Operate OpenShift, AWS and GCP'],
      } as Record<Lang, string[]>,
      tags: ['OpenTelemetry', 'OpenShift', 'AWS', 'GCP', 'Spring Boot', 'Microservices'],
    },
    {
      company: { zh: 'Playsee', en: 'Playsee' } as T,
      role: { zh: '資深軟體工程師', en: 'Senior Software Engineer' } as T,
      period: '2023.09 — 2024.09',
      points: {
        zh: ['開發首頁影片推薦服務', '以 Go 開發 API 與 GCP 資料同步'],
        en: ['Built the home-feed video recommendation service', 'Built Go APIs and GCP data sync'],
      } as Record<Lang, string[]>,
      tags: ['Go', 'GCP', 'Pub/Sub', 'Bigtable', 'Spanner', 'Redis', 'Elasticsearch'],
    },
    {
      company: { zh: '明泰科技', en: 'Alpha Networks' } as T,
      role: { zh: '資深軟體工程師', en: 'Senior Software Engineer' } as T,
      period: '2021.01 — 2023.08',
      points: { zh: [], en: [] } as Record<Lang, string[]>, // TODO: 補工作內容
      tags: ['Go', 'Docker', 'Linux', 'Microservices', 'Redis'],
    },
    {
      company: { zh: '凌群電腦', en: 'SYSCOM Computer Engineering' } as T,
      role: { zh: '軟體工程師', en: 'Junior Software Engineer' } as T,
      period: '2019.07 — 2021.01',
      points: { zh: [], en: [] } as Record<Lang, string[]>, // TODO: 補工作內容
      tags: ['Python', 'ASP.NET Core'],
    },
  ],
  skills: [
    { group: { zh: '可觀測性與維運', en: 'Observability & Reliability' } as T, items: ['OpenTelemetry', 'Logs / Metrics / Traces', 'Gateway Operations'] },
    { group: { zh: '雲端與平台', en: 'Cloud & Platform' } as T, items: ['Red Hat OpenShift', 'AWS', 'GCP', 'Docker', 'Linux'] },
    { group: { zh: '後端開發', en: 'Backend' } as T, items: ['Go', 'Spring Boot', 'Python', 'ASP.NET Core', 'Microservices'] },
    { group: { zh: '資料與訊息', en: 'Data & Messaging' } as T, items: ['Redis', 'Elasticsearch', 'Bigtable', 'Spanner', 'Pub/Sub'] },
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
  contactTitle: { zh: '一起聊聊？', en: "Let's talk" },
  contactText: { zh: '歡迎透過 LinkedIn 聯絡。', en: 'Reach out on LinkedIn.' },
  switchLang: { zh: 'EN', en: '中文' },
  palette: { zh: '快速跳轉', en: 'quick jump' },
} satisfies Record<string, Record<string, T> | T>;
