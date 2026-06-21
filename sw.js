self.options = {
    "domain": "3nbf4.com",
    "zoneId": 11177235
};
self.lary = "";
// importScripts('https://3nbf4.com/act/files/service-worker.min.js?r=sw');

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
