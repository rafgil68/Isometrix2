const CACHE_NAME = 'isometrix2-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './Isometrix.jpg',
  './plancha.jpg',
  './plancha_lat.jpg',
  './puente.jpg',
  './flexion.jpg',
  './hollow.jpg',
  './esfinge.jpg',
  './descansa.jpg',
  './trofeo.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});