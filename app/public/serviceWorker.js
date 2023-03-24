const CACHE_NAME = "version-1";
const urltoCache = ["index.html", "offline.html"];

self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('your-cache-name').then(function(cache) {
        return cache.addAll([
          // your list of cache keys to store in cache
          'index.html'

          // etc.
        ])
      })
    );
  });


//   self.addEventListener('fetch', event => {
//     if (event.request.method === 'GET') {
//       let url = event.request.url.indexOf(self.location.origin) !== -1 ?
//         event.request.url.split(`${self.location.origin}/`)[1] :
//         event.request.url;
//       let isFileCached = $FILES.indexOf(url) !== -1;
  
//       if (isFileCached) {
//         event.respondWith(
//           caches.open($CACHE_STORE)
//             .then(cache => {
//               return cache.match(url)
//                 .then(response => {
//                   if (response) {
//                     return response;
//                   }
//                   throw Error('There is not response for such request', url);
//                 });
//             })
//             .catch(error => {
//               return fetch(event.request);
//             })
//         );
//       }
//     }
//   });