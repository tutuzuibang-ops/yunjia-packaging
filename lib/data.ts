import type { Locale } from "./i18n";

export type LocalizedText = Record<Locale, string>;

export type Product = {
  slug: string;
  title: LocalizedText;
  category: LocalizedText;
  summary: LocalizedText;
  description: LocalizedText;
  specs: Record<Locale, string[]>;
  image: string;
  accent: string;
};

export type NewsItem = {
  slug: string;
  date: string;
  title: LocalizedText;
  excerpt: LocalizedText;
  body: LocalizedText;
};

export const products: Product[] = [
  {
    slug: "custom-paper-boxes",
    title: { zh: "定制彩盒包装", en: "Custom Paper Boxes" },
    category: { zh: "纸质包装", en: "Paper Packaging" },
    summary: { zh: "适用于电子、美妆、礼品和零售渠道的品牌彩盒。", en: "Branded retail boxes for electronics, beauty, gifts, and consumer goods." },
    description: {
      zh: "支持结构设计、专色印刷、覆膜、烫金、UV、压纹等工艺，可根据品牌定位和运输需求提供从打样到量产的一站式服务。",
      en: "From structural design and spot-color printing to lamination, foil stamping, UV, and embossing, we support sampling through mass production."
    },
    specs: {
      zh: ["材质：白卡纸、灰板纸、瓦楞纸", "工艺：烫金、UV、覆膜、压纹", "起订量：按规格评估", "应用：零售、电商、礼品"],
      en: ["Materials: SBS, greyboard, corrugated paper", "Finishes: foil, UV, lamination, embossing", "MOQ: evaluated by specification", "Use: retail, e-commerce, gifts"]
    },
    image: "/UV-box.jpg",
    accent: "bg-marine"
  },
  {
    slug: "luxury-gift-boxes",
    title: { zh: "精品礼盒", en: "Luxury Gift Boxes" },
    category: { zh: "礼品包装", en: "Gift Packaging" },
    summary: { zh: "磁吸、天地盖、抽屉式等高端礼盒结构。", en: "Premium rigid boxes with magnetic, lid-base, and drawer structures." },
    description: {
      zh: "面向高端礼品、香薰、美妆与商务套装，提供内托、丝带、纸卡、套袋等完整配套，让开箱体验更精致。",
      en: "Designed for premium gifts, fragrance, beauty, and business sets with inserts, ribbons, cards, and sleeves for a polished unboxing experience."
    },
    specs: {
      zh: ["结构：磁吸、天地盖、抽屉盒", "内托：纸托、EVA、吸塑、海绵", "表面：特种纸、触感膜、局部 UV", "服务：打样、包装测试、出货"],
      en: ["Structures: magnetic, lid-base, drawer", "Inserts: paper, EVA, blister, foam", "Surface: specialty paper, soft-touch film, spot UV", "Service: sampling, testing, shipping"]
    },
    image: "/luxury-gift-boxes.jpg",
    accent: "bg-citrus"
  },
  {
    slug: "paper-bags",
    title: { zh: "手提纸袋", en: "Paper Shopping Bags" },
    category: { zh: "品牌手袋", en: "Branded Bags" },
    summary: { zh: "环保纸袋、购物袋、展会袋与礼品袋定制。", en: "Eco paper bags for shopping, events, gifting, and retail handover." },
    description: {
      zh: "可选牛皮纸、白卡纸、艺术纸等材料，搭配棉绳、丝带、纸绳等手挽方案，兼顾质感与承重。",
      en: "Choose kraft, white card, or art paper with cotton, ribbon, or paper handles to balance finish and carrying strength."
    },
    specs: {
      zh: ["纸张：牛皮纸、白卡纸、艺术纸", "手挽：棉绳、丝带、纸绳", "印刷：专色、四色、环保油墨", "场景：门店、展会、活动"],
      en: ["Paper: kraft, white card, art paper", "Handles: cotton, ribbon, twisted paper", "Printing: spot, CMYK, eco inks", "Use: stores, events, campaigns"]
    },
    image: "/paper-bags.jpg",
    accent: "bg-mint"
  },
  {
    slug: "blister-trays",
    title: { zh: "吸塑内托", en: "Blister Trays" },
    category: { zh: "塑料包装", en: "Plastic Packaging" },
    summary: { zh: "PET、PVC、PP 等吸塑托盘与透明罩。", en: "PET, PVC, and PP trays, clamshells, and transparent covers." },
    description: {
      zh: "适用于电子配件、美妆工具、食品与工业零件定位保护，可按产品轮廓开模，提升运输稳定性和陈列效果。",
      en: "Custom-formed around product profiles for electronics accessories, beauty tools, food, and industrial parts with better protection and display."
    },
    specs: {
      zh: ["材质：PET、PVC、PP、PS", "能力：开模、吸塑、裁切、组装", "特性：透明、防静电、食品级可选", "应用：内托、罩壳、展示包装"],
      en: ["Materials: PET, PVC, PP, PS", "Capabilities: tooling, forming, cutting, assembly", "Options: clear, anti-static, food grade", "Use: trays, covers, display packs"]
    },
    image: "/blister-trays.jpg",
    accent: "bg-ink"
  }
];

export const news: NewsItem[] = [
  {
    slug: "sustainable-packaging-trends",
    date: "2026-05-18",
    title: { zh: "环保包装材料的三项趋势", en: "Three Trends in Sustainable Packaging Materials" },
    excerpt: { zh: "可回收纸材、减塑结构和环保油墨正在成为出口包装项目的常规要求。", en: "Recyclable paper, plastic reduction, and eco inks are becoming standard for export-ready packaging." },
    body: {
      zh: "品牌客户越来越关注包装全生命周期。韵嘉包装在方案阶段会同步评估材料、结构、工艺与运输保护，帮助客户兼顾视觉效果、成本与可持续要求。",
      en: "Brand owners are looking at the full packaging lifecycle. Yovia Pack evaluates materials, structure, finishing, and transport protection from the proposal stage to balance presentation, cost, and sustainability."
    }
  },
  {
    slug: "sampling-to-production",
    date: "2026-04-02",
    title: { zh: "从打样到量产如何控制包装品质", en: "How to Control Quality from Sampling to Production" },
    excerpt: { zh: "明确材质、色彩、尺寸和测试标准，是稳定交付的关键。", en: "Clear material, color, size, and testing standards are key to consistent delivery." },
    body: {
      zh: "我们建议客户在打样阶段确认结构、承重、印刷颜色和表面工艺，并在量产前建立封样标准，以减少批量偏差。",
      en: "We recommend validating structure, load-bearing needs, print color, and surface finish during sampling, then locking a golden sample before mass production."
    }
  },
  {
    slug: "export-packaging-checklist",
    date: "2026-02-21",
    title: { zh: "出口包装项目沟通清单", en: "Checklist for Export Packaging Projects" },
    excerpt: { zh: "准备产品尺寸、目标市场、运输方式和品牌规范，可显著提升报价效率。", en: "Product size, target market, shipping method, and brand guidelines help accelerate quotation." },
    body: {
      zh: "询盘时提供产品图纸、数量区间、目标交期和认证要求，有助于工厂更快判断材料、工艺与包装测试方案。",
      en: "Providing drawings, quantity ranges, lead time, and compliance needs helps the factory recommend materials, finishes, and packaging tests more quickly."
    }
  }
];

export const factoryHighlights = [
  { value: "Fast Sampling", zh: "快速打样能力", en: "Prototype development in as fast as 3–7 days." },
  { value: "Flexible Production", zh: "灵活生产能力", en: "Supporting both small and large production runs." },
  { value: "Responsive Support", zh: "快速响应服务", en: "Direct communication with dedicated project follow-up." },
  { value: "Quality Control", zh: "严格质量管控", en: "Inspection before, during, and after production." }
];

export const processes = {
  zh: ["需求沟通", "结构设计", "材料建议", "打样确认", "批量生产", "质检出货"],
  en: ["Share Your Requirements", "Packaging Design", "Material Selection", "Prototype & Approval", "production", "Quality Check & Delivery"]
};
