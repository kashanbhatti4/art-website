/**
 * EDEL REGAN — FINE ART PHOTOGRAPHY
 * 10-Piece Staggered Salon Wall & Butter-Smooth Physics Scroll Engine
 */

(() => {
  'use strict';

  // ---------------------------------------------------------------------------
  // 1. 6 Curated Original Artworks by Edel Regan (Authentic CSV Data)
  // ---------------------------------------------------------------------------
  const ARTWORKS = [
    {
      id: 0,
      title: 'Hawthorn Lane, Summer Light',
      edition: 'N° 01 · One-of-a-kind Original',
      price: 895,
      story: 'A sunlit country lane runs past hawthorn in bloom and a field gate, with purple-blue mountains under a wide summer sky.',
      specs: [
        { label: 'Medium', value: 'Oil / acrylic on canvas' },
        { label: 'Framing', value: 'Framed (natural oak)' }
      ],
      image: 'images/hawthorn-lane-summer-light.jpg'
    },
    {
      id: 1,
      title: 'Through the Pines',
      edition: 'N° 02 · One-of-a-kind Original',
      price: 775,
      story: 'An expressive, near-abstract woodland of dark pine branches, dappled light and flickers of lime and pale blue.',
      specs: [
        { label: 'Medium', value: 'Oil / acrylic on canvas' },
        { label: 'Framing', value: 'Framed (natural oak)' }
      ],
      image: 'images/through-the-pines.jpg'
    },
    {
      id: 2,
      title: 'Cottages Above the Tide',
      edition: 'N° 03 · One-of-a-kind Original',
      price: 945,
      story: 'White cottages with blue roofs sit on a green headland above dark rocks and a silver Atlantic tide.',
      specs: [
        { label: 'Medium', value: 'Oil / acrylic on canvas' },
        { label: 'Framing', value: 'Framed (white)' }
      ],
      image: 'images/cottages-above-the-tide.jpg'
    },
    {
      id: 3,
      title: 'Sunlit Cliffs, West Cork',
      edition: 'N° 04 · One-of-a-kind Original',
      price: 875,
      story: 'Sunlit sandstone cliffs topped with green fall into a deep blue Atlantic under a soft summer sky.',
      specs: [
        { label: 'Medium', value: 'Oil / acrylic on canvas' },
        { label: 'Framing', value: 'Framed (natural oak)' }
      ],
      image: 'images/sunlit-cliffs-west-cork.jpg'
    },
    {
      id: 4,
      title: 'Koi in Motion',
      edition: 'N° 05 · One-of-a-kind Original',
      price: 675,
      story: 'A koi in orange, black and white glides across warm paper, its tail dissolving into flowing blue.',
      specs: [
        { label: 'Medium', value: 'Watercolour on paper' },
        { label: 'Framing', value: 'Framed (white, with mount)' }
      ],
      image: 'images/koi-in-motion.jpg'
    },
    {
      id: 5,
      title: "Willow at the Water's Edge",
      edition: 'N° 06 · One-of-a-kind Original',
      price: 695,
      story: 'A weeping willow leans over still water, glowing in yellow and green washes with deep indigo reflections.',
      specs: [
        { label: 'Medium', value: 'Watercolour on paper' },
        { label: 'Framing', value: 'Framed (natural oak)' }
      ],
      image: 'images/willow-at-the-waters-edge.jpg'
    }
  ];

  // 6 Staggered Salon Wall Coordinates (Preceded by Intro Panel with Tight Connected Spacing)
  const LAYOUTS = {
    desk: [
      { nailX: 18.0, nailY: 17.2, wireH: 46, frameW: 460, frameH: 335 }, // 0: Landscape
      { nailX: 33.0, nailY: 13.5, wireH: 52, frameW: 330, frameH: 435 }, // 1: Portrait
      { nailX: 49.0, nailY: 17.5, wireH: 46, frameW: 460, frameH: 335 }, // 2: Landscape
      { nailX: 65.0, nailY: 13.8, wireH: 50, frameW: 335, frameH: 430 }, // 3: Portrait
      { nailX: 81.0, nailY: 17.2, wireH: 46, frameW: 460, frameH: 335 }, // 4: Landscape
      { nailX: 96.0, nailY: 13.5, wireH: 52, frameW: 325, frameH: 435 }  // 5: Portrait
    ],
    mob: [
      { nailX: 16.0, nailY: 17.0, wireH: 32, frameW: 295, frameH: 215 }, // 0: Landscape
      { nailX: 32.0, nailY: 13.5, wireH: 36, frameW: 245, frameH: 320 }, // 1: Portrait
      { nailX: 48.0, nailY: 17.0, wireH: 32, frameW: 295, frameH: 215 }, // 2: Landscape
      { nailX: 64.0, nailY: 13.8, wireH: 34, frameW: 245, frameH: 315 }, // 3: Portrait
      { nailX: 80.0, nailY: 16.8, wireH: 32, frameW: 295, frameH: 215 }, // 4: Landscape
      { nailX: 96.0, nailY: 13.5, wireH: 34, frameW: 240, frameH: 320 }  // 5: Portrait
    ]
  };

  // ---------------------------------------------------------------------------
  // 2. DOM Elements & State
  // ---------------------------------------------------------------------------
  const world = document.getElementById('world');
  const stage = document.getElementById('gallery-stage');
  const hangersContainer = document.getElementById('hangers-container');
  const sheet = document.getElementById('artwork-sheet');
  const scrollBar = document.getElementById('scroll-bar');
  const scrollTrack = document.getElementById('scroll-track');

  // Sheet fields
  const sheetEdition = document.getElementById('sheet-edition');
  const sheetTitle = document.getElementById('sheet-title');
  const sheetStory = document.getElementById('sheet-story');
  const sheetSpecs = document.getElementById('sheet-specs');
  const sheetPrice = document.getElementById('sheet-price');
  const stepCounter = document.getElementById('step-counter');
  const btnBack = document.getElementById('btn-back');
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  const btnCollection = document.getElementById('btn-collection');

  let currentArtworkIndex = -1;
  let isZoomed = false;
  let isBusy = false;
  let currentMode = null;

  // ---------------------------------------------------------------------------
  // 3. High-Precision "Butter-Smooth" Physics Engine
  // ---------------------------------------------------------------------------
  let currentScrollX = 0;
  let targetScrollX = 0;
  let prevScrollX = 0;
  let scrollVelocity = 0;
  let maxScroll = 0;
  let stagePixelWidth = 0;
  let lastFrameTime = performance.now();

  const isMobile = () => window.innerWidth <= 768;

  function updateStageDimensions() {
    const vw = window.innerWidth;
    const mob = isMobile();
    const isMid = vw > 768 && vw <= 1280;

    // Measure exact position of curatorial intro text
    const introEl = document.querySelector('.gallery-intro');
    let introRight = 0;
    if (introEl) {
      introRight = introEl.offsetLeft + introEl.offsetWidth;
    }
    if (!introRight || introRight < 60) {
      if (mob) introRight = Math.min(320, vw * 0.78) + 20;
      else if (isMid) introRight = Math.min(540, vw * 0.48) + 36;
      else introRight = Math.min(840, vw * 0.46) + 50;
    }

    // Proportional, elegant gap between intro text and first hanging frame
    // On mid screens (818px - 1280px), gap is kept tight (55px - 95px) so Frame 0 is always in view
    const introGap = mob ? 65 : (isMid ? Math.min(95, Math.max(55, vw * 0.07)) : Math.min(140, Math.max(85, vw * 0.08)));

    const mode = mob ? 'mob' : 'desk';
    const layout = LAYOUTS[mode];
    const f0W = layout[0].frameW;
    const f0Center = Math.round(introRight + introGap + f0W / 2);

    // Generous, consistent horizontal space JUST between the photoframes on all screens:
    // Every adjacent pair of frames is guaranteed this exact clear edge-to-edge space.
    const interFrameGap = mob ? 105 : (isMid ? 165 : 215);

    // Compute exact center position for each frame based on interFrameGap
    const centers = [f0Center];
    for (let i = 1; i < layout.length; i++) {
      const prevCenter = centers[i - 1];
      const prevHalfW = layout[i - 1].frameW / 2;
      const currHalfW = layout[i].frameW / 2;
      const center = Math.round(prevCenter + prevHalfW + interFrameGap + currHalfW);
      centers.push(center);
    }

    const rightMargin = mob ? 120 : (isMid ? 180 : 250);
    const lastIdx = layout.length - 1;
    stagePixelWidth = Math.round(centers[lastIdx] + layout[lastIdx].frameW / 2 + rightMargin);
    maxScroll = Math.max(0, stagePixelWidth - vw);
    stage.style.setProperty('--stage-width', `${stagePixelWidth}px`);

    // Assign dynamically calculated nailX percentage to every frame in layout
    for (let i = 0; i < layout.length; i++) {
      layout[i].nailX = parseFloat(((centers[i] / stagePixelWidth) * 100).toFixed(4));
    }

    targetScrollX = Math.max(0, Math.min(targetScrollX, maxScroll));
    currentScrollX = targetScrollX;
  }

  // Continuous 60/120fps Animation Loop with Cinematic Damping & Inertia Glide
  function physicsTick(timestamp) {
    const dt = Math.min((timestamp - lastFrameTime) / 1000, 0.08);
    lastFrameTime = timestamp;

    if (world.scrollLeft !== 0) world.scrollLeft = 0;
    if (world.scrollTop !== 0) world.scrollTop = 0;

    if (!isZoomed) {
      // 1. Measured, controlled momentum glide (never shoots away endlessly)
      if (Math.abs(scrollVelocity) > 0.05) {
        targetScrollX += scrollVelocity * dt * 55;
        scrollVelocity *= Math.pow(0.86, dt * 60); // dignified, natural deceleration
      } else {
        scrollVelocity = 0;
      }

      // 2. Strict boundaries: Never exceed or expose the edges of the wall
      targetScrollX = Math.max(0, Math.min(maxScroll, targetScrollX));

      // 3. Cinematic Exponential Damping (Velvet "slips like butter" curve)
      const lerpSpeed = isDragging ? 18 : 6.8; // crisp while dragging, smooth and responsive when released
      const factor = 1 - Math.exp(-lerpSpeed * dt);
      currentScrollX += (targetScrollX - currentScrollX) * factor;
      currentScrollX = Math.max(0, Math.min(maxScroll, currentScrollX));

      // 4. Render smooth translation
      stage.style.transform = `translate3d(${-currentScrollX}px, 0, 0) scale(1)`;

      // 5. Update subtle scroll progress bar
      if (scrollBar && maxScroll > 0) {
        const progress = Math.max(0, Math.min(1, currentScrollX / maxScroll));
        const trackWidth = scrollTrack.offsetWidth;
        const thumbWidth = scrollBar.offsetWidth;
        const travel = trackWidth - thumbWidth;
        scrollBar.style.transform = `translate3d(${progress * travel}px, 0, 0)`;
      }

      // 6. Natural subtle aerodynamic drift on hanging frames while moving
      const frameSpeed = currentScrollX - prevScrollX;
      prevScrollX = currentScrollX;

      if (Math.abs(frameSpeed) > 0.1) {
        const tilt = Math.max(-1.1, Math.min(1.1, -frameSpeed * 0.038));
        document.documentElement.style.setProperty('--scroll-tilt', `${tilt}deg`);
      } else {
        document.documentElement.style.setProperty('--scroll-tilt', '0deg');
      }
    }

    requestAnimationFrame(physicsTick);
  }

  // ---------------------------------------------------------------------------
  // 4. Render 10 Hanging Artworks
  // ---------------------------------------------------------------------------
  function renderGallery() {
    const mode = isMobile() ? 'mob' : 'desk';
    currentMode = mode;
    updateStageDimensions();

    const layout = LAYOUTS[mode];
    hangersContainer.innerHTML = '';

    ARTWORKS.forEach((art, idx) => {
      const geo = layout[idx];

      const unit = document.createElement('div');
      unit.className = 'hanger-unit ambient';
      unit.dataset.id = idx;
      unit.style.setProperty('--nail-x', `${geo.nailX}%`);
      unit.style.setProperty('--nail-y', `${geo.nailY}%`);
      unit.style.setProperty('--wire-h', `${geo.wireH}px`);
      unit.style.setProperty('--frame-w', `${geo.frameW}px`);
      unit.style.setProperty('--frame-h', `${geo.frameH}px`);

      const wireWidth = Math.round(geo.frameW * 0.86);
      const wireHeight = Math.max(geo.wireH - 4, 18);
      const halfW = wireWidth / 2;

      unit.innerHTML = `
        <!-- Separate Drop Shadow on Wall -->
        <div class="hanger-shadow"></div>

        <!-- The Physical Assembly pivoting around the Nail Anchor -->
        <div class="hanger-assembly">
          <!-- The Nail Stud (Anchor Center) -->
          <div class="nail-stud"></div>

          <!-- Hanging Wire -->
          <svg class="hanging-wire" viewBox="0 0 ${wireWidth} ${wireHeight}" preserveAspectRatio="none">
            <polyline points="0,${wireHeight} ${halfW},0 ${wireWidth},${wireHeight}" class="wire-line" fill="none"/>
          </svg>

          <!-- Physical Frame Body -->
          <div class="frame-body">
            <div class="frame-molding"></div>
            <!-- Passe-partout (Mat Board) -->
            <div class="mat-board">
              <!-- Photo Viewport -->
              <div class="art-viewport">
                <img class="art-photo" src="${art.image}" alt="${art.title}" loading="lazy">
                <div class="glass-reflection"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Hover Tag / Badge -->
        <div class="hanger-badge">
          <span class="badge-name">${art.title}</span>
          <span class="badge-meta">${art.edition.split('·')[0]} · €${art.price}</span>
        </div>
      `;

      setupHangerInteractions(unit, idx);
      hangersContainer.appendChild(unit);
    });

    if (!isZoomed) {
      stage.style.transform = `translate3d(${-currentScrollX}px, 0, 0) scale(1)`;
    }
  }

  // ---------------------------------------------------------------------------
  // 5. Nail Anchor Physics & Click Handler (Drag-Protected)
  // ---------------------------------------------------------------------------
  function setupHangerInteractions(unit, idx) {
    const assembly = unit.querySelector('.hanger-assembly');
    const shadow = unit.querySelector('.hanger-shadow');

    unit.addEventListener('pointerenter', (e) => {
      if (isZoomed || isBusy || isDragging) return;

      unit.classList.remove('ambient');

      const rect = unit.getBoundingClientRect();
      const relativeX = e.clientX - (rect.left + rect.width / 2);
      // Expressive, visible rotation angle: 4.8 degrees
      const impulseAngle = relativeX > 0 ? -4.8 : 4.8;

      applyDampedSwing(assembly, shadow, impulseAngle);
      focusSpotlight(idx);
    });

    unit.addEventListener('pointerleave', () => {
      if (isZoomed || isBusy) return;

      setTimeout(() => {
        if (!isZoomed && !unit.matches(':hover')) {
          unit.classList.add('ambient');
        }
      }, 2500);

      clearSpotlight();
    });

    unit.addEventListener('click', (e) => {
      e.stopPropagation();
      if (isBusy || hasDraggedSignificantly) return;
      zoomIntoArtwork(idx);
    });
  }

  // Graceful, Slow, Heavy Pendulum Swing Physics
  function applyDampedSwing(assembly, shadow, initialAngle) {
    // Cancel previous animations so new momentum blends smoothly
    assembly.getAnimations().forEach((a) => a.cancel());
    shadow.getAnimations().forEach((a) => a.cancel());

    const keyframes = [
      { transform: `rotate(0deg)`, offset: 0 },
      { transform: `rotate(${initialAngle}deg)`, offset: 0.14 },
      { transform: `rotate(${-initialAngle * 0.58}deg)`, offset: 0.38 },
      { transform: `rotate(${initialAngle * 0.28}deg)`, offset: 0.62 },
      { transform: `rotate(${-initialAngle * 0.1}deg)`, offset: 0.82 },
      { transform: `rotate(0deg)`, offset: 1.0 }
    ];

    const shadowKeyframes = [
      { transform: `rotate(0deg)`, opacity: 0.95, offset: 0 },
      { transform: `rotate(${-initialAngle * 0.45}deg)`, opacity: 0.92, offset: 0.14 },
      { transform: `rotate(${initialAngle * 0.25}deg)`, opacity: 0.88, offset: 0.38 },
      { transform: `rotate(${-initialAngle * 0.1}deg)`, opacity: 0.85, offset: 0.62 },
      { transform: `rotate(0deg)`, opacity: 0.85, offset: 1.0 }
    ];

    assembly.animate(keyframes, {
      duration: 2500, // 2.5 seconds of slow, heavy, elegant physical swing
      easing: 'cubic-bezier(0.33, 1, 0.68, 1)',
      fill: 'forwards'
    });

    shadow.animate(shadowKeyframes, {
      duration: 2500,
      easing: 'cubic-bezier(0.33, 1, 0.68, 1)',
      fill: 'forwards'
    });
  }

  // ---------------------------------------------------------------------------
  // 6. Dynamic Focus Spotlight on Hover
  // ---------------------------------------------------------------------------
  function focusSpotlight(idx) {
    const mode = currentMode || 'desk';
    const geo = LAYOUTS[mode][idx];
    const vh = window.innerHeight;

    // geo.nailX is the exact horizontal center of the frame (left: var(--nail-x); transform: translate(-50%, 0))
    const cxPercent = geo.nailX;

    const frameCenterY = (geo.nailY / 100) * vh + geo.wireH + geo.frameH / 2;
    const cyPercent = (frameCenterY / vh) * 100;

    // Soft, rounded-vertical oval mask embracing the frame
    const rxPercent = Math.max((geo.frameW * 0.92 / stagePixelWidth) * 100, 3.8);
    const ryPercent = Math.max((geo.frameH * 1.02 / vh) * 100, 24);

    const s = document.documentElement.style;
    s.setProperty('--cx', `${cxPercent}%`);
    s.setProperty('--cy', `${cyPercent}%`);
    s.setProperty('--rx', `${rxPercent}%`);
    s.setProperty('--ry', `${ryPercent}%`);

    document.body.classList.add('has-spotlight');
  }

  function clearSpotlight() {
    document.body.classList.remove('has-spotlight');
  }

  // ---------------------------------------------------------------------------
  // 7. Butter-Smooth Scroll & Fling Input Listeners
  // ---------------------------------------------------------------------------
  // Wheel Input: Smooth, controlled cinematic scroll that never rockets away
  window.addEventListener(
    'wheel',
    (e) => {
      if (isZoomed || isBusy) return;
      e.preventDefault();

      let delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;

      // Handle lines vs pixels mode on Firefox & Windows configurations
      if (e.deltaMode === 1) delta *= 24;
      else if (e.deltaMode === 2) delta *= window.innerWidth * 0.18;

      // Measured impulse so each notch travels a calm, elegant distance (~80-140px)
      const clampedDelta = Math.max(-120, Math.min(120, delta));
      targetScrollX = Math.max(0, Math.min(maxScroll, targetScrollX + clampedDelta * 0.85));
      scrollVelocity += clampedDelta * 0.15;
      scrollVelocity = Math.max(-45, Math.min(45, scrollVelocity));
    },
    { passive: false }
  );

  // Delegated click handler on hangersContainer as bulletproof backup
  hangersContainer.addEventListener('click', (e) => {
    if (isBusy || hasDraggedSignificantly) return;
    const unit = e.target.closest('.hanger-unit');
    if (unit && unit.dataset.index !== undefined) {
      const idx = parseInt(unit.dataset.index, 10);
      if (!isNaN(idx)) {
        zoomIntoArtwork(idx);
      }
    }
  });

  // Pointer Dragging with High-Mass Cinematic Fling Physics (Supports both Natural Vertical Scroll & Horizontal Slider on Mobile)
  let isDragging = false;
  let dragStartX = 0;
  let dragStartY = 0;
  let dragStartScroll = 0;
  let dragAxis = null;
  let hasDraggedSignificantly = false;
  const pointerHistory = [];

  world.addEventListener('pointerdown', (e) => {
    if (isZoomed || isBusy) return;
    isDragging = true;
    hasDraggedSignificantly = false;
    dragStartX = e.clientX;
    dragStartY = e.clientY;
    dragStartScroll = currentScrollX;
    dragAxis = null;
    scrollVelocity = 0;
    pointerHistory.length = 0;
    pointerHistory.push({ x: e.clientX, y: e.clientY, t: performance.now() });
    document.body.classList.add('is-dragging');
    // Note: Do not call setPointerCapture on pointerdown! That retargets pointerup & click to world,
    // which prevents the click event from firing on individual picture frames.
  });

  window.addEventListener('pointermove', (e) => {
    if (!isDragging || isZoomed) return;

    const dx = e.clientX - dragStartX;
    const dy = e.clientY - dragStartY;
    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);

    if (absDx > 6 || absDy > 6) {
      if (!hasDraggedSignificantly) {
        hasDraggedSignificantly = true;
        // Acquire pointer capture only once actual dragging motion has begun
        if (e && e.pointerId) {
          try {
            world.setPointerCapture(e.pointerId);
          } catch (_) {}
        }
      }
    }

    // Determine gesture axis once movement threshold is reached (supports natural vertical mobile scroll as well as horizontal slider)
    if (!dragAxis && (absDx > 6 || absDy > 6)) {
      dragAxis = absDy > absDx ? 'vertical' : 'horizontal';
    }

    // 1:1 direct finger tracking: the wall stays locked precisely under the thumb
    const delta = dragAxis === 'vertical' ? dy : dx;
    targetScrollX = dragStartScroll - delta;

    const now = performance.now();
    pointerHistory.push({ x: e.clientX, y: e.clientY, t: now });
    if (pointerHistory.length > 6) pointerHistory.shift();
  });

  function endDrag(e) {
    if (!isDragging) return;
    isDragging = false;
    document.body.classList.remove('is-dragging');

    if (e && e.pointerId) {
      try {
        if (world.hasPointerCapture && world.hasPointerCapture(e.pointerId)) {
          world.releasePointerCapture(e.pointerId);
        }
      } catch (_) {}
    }

    // Calculate release velocity for natural, restrained cinematic fling
    if (pointerHistory.length >= 2 && hasDraggedSignificantly) {
      const first = pointerHistory[0];
      const last = pointerHistory[pointerHistory.length - 1];
      const dt = last.t - first.t;
      if (dt > 10 && dt < 250) {
        let v = 0;
        if (dragAxis === 'vertical') {
          v = (last.y - first.y) / dt;
        } else {
          v = (last.x - first.x) / dt;
        }
        scrollVelocity = Math.max(-55, Math.min(55, -v * 65));
      }
    }
    dragAxis = null;

    // Reset hasDraggedSignificantly after click event loop resolves
    setTimeout(() => {
      hasDraggedSignificantly = false;
    }, 120);
  }

  window.addEventListener('pointerup', endDrag);
  window.addEventListener('pointercancel', endDrag);

  // Prevent rubber-banding on iOS Safari when interacting with the panoramic gallery
  world.addEventListener(
    'touchmove',
    (e) => {
      if (!isZoomed) {
        e.preventDefault();
      }
    },
    { passive: false }
  );

  // ---------------------------------------------------------------------------
  // 8. Cinematic Camera Zoom (Smooth Travel into Any of the 10 Frames)
  // ---------------------------------------------------------------------------
  async function zoomIntoArtwork(idx) {
    if (isBusy) return;
    isBusy = true;
    currentArtworkIndex = idx;
    isZoomed = true;
    scrollVelocity = 0;

    // Straighten any swinging frames
    document.querySelectorAll('.hanger-assembly').forEach((el) => {
      el.getAnimations().forEach((a) => a.cancel());
      el.style.transform = 'rotate(0deg)';
    });

    // Ensure sheet is pre-mounted with opacity 0 and translateY before animation starts
    sheet.classList.remove('show');
    sheet.hidden = false;
    sheet.removeAttribute('hidden');

    fillCuratorSheet(idx);

    const mode = currentMode || 'desk';
    const geo = LAYOUTS[mode][idx];
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // Frame position in stage coordinates
    const framePixelX = (geo.nailX / 100) * stagePixelWidth;
    const framePixelY = (geo.nailY / 100) * vh + geo.wireH + geo.frameH / 2;

    let targetZoom, screenTargetX, screenTargetY;

    if (mode === 'desk') {
      targetZoom = Math.min((vh * 0.72) / geo.frameH, (vw * 0.48) / geo.frameW);
      screenTargetX = vw * 0.64;
      screenTargetY = vh * 0.5;
    } else {
      targetZoom = Math.min((vh * 0.42) / geo.frameH, (vw * 0.85) / geo.frameW);
      screenTargetX = vw * 0.5;
      screenTargetY = vh * 0.28;
    }

    const targetStageX = screenTargetX - framePixelX * targetZoom;
    const targetStageY = screenTargetY - framePixelY * targetZoom;

    document.body.classList.add('in-detail');
    clearSpotlight();

    const currentTransform = stage.style.transform || `translate3d(${-currentScrollX}px, 0, 0) scale(1)`;
    const nextTransform = `translate3d(${targetStageX}px, ${targetStageY}px, 0) scale(${targetZoom})`;

    stage.getAnimations().forEach((a) => a.cancel());

    const anim = stage.animate(
      [
        { transform: currentTransform },
        { transform: nextTransform }
      ],
      {
        duration: 1350,
        easing: 'cubic-bezier(0.62, 0, 0.22, 1)',
        fill: 'forwards'
      }
    );

    // Smoothly fade and glide in the curatorial text with liquid elegance as camera arrives
    const revealTimer = setTimeout(() => {
      if (isZoomed && currentArtworkIndex === idx) {
        sheet.classList.add('show');
      }
    }, 420);

    await anim.finished;
    clearTimeout(revealTimer);
    stage.getAnimations().forEach((a) => a.cancel());
    stage.style.transform = nextTransform;
    sheet.classList.add('show');
    isBusy = false;
  }

  // ---------------------------------------------------------------------------
  // 9. Return to Wall (Smooth Un-Zoom & Intelligent Centering)
  // ---------------------------------------------------------------------------
  async function returnToWall() {
    if (isBusy || !isZoomed) return;
    isBusy = true;

    sheet.classList.remove('show');
    await wait(220);
    sheet.hidden = true;
    sheet.setAttribute('hidden', '');

    // Center the recently inspected artwork on screen upon return
    const mode = currentMode || 'desk';
    const geo = LAYOUTS[mode][currentArtworkIndex];
    const vw = window.innerWidth;
    const framePixelX = (geo.nailX / 100) * stagePixelWidth;

    targetScrollX = Math.max(0, Math.min(maxScroll, framePixelX - vw / 2));
    currentScrollX = targetScrollX;
    prevScrollX = targetScrollX;
    scrollVelocity = 0;
    isDragging = false;
    document.body.classList.remove('is-dragging');

    const currentTransform = stage.style.transform;
    const defaultTransform = `translate3d(${-targetScrollX}px, 0, 0) scale(1)`;

    stage.getAnimations().forEach((a) => a.cancel());

    const anim = stage.animate(
      [
        { transform: currentTransform },
        { transform: defaultTransform }
      ],
      {
        duration: 1150,
        easing: 'cubic-bezier(0.62, 0, 0.22, 1)',
        fill: 'forwards'
      }
    );

    await anim.finished;

    // Release WAAPI animation lock so physicsTick can freely control stage transform!
    stage.getAnimations().forEach((a) => a.cancel());
    stage.style.transform = defaultTransform;

    document.body.classList.remove('in-detail');
    isZoomed = false;
    currentArtworkIndex = -1;
    isBusy = false;
    lastFrameTime = performance.now();

    document.querySelectorAll('.hanger-unit').forEach((u) => u.classList.add('ambient'));
  }

  // ---------------------------------------------------------------------------
  // 10. Step Between All 10 Artworks in Detail Mode
  // ---------------------------------------------------------------------------
  async function stepArtwork(direction) {
    if (isBusy || !isZoomed) return;
    const nextIdx = (currentArtworkIndex + direction + ARTWORKS.length) % ARTWORKS.length;

    sheet.classList.remove('show');
    await wait(160);
    await zoomIntoArtwork(nextIdx);
  }

  // ---------------------------------------------------------------------------
  // 11. Populate Curator Sheet
  // ---------------------------------------------------------------------------
  function fillCuratorSheet(idx) {
    const art = ARTWORKS[idx];
    sheetEdition.textContent = art.edition;
    sheetTitle.textContent = art.title;
    sheetStory.textContent = art.story;
    sheetPrice.textContent = `€${art.price.toLocaleString('en-US')}`;
    stepCounter.textContent = `${String(idx + 1).padStart(2, '0')} / ${String(ARTWORKS.length).padStart(2, '0')}`;

    // Authentic CSV specs (Medium & Framing)
    sheetSpecs.innerHTML = art.specs
      .map(
        (s) => `
        <div class="spec-item">
          <dt>${s.label}</dt>
          <dd>${s.value}</dd>
        </div>`
      )
      .join('');
  }

  // ---------------------------------------------------------------------------
  // 12. Event Listeners & Responsive Window Resize
  // ---------------------------------------------------------------------------
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  btnBack.addEventListener('click', returnToWall);
  if (btnCollection) {
    btnCollection.addEventListener('click', returnToWall);
  }
  btnPrev.addEventListener('click', () => stepArtwork(-1));
  btnNext.addEventListener('click', () => stepArtwork(1));

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (isZoomed) returnToWall();
    } else if (isZoomed) {
      if (e.key === 'ArrowLeft') stepArtwork(-1);
      else if (e.key === 'ArrowRight') stepArtwork(1);
    }
  });

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const mode = isMobile() ? 'mob' : 'desk';
      if (mode !== currentMode) {
        if (isZoomed) returnToWall();
        renderGallery();
      } else {
        updateStageDimensions();
        if (isZoomed) {
          zoomIntoArtwork(currentArtworkIndex);
        } else {
          const layout = LAYOUTS[currentMode];
          document.querySelectorAll('.hanger-unit').forEach((unit, idx) => {
            if (layout[idx]) {
              unit.style.setProperty('--nail-x', `${layout[idx].nailX}%`);
            }
          });
        }
      }
    }, 150);
  });

  // Initialize gallery and start continuous butter-smooth physics loop
  renderGallery();
  requestAnimationFrame(physicsTick);

  // ---------------------------------------------------------------------------
  // 13. Website Opener: 5 Vertical Strips Rising from Bottom to Top
  // ---------------------------------------------------------------------------
  function runSiteOpener() {
    const opener = document.getElementById('site-opener');
    if (!opener) return;

    const strips = opener.querySelectorAll('.opener-strip');
    const intro = document.querySelector('.gallery-intro');
    const hangers = document.querySelectorAll('.hanger-unit');
    const mob = isMobile();

    // Staggered high and low starting levels matching the 5-strip curtain rhythm
    const introTravelY = mob ? -55 : -75;
    const frameOffsetsDesk = [-80, -155, -85, -165, -75, -145];
    const frameOffsetsMob = [-60, -115, -65, -120, -55, -110];
    const frameOffsets = mob ? frameOffsetsMob : frameOffsetsDesk;

    // Reset initial states
    document.body.classList.add('opener-active');
    opener.classList.remove('is-hidden');

    strips.forEach((s) => {
      s.getAnimations().forEach((a) => a.cancel());
      s.style.transform = 'translate3d(0, 0, 0)';
    });

    if (intro) {
      intro.getAnimations().forEach((a) => a.cancel());
      intro.style.transform = `translateY(calc(-50% + ${introTravelY}px))`;
    }

    hangers.forEach((h, idx) => {
      h.getAnimations().forEach((a) => a.cancel());
      const offset = frameOffsets[idx % frameOffsets.length];
      h.style.transform = `translate(-50%, ${offset}px)`;
    });

    // Synchronized motion: strips glide UP while frames and intro text glide DOWN into place
    setTimeout(() => {
      const duration = 1450;
      const easing = 'cubic-bezier(0.76, 0, 0.24, 1)';

      // 1. Opener strips slide upward off the top
      const stripAnimations = Array.from(strips).map((strip) => {
        return strip.animate(
          [
            { transform: 'translate3d(0, 0, 0)' },
            { transform: 'translate3d(0, -135vh, 0)' }
          ],
          {
            duration,
            easing,
            fill: 'forwards'
          }
        );
      });

      // 2. Curatorial intro text glides down from above to resting position (no fade)
      let introAnimation = Promise.resolve();
      if (intro) {
        introAnimation = intro.animate(
          [
            { transform: `translateY(calc(-50% + ${introTravelY}px))` },
            { transform: 'translateY(-50%)' }
          ],
          {
            duration,
            easing,
            fill: 'forwards'
          }
        ).finished.then(() => {
          intro.getAnimations().forEach((a) => a.cancel());
          intro.style.transform = 'translateY(-50%)';
        });
      }

      // 3. All hanging frames glide down from their high/low starting levels to resting position (no fade)
      const hangerAnimations = Array.from(hangers).map((h, idx) => {
        const offset = frameOffsets[idx % frameOffsets.length];
        return h.animate(
          [
            { transform: `translate(-50%, ${offset}px)` },
            { transform: 'translate(-50%, 0px)' }
          ],
          {
            duration,
            easing,
            fill: 'forwards'
          }
        ).finished.then(() => {
          h.getAnimations().forEach((a) => a.cancel());
          h.style.transform = 'translate(-50%, 0px)';
        });
      });

      // Complete transition
      Promise.all([
        ...stripAnimations.map((a) => a.finished),
        introAnimation,
        ...hangerAnimations
      ]).then(() => {
        opener.classList.add('is-hidden');
        document.body.classList.remove('opener-active');
      });
    }, 320);
  }

  // Global replay trigger (run in console: window.replayOpener())
  window.replayOpener = runSiteOpener;

  // Press 'O' on keyboard anytime to replay the opener
  window.addEventListener('keydown', (e) => {
    if ((e.key === 'o' || e.key === 'O') && !isZoomed && !isBusy) {
      runSiteOpener();
    }
  });

  // Run opener on initial page load
  runSiteOpener();
})();
