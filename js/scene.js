import * as THREE from 'three';

// Hero: a graphite 3D folder with project screenshots inside. It follows the cursor
// and opens a little more as you scroll.
const canvas = document.getElementById('bg');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
camera.position.set(0, 0, 12);

// Folder outline with a tab on the top left, built as an extruded shape
function folderShape(w, h, r, tab) {
  const s = new THREE.Shape(), x = -w / 2, y = -h / 2;
  s.moveTo(x + r, y);
  s.lineTo(x + w - r, y); s.quadraticCurveTo(x + w, y, x + w, y + r);
  s.lineTo(x + w, y + h - r); s.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  if (tab) {
    s.lineTo(x + w * 0.42, y + h); s.quadraticCurveTo(x + w * 0.38, y + h, x + w * 0.36, y + h + 0.14);
    s.lineTo(x + w * 0.34, y + h + 0.32); s.quadraticCurveTo(x + w * 0.32, y + h + 0.38, x + w * 0.28, y + h + 0.38);
    s.lineTo(x + r, y + h + 0.38); s.quadraticCurveTo(x, y + h + 0.38, x, y + h + 0.38 - r);
  } else { s.lineTo(x + r, y + h); s.quadraticCurveTo(x, y + h, x, y + h - r); }
  s.lineTo(x, y + r); s.quadraticCurveTo(x, y, x + r, y);
  return s;
}
const ext = { depth: 0.07, bevelEnabled: true, bevelSize: 0.025, bevelThickness: 0.025, bevelSegments: 4, curveSegments: 18 };
const graphite = c => new THREE.MeshPhysicalMaterial({ color: c, metalness: 0.35, roughness: 0.42, clearcoat: 0.6, clearcoatRoughness: 0.35 });

const folder = new THREE.Group();
const W = 3.6, H = 2.5;
const back = new THREE.Mesh(new THREE.ExtrudeGeometry(folderShape(W, H, 0.14, true), ext), graphite(0x1c1c20));
back.position.z = -0.12; folder.add(back);

// Papers: project screenshots
const loader = new THREE.TextureLoader();
const shots = ['seraphmedia', 'spiritlifesom', 'citibimlms'];
const papers = shots.map((n, i) => {
  const t = loader.load(`assets/img/sites/${n}.jpg`); t.colorSpace = THREE.SRGBColorSpace;
  const m = new THREE.Mesh(new THREE.PlaneGeometry(W * 0.86, H * 0.86), new THREE.MeshStandardMaterial({ map: t, roughness: 0.8 }));
  m.position.set((i - 1) * 0.12, 0.3 + i * 0.05, -0.02 + i * 0.03); m.rotation.z = (i - 1) * 0.035;
  m.userData.y = m.position.y; folder.add(m); return m;
});

// Front flap, hinged at the bottom edge
const frontGeo = new THREE.ExtrudeGeometry(folderShape(W, H * 0.9, 0.14, false), ext);
frontGeo.translate(0, H * 0.45, 0);
const hinge = new THREE.Group(); hinge.position.set(0, -H / 2, 0.12); folder.add(hinge);
const front = new THREE.Mesh(frontGeo, graphite(0x26262b)); hinge.add(front);

// Label printed on the front flap
const lc = document.createElement('canvas'); lc.width = 1024; lc.height = 560;
const g = lc.getContext('2d');
function drawLabel() {
  g.clearRect(0, 0, 1024, 560);
  g.fillStyle = 'rgba(255,255,255,.55)'; g.font = '500 34px Inter, sans-serif';
  g.fillText('Social Media  |  Web & AI  |  Automation  |  PM', 70, 150);
  g.fillStyle = '#f1f1f1'; g.font = '700 150px "Inter Tight", Inter, sans-serif'; g.fillText('Portfolio', 62, 310);
  g.fillStyle = 'rgba(255,255,255,.45)'; g.font = '500 30px "JetBrains Mono", monospace'; g.fillText('OLAOPA OLAJIDE', 70, 480);
  g.fillText('2026', 870, 480);
  g.fillStyle = '#ff7a1a'; g.font = '700 46px Inter, sans-serif'; g.fillText('↘', 900, 120);
  label.needsUpdate = true;
}
const label = new THREE.CanvasTexture(lc); label.colorSpace = THREE.SRGBColorSpace; label.anisotropy = 8;
const labelMesh = new THREE.Mesh(new THREE.PlaneGeometry(W * 0.96, W * 0.96 * 560 / 1024), new THREE.MeshBasicMaterial({ map: label, transparent: true }));
labelMesh.position.set(0, H * 0.45, 0.13); hinge.add(labelMesh);
drawLabel(); document.fonts?.ready.then(drawLabel);

scene.add(folder);
scene.add(new THREE.AmbientLight(0xffffff, 0.55));
const key = new THREE.DirectionalLight(0xffffff, 2.2); key.position.set(-4, 5, 6); scene.add(key);
const rim = new THREE.PointLight(0xff7a1a, 40, 20); rim.position.set(3, -1, -2); scene.add(rim);
const fill = new THREE.PointLight(0x8899ff, 10, 20); fill.position.set(-4, -3, 3); scene.add(fill);

const mouse = { x: 0, y: 0 };
addEventListener('pointermove', e => { mouse.x = e.clientX / innerWidth - 0.5; mouse.y = e.clientY / innerHeight - 0.5; });

// Sit the folder over #hero-visual
const anchor = new THREE.Vector3(); let base = { x: 0, y: 0 };
function place() {
  const el = document.getElementById('hero-visual'); if (!el) return;
  const r = el.getBoundingClientRect();
  const cx = (r.left + r.width / 2) / innerWidth * 2 - 1, cy = -((r.top + scrollY + r.height / 2) / innerHeight * 2 - 1);
  anchor.set(cx, cy, 0.5).unproject(camera).sub(camera.position).normalize();
  anchor.multiplyScalar(-camera.position.z / anchor.z).add(camera.position);
  base = { x: anchor.x, y: anchor.y };
  const viewH = 2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.position.z;
  folder.scale.setScalar(Math.min(r.width / innerHeight * viewH / (W * 1.15), r.height / innerHeight * viewH / (H * 1.6)));
}
function resize() {
  renderer.setSize(innerWidth, innerHeight, false);
  camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix(); place();
}
addEventListener('resize', resize); addEventListener('load', place); resize();

const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const clock = new THREE.Clock();
let open = 0;
function tick() {
  const t = clock.getElapsedTime(), sp = Math.min(scrollY / innerHeight, 1.5);
  const target = 0.18 + Math.min(sp, 1) * 0.55 + (Math.abs(mouse.x) + Math.abs(mouse.y)) * 0.15;
  open += (target - open) * 0.06;
  hinge.rotation.x = open;
  papers.forEach((p, i) => { p.position.y = p.userData.y + open * (0.35 + i * 0.12) + Math.sin(t * 1.2 + i) * 0.02; });
  folder.rotation.y += ((mouse.x * 0.7 - 0.35) - folder.rotation.y) * 0.05;
  folder.rotation.x += ((mouse.y * 0.4 + 0.12) - folder.rotation.x) * 0.05;
  folder.position.set(base.x, base.y + Math.sin(t * 0.9) * 0.08 + sp * 2.4, 0);
  canvas.style.opacity = String(Math.max(0, 1 - sp * (innerWidth < 760 ? 2.6 : 1.2)));
  renderer.render(scene, camera);
  if (!reduce) requestAnimationFrame(tick);
}
tick();
if (reduce) addEventListener('scroll', () => requestAnimationFrame(tick));
