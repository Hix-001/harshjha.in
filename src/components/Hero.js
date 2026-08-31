export function renderHero() {
  return `
    <section class="hero" id="hero" data-cam="0">
      <div class="hero-top">
        <div class="eyebrow" data-rv="fade">
          <span class="dot"></span>
          <span>B.Tech CSE Undergraduate // Portfolio 2026</span>
        </div>
        <h1 class="display h-hero">
          <span class="mask-line"><span>Where Algorithmic Logic</span></span>
          <span class="mask-line"><span>Meets River Stillness &</span></span>
          <span class="mask-line"><span>Clean Engineering</span></span>
        </h1>
        <p class="body-lg hero-sub" data-rv="up">
          I'm <strong>Harsh Jha</strong>, a 2nd year Computer Science & Engineering student building modern full-stack architectures, interactive 3D WebGL worlds, and rigorous algorithmic systems.
        </p>
      </div>

      <!-- Floating peek card -->
      <a href="#pathways" class="peek" aria-label="View featured builds">
        <span class="peek-fr"></span>
        <span class="peek-play">
          <svg viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="23" cy="23" r="22" stroke="rgba(216,177,138,0.35)" stroke-width="1.2"/>
            <polygon points="19,15 31,23 19,31" fill="#d6b28d"/>
          </svg>
        </span>
        <span class="peek-cap">
          <b>FEATURED BUILDS</b>
          <i>EXPLORE</i>
        </span>
      </a>

      <div class="hero-side" aria-hidden="true">
        <span class="v jp">ज्ञानेन दीप्तं विश्वम्</span>
      </div>

      <div class="hero-spacer"></div>

      <!-- Hero Footer Index -->
      <div class="hero-foot">
        <div class="hero-cue">
          <span>Scroll to descend the ghats</span>
          <span class="track"><i></i></span>
        </div>
        <nav class="chapters" aria-label="Portfolio sections">
          <div class="chip" data-goto="1">
            <span class="num">01</span>
            <span class="tx">
              <b>About Me</b>
              <p>साधना · Foundations & Academic Journey</p>
            </span>
          </div>
          <div class="chip" data-goto="2">
            <span class="num">02</span>
            <span class="tx">
              <b>Projects</b>
              <p>कृति · Full-Stack & 3D Systems</p>
            </span>
          </div>
          <div class="chip" data-goto="3">
            <span class="num">03</span>
            <span class="tx">
              <b>Tech Stack</b>
              <p>विद्या · Languages & Core Tools</p>
            </span>
          </div>
          <div class="chip" data-goto="4">
            <span class="num">04</span>
            <span class="tx">
              <b>Connect</b>
              <p>संवाद · Collaborations & Dialogue</p>
            </span>
          </div>
        </nav>
      </div>
    </section>`;
}
