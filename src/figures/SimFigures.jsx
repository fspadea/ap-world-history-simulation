// SimFigures.jsx — Visual source renderers for AP World History
// Images served from /public/images/ via Vite's public directory

const imgStyle = {
  width: "100%",
  maxWidth: 680,
  borderRadius: 8,
  border: "1px solid rgba(255,255,255,0.1)",
  display: "block",
  margin: "0 auto",
};

const FIGURES = {
  // ── Official Exam Visuals ──────────────────────────────────────────────

  // 2025 Set 1
  "2025s1-dbq-map-africa": {
    src: "/images/2025s1-dbq-map-africa.png",
    alt: "Reference map of Africa showing Egypt, Nigeria, Gold Coast, South Africa, and key cities. Inset: Gold Coast with Ashanti region, Kumasi, and Accra.",
  },
  "2025s1-dbq-doc2-mine-workers": {
    src: "/images/2025s1-dbq-doc2-mine-workers.png",
    alt: "Photograph of two Tswana men returning home from the Kimberley diamond mines, carrying walking staffs, from South Africa: Its History, Heroes and Wars (1899).",
  },

  // 2025 Set 2
  "2025s2-dbq-doc2-ottoman-silk-factory": {
    src: "/images/2025s2-dbq-doc2-ottoman-silk-factory.png",
    alt: "Ottoman postcard showing women and girls supervised by a male manager at a silk factory in Bursa, 1902.",
  },

  // 2024 Set 1
  "2024s1-saq2-nazi-poster": {
    src: "/images/2024s1-saq2-nazi-poster.png",
    alt: "German National Socialist Party election poster, 1932, depicting a mother with children and text urging voters to support Adolf Hitler.",
  },
  "2024s1-dbq-doc1-soviet-poster": {
    src: "/images/2024s1-dbq-doc1-soviet-poster.png",
    alt: "Soviet propaganda poster by S. M. Prokhorov, Students from a Workers' School, 1928, showing workers and students marching together.",
  },

  // 2024 Set 2
  "2024s2-saq2-india-seminary": {
    src: "/images/2024s2-saq2-india-seminary.png",
    alt: "Group photograph of graduation ceremony at a Christian Theological Seminary in Northern India, 1897, showing Indian graduates and two British missionaries.",
  },
  "2024s2-dbq-doc7-japanese-class": {
    src: "/images/2024s2-dbq-doc7-japanese-class.png",
    alt: "Photograph of a Japanese language class in Singapore, c. 1943, with a Japanese instructor teaching katakana to Singaporean students.",
  },

  // 2023 Set 1
  "2023s1-dbq-doc6-china-cartoon": {
    src: "/images/2023s1-dbq-doc6-china-cartoon.png",
    alt: "Chinese political cartoon from 1911 showing four panels: a tiger (China) dominating Western men, then being subdued, then defeated, then rising again.",
  },

  // 2023 Set 2
  "2023s2-dbq-doc4-egyptian-feminists": {
    src: "/images/2023s2-dbq-doc4-egyptian-feminists.png",
    alt: "Cover illustration from Le Petit Journal, 1922, depicting Egyptian women marching in a feminist demonstration against British rule in Cairo.",
  },

  // ── Simulation Visuals ─────────────────────────────────────────────────

  "sim1-set2-ottoman-empire-map": {
    src: "/images/sim1-set2-ottoman-empire-map.png",
    alt: "Map of the Ottoman Empire at its greatest territorial extent, c. 1560, showing territories from southeastern Europe to North Africa and the Arabian Peninsula.",
  },
  "sim1-saq2-mughal-miniature": {
    src: "/images/sim1-saq2-mughal-miniature.png",
    alt: "Mughal miniature painting depicting Emperor Akbar holding court (durbar), c. 1590, with courtiers and nobles in attendance.",
  },
  "sim1-dbq-doc3-portuguese-carrack": {
    src: "/images/sim1-dbq-doc3-portuguese-carrack.png",
    alt: "16th-century illustration of a Portuguese carrack anchored in an Asian port, with local boats alongside and goods being loaded on the dock.",
  },
  "sim1-dbq-doc5-atlantic-slave-trade": {
    src: "/images/sim1-dbq-doc5-atlantic-slave-trade.png",
    alt: "Diagram of a slave ship cross-section showing enslaved people packed tightly into the hold, based on the 1788 Brookes illustration.",
  },
  "sim1-dbq-doc6-dutch-batavia": {
    src: "/images/sim1-dbq-doc6-dutch-batavia.png",
    alt: "17th-century painting of the Dutch colonial port of Batavia (Jakarta), showing VOC merchant ships, colonial buildings, and local boats.",
  },

  // ── Simulation 2 Visuals ───────────────────────────────────────────────

  "sim2-set1-song-dynasty-trade-map": {
    src: "/images/sim2-set1-song-dynasty-trade-map.png",
    alt: "Map of East and Southeast Asian maritime trade routes circa 1200 CE during the Song Dynasty, showing ports at Quanzhou and Guangzhou with routes to Srivijaya, Java, Champa, Korea, and Japan.",
  },
  "sim2-saq2-gandhi-salt-march": {
    src: "/images/sim2-saq2-gandhi-salt-march.png",
    alt: "Photograph of Mahatma Gandhi leading the Salt March in India, 1930, walking with a large procession of followers along a rural road.",
  },
  "sim2-dbq-doc4-slave-ship-diagram": {
    src: "/images/sim2-dbq-doc4-slave-ship-diagram.png",
    alt: "Cross-section diagram of the British slave ship Brookes, showing enslaved Africans packed tightly into the lower deck, 1788.",
  },

  // ── Simulation 3 Visuals ───────────────────────────────────────────────

  "sim3-set1-indian-ocean-trade-map": {
    src: "/images/sim3-set1-indian-ocean-trade-map.png",
    alt: "Map of Indian Ocean maritime trade routes circa 1300 CE, showing Swahili Coast ports, Arabian Peninsula, India, Southeast Asia, and China with monsoon wind patterns.",
  },
  "sim3-saq1-marco-polo-hangzhou": {
    src: "/images/sim3-saq1-marco-polo-hangzhou.png",
    alt: "Medieval manuscript-style illustration of the city of Hangzhou (Kinsai) during the Yuan Dynasty, c. 1290, with canals, bridges, and bustling markets.",
  },
  "sim3-dbq-doc3-indian-textile-workers": {
    src: "/images/sim3-dbq-doc3-indian-textile-workers.png",
    alt: "Victorian-era engraving of Indian cotton textile workers operating looms under British colonial oversight, c. 1860.",
  },
};

export function renderVisual(figureId) {
  const fig = FIGURES[figureId];
  if (!fig) return null;
  return (
    <img
      src={fig.src}
      alt={fig.alt}
      style={imgStyle}
      loading="lazy"
    />
  );
}
