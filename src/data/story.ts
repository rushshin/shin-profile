import type { Lang } from './profile';
type T = Record<Lang, string>;

// Oldest first: the train reaches one station per chapter and the city grows behind it.
export interface Chapter { slug: string; label: T; title: T; line: T }
export const chapters: Chapter[] = [
  { slug: 'syscom', label: { zh: '第一站', en: 'Station 1' }, title: { zh: '打地基', en: 'Laying foundations' }, line: { zh: '在系統整合專案裡，第一次碰到容器、AI 影像辨識與區塊鏈。', en: 'At a system integrator, first contact with containers, AI vision and blockchain.' } },
  { slug: 'alpha-networks', label: { zh: '第二站', en: 'Station 2' }, title: { zh: '鋪設基礎建設', en: 'Building the infrastructure' }, line: { zh: '牽起看不見的網路與管線，把邊緣運算平台做成可以授權銷售的產品。', en: 'Laid the invisible networks and turned an edge-computing platform into a product that could be sold.' } },
  { slug: 'playsee', label: { zh: '第三站', en: 'Station 3' }, title: { zh: '城市熱鬧了起來', en: 'The city comes alive' }, line: { zh: '讓人們在城市裡相遇、分享與娛樂：為每一個人推薦他喜歡的影片。', en: 'People meet, share and play in the city: recommending the right video for every single person.' } },
  { slug: 'cathay', label: { zh: '第四站', en: 'Station 4' }, title: { zh: '看不見的安心', en: 'Peace of mind, unseen' }, line: { zh: '每一筆網路金流背後，都需要安全與穩定；帶著團隊，讓網銀安穩地運轉。', en: 'Behind every online payment sits security and stability; led a team that kept online banking running steadily.' } },
  { slug: 'metamec', label: { zh: '第五站', en: 'Station 5' }, title: { zh: '讓城市變聰明', en: 'A city that thinks' }, line: { zh: '從裸機到 AI 資料中心，讓城市自動運轉、越來越聰明；用工具與 AI，讓整座城市一起升級。', en: 'From bare metal to an AI data center — a city that runs itself and keeps getting smarter, upgraded together with tools and AI.' } },
];

export const storyUi = {
  title: { zh: '一路走來', en: 'The journey' },
  caption: { zh: '火車載著每一站學到的技能前進。每到新的一站，就回頭升級前面的城市：窗戶亮起、樓層加高。', en: 'The train carries what each station taught. At every new stop, the city behind it gets upgraded: more windows lit, more floors added.' },
  newSkills: { zh: '這一站新增的技能', en: 'Skills picked up here' },
  epilogueTitle: { zh: '終站？', en: 'Last stop?' },
  epilogue: { zh: '城市沒有完美，永遠在施工中——只有下一次迭代。', en: 'No city is ever finished — it is always under construction. There is only the next iteration.' },
  route: { zh: '路線圖', en: 'Route map' },
  routeHint: { zh: '先看看整條路線，再一站一站走進去。', en: 'First the whole route — then step into each stop.' },
  end: { zh: '終站', en: 'Now' },
};
