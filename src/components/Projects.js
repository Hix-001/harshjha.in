export function renderProjects() {
  return `
    <section class="sec" id="pathways" data-cam="2">
      <div class="sec-head">
        <span class="k"><b>02</b> / SELECTED WORKS</span>
        <span class="rule"></span>
        <span class="k jp">कृति · FEATURED BUILDS</span>
      </div>
      <div class="cards">
        <!-- Project 1 -->
        <article class="card" data-rv="up">
          <div class="card-fr">
            <span class="glow" style="--gx:65%; --gy:32%; --gr:24px; --gc1:#ff7a26; --gc2:#d42b2b; --gt:4.2s; --gt2:5.8s"></span>
            <div class="card-lab">
              <div>
                <b>Nexus Workspace</b>
                <div class="card-meta">Full-Stack Web App · React / Node / Postgres</div>
              </div>
              <span class="jp">पूर्ण तन्त्र</span>
            </div>
            <span class="card-ar">
              <svg viewBox="0 0 26 26" fill="none">
                <circle cx="13" cy="13" r="12" stroke="#d6b28d" stroke-width="1"/>
                <path d="M9 17L17 9M17 9H11M17 9V15" stroke="#d6b28d" stroke-width="1.4"/>
              </svg>
            </span>
          </div>
          <div class="card-meta">
            <span>Collaborative Realtime Workspace</span>
            <span>2026</span>
          </div>
        </article>

        <!-- Project 2 -->
        <article class="card" data-rv="up">
          <div class="card-fr">
            <span class="glow glow--flame" style="--gx:50%; --gy:68%; --gr:22px; --gc1:#e5a93c; --gc2:#c85a2b; --gt:2.6s; --gt2:3.8s"></span>
            <div class="card-lab">
              <div>
                <b>AI Code Mentor</b>
                <div class="card-meta">AI Tool · Python / Gemini / Fastify</div>
              </div>
              <span class="jp">कृत्रिम मेधा</span>
            </div>
            <span class="card-ar">
              <svg viewBox="0 0 26 26" fill="none">
                <circle cx="13" cy="13" r="12" stroke="#d6b28d" stroke-width="1"/>
                <path d="M9 17L17 9M17 9H11M17 9V15" stroke="#d6b28d" stroke-width="1.4"/>
              </svg>
            </span>
          </div>
          <div class="card-meta">
            <span>Contextual Syntax & Logic Assistant</span>
            <span>2026</span>
          </div>
        </article>

        <!-- Project 3 -->
        <article class="card" data-rv="up">
          <div class="card-fr">
            <span class="glow" style="--gx:44%; --gy:28%; --gr:28px; --gc1:#ff8c26; --gc2:#9e3d2c; --gt:5.1s; --gt2:7.2s"></span>
            <div class="card-lab">
              <div>
                <b>Chrono 3D Engine</b>
                <div class="card-meta">Creative Dev · Three.js / WebGL / Shaders</div>
              </div>
              <span class="jp">आकाशीय रचना</span>
            </div>
            <span class="card-ar">
              <svg viewBox="0 0 26 26" fill="none">
                <circle cx="13" cy="13" r="12" stroke="#d6b28d" stroke-width="1"/>
                <path d="M9 17L17 9M17 9H11M17 9V15" stroke="#d6b28d" stroke-width="1.4"/>
              </svg>
            </span>
          </div>
          <div class="card-meta">
            <span>Procedural Shaders & Audio Atmospheres</span>
            <span>2025</span>
          </div>
        </article>
      </div>
    </section>`;
}
