import * as THREE from 'three';

// Renders an ascending 3D architectural platform horizon with 5 bridged nodes.
export function mountScene3D(container: HTMLElement, reduced: boolean): void {
  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
  } catch {
    return;
  }

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x0a0d12, 0.042);

  const camera = new THREE.PerspectiveCamera(46, container.clientWidth / Math.max(container.clientHeight, 1), 0.1, 100);
  camera.position.set(0, 4.2, 14.5);
  camera.lookAt(0, 0.8, 0);

  const world = new THREE.Group();
  scene.add(world);

  // Blueprint ground plane
  const grid = new THREE.GridHelper(36, 36, 0x1b3448, 0x11202e);
  grid.position.y = -1.8;
  world.add(grid);

  // 5 ascending platform monoliths echoing the 5 career stages
  const specs = [
    { x: -6.4, z: 1.6, h: 1.4, color: 0x3ee6ff },
    { x: -3.2, z: 0.4, h: 2.1, color: 0x3ee6ff },
    { x: 0.0, z: -0.6, h: 2.7, color: 0x3ee6ff },
    { x: 3.2, z: -0.2, h: 3.4, color: 0xffb547 },
    { x: 6.4, z: -1.4, h: 4.3, color: 0x5cf29a },
  ];

  const tops: THREE.Vector3[] = [];
  const beacons: THREE.Mesh[] = [];

  specs.forEach((s) => {
    const boxGeo = new THREE.BoxGeometry(1.15, s.h, 1.15);
    const wire = new THREE.WireframeGeometry(boxGeo);
    const mat = new THREE.LineBasicMaterial({ color: s.color, transparent: true, opacity: 0.28 });
    const mesh = new THREE.LineSegments(wire, mat);
    mesh.position.set(s.x, -1.8 + s.h / 2, s.z);
    world.add(mesh);

    const top = new THREE.Vector3(s.x, -1.8 + s.h, s.z);
    tops.push(top);

    const dotGeo = new THREE.SphereGeometry(0.11, 12, 12);
    const dotMat = new THREE.MeshBasicMaterial({ color: s.color, transparent: true, opacity: 0.85 });
    const dot = new THREE.Mesh(dotGeo, dotMat);
    dot.position.copy(top);
    world.add(dot);
    beacons.push(dot);
  });

  // Glowing parabolic bridges connecting consecutive platform monoliths
  for (let i = 0; i < tops.length - 1; i++) {
    const a = tops[i];
    const b = tops[i + 1];
    const mid = new THREE.Vector3((a.x + b.x) / 2, Math.max(a.y, b.y) + 1.1, (a.z + b.z) / 2);
    const curve = new THREE.QuadraticBezierCurve3(a, mid, b);
    const pts = curve.getPoints(28);
    const lineGeo = new THREE.BufferGeometry().setFromPoints(pts);
    const lineMat = new THREE.LineBasicMaterial({
      color: i >= 2 ? 0xffb547 : 0x3ee6ff,
      transparent: true,
      opacity: 0.42,
    });
    world.add(new THREE.Line(lineGeo, lineMat));
  }

  let targetMx = 0;
  let targetMy = 0;
  let curMx = 0;
  let curMy = 0;
  let scrollNorm = 0;

  const onPointerMove = (e: PointerEvent) => {
    targetMx = (e.clientX / window.innerWidth - 0.5) * 1.1;
    targetMy = (e.clientY / window.innerHeight - 0.5) * 0.6;
  };
  const onScroll = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    scrollNorm = max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0;
  };
  const onResize = () => {
    const w = container.clientWidth;
    const h = Math.max(container.clientHeight, 1);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  };

  window.addEventListener('pointermove', onPointerMove, { passive: true });
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onResize, { passive: true });
  onScroll();

  if (reduced) {
    renderer.render(scene, camera);
    return;
  }

  let rafId = 0;
  const clock = new THREE.Clock();

  const tick = () => {
    rafId = 0;
    if (document.hidden) return;

    const t = clock.getElapsedTime();
    curMx += (targetMx - curMx) * 0.05;
    curMy += (targetMy - curMy) * 0.05;

    // Glide camera smoothly across the ascending horizon as the user scrolls
    camera.position.x = -2.2 + scrollNorm * 4.4 + curMx;
    camera.position.y = 4.2 - scrollNorm * 0.9 - curMy;
    camera.position.z = 14.5 - scrollNorm * 2.2;
    camera.lookAt(scrollNorm * 1.6, 0.7, -0.2);

    beacons.forEach((b, idx) => {
      const s = 1 + 0.18 * Math.sin(t * 2.1 + idx * 0.9);
      b.scale.setScalar(s);
    });

    renderer.render(scene, camera);
    rafId = requestAnimationFrame(tick);
  };

  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && !rafId) {
      clock.getDelta();
      rafId = requestAnimationFrame(tick);
    }
  });

  rafId = requestAnimationFrame(tick);
}
