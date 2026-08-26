export function renderHero() {
  return `
    <section class="hero" id="hero" data-cam="0">
      <div class="hero-top">
        <div class="eyebrow" data-rv="fade">
          <span class="dot"></span>
          <span>B.Tech CSE Undergraduate // Portfolio 2026</span>
        </div>
        <h1 class="display h-hero">
          <span class="mask-line"><span>Where Logic Meets</span></span>
          <span class="mask-line"><span>Digital Stillness &</span></span>
          <span class="mask-line"><span>Clean Engineering</span></span>
        </h1>
        <p class="body-lg hero-sub" data-rv="up">
          I'm <strong>Harsh Jha</strong>, a 2nd year Computer Science & Engineering student building modern full-stack systems, interactive 3D WebGL experiences, and robust algorithmic architectures.
        </p>
      </div>

      <!-- Floating peek card -->
      <a href="#pathways" class="peek" aria-label="View featured projects">
        <span class="peek-fr"></span>
        <span class="peek-play">
          <svg viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="23" cy="23" r="22" stroke="rgba(223,231,224,0.3)" stroke-width="1.2"/>
            <polygon points="19,15 31,23 19,31" fill="#dfe7e0"/>
          </svg>
        </span>
        <span class="peek-cap">
          <b>FEATURED BUILDS</b>
          <i>EXPLORE</i>
        </span>
      </a>

      <div class="hero-side" aria-hidden="true">
        <span class="v jp">情報科学技術 · 開発者</span>
      </div>

      <div class="hero-spacer"></div>

      <!-- Hero Footer Index -->
      <div class="hero-foot">
        <div class="hero-cue">
          <span>Scroll to traverse</span>
          <span class="track"><i></i></span>
        </div>
        <nav class="chapters" aria-label="Portfolio sections">
          <div class="chip" data-goto="1">
            <span class="num">01</span>
            <span class="tx">
              <b>About Me</b>
              <p>Foundations & Academic Journey</p>
            </span>
          </div>
          <div class="chip" data-goto="2">
            <span class="num">02</span>
            <span class="tx">
              <b>Projects</b>
              <p>Full-Stack & WebGL Systems</p>
            </span>
          </div>
          <div class="chip" data-goto="3">
            <span class="num">03</span>
            <span class="tx">
              <b>Tech Stack</b>
              <p>Languages & Core CS Tools</p>
            </span>
          </div>
          <div class="chip" data-goto="4">
            <span class="num">04</span>
            <span class="tx">
              <b>Connect</b>
              <p>Collaborations & Inquiries</p>
            </span>
          </div>
        </nav>
      </div>
    </section>`;
}
