export function renderAbout() {
  return `
    <section class="sec" id="gate" data-cam="1">
      <div class="sec-head">
        <span class="k"><b>01</b> / ABOUT ME</span>
        <span class="rule"></span>
        <span class="k jp">探求心 · THE APPROACH</span>
      </div>
      <div class="gate-grid">
        <div>
          <h2 class="display h-sec" data-rv="up">
            Curiosity-driven Engineering with Precision
          </h2>
        </div>
        <div class="gate-copy">
          <p class="lead" data-rv="up">
            As a 2nd year Computer Science & Engineering undergraduate, I immerse myself in the fundamentals of computing — combining theoretical rigor with hands-on modern software creation.
          </p>
          <p class="body" data-rv="up">
            From mastering Data Structures & Algorithms and Object-Oriented paradigms to designing intuitive full-stack web applications and WebGL interactive shaders, I strive for clean, maintainable code and exceptional user experience.
          </p>
          <p class="body" data-rv="up">
            Whether architecting scalable backend APIs, optimizing rendering pipelines, or tackling competitive algorithmic challenges, I am constantly learning, shipping, and refining my technical craft.
          </p>
          <a href="https://github.com/Hix-001" target="_blank" rel="noreferrer" class="arrowlink" data-rv="up">
            <span>Explore GitHub Profile</span>
            <span class="ar">
              <svg viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 10.5L10.5 2.5M10.5 2.5H4.5M10.5 2.5V8.5" stroke="#dfe7e0" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </a>
        </div>
      </div>
      <div class="gate-stats" data-rv="up">
        <div>
          <b class="num">2ND YR</b>
          <span>CSE Undergraduate</span>
        </div>
        <div>
          <b class="num">15+</b>
          <span>Projects & Builds</span>
        </div>
        <div>
          <b class="num">DSA & OOP</b>
          <span>Core Foundations</span>
        </div>
        <div>
          <b class="num">OPEN SOURCE</b>
          <span>Continuous Learner</span>
        </div>
      </div>
    </section>`;
}
