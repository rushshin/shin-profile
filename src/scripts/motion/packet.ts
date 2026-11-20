// Drives a single DPR-capped Canvas 2D ambient packet overlay, paused when offscreen.
export function mountPacketCanvas(canvas: HTMLCanvasElement, reduced: boolean): void {
  if (reduced) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = 0;
  let height = 0;
  let active = true;
  let rafId = 0;

  const particles = Array.from({ length: 18 }, (_, i) => ({
    x: Math.random(),
    y: (i + 0.5) / 18,
    speed: 0.0006 + Math.random() * 0.0012,
    r: 1.1 + Math.random() * 1.4,
    alpha: 0.14 + Math.random() * 0.25,
  }));

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  resize();
  window.addEventListener('resize', resize, { passive: true });

  const updateActive = () => {
    active = !document.hidden;
    if (active && !rafId) {
      rafId = requestAnimationFrame(tick);
    }
  };
  document.addEventListener('visibilitychange', updateActive);

  const tick = () => {
    rafId = 0;
    if (!active) return;

    ctx.clearRect(0, 0, width, height);
    for (const p of particles) {
      p.y += p.speed;
      if (p.y > 1.02) {
        p.y = -0.02;
        p.x = Math.random();
      }
      const px = p.x * width;
      const py = p.y * height;
      ctx.beginPath();
      ctx.arc(px, py, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(62, 230, 255, ${p.alpha})`;
      ctx.fill();
    }
    rafId = requestAnimationFrame(tick);
  };

  rafId = requestAnimationFrame(tick);
}
