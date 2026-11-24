import * as THREE from 'three';

interface DistrictMeta {
  cx: number;
  cz: number;
  color: number;
  wireMats: THREE.LineBasicMaterial[];
  beacon: THREE.Mesh;
}

// Renders a 5-district 3D wireframe city with transit pipelines synced to scroll and Ch 2 selection.
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
  scene.fog = new THREE.FogExp2(0x0a0d12, 0.036);

  const camera = new THREE.PerspectiveCamera(45, container.clientWidth / Math.max(container.clientHeight, 1), 0.1, 100);
  camera.position.set(-1.5, 5.2, 15.5);
  camera.lookAt(0, 0.6, 0);

  const city = new THREE.Group();
  scene.add(city);

  // Urban street grid
  const grid = new THREE.GridHelper(44, 44, 0x1a3044, 0x101d2b);
  grid.position.y = -2.0;
  city.add(grid);

  // 5 city districts corresponding to the 5 career stations
  const districtSpecs = [
    {
      cx: -8.0,
      cz: 1.8,
      color: 0x3ee6ff,
      buildings: [
        { dx: -0.6, dz: -0.4, w: 0.9, d: 0.9, h: 1.1 },
        { dx: 0.5, dz: 0.3, w: 0.8, d: 0.8, h: 1.4 },
      ],
    },
    {
      cx: -4.0,
      cz: 0.6,
      color: 0x3ee6ff,
      buildings: [
        { dx: -0.5, dz: 0.3, w: 0.8, d: 0.8, h: 1.8 },
        { dx: 0.5, dz: -0.3, w: 0.7, d: 0.7, h: 2.2 },
        { dx: 0.0, dz: 0.7, w: 0.6, d: 0.6, h: 1.3 },
      ],
    },
    {
      cx: 0.0,
      cz: -0.4,
      color: 0x3ee6ff,
      buildings: [
        { dx: -0.6, dz: -0.2, w: 0.85, d: 0.85, h: 2.5 },
        { dx: 0.5, dz: 0.4, w: 0.85, d: 0.85, h: 2.9 },
        { dx: 0.2, dz: -0.8, w: 0.7, d: 0.7, h: 2.0 },
      ],
    },
    {
      cx: 4.0,
      cz: 0.2,
      color: 0xffb547,
      buildings: [
        { dx: -0.5, dz: 0.2, w: 1.0, d: 1.0, h: 3.4 },
        { dx: 0.6, dz: -0.3, w: 0.9, d: 0.9, h: 3.0 },
        { dx: 0.0, dz: 0.9, w: 0.7, d: 0.7, h: 2.3 },
      ],
    },
    {
      cx: 8.0,
      cz: -1.0,
      color: 0x5cf29a,
      buildings: [
        { dx: -0.6, dz: 0.0, w: 0.95, d: 0.95, h: 4.4 },
        { dx: 0.55, dz: -0.4, w: 0.9, d: 0.9, h: 3.8 },
        { dx: 0.3, dz: 0.75, w: 0.75, d: 0.75, h: 3.1 },
      ],
    },
  ];

  const districts: DistrictMeta[] = [];
  const spinePts: THREE.Vector3[] = [];

  districtSpecs.forEach((d) => {
    const wireMats: THREE.LineBasicMaterial[] = [];
    let maxH = 0;

    d.buildings.forEach((b) => {
      maxH = Math.max(maxH, b.h);
      const geo = new THREE.BoxGeometry(b.w, b.h, b.d);
      const wire = new THREE.WireframeGeometry(geo);
      const mat = new THREE.LineBasicMaterial({ color: d.color, transparent: true, opacity: 0.22 });
      const mesh = new THREE.LineSegments(wire, mat);
      mesh.position.set(d.cx + b.dx, -2.0 + b.h / 2, d.cz + b.dz);
      city.add(mesh);
      wireMats.push(mat);
    });

    const beaconGeo = new THREE.SphereGeometry(0.11, 12, 12);
    const beaconMat = new THREE.MeshBasicMaterial({ color: d.color, transparent: true, opacity: 0.85 });
    const beacon = new THREE.Mesh(beaconGeo, beaconMat);
    beacon.position.set(d.cx, -2.0 + maxH + 0.35, d.cz);
    city.add(beacon);

    spinePts.push(new THREE.Vector3(d.cx, -1.92, d.cz));
    districts.push({ cx: d.cx, cz: d.cz, color: d.color, wireMats, beacon });
  });

  // Elevated urban transit / data pipeline connecting the 5 districts
  for (let i = 0; i < spinePts.length - 1; i++) {
    const a = spinePts[i];
    const b = spinePts[i + 1];
    const mid = new THREE.Vector3((a.x + b.x) / 2, -1.0, (a.z + b.z) / 2);
    const curve = new THREE.QuadraticBezierCurve3(a, mid, b);
    const lineGeo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(28));
    const lineMat = new THREE.LineBasicMaterial({
      color: i >= 2 ? 0xffb547 : 0x3ee6ff,
      transparent: true,
      opacity: 0.38,
    });
    city.add(new THREE.Line(lineGeo, lineMat));
  }

  let activeDistrict = 4;
  let targetMx = 0;
  let targetMy = 0;
  let curMx = 0;
  let curMy = 0;
  let scrollNorm = 0;
  let camFocusX = 0;

  window.addEventListener('shin:stop-select', (e: Event) => {
    const idx = (e as CustomEvent<{ index: number }>).detail?.index;
    if (typeof idx === 'number' && idx >= 0 && idx < districts.length) {
      activeDistrict = idx;
    }
  });

  window.addEventListener(
    'pointermove',
    (e) => {
      targetMx = (e.clientX / window.innerWidth - 0.5) * 1.1;
      targetMy = (e.clientY / window.innerHeight - 0.5) * 0.5;
    },
    { passive: true }
  );

  const onScroll = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    scrollNorm = max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0;
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  window.addEventListener(
    'resize',
    () => {
      const w = container.clientWidth;
      const h = Math.max(container.clientHeight, 1);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    },
    { passive: true }
  );

  const applyDistrictHighlight = (t: number) => {
    districts.forEach((d, idx) => {
      const lit = idx <= activeDistrict;
      const focused = idx === activeDistrict;
      const targetOpacity = focused ? 0.52 : lit ? 0.28 : 0.14;
      d.wireMats.forEach((m) => (m.opacity += (targetOpacity - m.opacity) * 0.08));
      const scale = focused ? 1.25 + 0.2 * Math.sin(t * 2.6) : 1.0;
      d.beacon.scale.setScalar(scale);
    });
  };

  if (reduced) {
    applyDistrictHighlight(0);
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

    const targetX = districts[activeDistrict].cx * 0.35 + scrollNorm * 2.4;
    camFocusX += (targetX - camFocusX) * 0.05;

    camera.position.x = camFocusX + curMx;
    camera.position.y = 5.0 - scrollNorm * 0.8 - curMy;
    camera.position.z = 15.5 - scrollNorm * 2.0;
    camera.lookAt(camFocusX * 0.7, 0.5, -0.2);

    applyDistrictHighlight(t);
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
