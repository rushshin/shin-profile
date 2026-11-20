import * as THREE from 'three';

// Renders a subtle, scroll- and pointer-reactive 3D constellation behind the profile.
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
  const camera = new THREE.PerspectiveCamera(48, container.clientWidth / Math.max(container.clientHeight, 1), 0.1, 100);
  camera.position.set(0, 0, 14);

  const rootGroup = new THREE.Group();
  scene.add(rootGroup);

  // Outer geodesic wireframe representing the platform lattice
  const icoGeo = new THREE.IcosahedronGeometry(3.8, 1);
  const icoWire = new THREE.WireframeGeometry(icoGeo);
  const icoMat = new THREE.LineBasicMaterial({ color: 0x3ee6ff, transparent: true, opacity: 0.14 });
  const lattice = new THREE.LineSegments(icoWire, icoMat);
  rootGroup.add(lattice);

  // Inner warm amber ring representing human/team coordination
  const ringGeo = new THREE.TorusGeometry(2.35, 0.015, 8, 72);
  const ringMat = new THREE.MeshBasicMaterial({ color: 0xffb547, transparent: true, opacity: 0.28 });
  const humanRing = new THREE.Mesh(ringGeo, ringMat);
  humanRing.rotation.x = Math.PI / 3;
  rootGroup.add(humanRing);

  // Ambient node cloud (cyan tech nodes + amber human nodes)
  const count = 90;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const cyan = new THREE.Color(0x3ee6ff);
  const amber = new THREE.Color(0xffb547);

  for (let i = 0; i < count; i++) {
    const r = 4.2 + Math.random() * 5.8;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);

    const c = i % 4 === 0 ? amber : cyan;
    colors[i * 3] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
  }

  const ptsGeo = new THREE.BufferGeometry();
  ptsGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  ptsGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  const ptsMat = new THREE.PointsMaterial({ size: 0.085, vertexColors: true, transparent: true, opacity: 0.72 });
  const points = new THREE.Points(ptsGeo, ptsMat);
  rootGroup.add(points);

  let targetMx = 0;
  let targetMy = 0;
  let curMx = 0;
  let curMy = 0;
  let scrollNorm = 0;

  const onPointerMove = (e: PointerEvent) => {
    targetMx = (e.clientX / window.innerWidth - 0.5) * 0.7;
    targetMy = (e.clientY / window.innerHeight - 0.5) * 0.5;
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

    rootGroup.rotation.y = t * 0.07 + curMx + scrollNorm * 1.4;
    rootGroup.rotation.x = curMy + scrollNorm * 0.45;
    humanRing.rotation.z = t * 0.12;
    camera.position.z = 14 - scrollNorm * 2.8;

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
