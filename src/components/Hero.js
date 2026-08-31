export function renderHero() {
  return `
    <section class="hero" id="hero" data-cam="0">
      <div class="hero-top">
        <div class="eyebrow" data-rv="fade">
          <span class="dot"></span>
          <span>B.Tech CSE Undergraduate // Computational Architecture</span>
        </div>
        <h1 class="display h-hero">
          <span class="mask-line"><span>Where Recursive Logic</span></span>
          <span class="mask-line"><span>Meets Timeless Digital</span></span>
          <span class="mask-line"><span>Stone Architecture</span></span>
        </h1>
        <p class="body-lg hero-sub" data-rv="up">
          I'm <strong>Harsh Jha</strong>, a 2nd year Computer Science & Engineering student crafting resilient full-stack systems, interactive 3D WebGL worlds, and rigorous algorithmic foundations.
        </p>
      </div>

      <!-- Floating peek card -->
      <a href="#pathways" class="peek" aria-label="View featured builds">
        <span class="peek-fr"></span>
        <span class="peek-play">
          <svg viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="23" cy="23" r="22" stroke="rgba(216,177,138,0.3)" stroke-width="1.2"/>
            <polygon points="19,15 31,23 19,31" fill="#d8b18a"/>
          </svg>
        </span>
        <span class="peek-cap">
          <b>FEATURED BUILDS</b>
          <i>EXPLORE</i>
        </span>
      </a>

      <div class="hero-side" aria-hidden="true">
        <span class="v jp">स्थापत्य · प्रज्ञा · तन्त्रम्</span>
      </div>

      <div class="hero-spacer"></div>

      <!-- Hero Footer Index -->
      <div class="hero-foot">
        <div class="hero-cue">
          <span>Scroll to descend the stepwell</span>
          <span class="track"><i></i></span>
        </div>
        <nav class="chapters" aria-label="Portfolio sections">
          <div class="chip" data-goto="1">
            <span class="num">01</span>
            <span class="tx">
              <b>About Me</b>
              <p>संरचना · Foundations & Discipline</p>
            </span>
          </div>
          <div class="chip" data-goto="2">
            <span class="num">02</span>
            <span class="tx">
              <b>Projects</b>
              <p>निर्माण · Full-Stack & 3D Systems</p>
            </span>
          </div>
          <div class="chip" data-goto="3">
            <span class="num">03</span>
            <span class="tx">
              <b>Tech Stack</b>
              <p>कौशल · Languages & Tools</p>
            </span>
          </div>
          <div class="chip" data-goto="4">
            <span class="num">04</span>
            <span class="tx">
              <b>Connect</b>
              <p>सम्पर्क · Inquiries & Dialogue</p>
            </span>
          </div>
        </nav>
      </div>
    </section>`;
}
