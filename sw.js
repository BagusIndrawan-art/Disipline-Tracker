const CACHE_NAME = 'disipline-tracker-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './icon_transparent_blue_text-removebg-preview.png',
  './bd6827df3278be14d7259f18d8717c03f160cc05-731x731.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});