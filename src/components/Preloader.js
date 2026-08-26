export function renderPreloader() {
  return `
  <div id="pre" role="dialog" aria-label="Loading experience">
    <div class="pre-in">
      <div class="pre-mark">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="10" fill="#070a0e" stroke="rgba(223,231,224,0.14)" stroke-width="1.2"/>
          <circle cx="20" cy="20" r="11" fill="#e0231c" fill-opacity="0.92"/>
          <path d="M13 10.5V29.5" stroke="#dfe7e0" stroke-width="2.2" stroke-linecap="round"/>
          <path d="M27 10.5V29.5" stroke="#dfe7e0" stroke-width="2.2" stroke-linecap="round"/>
          <path d="M10.5 13.5C16.5 12 23.5 12 29.5 13.5" stroke="#dfe7e0" stroke-width="1.8" stroke-linecap="round"/>
          <path d="M13 20H27" stroke="#dfe7e0" stroke-width="2.2" stroke-linecap="round"/>
          <path d="M11.5 27H28.5" stroke="#dfe7e0" stroke-width="1.4" stroke-linecap="round" stroke-opacity="0.6"/>
        </svg>
      </div>
      <div class="pre-jp jp">情報科学技術 · HARSH JHA</div>
      <div class="pre-bar"><i id="pre-fill"></i></div>
      <div class="pre-meta">
        <span id="pre-task">Initializing 3D World</span>
        <b><span id="pre-pct">0</span>%</b>
      </div>
    </div>
  </div>`;
}
