export function renderProjects() {
  return `
    <section class="sec" id="pathways" data-cam="2">
      <div class="sec-head">
        <span class="k"><b>02</b> / SELECTED WORKS</span>
        <span class="rule"></span>
        <span class="k jp">制作物 · FEATURED BUILDS</span>
      </div>
      <div class="cards">
        <!-- Project 1 -->
        <article class="card" data-rv="up">
          <div class="card-fr">
            <span class="glow" style="--gx:65%; --gy:32%; --gr:24px; --gc1:#ff5a3c; --gc2:#e0231c; --gt:4.2s; --gt2:5.8s"></span>
            <div class="card-lab">
              <div>
                <b>Nexus Workspace</b>
                <div class="card-meta">Full-Stack Web App · React / Node / Postgres</div>
              </div>
              <span class="jp">全体構築</span>
            </div>
            <span class="card-ar">
              <svg viewBox="0 0 26 26" fill="none">
                <circle cx="13" cy="13" r="12" stroke="#dfe7e0" stroke-width="1"/>
                <path d="M9 17L17 9M17 9H11M17 9V15" stroke="#dfe7e0" stroke-width="1.4"/>
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
            <span class="glow glow--flame" style="--gx:50%; --gy:68%; --gr:22px; --gc1:#ffba42; --gc2:#e0231c; --gt:2.6s; --gt2:3.8s"></span>
            <div class="card-lab">
              <div>
                <b>AI Code Mentor</b>
                <div class="card-meta">AI Tool · Python / Gemini / Fastify</div>
              </div>
              <span class="jp">人工知能</span>
            </div>
            <span class="card-ar">
              <svg viewBox="0 0 26 26" fill="none">
                <circle cx="13" cy="13" r="12" stroke="#dfe7e0" stroke-width="1"/>
                <path d="M9 17L17 9M17 9H11M17 9V15" stroke="#dfe7e0" stroke-width="1.4"/>
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
            <span class="glow" style="--gx:44%; --gy:28%; --gr:28px; --gc1:#ff4a36; --gc2:#b81410; --gt:5.1s; --gt2:7.2s"></span>
            <div class="card-lab">
              <div>
                <b>Chrono 3D Engine</b>
                <div class="card-meta">Creative Dev · Three.js / WebGL / GLSL</div>
              </div>
              <span class="jp">空間表現</span>
            </div>
            <span class="card-ar">
              <svg viewBox="0 0 26 26" fill="none">
                <circle cx="13" cy="13" r="12" stroke="#dfe7e0" stroke-width="1"/>
                <path d="M9 17L17 9M17 9H11M17 9V15" stroke="#dfe7e0" stroke-width="1.4"/>
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
