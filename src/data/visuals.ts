import type { Lang } from './profile';
type T = Record<Lang, string>;

// Grid position: col 0-3, row 0-2; section links a node to a work-page section id.
export interface DiagramNode { id: string; label: string; col: number; row: number; section?: string }
export interface Diagram { nodes: DiagramNode[]; edges: [string, string][] }
export interface Compare { typical: Record<Lang, string[]>; ours: Record<Lang, string[]> }
export interface Story { context: T; problem: T; decision: T; outcome: T }
export interface Visual { diagram: Diagram; compare: Compare; story: Story }

export const visuals: Record<string, Visual> = {
  metamec: {
    diagram: {
      nodes: [
        { id: 'git', label: 'Git repo', col: 0, row: 0, section: 'gitops' },
        { id: 'argocd', label: 'ArgoCD', col: 1, row: 0, section: 'gitops' },
        { id: 'bao', label: 'OpenBao', col: 0, row: 1, section: 'security' },
        { id: 'eso', label: 'External Secrets', col: 1, row: 1, section: 'gitops' },
        { id: 'sso', label: 'Keycloak + Dex', col: 1, row: 2, section: 'security' },
        { id: 'k8s', label: 'Kubernetes', col: 2, row: 1, section: 'platform' },
        { id: 'infra', label: 'KVM + Ceph', col: 2, row: 2, section: 'platform' },
        { id: 'harbor', label: 'Harbor', col: 2, row: 0, section: 'platform' },
        { id: 'ai', label: 'AI / GPU workloads', col: 3, row: 0, section: 'ai' },
        { id: 'obs', label: 'OTel · Prometheus', col: 3, row: 2, section: 'security' },
      ],
      edges: [['git', 'argocd'], ['argocd', 'k8s'], ['bao', 'eso'], ['eso', 'k8s'], ['sso', 'k8s'], ['infra', 'k8s'], ['harbor', 'k8s'], ['k8s', 'ai'], ['k8s', 'obs']],
    },
    compare: {
      typical: { zh: ['手動 SSH 部署', '逐台修改設定', '機密散落各處'], en: ['Manual SSH deploys', 'Per-host config edits', 'Secrets scattered everywhere'] },
      ours: { zh: ['PR 審查變更', 'ArgoCD 自動同步', 'OpenBao 集中機密'], en: ['Changes reviewed in PRs', 'ArgoCD syncs automatically', 'Secrets centralized in OpenBao'] },
    },
    story: {
      context: { zh: '企業要自建私有雲與 AI 平台', en: 'Enterprises want their own private cloud and AI platform' },
      problem: { zh: '元件多，交付必須可重複且安全', en: 'Many components; delivery must be repeatable and secure' },
      decision: { zh: 'GitOps 加上安全優先的開源元件', en: 'GitOps plus security-first open-source components' },
      outcome: { zh: '可重複交付的私有雲平台', en: 'A private cloud platform that ships repeatably' },
    },
  },
  cathay: {
    diagram: {
      nodes: [
        { id: 'cube', label: 'CUBE App', col: 0, row: 1, section: 'gateway' },
        { id: 'internal', label: 'Internal systems', col: 0, row: 0, section: 'gateway' },
        { id: 'gw', label: 'Gateway', col: 1, row: 1, section: 'gateway' },
        { id: 'svc', label: 'Banking services', col: 2, row: 1, section: 'cloud' },
        { id: 'ocp', label: 'OpenShift', col: 3, row: 0, section: 'cloud' },
        { id: 'pub', label: 'AWS / GCP', col: 3, row: 1, section: 'cloud' },
        { id: 'otel', label: 'OTel module', col: 2, row: 2, section: 'observability' },
        { id: 'dash', label: 'Logs · Metrics · Traces', col: 3, row: 2, section: 'observability' },
      ],
      edges: [['internal', 'gw'], ['cube', 'gw'], ['gw', 'svc'], ['svc', 'ocp'], ['svc', 'pub'], ['svc', 'otel'], ['otel', 'dash']],
    },
    compare: {
      typical: { zh: ['各服務自建監控', '格式各不相同', '跨服務難以追蹤'], en: ['Each service builds its own monitoring', 'Inconsistent formats', 'Hard to trace across services'] },
      ours: { zh: ['共用監控模組', 'OpenTelemetry 標準', 'logs / metrics / traces 串連'], en: ['One shared monitoring module', 'OpenTelemetry standard', 'Correlated logs, metrics and traces'] },
    },
    story: {
      context: { zh: '網銀服務遷移上雲', en: 'Online banking moving to the cloud' },
      problem: { zh: '監控各自為政，事件難以追查', en: 'Siloed monitoring made incidents hard to trace' },
      decision: { zh: '以 OpenTelemetry 打造共用監控模組', en: 'Build a shared OpenTelemetry monitoring module' },
      outcome: { zh: '全系統即時可觀測', en: 'Real-time observability across the system' },
    },
  },
  playsee: {
    diagram: {
      nodes: [
        { id: 'app', label: 'App home feed', col: 0, row: 1, section: 'recommendation' },
        { id: 'api', label: 'Go API (gin)', col: 1, row: 1, section: 'api' },
        { id: 'rec', label: 'Recommendation', col: 2, row: 0, section: 'recommendation' },
        { id: 'store', label: 'Bigtable · Spanner', col: 2, row: 2, section: 'data' },
        { id: 'cache', label: 'Redis · Elasticsearch', col: 3, row: 2, section: 'data' },
        { id: 'pubsub', label: 'Pub/Sub + cronjob', col: 3, row: 1, section: 'data' },
      ],
      edges: [['app', 'api'], ['api', 'rec'], ['api', 'store'], ['rec', 'store'], ['pubsub', 'store'], ['store', 'cache']],
    },
    compare: {
      typical: { zh: ['依時間排序', '每個人看到相同內容'], en: ['Chronological feed', 'Everyone sees the same content'] },
      ours: { zh: ['推薦服務排序', '個人化 Instream 影片', 'Pub/Sub 非同步同步資料'], en: ['Ranked by a recommendation service', 'Personalized in-stream videos', 'Async data sync with Pub/Sub'] },
    },
    story: {
      context: { zh: '社群影音 App 的首頁', en: 'The home feed of a social video app' },
      problem: { zh: '內容多，使用者興趣各不相同', en: 'Lots of content, very different interests' },
      decision: { zh: '獨立推薦服務，搭配 Pub/Sub 同步資料', en: 'A dedicated recommendation service with Pub/Sub data sync' },
      outcome: { zh: '個人化首頁，提升互動', en: 'A personalized feed and higher engagement' },
    },
  },
  'alpha-networks': {
    diagram: {
      nodes: [
        { id: 'apps', label: 'Edge apps', col: 0, row: 1, section: 'mec' },
        { id: 'kong', label: 'Kong Gateway', col: 1, row: 1, section: 'mec' },
        { id: 'api', label: 'MEC API (Go)', col: 2, row: 1, section: 'mec' },
        { id: 'slm', label: 'License (SLM)', col: 2, row: 0, section: 'product' },
        { id: 'rbac', label: 'RBAC', col: 1, row: 0, section: 'product' },
        { id: 'pg', label: 'PostgreSQL', col: 3, row: 0, section: 'mec' },
        { id: 'nodes', label: 'K8s edge nodes', col: 3, row: 1, section: 'product' },
        { id: 'ci', label: 'Ansible + GitLab CI', col: 2, row: 2, section: 'delivery' },
      ],
      edges: [['apps', 'kong'], ['kong', 'api'], ['rbac', 'api'], ['slm', 'api'], ['api', 'pg'], ['api', 'nodes'], ['ci', 'nodes']],
    },
    compare: {
      typical: { zh: ['手動部署平台', '人工管理授權', '權限沒有分級'], en: ['Manual platform deploys', 'Licenses tracked by hand', 'No permission levels'] },
      ours: { zh: ['Ansible + GitLab CI 部署', 'SLM 管理授權', 'RBAC 權限控管'], en: ['Ansible + GitLab CI deploys', 'Licenses managed by SLM', 'RBAC permissions'] },
    },
    story: {
      context: { zh: '依 ETSI / 3GPP 打造 MEC 平台', en: 'A MEC platform built to ETSI / 3GPP' },
      problem: { zh: '平台要能賣，也要能管', en: 'The platform had to be sellable and manageable' },
      decision: { zh: 'SLM、RBAC、節點管理，加上自動化部署', en: 'SLM, RBAC, node management and automated delivery' },
      outcome: { zh: '產品上線並商品化', en: 'The product launched and went on sale' },
    },
  },
  syscom: {
    diagram: {
      nodes: [
        { id: 'img', label: 'Images / video', col: 0, row: 0, section: 'ai-data' },
        { id: 'yolo', label: 'YOLOv3 on K8s', col: 1, row: 0, section: 'ai-data' },
        { id: 'zk', label: 'Java + ZK UI', col: 2, row: 0, section: 'ai-data' },
        { id: 'chain', label: 'Blockchain advisory', col: 3, row: 0, section: 'blockchain' },
        { id: 'events', label: 'Security events', col: 0, row: 1, section: 'ai-data' },
        { id: 'hadoop', label: 'Hadoop cluster', col: 1, row: 1, section: 'ai-data' },
        { id: 'razor', label: 'Razor Pages', col: 0, row: 2, section: 'hr-cloud' },
        { id: 'core', label: 'ASP.NET Core', col: 1, row: 2, section: 'hr-cloud' },
        { id: 'k8s', label: 'Docker + K8s', col: 2, row: 2, section: 'hr-cloud' },
        { id: 'azure', label: 'Azure (planned)', col: 3, row: 2, section: 'hr-cloud' },
      ],
      edges: [['img', 'yolo'], ['yolo', 'zk'], ['events', 'hadoop'], ['razor', 'core'], ['core', 'k8s'], ['k8s', 'azure']],
    },
    compare: {
      typical: { zh: ['單體系統', '直接部署在 VM'], en: ['Monolithic system', 'Deployed straight to VMs'] },
      ours: { zh: ['拆分成微服務', 'Docker + Kubernetes', '規劃上 Azure'], en: ['Split into microservices', 'Docker + Kubernetes', 'Planned move to Azure'] },
    },
    story: {
      context: { zh: '系統整合專案類型多元', en: 'A wide range of integration projects' },
      problem: { zh: '區塊鏈、AI、大數據需求各不相同', en: 'Blockchain, AI and big data needs all differ' },
      decision: { zh: '以容器與 Kubernetes 統一部署方式', en: 'Standardize delivery on containers and Kubernetes' },
      outcome: { zh: '從諮詢到交付都能參與', en: 'Involved from consulting through delivery' },
    },
  },
};

// Which jobs used each skill; drives the skill x job matrix.
export const skillJobs: Record<string, string[]> = {
  Kubernetes: ['metamec', 'cathay', 'playsee', 'alpha-networks', 'syscom'],
  'Private Cloud': ['metamec', 'cathay'],
  'Hybrid Cloud': ['cathay'],
  OpenShift: ['cathay'],
  AWS: ['cathay'],
  GCP: ['cathay', 'playsee'],
  Azure: ['syscom'],
  ArgoCD: ['metamec'],
  ApplicationSet: ['metamec'],
  Helm: ['metamec'],
  Kustomize: ['metamec'],
  Terraform: ['metamec'],
  Ansible: ['metamec', 'alpha-networks'],
  'GitLab CI': ['metamec', 'alpha-networks'],
  'GPU Scheduling': ['metamec'],
  'NVIDIA GPU Operator': ['metamec'],
  'AI Platform on Kubernetes': ['metamec', 'syscom'],
  'High-Performance Networking': ['metamec'],
  KVM: ['metamec'],
  'VM HA Cluster': ['metamec'],
  Ceph: ['metamec'],
  Harbor: ['metamec'],
  Keycloak: ['metamec'],
  'Dex SSO': ['metamec'],
  OpenBao: ['metamec'],
  'cert-manager / PKI': ['metamec'],
  DevSecOps: ['metamec'],
  OpenTelemetry: ['metamec', 'cathay'],
  Prometheus: ['metamec'],
  Grafana: ['metamec'],
  'Logs / Metrics / Traces': ['metamec', 'cathay'],
  Go: ['metamec', 'playsee', 'alpha-networks'],
  Java: ['cathay', 'syscom'],
  'Spring Boot': ['cathay'],
  Python: ['syscom'],
  'C#': ['syscom'],
  'ASP.NET Core': ['syscom'],
  'Kong Gateway': ['alpha-networks'],
  DDD: ['playsee'],
  PostgreSQL: ['alpha-networks'],
  Redis: ['playsee'],
  Elasticsearch: ['playsee'],
  Bigtable: ['playsee'],
  Spanner: ['playsee'],
  MongoDB: [],
  'Pub/Sub': ['playsee'],
};

export const labels = {
  arch: { zh: '架構示意（點選節點跳到對應段落）', en: 'Architecture (select a node to jump to its section)' },
  context: { zh: '情境', en: 'Context' },
  problem: { zh: '問題', en: 'Problem' },
  decision: { zh: '決策', en: 'Decision' },
  outcome: { zh: '成果', en: 'Outcome' },
  typical: { zh: '常見做法', en: 'Typical' },
  ours: { zh: '我們的做法', en: 'Our approach' },
};
