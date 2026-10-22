// Efekty interaktywne strony. Każdy działa tylko przy włączonych animacjach w systemie
// (prefers-reduced-motion: no-preference). Bez nich strona wygląda tak samo, tylko spokojniej.

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

/* ---------- 1. Odszyfrowywanie tekstu nagłówków ---------- */

const GLYPHS = "!<>-_\\/[]{}=+*^?#01";

function scramble(el: HTMLElement) {
  // Animujemy tylko pierwszy węzeł tekstowy (np. bez zielonej kropki w <span>)
  const node = [...el.childNodes].find((n) => n.nodeType === Node.TEXT_NODE && n.textContent?.trim());
  if (!node || el.dataset.scrambled) return;
  el.dataset.scrambled = "true";

  const final = node.textContent ?? "";
  const duration = Math.min(1100, 350 + final.length * 35);
  const start = performance.now();

  // Każdy znak "zatrzaskuje się" w swoim czasie, od lewej do prawej
  const lockAt = [...final].map((_, i) => (i / final.length) * duration * 0.75 + Math.random() * duration * 0.25);

  const frame = (now: number) => {
    const t = now - start;
    let out = "";
    for (let i = 0; i < final.length; i++) {
      const ch = final[i];
      out += ch === " " || t >= lockAt[i] ? ch : GLYPHS[(Math.random() * GLYPHS.length) | 0];
    }
    node.textContent = out;
    if (t < duration) requestAnimationFrame(frame);
    else node.textContent = final;
  };
  requestAnimationFrame(frame);
}

function initScramble() {
  const targets = document.querySelectorAll<HTMLElement>("[data-scramble]");
  // Czytniki ekranu dostają od razu pełny tekst
  targets.forEach((el) => el.setAttribute("aria-label", el.textContent?.trim() ?? ""));

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        window.setTimeout(() => scramble(el), Number(el.dataset.scrambleDelay ?? 0));
        io.unobserve(el);
      }
    },
    { rootMargin: "0px 0px -10% 0px" }
  );
  targets.forEach((el) => io.observe(el));
}

/* ---------- 2. Żywa sieć w tle hero ---------- */

interface Node2D { x: number; y: number; vx: number; vy: number }

function initNetwork() {
  const canvas = document.querySelector<HTMLCanvasElement>("[data-network]");
  const ctx = canvas?.getContext("2d");
  if (!canvas || !ctx) return;

  const LINK = 140; // maks. odległość połączenia między węzłami
  const MOUSE = 190; // zasięg "przyciągania" linii do kursora
  let nodes: Node2D[] = [];
  let width = 0;
  let height = 0;
  let running = false;
  let visible = true;
  const mouse = { x: -9999, y: -9999 };

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Gęstość zależna od powierzchni: mniej węzłów na telefonie
    const count = Math.max(18, Math.min(85, Math.round((width * height) / 15000)));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
    }));
  };

  const draw = () => {
    ctx.clearRect(0, 0, width, height);

    for (const n of nodes) {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > width) n.vx *= -1;
      if (n.y < 0 || n.y > height) n.vy *= -1;

      // Węzły blisko kursora delikatnie się od niego odsuwają
      const dx = n.x - mouse.x;
      const dy = n.y - mouse.y;
      const d = Math.hypot(dx, dy);
      if (d < 90 && d > 0) {
        n.x += (dx / d) * 0.9;
        n.y += (dy / d) * 0.9;
      }
    }

    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < LINK) {
          ctx.strokeStyle = `rgba(157, 167, 179, ${(1 - d / LINK) * 0.3})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      // Połączenia z kursorem w kolorze akcentu
      const dm = Math.hypot(a.x - mouse.x, a.y - mouse.y);
      if (dm < MOUSE) {
        ctx.strokeStyle = `rgba(126, 231, 135, ${(1 - dm / MOUSE) * 0.7})`;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
      }

      ctx.fillStyle = dm < MOUSE ? "rgba(126, 231, 135, 1)" : "rgba(157, 167, 179, 0.7)";
      ctx.beginPath();
      ctx.arc(a.x, a.y, dm < MOUSE ? 2.2 : 1.6, 0, Math.PI * 2);
      ctx.fill();
    }

    if (running) requestAnimationFrame(draw);
  };

  const start = () => {
    if (running || !visible || document.hidden) return;
    running = true;
    requestAnimationFrame(draw);
  };
  const stop = () => (running = false);

  // Animacja działa tylko, gdy hero jest widoczne i karta przeglądarki jest aktywna
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    visible ? start() : stop();
  }).observe(canvas);
  document.addEventListener("visibilitychange", () => (document.hidden ? stop() : start()));

  window.addEventListener(
    "pointermove",
    (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    },
    { passive: true }
  );
  document.addEventListener("pointerleave", () => {
    mouse.x = mouse.y = -9999;
  });

  let resizeTimer: number | undefined;
  window.addEventListener("resize", () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(resize, 150);
  });

  resize();
  canvas.classList.add("is-ready");
  start();
}

/* ---------- 3. Karty: podświetlenie za kursorem + przechylenie 3D ---------- */

function initCards() {
  if (!finePointer.matches) return;
  const MAX_TILT = 5;

  document.querySelectorAll<HTMLElement>(".card").forEach((card) => {
    let frame = 0;

    card.addEventListener("pointermove", (e) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        card.style.setProperty("--mx", `${px * 100}%`);
        card.style.setProperty("--my", `${py * 100}%`);
        card.style.transform = `perspective(900px) rotateX(${(0.5 - py) * MAX_TILT}deg) rotateY(${(px - 0.5) * MAX_TILT}deg)`;
      });
    });

    card.addEventListener("pointerleave", () => {
      cancelAnimationFrame(frame);
      card.style.transform = "";
    });
  });
}

/* ---------- 4. Przyciski "magnetyczne" ---------- */

function initMagnetic() {
  if (!finePointer.matches) return;
  const STRENGTH = 0.3;
  const MAX = 10; // maks. przesunięcie w px, także dla szerokich przycisków
  const clamp = (v: number) => Math.max(-MAX, Math.min(MAX, v));

  document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((btn) => {
    btn.addEventListener("pointermove", (e) => {
      const r = btn.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) * STRENGTH;
      const y = (e.clientY - (r.top + r.height / 2)) * STRENGTH;
      btn.style.transform = `translate(${clamp(x)}px, ${clamp(y)}px)`;
    });
    btn.addEventListener("pointerleave", () => (btn.style.transform = ""));
  });
}

/* ---------- 5. Konfetti po skopiowaniu e-maila ---------- */

function burst(origin: HTMLElement) {
  const r = origin.getBoundingClientRect();
  const cx = r.left + r.width / 2;
  const cy = r.top + r.height / 2;
  const colors = ["#7ee787", "#e6edf3", "#56d364", "#a5f3a9"];
  const COUNT = 26;

  for (let i = 0; i < COUNT; i++) {
    const p = document.createElement("span");
    p.className = "confetti";
    p.style.left = `${cx}px`;
    p.style.top = `${cy}px`;
    p.style.background = colors[i % colors.length];
    document.body.append(p);

    const angle = (Math.PI * 2 * i) / COUNT + Math.random() * 0.4;
    const dist = 55 + Math.random() * 60;
    p.animate(
      [
        { transform: "translate(-50%, -50%) scale(1)", opacity: 1 },
        {
          transform: `translate(calc(-50% + ${Math.cos(angle) * dist}px), calc(-50% + ${Math.sin(angle) * dist + 20}px)) rotate(${Math.random() * 360}deg) scale(0.4)`,
          opacity: 0,
        },
      ],
      { duration: 800 + Math.random() * 400, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }
    ).onfinish = () => p.remove();
  }
}

function initConfetti() {
  document.addEventListener("copy-success", (e) => {
    const target = (e as CustomEvent<HTMLElement>).detail;
    if (target) burst(target);
  });
}

/* ---------- Start ---------- */

// Po zakończeniu animacji wejścia karty zdejmujemy ją, żeby przechylenie 3D mogło działać
document.addEventListener("animationend", (e) => {
  const el = e.target as HTMLElement;
  if (el.classList?.contains("reveal-item")) el.classList.add("revealed");
});

if (!reduceMotion.matches) {
  initScramble();
  initNetwork();
  initCards();
  initMagnetic();
  initConfetti();
}
