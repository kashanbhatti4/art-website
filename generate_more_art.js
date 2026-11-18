const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'images');

const newArtworks = [
  {
    file: 'art-6.svg',
    title: 'Abyssal Ridge',
    svg: `
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1600" viewBox="0 0 1200 1600">
      <defs>
        <linearGradient id="sky-6" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#11151a"/>
          <stop offset="50%" stop-color="#2a323d"/>
          <stop offset="80%" stop-color="#4d5966"/>
          <stop offset="100%" stop-color="#788896"/>
        </linearGradient>
        <linearGradient id="sea-6" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#0a0d10"/>
          <stop offset="100%" stop-color="#040608"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="1600" fill="url(#sky-6)"/>
      <ellipse cx="600" cy="980" rx="700" ry="200" fill="#a4b4c2" opacity="0.4" filter="blur(50px)"/>
      <rect y="1020" width="1200" height="580" fill="url(#sea-6)"/>
      <!-- Dark Basalt Sea Stack Pillars -->
      <polygon points="280,1400 340,780 430,760 480,1400" fill="#080a0c"/>
      <polygon points="410,1400 450,860 520,850 560,1400" fill="#12161b"/>
      <polygon points="720,1400 780,680 880,710 940,1400" fill="#060709"/>
      <polygon points="860,1400 900,750 970,760 1020,1400" fill="#15191f"/>
      <!-- Breaking white surf line -->
      <path d="M 0 1320 Q 300 1290 600 1330 T 1200 1300" stroke="#7e93a4" stroke-width="3" fill="none" opacity="0.5"/>
    </svg>`
  },
  {
    file: 'art-7.svg',
    title: 'Obsidian Echo',
    svg: `
    <svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1100" viewBox="0 0 1600 1100">
      <defs>
        <linearGradient id="sky-7" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#09080a"/>
          <stop offset="50%" stop-color="#18151c"/>
          <stop offset="100%" stop-color="#322a38"/>
        </linearGradient>
        <linearGradient id="amber-glow" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stop-color="#d99b52"/>
          <stop offset="100%" stop-color="#6e451b"/>
        </linearGradient>
      </defs>
      <rect width="1600" height="1100" fill="url(#sky-7)"/>
      <!-- Minimalist Dark Architecture Monolith -->
      <polygon points="320,1100 320,180 840,420 840,1100" fill="#0d0c0f"/>
      <polygon points="840,1100 840,420 1320,240 1320,1100" fill="#16141a"/>
      <!-- Striking Amber Reflection Glass Slot -->
      <polygon points="560,980 560,320 620,350 620,980" fill="url(#amber-glow)" opacity="0.85"/>
      <line x1="320" y1="180" x2="840" y2="420" stroke="#f0e2d0" stroke-width="2" opacity="0.5"/>
    </svg>`
  },
  {
    file: 'art-8.svg',
    title: 'Silent Tides',
    svg: `
    <svg xmlns="http://www.w3.org/2000/svg" width="1400" height="1400" viewBox="0 0 1400 1400">
      <defs>
        <linearGradient id="tide-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#15171c"/>
          <stop offset="45%" stop-color="#2d333d"/>
          <stop offset="70%" stop-color="#55606e"/>
          <stop offset="85%" stop-color="#8c9aa8"/>
          <stop offset="100%" stop-color="#b6c2cc"/>
        </linearGradient>
      </defs>
      <rect width="1400" height="1400" fill="url(#tide-grad)"/>
      <!-- Soft glassy tide water -->
      <rect y="1050" width="1400" height="350" fill="#181c22"/>
      <ellipse cx="700" cy="1050" rx="550" ry="30" fill="#b6c2cc" opacity="0.5" filter="blur(8px)"/>
      <!-- Lone weathered wooden post in misty water -->
      <polygon points="685,1280 690,820 710,820 715,1280" fill="#090a0d"/>
      <ellipse cx="700" cy="1285" rx="35" ry="8" stroke="#758594" stroke-width="2" fill="none" opacity="0.6"/>
    </svg>`
  },
  {
    file: 'art-9.svg',
    title: 'Ethereal Canopy',
    svg: `
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1600" viewBox="0 0 1200 1600">
      <defs>
        <linearGradient id="forest-mist" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#0a0a0c"/>
          <stop offset="60%" stop-color="#1c1d22"/>
          <stop offset="85%" stop-color="#3d4048"/>
          <stop offset="100%" stop-color="#696c75"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="1600" fill="url(#forest-mist)"/>
      <!-- Soft fog layer -->
      <ellipse cx="600" cy="900" rx="800" ry="350" fill="#8d929c" opacity="0.3" filter="blur(60px)"/>
      <!-- Tall redwood silhouette trunks -->
      <rect x="220" y="0" width="55" height="1600" fill="#0d0e11"/>
      <rect x="440" y="0" width="40" height="1600" fill="#14151a"/>
      <rect x="720" y="0" width="70" height="1600" fill="#090a0c"/>
      <rect x="940" y="0" width="45" height="1600" fill="#16181e"/>
      <!-- Branch silhouettes -->
      <path d="M 275 320 Q 380 280 440 310 M 720 450 Q 620 400 520 430 M 790 620 Q 900 580 980 640" stroke="#090a0c" stroke-width="8" fill="none"/>
    </svg>`
  },
  {
    file: 'art-10.svg',
    title: 'Terra Incognita',
    svg: `
    <svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1100" viewBox="0 0 1600 1100">
      <defs>
        <linearGradient id="terra-sky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#1e1814"/>
          <stop offset="50%" stop-color="#3b2e25"/>
          <stop offset="80%" stop-color="#664f3d"/>
          <stop offset="100%" stop-color="#997557"/>
        </linearGradient>
        <linearGradient id="terra-light" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#c49b6e"/>
          <stop offset="100%" stop-color="#805d39"/>
        </linearGradient>
      </defs>
      <rect width="1600" height="1100" fill="url(#terra-sky)"/>
      <!-- Sweeping sharp ridge lines -->
      <path d="M 0 720 Q 400 560 850 740 T 1600 620 L 1600 1100 L 0 1100 Z" fill="url(#terra-light)"/>
      <path d="M 400 560 Q 650 780 850 740 Q 620 920 300 1100 L 0 1100 L 0 720 Z" fill="#140f0c"/>
      <path d="M 850 740 Q 1200 890 1600 620 L 1600 1100 L 850 1100 Z" fill="#241a13"/>
    </svg>`
  }
];

newArtworks.forEach(art => {
  fs.writeFileSync(path.join(imgDir, art.file), art.svg.trim());
});

console.log('Successfully generated 5 additional artworks (art-6.svg through art-10.svg)!');
