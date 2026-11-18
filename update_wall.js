const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'images');

// Ultra-dark moody gallery wall (Basalte aesthetic: #09080b - #050406)
const darkWallSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="2560" height="1440" viewBox="0 0 2560 1440">
  <defs>
    <radialGradient id="gallery-deep" cx="50%" cy="38%" r="70%">
      <stop offset="0%" stop-color="#141217"/>
      <stop offset="45%" stop-color="#0c0b0e"/>
      <stop offset="75%" stop-color="#070608"/>
      <stop offset="100%" stop-color="#030204"/>
    </radialGradient>
    <radialGradient id="spot-1" cx="30%" cy="32%" r="40%">
      <stop offset="0%" stop-color="#241e28" stop-opacity="0.32"/>
      <stop offset="100%" stop-color="#0c0b0e" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="spot-2" cx="72%" cy="34%" r="42%">
      <stop offset="0%" stop-color="#26202a" stop-opacity="0.28"/>
      <stop offset="100%" stop-color="#0c0b0e" stop-opacity="0"/>
    </radialGradient>
    <filter id="plaster-grain">
      <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" result="noise"/>
      <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.038 0"/>
      <feBlend mode="overlay" in2="SourceGraphic"/>
    </filter>
  </defs>
  <rect width="100%" height="100%" fill="url(#gallery-deep)"/>
  <rect width="100%" height="100%" fill="url(#spot-1)"/>
  <rect width="100%" height="100%" fill="url(#spot-2)"/>
  <rect width="100%" height="100%" fill="#ffffff" filter="url(#plaster-grain)" opacity="0.85"/>
  <!-- Floor Shadow line at base -->
  <rect y="1410" width="2560" height="30" fill="#010102"/>
</svg>`;

fs.writeFileSync(path.join(imgDir, 'gallery-wall.svg'), darkWallSvg.trim());
console.log('Updated gallery wall to ultra-dark aesthetic!');
