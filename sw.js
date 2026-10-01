'use strict';

// Verkko ensin: haetaan aina tuorein versio palvelimelta (ohittaen selaimen
// HTTP-välimuistin). Välimuistia käytetään vain, kun verkkoa ei ole.
const CACHE = 'matikka';

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;

  e.respondWith((async () => {
    try {
      // URL eikä Request: navigointipyyntöä ei voi kopioida uusilla asetuksilla.
      const res = await fetch(req.url, { cache: 'no-cache', credentials: 'same-origin' });
      if (res.ok) {
        const cache = await caches.open(CACHE);
        cache.put(req, res.clone());
      }
      return res;
    } catch (err) {
      const cached = await caches.match(req, { ignoreSearch: true });
      if (cached) return cached;
      throw err;
    }
  })());
});
