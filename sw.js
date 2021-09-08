var CACHE_NAME = 'files';
var urlsToCache = [
    '/',
    'index.html',
    'icon.png',
    'manifest.json',
    'new.html',
    'main.js',
    'https://cdn.jsdelivr.net/npm/chart.js'
];

self.addEventListener('install', function (event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.onfetch = function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (cachedFiles) {
                if (cachedFiles) {
                    return cachedFiles;
                } else {
                    return fetch(event.request);
                }
            })
    );
}