import type { Lang } from './profile';
type T = Record<Lang, string>;

// Oldest first: the train reaches one station per chapter and the city grows behind it.
export interface Chapter { slug: string; label: T; title: T; line: T }
export const chapters: Chapter[] = [
  { slug: 'syscom', label: { zh: '第一站', en: 'Station 1' }, title: { zh: '打地基', en: 'Laying foundations' }, line: { zh: '在系統整合專案裡，第一次碰到容器、AI 影像辨識與區塊鏈。', en: 'At a system integrator, first contact with containers, AI vision and blockchain.' } },
  { slug: 'alpha-networks', label: { zh: '第二站', en: 'Station 2' }, title: { zh: '鋪軌道', en: 'Laying the tracks' }, line: { zh: '把邊緣運算平台從技術做成可以授權銷售的產品。', en: 'Turned an edge-computing platform into a product that could be licensed and sold.' } },
  { slug: 'playsee', label: { zh: '第三站', en: 'Station 3' }, title: { zh: '熱鬧的街區', en: 'A busy district' }, line: { zh: '在社群影音的流量裡，學會為每一個人推薦。', en: 'In the traffic of a social video app, learned to recommend for every single user.' } },
  { slug: 'cathay', label: { zh: '第四站', en: 'Station 4' }, title: { zh: '守城', en: 'Guarding the city' }, line: { zh: '在銀行等級的要求下，帶團隊守住網銀的穩定。', en: 'Under banking-grade demands, led a team that kept online banking steady.' } },
  { slug: 'metamec', label: { zh: '第五站', en: 'Station 5' }, title: { zh: '點亮天際線', en: 'Lighting the skyline' }, line: { zh: '從裸機到 AI 平台；用工具與 AI，讓整座城市一起升級。', en: 'From bare metal to AI platforms — with tools and AI that upgrade the whole city.' } },
];

export const storyUi = {
  title: { zh: '一路走來', en: 'The journey' },
  caption: { zh: '火車載著每一站學到的技能前進。每到新的一站，就回頭升級前面的城市：窗戶亮起、樓層加高。', en: 'The train carries what each station taught. At every new stop, the city behind it gets upgraded: more windows lit, more floors added.' },
  newSkills: { zh: '這一站新增的技能', en: 'Skills picked up here' },
  epilogueTitle: { zh: '終站？', en: 'Last stop?' },
  epilogue: { zh: '城市沒有完美，永遠在施工中——只有下一次迭代。', en: 'No city is ever finished — it is always under construction. There is only the next iteration.' },
  view: { zh: '看這一站 →', en: 'See this stop →' },
};
