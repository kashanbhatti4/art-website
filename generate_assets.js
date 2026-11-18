const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'images');
if (!fs.existsSync(imgDir)) {
    fs.mkdirSync(imgDir, { recursive: true });
}

// 1. Wall Background Texture (Subtle Venetian plaster / museum slate texture SVG)
const wallSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="2560" height="1440" viewBox="0 0 2560 1440">
  <defs>
    <radialGradient id="vignette" cx="50%" cy="40%" r="75%">
      <stop offset="0%" stop-color="#18171c"/>
      <stop offset="45%" stop-color="#111014"/>
      <stop offset="80%" stop-color="#0a090c"/>
      <stop offset="100%" stop-color="#060507"/>
    </radialGradient>
    <radialGradient id="gallery-light-1" cx="30%" cy="30%" r="45%">
      <stop offset="0%" stop-color="#2a2730" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#111014" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="gallery-light-2" cx="70%" cy="30%" r="45%">
      <stop offset="0%" stop-color="#2a2730" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#111014" stop-opacity="0"/>
    </radialGradient>
    <filter id="plaster-grain">
      <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" result="noise"/>
      <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.045 0"/>
      <feBlend mode="overlay" in2="SourceGraphic"/>
    </filter>
  </defs>
  <rect width="100%" height="100%" fill="url(#vignette)"/>
  <rect width="100%" height="100%" fill="url(#gallery-light-1)"/>
  <rect width="100%" height="100%" fill="url(#gallery-light-2)"/>
  <rect width="100%" height="100%" fill="#ffffff" filter="url(#plaster-grain)" opacity="0.9"/>
  <!-- Floor base line suggestion -->
  <line x1="0" y1="1380" x2="2560" y2="1380" stroke="#000000" stroke-width="2" opacity="0.6"/>
  <rect y="1380" width="2560" height="60" fill="#040305"/>
</svg>`;
fs.writeFileSync(path.join(imgDir, 'gallery-wall.svg'), wallSvg.trim());

// 5 Artworks with bespoke fine-art aesthetics
const artworks = [
  {
    file: 'art-1.svg',
    title: 'Solitude at Dún Chaoin',
    svg: `
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1600" viewBox="0 0 1200 1600">
      <defs>
        <linearGradient id="sky-1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#1e2229"/>
          <stop offset="50%" stop-color="#3c434f"/>
          <stop offset="75%" stop-color="#697380"/>
          <stop offset="100%" stop-color="#9aa5b0"/>
        </linearGradient>
        <linearGradient id="sea-1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#14181c"/>
          <stop offset="50%" stop-color="#1c2329"/>
          <stop offset="100%" stop-color="#0e1215"/>
        </linearGradient>
        <filter id="grain-1">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" result="noise"/>
          <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.06 0"/>
        </filter>
      </defs>
      <rect width="1200" height="1600" fill="url(#sky-1)"/>
      <!-- Soft distant horizon mist -->
      <ellipse cx="600" cy="1000" rx="900" ry="240" fill="#cfd6dc" opacity="0.45" filter="blur(60px)"/>
      <!-- Sea -->
      <rect y="1050" width="1200" height="550" fill="url(#sea-1)"/>
      <!-- Atlantic Cliffs -->
      <path d="M -50 1150 Q 250 820 480 940 T 720 1020 Q 980 860 1250 1060 L 1250 1600 L -50 1600 Z" fill="#121517"/>
      <path d="M 120 1200 Q 380 960 520 1060 T 900 1120 L 1200 1250 L 1200 1600 L 120 1600 Z" fill="#090b0c" opacity="0.8"/>
      <!-- Sea surf foam lines -->
      <path d="M 0 1340 Q 300 1320 600 1350 T 1200 1330" stroke="#8fa0ad" stroke-width="3" fill="none" opacity="0.4" filter="blur(2px)"/>
      <path d="M 0 1420 Q 400 1390 800 1430 T 1200 1400" stroke="#b2c0cb" stroke-width="4" fill="none" opacity="0.3" filter="blur(3px)"/>
      <rect width="1200" height="1600" fill="#fff" filter="url(#grain-1)"/>
    </svg>`
  },
  {
    file: 'art-2.svg',
    title: 'Linear Shadow No. 7',
    svg: `
    <svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1200" viewBox="0 0 1600 1200">
      <defs>
        <linearGradient id="wall-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#e2dad0"/>
          <stop offset="60%" stop-color="#cac0b3"/>
          <stop offset="100%" stop-color="#a89e90"/>
        </linearGradient>
        <linearGradient id="shadow-grad" x1="0%" y1="0%" x2="100%" y2="80%">
          <stop offset="0%" stop-color="#141215"/>
          <stop offset="100%" stop-color="#241e24"/>
        </linearGradient>
      </defs>
      <rect width="1600" height="1200" fill="url(#wall-grad)"/>
      <!-- Brutalist Architectural Diagonal Shadow -->
      <polygon points="0,0 720,0 1600,850 1600,1200 480,1200 0,600" fill="url(#shadow-grad)"/>
      <!-- Secondary architectural geometry line -->
      <line x1="720" y1="0" x2="1600" y2="850" stroke="#f6f0e6" stroke-width="4" opacity="0.7"/>
      <rect x="880" y="240" width="340" height="420" fill="#d9cfc1" opacity="0.85"/>
      <polygon points="880,240 1220,240 1220,660" fill="#141215" opacity="0.65"/>
    </svg>`
  },
  {
    file: 'art-3.svg',
    title: 'Caelum Silence',
    svg: `
    <svg xmlns="http://www.w3.org/2000/svg" width="1400" height="1400" viewBox="0 0 1400 1400">
      <defs>
        <linearGradient id="twilight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#0d1117"/>
          <stop offset="35%" stop-color="#18202c"/>
          <stop offset="65%" stop-color="#344358"/>
          <stop offset="78%" stop-color="#806263"/>
          <stop offset="84%" stop-color="#c98d7a"/>
          <stop offset="88%" stop-color="#e8b598"/>
          <stop offset="100%" stop-color="#161720"/>
        </linearGradient>
      </defs>
      <rect width="1400" height="1400" fill="url(#twilight)"/>
      <!-- Minimalist Horizon Line -->
      <line x1="0" y1="1200" x2="1400" y2="1200" stroke="#fce6d4" stroke-width="1.5" opacity="0.85"/>
      <!-- Distant water reflection -->
      <rect y="1201" width="1400" height="199" fill="#0c0e14"/>
      <ellipse cx="700" cy="1205" rx="300" ry="12" fill="#e8b598" opacity="0.4" filter="blur(8px)"/>
    </svg>`
  },
  {
    file: 'art-4.svg',
    title: 'Winter Birch & Mist',
    svg: `
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1600" viewBox="0 0 1200 1600">
      <defs>
        <linearGradient id="mist" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#e9eaec"/>
          <stop offset="60%" stop-color="#d4d7db"/>
          <stop offset="100%" stop-color="#a6abb2"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="1600" fill="url(#mist)"/>
      <!-- Soft silhouetted birch trunks (Background) -->
      <rect x="180" y="0" width="28" height="1600" fill="#80858e" opacity="0.25"/>
      <rect x="520" y="0" width="34" height="1600" fill="#80858e" opacity="0.3"/>
      <rect x="880" y="0" width="24" height="1600" fill="#80858e" opacity="0.2"/>
      <!-- Foreground Birch Trunks (Crisp monochrome) -->
      <path d="M 320 0 L 335 1600 L 368 1600 L 350 0 Z" fill="#1b1c1e"/>
      <path d="M 740 0 L 725 1600 L 760 1600 L 778 0 Z" fill="#222428"/>
      <path d="M 1020 0 L 1038 1600 L 1065 1600 L 1045 0 Z" fill="#151618"/>
      <!-- Horizontal birch bark markings -->
      <rect x="325" y="320" width="22" height="6" fill="#f0f1f3"/>
      <rect x="330" y="740" width="28" height="8" fill="#f0f1f3"/>
      <rect x="735" y="480" width="30" height="7" fill="#f0f1f3"/>
      <rect x="730" y="980" width="25" height="6" fill="#f0f1f3"/>
      <!-- Ground Snow drift -->
      <path d="M 0 1520 Q 400 1480 800 1510 T 1200 1490 L 1200 1600 L 0 1600 Z" fill="#f4f5f7"/>
    </svg>`
  },
  {
    file: 'art-5.svg',
    title: 'Dune Silence',
    svg: `
    <svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1100" viewBox="0 0 1600 1100">
      <defs>
        <linearGradient id="dune-sky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#3d3733"/>
          <stop offset="40%" stop-color="#695c52"/>
          <stop offset="70%" stop-color="#a48f7c"/>
          <stop offset="100%" stop-color="#dfcaa9"/>
        </linearGradient>
        <linearGradient id="sand-light" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#d8ba8e"/>
          <stop offset="100%" stop-color="#b89360"/>
        </linearGradient>
      </defs>
      <rect width="1600" height="1100" fill="url(#dune-sky)"/>
      <!-- Sweeping sand curves and razor shadows -->
      <path d="M -50 780 Q 450 640 920 790 T 1650 680 L 1650 1100 L -50 1100 Z" fill="url(#sand-light)"/>
      <path d="M 450 640 Q 680 820 920 790 Q 750 940 450 1100 L 0 1100 L 0 850 Z" fill="#2d231a"/>
      <path d="M 920 790 Q 1280 920 1650 680 L 1650 1100 L 920 1100 Z" fill="#443527" opacity="0.9"/>
    </svg>`
  }
];

artworks.forEach(art => {
  fs.writeFileSync(path.join(imgDir, art.file), art.svg.trim());
});

console.log('Successfully generated gallery background and 5 artworks!');
