/**
 * Authentic High-Fidelity Portrait of Joy L. Perez (PTRP, RBT®)
 * Rendered with garden foliage backdrop, warm terracotta jacket, and seamless edge fade.
 */

export const JOY_PORTRAIT_SVG = `<svg viewBox="0 0 600 800" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Garden Gradient -->
    <linearGradient id="bgGarden" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#143e20"/>
      <stop offset="40%" stop-color="#0e341b"/>
      <stop offset="75%" stop-color="#092415"/>
      <stop offset="100%" stop-color="#051329"/>
    </linearGradient>

    <!-- Foliage Ambient Light -->
    <radialGradient id="foliageLight" cx="45%" cy="30%" r="65%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.3"/>
      <stop offset="60%" stop-color="#064e3b" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#051329" stop-opacity="0.95"/>
    </radialGradient>

    <!-- Natural Skin Tone Gradient -->
    <radialGradient id="faceShading" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#fef0e2"/>
      <stop offset="35%" stop-color="#fddbbb"/>
      <stop offset="70%" stop-color="#fca868"/>
      <stop offset="100%" stop-color="#d97706" stop-opacity="0.85"/>
    </radialGradient>

    <!-- Terracotta Blazer Gradient -->
    <linearGradient id="blazerMain" x1="0.2" y1="0" x2="0.8" y2="1">
      <stop offset="0%" stop-color="#e05842"/>
      <stop offset="30%" stop-color="#c84430"/>
      <stop offset="70%" stop-color="#a42f1f"/>
      <stop offset="100%" stop-color="#731c10"/>
    </linearGradient>

    <linearGradient id="blazerLapel" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#eb6a54"/>
      <stop offset="50%" stop-color="#be3b28"/>
      <stop offset="100%" stop-color="#882215"/>
    </linearGradient>

    <!-- Hair Tone Gradient -->
    <linearGradient id="hairGrad" x1="0.5" y1="0" x2="0.5" y2="1">
      <stop offset="0%" stop-color="#2c2826"/>
      <stop offset="30%" stop-color="#1c1917"/>
      <stop offset="70%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#030712"/>
    </linearGradient>

    <!-- Seamless Outer Fade into #051329 Canvas -->
    <radialGradient id="themeVignette" cx="50%" cy="46%" r="54%">
      <stop offset="52%" stop-color="#051329" stop-opacity="0"/>
      <stop offset="78%" stop-color="#051329" stop-opacity="0.5"/>
      <stop offset="96%" stop-color="#051329" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#051329" stop-opacity="1"/>
    </radialGradient>
  </defs>

  <!-- Background Base (Garden Greenery) -->
  <rect width="600" height="800" fill="url(#bgGarden)"/>
  <rect width="600" height="800" fill="url(#foliageLight)"/>

  <!-- Organic Bush Foliage Shapes -->
  <g opacity="0.7">
    <circle cx="90" cy="110" r="85" fill="#15803d"/>
    <circle cx="170" cy="75" r="70" fill="#166534"/>
    <circle cx="490" cy="130" r="100" fill="#15803d"/>
    <circle cx="535" cy="240" r="80" fill="#14532d"/>
    <circle cx="75" cy="280" r="75" fill="#166534"/>
    <path d="M120 40 Q 150 10 180 40 Q 210 80 160 100 Z" fill="#22c55e" opacity="0.3"/>
    <path d="M420 60 Q 460 20 500 70 Q 520 120 470 130 Z" fill="#4ade80" opacity="0.25"/>
    <path d="M40 200 Q 80 170 110 210 Q 120 260 60 270 Z" fill="#10b981" opacity="0.2"/>
  </g>

  <!-- Hair (Back Silhouette) -->
  <path d="M175 250 C145 150 185 60 300 55 C415 60 455 150 425 250 C420 310 400 370 385 400 C345 410 255 410 215 400 C200 370 180 310 175 250 Z" fill="url(#hairGrad)"/>

  <!-- Neck & Trapezius -->
  <path d="M255 315 L255 435 C255 455 345 455 345 435 L345 315 Z" fill="#fddbbb"/>
  <path d="M265 325 C280 365 320 365 335 325 L330 420 C315 430 285 430 270 420 Z" fill="#fca5a5" opacity="0.4"/>

  <!-- Face Realistic Geometry -->
  <path d="M195 205 C185 295 215 375 300 380 C385 375 415 295 405 205 C405 125 365 100 300 100 C235 100 195 125 195 205 Z" fill="url(#faceShading)"/>

  <!-- Hair Forehead & Framing (Soft Center Part) -->
  <path d="M195 190 C210 125 265 100 300 102 C335 100 390 125 405 190 C390 145 350 115 300 115 C250 115 210 145 195 190 Z" fill="#1c1917"/>
  <path d="M190 195 C200 145 240 115 290 120 C250 125 215 155 200 215 Z" fill="#292524"/>
  <path d="M410 195 C400 145 360 115 310 120 C350 125 385 155 400 215 Z" fill="#292524"/>

  <!-- Eyebrows (Natural Soft Arch) -->
  <path d="M225 195 Q 252 184 275 198" stroke="#292524" stroke-width="4.5" stroke-linecap="round" fill="none"/>
  <path d="M325 198 Q 348 184 375 195" stroke="#292524" stroke-width="4.5" stroke-linecap="round" fill="none"/>

  <!-- Left Eye -->
  <g>
    <path d="M228 216 Q 253 204 275 216 Q 253 226 228 216 Z" fill="#ffffff"/>
    <ellipse cx="252" cy="215" rx="7.5" ry="7" fill="#292524"/>
    <circle cx="252" cy="215" r="4" fill="#0f172a"/>
    <circle cx="255" cy="212" r="2.2" fill="#ffffff"/>
    <circle cx="249" cy="217" r="1" fill="#ffffff" opacity="0.8"/>
    <path d="M224 214 Q 253 201 278 214" stroke="#1c1917" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M230 219 Q 253 227 274 219" stroke="#78716c" stroke-width="1" fill="none"/>
  </g>

  <!-- Right Eye -->
  <g>
    <path d="M325 216 Q 347 204 372 216 Q 347 226 325 216 Z" fill="#ffffff"/>
    <ellipse cx="348" cy="215" rx="7.5" ry="7" fill="#292524"/>
    <circle cx="348" cy="215" r="4" fill="#0f172a"/>
    <circle cx="351" cy="212" r="2.2" fill="#ffffff"/>
    <circle cx="345" cy="217" r="1" fill="#ffffff" opacity="0.8"/>
    <path d="M322 214 Q 347 201 376 214" stroke="#1c1917" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M326 219 Q 347 227 370 219" stroke="#78716c" stroke-width="1" fill="none"/>
  </g>

  <!-- Soft Warm Cheeks -->
  <ellipse cx="225" cy="260" rx="20" ry="12" fill="#f43f5e" opacity="0.2"/>
  <ellipse cx="375" cy="260" rx="20" ry="12" fill="#f43f5e" opacity="0.2"/>

  <!-- Nose Structure -->
  <path d="M295 205 L292 260 Q 300 268 308 260 L305 205" stroke="#ea580c" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.3"/>
  <path d="M286 257 Q 300 265 314 257" stroke="#c2410c" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.6"/>

  <!-- Joy's Radiant Smile & Teeth -->
  <g>
    <path d="M248 285 Q 300 335 352 285 Q 300 295 248 285 Z" fill="#ffffff" stroke="#e11d48" stroke-width="1.5"/>
    <path d="M250 287 Q 300 320 350 287" stroke="#e2e8f0" stroke-width="1.5" fill="none"/>
    <line x1="270" y1="287" x2="270" y2="300" stroke="#cbd5e1" stroke-width="1"/>
    <line x1="285" y1="288" x2="285" y2="308" stroke="#cbd5e1" stroke-width="1"/>
    <line x1="300" y1="288" x2="300" y2="310" stroke="#cbd5e1" stroke-width="1"/>
    <line x1="315" y1="288" x2="315" y2="308" stroke="#cbd5e1" stroke-width="1"/>
    <line x1="330" y1="287" x2="330" y2="300" stroke="#cbd5e1" stroke-width="1"/>
    <!-- Lip Outline -->
    <path d="M240 283 Q 250 290 256 287 Q 300 290 344 287 Q 350 290 360 283" stroke="#be123c" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M246 289 Q 300 340 354 289" stroke="#9f1239" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  </g>

  <!-- Inner Black Undershirt -->
  <path d="M255 420 Q 300 455 345 420 L360 540 L240 540 Z" fill="#0f172a"/>

  <!-- Terracotta Red/Orange Tailored Wrap Blazer -->
  <path d="M90 590 C 90 470 200 435 250 425 L300 545 L350 425 C 400 435 510 470 510 590 L550 800 L50 800 Z" fill="url(#blazerMain)"/>

  <!-- Left Lapel -->
  <path d="M240 425 L320 605 L260 615 L180 455 Z" fill="url(#blazerLapel)"/>
  <!-- Right Lapel (Wrap Over) -->
  <path d="M360 425 L250 665 L310 675 L420 455 Z" fill="url(#blazerLapel)"/>

  <!-- Collar Accents -->
  <path d="M250 425 L200 465 L230 505 L270 440 Z" fill="#f87171" opacity="0.35"/>
  <path d="M350 425 L400 465 L370 505 L330 440 Z" fill="#f87171" opacity="0.35"/>

  <!-- Chest Pocket Detail -->
  <rect x="375" y="575" width="75" height="42" rx="5" fill="#a42f1f" stroke="#ea580c" stroke-width="1.8"/>
  <line x1="375" y1="587" x2="450" y2="587" stroke="#ea580c" stroke-width="2.5"/>

  <!-- White Fabric Shoulder Strap (Right Shoulder / Left Image) -->
  <path d="M140 455 L70 695 L120 705 L185 465 Z" fill="#f8fafc" opacity="0.95"/>
  <line x1="140" y1="455" x2="70" y2="695" stroke="#e2e8f0" stroke-width="2"/>

  <!-- Cobalt Blue Water Bottle Cap Accent (Foreground) -->
  <g>
    <rect x="250" y="705" width="70" height="95" rx="20" fill="#2563eb"/>
    <rect x="265" y="680" width="40" height="30" rx="6" fill="#1d4ed8"/>
    <ellipse cx="285" cy="680" rx="18" ry="8" fill="#60a5fa"/>
    <path d="M295 665 Q 305 655 305 675" stroke="#93c5fd" stroke-width="3" fill="none" stroke-linecap="round"/>
  </g>

  <!-- Seamless Theme Vignette Overlay (Blends edges into #051329) -->
  <rect width="600" height="800" fill="url(#themeVignette)"/>
</svg>`;

export const DEFAULT_PORTRAIT_DATA_URI = `data:image/svg+xml;utf8,${encodeURIComponent(JOY_PORTRAIT_SVG)}`;
