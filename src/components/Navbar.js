export function renderNavbar() {
  return `
  <header class="nav" id="nav">
    <a href="#top" class="brand" aria-label="Harsh Jha Portfolio">
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Outer Basalt Shield -->
  <rect width="40" height="40" rx="10" fill="#070a0e" stroke="rgba(216,177,138,0.22)" stroke-width="1.2"/>
  <!-- Glowing Terracotta Sun / Kund Ring -->
  <circle cx="20" cy="20" r="12" fill="#c85a2b" fill-opacity="0.25" stroke="#e5b448" stroke-width="0.8"/>
  <!-- Architectural Baori Arch Steps -->
  <path d="M11 28L15 28L15 24L18 24L18 20L22 20L22 24L25 24L25 28L29 28" stroke="#d8b18a" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
  <!-- Devanagari 'ह' Calligraphic Character in Sacred Gold -->
  <path d="M14 11.5H26" stroke="#eedfc8" stroke-width="2.2" stroke-linecap="round"/>
  <path d="M19.5 11.5V14.5C19.5 15.5 17.5 16.2 16.5 17.2C15.5 18.2 16 19.5 17.5 19.5H22C23.5 19.5 24.5 20.8 24 22.2C23.2 24 20.8 25.2 18.5 25.2C16.8 25.2 15.5 24.5 14.8 23.5" stroke="#e5b448" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M18.8 19.8C18.2 21.2 17.5 22.8 15.2 24.2C14.2 24.8 13.5 25.8 13.5 27" stroke="#e5b448" stroke-width="2.0" stroke-linecap="round"/>
</svg>
      <span class="brand-tx">
        <b>HARSH JHA</b>
        <i>2ND YEAR CSE · DEVELOPER</i>
      </span>
    </a>
    <nav class="nav-links" id="nav-menu">
      <a href="#gate" class="nav-link" data-nav="1">
        <span>About</span>
        <span class="alt">01//संरचना</span>
      </a>
      <a href="#pathways" class="nav-link" data-nav="2">
        <span>Projects</span>
        <span class="alt">02//निर्माण</span>
      </a>
      <a href="#lessons" class="nav-link" data-nav="3">
        <span>Skills</span>
        <span class="alt">03//कौशल</span>
      </a>
      <a href="#eternity" class="nav-link" data-nav="4">
        <span>Contact</span>
        <span class="alt">04//सम्पर्क</span>
      </a>
    </nav>
    <button class="nav-burger" id="nav-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
      <i></i><i></i>
    </button>
  </header>`;
}
