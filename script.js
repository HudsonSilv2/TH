/* =====================================================================
   NOSSA HISTÓRIA — script.js
   Tudo que você provavelmente vai querer editar está no objeto CONFIG
   logo abaixo. O resto do arquivo só usa esses dados.
   ===================================================================== */

const CONFIG = {
  // ---------- pessoas & data ----------
  herName: "Taynara",
  myName: "Hudson",
  relationshipStart: "2022-12-02", // AAAA-MM-DD — data em que vocês começaram a namorar

  // ---------- textos da abertura ----------
  openingTitle: "Feliz 3 anos e 7 meses,<br>meu amor.",
  openingSubtitle: "Cada dia ao seu lado escreve uma linha nova da nossa história.",
  openButtonLabel: "Abrir nossa história",

  // ---------- cartas (edite, adicione ou remova livremente) ----------
  cardMessages: [
    "Desde que você chegou, até os dias comuns ficaram especiais.",
    "3 anos e 7 meses parecem muito, mas perto do que eu quero viver com você, ainda é só o começo.",
    "Seu sorriso continua sendo uma das minhas partes favoritas do mundo.",
    "A cada dia que passa, eu me apaixono mais por você.",
    "Eu amo cada detalhe seu, até aqueles que você nem percebe.",
    "...E te amar do jeito que eu imaginei..."
  ],

  // ---------- linha do tempo ----------
  timeline: [
    { date: "o começo", text: "O dia em que tudo começou... Sempre pensei que por algum motivo não daria certo, então, um dia resolvi falar o que eu realmente sentia, e fiquei alivido pelo sentimento ser correspondido." },
    { date: "um clique no tempo", text: "Minha foto favorita", image: "assets/foto14.jpg" },
    { date: "inesquecível", text: "Um momento que nunca vou esquecer", image: "assets/foto1.jpg", smallText: "A perfeição dessa recordação que tenho de você!!" }, 
    { date: "hoje", text: "Hoje: 3 anos e 7 meses de nós", smallText: "e que venham muitos mais!" }
  ],

  // ---------- galeria (troque pelos caminhos reais das suas fotos) ----------
  galleryPhotos: [
    { src: "assets/foto2.jpg", caption: "foto 2" },
    { src: "assets/foto3.jpg", caption: "foto 3" },
    { src: "assets/foto4.jpg", caption: "foto 4" },
    { src: "assets/foto5.jpg", caption: "foto 5" },
    { src: "assets/foto6.jpg", caption: "foto 6" },
    { src: "assets/foto7.jpg", caption: "foto 7" },
    { src: "assets/foto8.jpg", caption: "foto 8" },
    { src: "assets/foto9.jpg", caption: "foto 9" },
    { src: "assets/foto10.jpg", caption: "foto 10" },
    { src: "assets/foto11.jpg", caption: "foto 11" },
    { src: "assets/foto12.jpg", caption: "foto 12" },
    { src: "assets/foto13.jpg", caption: "foto 13" },
    { src: "assets/foto14.jpg", caption: "foto 14" },
    { src: "assets/foto15.jpg", caption: "foto 15" },
    { src: "assets/foto16.jpg", caption: "foto 16" },

  ],

  // ---------- mensagem secreta ----------
  secretMessage: "Se você chegou até aqui: eu escolheria você de novo em qualquer uma das nossas linhas do tempo possíveis. Te amo, hoje e nos próximos capítulos.",

  // ---------- declaração final ----------
  finalMessage: "Meu amor, obrigado por estar comigo nesses 3 anos e 7 meses. Cada momento ao seu lado me mostra que amar você foi uma das escolhas mais bonitas da minha vida. Que essa seja apenas mais uma página da nossa história.",
  finalSignature: "com todo o meu amor",

  // ---------- música ----------
  musicSrc: "assets/musica.mp3",
  musicVolume: 0.3,

  // ---------- cores do tema (também usadas no fundo 3D) ----------
  theme: {
    burnt: 0xa8543c,
    blush: 0xf4dcdd,
    lilac: 0xc9b7de,
    gold: 0xd6ad7b
  }
};

/* =====================================================================
   PREENCHIMENTO DO CONTEÚDO A PARTIR DO CONFIG
   ===================================================================== */

document.getElementById("opening-title").innerHTML = CONFIG.openingTitle;
document.getElementById("opening-sub").textContent = CONFIG.openingSubtitle;
document.querySelector("#open-btn span").textContent = CONFIG.openButtonLabel;
document.getElementById("secret-text").textContent = CONFIG.secretMessage;
document.getElementById("final-text").textContent = CONFIG.finalMessage;
document.getElementById("final-signature").textContent = `— ${CONFIG.finalSignature}, ${CONFIG.myName}`;

/* ---------- Cartas ---------- */
const cardFrame = document.getElementById("card-frame");
const cardDots = document.getElementById("card-dots");
let currentCard = 0;

CONFIG.cardMessages.forEach((msg, i) => {
  const card = document.createElement("div");
  card.className = "love-card";
  card.textContent = `“${msg}”`;
  cardFrame.appendChild(card);

  const dot = document.createElement("span");
  dot.className = "dot";
  dot.addEventListener("click", () => goToCard(i));
  cardDots.appendChild(dot);
});

const cardEls = cardFrame.querySelectorAll(".love-card");
const dotEls = cardDots.querySelectorAll(".dot");

function renderCards() {
  cardEls.forEach((el, i) => {
    el.classList.remove("active", "prev");
    if (i === currentCard) el.classList.add("active");
    else if (i < currentCard) el.classList.add("prev");
  });
  dotEls.forEach((d, i) => d.classList.toggle("active", i === currentCard));
}

function goToCard(index) {
  currentCard = (index + cardEls.length) % cardEls.length;
  renderCards();
}

document.getElementById("card-next").addEventListener("click", () => goToCard(currentCard + 1));
document.getElementById("card-prev").addEventListener("click", () => goToCard(currentCard - 1));
renderCards();

/* ---------- Timeline ---------- */
const timelineEl = document.getElementById("timeline");
CONFIG.timeline.forEach(item => {
  const el = document.createElement("div");
  el.className = "timeline-item";
  el.innerHTML = `
    <div class="timeline-date">${item.date}</div>
    <div class="timeline-text">${item.text}</div>
    <div class="timeline-image">${item.image ? `<img src="${item.image}" alt="${item.text}">` : ""}</div>
    <div class="timeline-small-text">${item.smallText || ""}</div>
  `;
  timelineEl.appendChild(el);
});

/* ---------- Galeria ---------- */
const galleryGrid = document.getElementById("gallery-grid");
CONFIG.galleryPhotos.forEach((photo, i) => {
  const item = document.createElement("div");
  item.className = "gallery-item";

  const img = document.createElement("img");
  img.src = photo.src;
  img.alt = photo.caption || `foto ${i + 1}`;
  img.loading = "lazy";

  const placeholder = document.createElement("div");
  placeholder.className = "gallery-placeholder";
  placeholder.textContent = photo.caption || "adicione sua foto aqui";

  // se a imagem não existir ainda, mostra o placeholder bonito no lugar
  img.addEventListener("error", () => { img.remove(); });
  img.addEventListener("load", () => { placeholder.remove(); });

  item.appendChild(placeholder);
  item.appendChild(img);
  galleryGrid.appendChild(item);
});

/* ---------- Contador de tempo juntos ---------- */
const startDate = new Date(CONFIG.relationshipStart + "T00:00:00");

function updateCounter() {
  const now = new Date();
  let diffMs = now - startDate;
  if (diffMs < 0) diffMs = 0;

  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();
  let hours = now.getHours() - startDate.getHours();
  let minutes = now.getMinutes() - startDate.getMinutes();
  let seconds = now.getSeconds() - startDate.getSeconds();

  if (seconds < 0) { seconds += 60; minutes--; }
  if (minutes < 0) { minutes += 60; hours--; }
  if (hours < 0) { hours += 24; days--; }
  if (days < 0) {
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    days += prevMonth;
    months--;
  }
  if (months < 0) { months += 12; years--; }

  document.getElementById("c-years").textContent = years;
  document.getElementById("c-months").textContent = months;
  document.getElementById("c-days").textContent = days;
  document.getElementById("c-hours").textContent = hours;
  document.getElementById("c-minutes").textContent = minutes;
  document.getElementById("c-seconds").textContent = seconds;
}

updateCounter();
setInterval(updateCounter, 1000);

/* ---------- Mensagem secreta ---------- */
const secretBtn = document.getElementById("secret-btn");
const secretBox = document.getElementById("secret-box");
secretBtn.addEventListener("click", () => {
  const isOpen = secretBox.classList.toggle("open");
  secretBtn.textContent = isOpen ? "Guardar a mensagem" : "Revelar uma mensagem secreta";
  if (isOpen) spawnHeartRain(18);
});

/* ---------- Chuva de corações ---------- */
const heartRain = document.getElementById("heart-rain");
const heartChars = ["❤", "❥", "♡"];

function spawnHeartRain(count = 30) {
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const heart = document.createElement("span");
      heart.className = "falling-heart";
      heart.textContent = heartChars[Math.floor(Math.random() * heartChars.length)];
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.fontSize = 0.9 + Math.random() * 1.4 + "rem";
      const duration = 3.5 + Math.random() * 3;
      heart.style.animationDuration = duration + "s";
      heartRain.appendChild(heart);
      setTimeout(() => heart.remove(), duration * 1000 + 200);
    }, i * 90);
  }
}

document.getElementById("rain-btn").addEventListener("click", () => spawnHeartRain(35));

/* ---------- Revelação das seções ao rolar ---------- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("in-view");
  });
}, { threshold: 0.18 });

document.querySelectorAll(".section").forEach(sec => revealObserver.observe(sec));

/* =====================================================================
   MÚSICA DE FUNDO
   ===================================================================== */

const music = document.getElementById("bg-music");
music.src = CONFIG.musicSrc;
music.volume = CONFIG.musicVolume;

const musicToggle = document.getElementById("music-toggle");
let musicEnabled = true;

musicToggle.addEventListener("click", () => {
  musicEnabled = !musicEnabled;
  musicToggle.classList.toggle("muted", !musicEnabled);
  if (musicEnabled) {
    music.play().catch(() => {});
  } else {
    music.pause();
  }
});

/* =====================================================================
   ABERTURA -> EXPERIÊNCIA PRINCIPAL
   ===================================================================== */

const openingScreen = document.getElementById("opening");
const experience = document.getElementById("experience");

document.getElementById("open-btn").addEventListener("click", () => {
  openingScreen.classList.add("hidden");
  experience.classList.add("visible");

  // música só começa após interação do usuário, como pedido
  music.play().catch(() => {
    // se o arquivo não existir ainda, falha silenciosamente
  });

  // dispara a formação do coração e libera as partículas para flutuar
  if (window.__triggerHeartFormation) window.__triggerHeartFormation();

  setTimeout(() => spawnHeartRain(12), 400);
});

/* =====================================================================
   FUNDO ANIMADO COM THREE.JS
   Partículas suaves que, ao clicar em "abrir", se organizam
   brevemente em forma de coração e depois voltam a flutuar livres.
   ===================================================================== */

(function initBackground() {
  const canvas = document.getElementById("bg-canvas");
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.z = 22;

  const isMobile = window.innerWidth < 700;
  const PARTICLE_COUNT = isMobile ? 220 : 420;

  // ---------- gera uma textura circular suave para as partículas (efeito "luz") ----------
  function makeGlowTexture() {
    const size = 128;
    const c = document.createElement("canvas");
    c.width = c.height = size;
    const ctx = c.getContext("2d");
    const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    grad.addColorStop(0, "rgba(255,255,255,1)");
    grad.addColorStop(0.4, "rgba(255,255,255,0.5)");
    grad.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, size, size);
    return new THREE.CanvasTexture(c);
  }
  const glowTexture = makeGlowTexture();

  // ---------- calcula pontos em forma de coração (fórmula paramétrica) ----------
  function heartPosition(t, scale) {
    // t vai de 0 a 2π
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
    return { x: (x * scale) / 16, y: (y * scale) / 16 };
  }

  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(PARTICLE_COUNT * 3);
  const homePositions = []; // posições de "flutuação livre" para onde as partículas relaxam
  const heartPositions = []; // posições-alvo do coração

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const t = (i / PARTICLE_COUNT) * Math.PI * 2;
    const jitter = 0.35;
    const hp = heartPosition(t, 8.5);
    heartPositions.push(
      new THREE.Vector3(
        hp.x + (Math.random() - 0.5) * jitter,
        hp.y + (Math.random() - 0.5) * jitter + 1.5,
        (Math.random() - 0.5) * 3
      )
    );

    const free = new THREE.Vector3(
      (Math.random() - 0.5) * 34,
      (Math.random() - 0.5) * 22,
      (Math.random() - 0.5) * 14 - 4
    );
    homePositions.push(free);

    // começa já espalhado (fundo discreto antes do clique)
    positions[i * 3] = free.x;
    positions[i * 3 + 1] = free.y;
    positions[i * 3 + 2] = free.z;
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  const colorPalette = [CONFIG.theme.burnt, CONFIG.theme.blush, CONFIG.theme.lilac, CONFIG.theme.gold];
  const colors = new Float32Array(PARTICLE_COUNT * 3);
  const tmpColor = new THREE.Color();
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    tmpColor.set(colorPalette[i % colorPalette.length]);
    colors[i * 3] = tmpColor.r;
    colors[i * 3 + 1] = tmpColor.g;
    colors[i * 3 + 2] = tmpColor.b;
  }
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size: isMobile ? 0.55 : 0.7,
    map: glowTexture,
    transparent: true,
    opacity: 0.75,
    vertexColors: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  });

  const points = new THREE.Points(geometry, material);
  scene.add(points);

  // ---------- estado de animação ----------
  let mode = "float"; // "float" | "toHeart" | "heart" | "toFloat"
  let modeStart = 0;
  const HEART_HOLD_MS = 2600;
  const TRANSITION_MS = 1800;

  window.__triggerHeartFormation = function () {
    mode = "toHeart";
    modeStart = performance.now();
  };

  const clock = new THREE.Clock();

  function easeInOutCubic(x) {
    return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
  }

  function animate() {
    requestAnimationFrame(animate);
    const elapsed = clock.getElapsedTime();
    const pos = geometry.attributes.position.array;
    const now = performance.now();

    let heartBlend = null;
    if (mode === "toHeart") {
      const p = Math.min(1, (now - modeStart) / TRANSITION_MS);
      heartBlend = easeInOutCubic(p);
      if (p >= 1) { mode = "heart"; modeStart = now; }
    } else if (mode === "heart") {
      heartBlend = 1;
      if (now - modeStart > HEART_HOLD_MS) { mode = "toFloat"; modeStart = now; }
    } else if (mode === "toFloat") {
      const p = Math.min(1, (now - modeStart) / TRANSITION_MS);
      heartBlend = 1 - easeInOutCubic(p);
      if (p >= 1) { mode = "float"; }
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const free = homePositions[i];
      const drift = 0.6;
      const fx = free.x + Math.sin(elapsed * 0.15 + i) * drift;
      const fy = free.y + Math.cos(elapsed * 0.13 + i * 1.3) * drift;
      const fz = free.z;

      if (heartBlend === null) {
        pos[i * 3] = fx;
        pos[i * 3 + 1] = fy;
        pos[i * 3 + 2] = fz;
      } else {
        const hp = heartPositions[i];
        pos[i * 3] = fx + (hp.x - fx) * heartBlend;
        pos[i * 3 + 1] = fy + (hp.y - fy) * heartBlend;
        pos[i * 3 + 2] = fz + (hp.z - fz) * heartBlend;
      }
    }
    geometry.attributes.position.needsUpdate = true;

    points.rotation.y = elapsed * 0.02;

    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
})();
