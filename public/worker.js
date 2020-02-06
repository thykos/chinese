let CACHE_NAME = 'chinese-a3-1';
let urlsToCache = [
  '/',
  '/favicon.ico',
  '/static',
  '/static/js/main.4a45603e.js',
  '/static/css/main.3cafbf77.css',
  '/static/media/menu.a450cc10.svg'
];


self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});


self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
          if (response) return response;
          return fetch(event.request);
        }
      )
      .catch(error => console.log(error))
  );
});

self.addEventListener('activate', event => {
  let cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
