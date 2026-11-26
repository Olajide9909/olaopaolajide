import * as THREE from 'three';

const canvas = document.getElementById('bg');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x07070c, 0.045);
const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
camera.position.set(0, 0, 9);

// Camera-lens rings: a nod to cinematography
const lens = new THREE.Group();
const ringMat = c => new THREE.MeshStandardMaterial({ color: c, metalness: 0.8, roughness: 0.25 });
[[2.2, 0.08, 0xff6a3d], [1.7, 0.18, 0x2a2a35], [1.25, 0.05, 0xffc23d], [2.7, 0.03, 0x3dd6ff]].forEach(([r, t, c], i) => {
  const m = new THREE.Mesh(new THREE.TorusGeometry(r, t, 32, 160), ringMat(c));
  m.rotation.x = i * 0.25; lens.add(m);
});
const glass = new THREE.Mesh(new THREE.SphereGeometry(1.1, 64, 64),
  new THREE.MeshPhysicalMaterial({ color: 0x223355, metalness: 0.1, roughness: 0.05, transmission: 0.6, thickness: 1, clearcoat: 1 }));
lens.add(glass);
scene.add(lens);

// Floating film frames
const frames = new THREE.Group();
const frameGeo = new THREE.BoxGeometry(0.9, 0.6, 0.04);
for (let i = 0; i < 26; i++) {
  const m = new THREE.Mesh(frameGeo, new THREE.MeshStandardMaterial({ color: [0xff6a3d, 0xffc23d, 0x3dd6ff, 0x7c5cff, 0x3dffa8][i % 5], metalness: 0.4, roughness: 0.4, transparent: true, opacity: 0.55 }));
  m.position.set((Math.random() - 0.5) * 22, (Math.random() - 0.5) * 30 - 6, (Math.random() - 0.5) * 10 - 4);
  m.rotation.set(Math.random() * 6, Math.random() * 6, 0);
  m.userData.s = 0.2 + Math.random() * 0.5;
  frames.add(m);
}
scene.add(frames);

// Star dust
const N = 1500, pos = new Float32Array(N * 3);
for (let i = 0; i < N * 3; i++) pos[i] = (Math.random() - 0.5) * 40;
const dustGeo = new THREE.BufferGeometry(); dustGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
const dust = new THREE.Points(dustGeo, new THREE.PointsMaterial({ size: 0.03, color: 0xffffff, transparent: true, opacity: 0.6 }));
scene.add(dust);

scene.add(new THREE.AmbientLight(0xffffff, 0.35));
const l1 = new THREE.PointLight(0xff6a3d, 60, 30); l1.position.set(4, 3, 5); scene.add(l1);
const l2 = new THREE.PointLight(0x3dd6ff, 50, 30); l2.position.set(-5, -2, 4); scene.add(l2);

const mouse = { x: 0, y: 0 };
addEventListener('pointermove', e => { mouse.x = e.clientX / innerWidth - 0.5; mouse.y = e.clientY / innerHeight - 0.5; });

function resize() {
  renderer.setSize(innerWidth, innerHeight, false);
  camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
  placeLens();
}
// Centre the lens behind the hero photo
const anchor = new THREE.Vector3();
function placeLens() {
  const el = document.getElementById('hero-visual'); if (!el) return;
  const r = el.getBoundingClientRect();
  const cx = (r.left + r.width / 2) / innerWidth * 2 - 1, cy = -((r.top + scrollY + r.height / 2) / innerHeight * 2 - 1);
  anchor.set(cx, cy, 0.5).unproject(camera).sub(camera.position).normalize();
  const d = -camera.position.z / anchor.z; anchor.multiplyScalar(d).add(camera.position);
  const h = 2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.position.z;
  lens.userData.base = { x: anchor.x, y: anchor.y };
  lens.scale.setScalar((el.offsetWidth / innerHeight) * h / 4.6);
}
addEventListener('load', placeLens);
addEventListener('resize', resize); resize();

const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const clock = new THREE.Clock();
function tick() {
  const t = clock.getElapsedTime();
  const sp = scrollY / innerHeight;
  lens.rotation.y = t * 0.25 + mouse.x * 0.8;
  lens.rotation.x = mouse.y * 0.6 + sp * 0.6;
  lens.children.forEach((c, i) => { c.rotation.z = t * (0.2 + i * 0.1) * (i % 2 ? -1 : 1); });
  const b = lens.userData.base || { x: 0, y: 0 };
  lens.position.x = b.x; lens.position.y = b.y - sp * 3;
  frames.children.forEach(f => { f.rotation.x += 0.002 * f.userData.s * 5; f.rotation.y += 0.003 * f.userData.s * 5; });
  frames.position.y = sp * 2.2;
  dust.rotation.y = t * 0.02;
  camera.rotation.y += (-mouse.x * 0.08 - camera.rotation.y) * 0.05;
  camera.rotation.x += (-mouse.y * 0.05 - camera.rotation.x) * 0.05;
  renderer.render(scene, camera);
  if (!reduce) requestAnimationFrame(tick);
}
tick();
if (reduce) addEventListener('scroll', () => requestAnimationFrame(tick));
