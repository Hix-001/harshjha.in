export function renderPreloader() {
  return `
  <div id="pre" role="dialog" aria-label="Loading experience">
    <div class="pre-in">
      <div class="pre-mark">
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
      </div>
      <div class="pre-jp jp">काशी · तन्त्र एवं संगणक शास्त्र · HARSH JHA</div>
      <div class="pre-bar"><i id="pre-fill"></i></div>
      <div class="pre-meta">
        <span id="pre-task">Initializing Varanasi 3D World</span>
        <b><span id="pre-pct">0</span>%</b>
      </div>
    </div>
  </div>`;
}
