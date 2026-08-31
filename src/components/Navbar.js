export function renderNavbar() {
  return `
  <header class="nav" id="nav">
    <a href="#top" class="brand" aria-label="Harsh Jha Portfolio">
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Outer Basalt Shield -->
  <rect width="40" height="40" rx="10" fill="#070a0e" stroke="rgba(216,177,138,0.25)" stroke-width="1.2"/>
  <!-- Glowing Aarti Diya Flame Ring -->
  <circle cx="20" cy="20" r="12" fill="#ff7a26" fill-opacity="0.22" stroke="#e5a93c" stroke-width="0.9"/>
  <!-- Carved Stone Torana Arch -->
  <path d="M12 28V16C12 13 16 11 20 11C24 11 28 13 28 16V28" stroke="#d6b28d" stroke-width="1.4" stroke-linecap="round"/>
  <path d="M9 28H31" stroke="#d6b28d" stroke-width="1.6" stroke-linecap="round"/>
  <!-- Devanagari 'ह' in Sacred Temple Brass Gold -->
  <path d="M14 13.5H26" stroke="#eedfc8" stroke-width="2.2" stroke-linecap="round"/>
  <path d="M19.5 13.5V16C19.5 17 17.5 17.8 16.5 18.8C15.5 19.8 16 21 17.5 21H22C23.5 21 24.5 22.2 24 23.6C23.2 25.2 20.8 26.2 18.5 26.2C16.8 26.2 15.5 25.5 14.8 24.5" stroke="#e5a93c" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M18.8 21.2C18.2 22.6 17.5 24 15.2 25.4C14.2 26 13.5 27 13.5 28" stroke="#e5a93c" stroke-width="2.0" stroke-linecap="round"/>
</svg>
      <span class="brand-tx">
        <b>HARSH JHA</b>
        <i>2ND YEAR CSE · DEVELOPER</i>
      </span>
    </a>
    <nav class="nav-links" id="nav-menu">
      <a href="#gate" class="nav-link" data-nav="1">
        <span>About</span>
        <span class="alt">01//साधना</span>
      </a>
      <a href="#pathways" class="nav-link" data-nav="2">
        <span>Projects</span>
        <span class="alt">02//कृति</span>
      </a>
      <a href="#lessons" class="nav-link" data-nav="3">
        <span>Skills</span>
        <span class="alt">03//विद्या</span>
      </a>
      <a href="#eternity" class="nav-link" data-nav="4">
        <span>Contact</span>
        <span class="alt">04//संवाद</span>
      </a>
    </nav>
    <button class="nav-burger" id="nav-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
      <i></i><i></i>
    </button>
  </header>`;
}
