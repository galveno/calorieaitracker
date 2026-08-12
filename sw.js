self.addEventListener('fetch', (event) => {
  // Simple pass-through fetch handler to satisfy PWA requirements
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
