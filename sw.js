const CACHE = 'belajar-ceria-v1';
const CORE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './loading.mp4',
  './assets/backsound.mp3',
  './assets/topic_icon_angka.webp',
  './assets/topic_icon_huruf.webp',
  './assets/coloring_anakceria.webp',
  './assets/coloring_anggur.webp',
  './assets/coloring_anjing.webp',
  './assets/coloring_apel.webp',
  './assets/coloring_ayam.webp',
  './assets/coloring_dinopayung.webp',
  './assets/coloring_dinopelangi.webp',
  './assets/coloring_gajah.webp',
  './assets/coloring_ikan.webp',
  './assets/coloring_kucing.webp',
  './assets/coloring_stroberi.webp'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request).then(cached => cached || fetch(e.request).then(r => {
    const copy = r.clone();
    caches.open(CACHE).then(c => c.put(e.request, copy)).catch(()=>{});
    return r;
  }).catch(() => caches.match('./index.html'))));
});
