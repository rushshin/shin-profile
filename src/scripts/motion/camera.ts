export interface ViewBox {
  x: number;
  y: number;
  w: number;
  h: number;
}

export function easeOutQuint(t: number): number {
  return 1 - Math.pow(1 - t, 5);
}

// Animates an SVG viewBox smoothly and respects prefers-reduced-motion.
export function animateViewBox(
  svg: SVGSVGElement,
  from: ViewBox,
  to: ViewBox,
  durationMs = 460,
  reduced = false
): () => void {
  const apply = (vb: ViewBox) => {
    svg.setAttribute('viewBox', `${vb.x.toFixed(1)} ${vb.y.toFixed(1)} ${vb.w.toFixed(1)} ${vb.h.toFixed(1)}`);
  };

  if (reduced || durationMs <= 0) {
    apply(to);
    return () => {};
  }

  let rafId = 0;
  const start = performance.now();

  const step = (now: number) => {
    const t = Math.min((now - start) / durationMs, 1);
    const e = easeOutQuint(t);
    apply({
      x: from.x + (to.x - from.x) * e,
      y: from.y + (to.y - from.y) * e,
      w: from.w + (to.w - from.w) * e,
      h: from.h + (to.h - from.h) * e,
    });
    if (t < 1) {
      rafId = requestAnimationFrame(step);
    }
  };

  rafId = requestAnimationFrame(step);
  return () => cancelAnimationFrame(rafId);
}

export function parseViewBox(svg: SVGSVGElement): ViewBox {
  const parts = (svg.getAttribute('viewBox') || '0 0 1000 360').split(/\s+/).map(Number);
  return { x: parts[0] || 0, y: parts[1] || 0, w: parts[2] || 1000, h: parts[3] || 360 };
}
