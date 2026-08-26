export function renderNavbar() {
  return `
  <header class="nav" id="nav">
    <a href="#top" class="brand" aria-label="Harsh Jha Portfolio">
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="#070a0e" stroke="rgba(223,231,224,0.14)" stroke-width="1.2"/>
        <circle cx="20" cy="20" r="11" fill="#e0231c" fill-opacity="0.92"/>
        <path d="M13 10.5V29.5" stroke="#dfe7e0" stroke-width="2.2" stroke-linecap="round"/>
        <path d="M27 10.5V29.5" stroke="#dfe7e0" stroke-width="2.2" stroke-linecap="round"/>
        <path d="M10.5 13.5C16.5 12 23.5 12 29.5 13.5" stroke="#dfe7e0" stroke-width="1.8" stroke-linecap="round"/>
        <path d="M13 20H27" stroke="#dfe7e0" stroke-width="2.2" stroke-linecap="round"/>
        <path d="M11.5 27H28.5" stroke="#dfe7e0" stroke-width="1.4" stroke-linecap="round" stroke-opacity="0.6"/>
      </svg>
      <span class="brand-tx">
        <b>HARSH JHA</b>
        <i>2ND YEAR CSE · DEVELOPER</i>
      </span>
    </a>
    <nav class="nav-links" id="nav-menu">
      <a href="#gate" class="nav-link" data-nav="1">
        <span>About</span>
        <span class="alt">01//ABOUT</span>
      </a>
      <a href="#pathways" class="nav-link" data-nav="2">
        <span>Projects</span>
        <span class="alt">02//WORKS</span>
      </a>
      <a href="#lessons" class="nav-link" data-nav="3">
        <span>Skills</span>
        <span class="alt">03//STACK</span>
      </a>
      <a href="#eternity" class="nav-link" data-nav="4">
        <span>Contact</span>
        <span class="alt">04//CONNECT</span>
      </a>
    </nav>
    <button class="nav-burger" id="nav-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
      <i></i><i></i>
    </button>
  </header>`;
}
