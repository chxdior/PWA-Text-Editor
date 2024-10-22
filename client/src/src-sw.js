// Implementation of a service worker: enables offline functionality, caching of static assets, and intercepts network requests
// This file is responsible for defining caching strategies, registering routes, and handling caching logic for specific requests in the service worker. It is injected into the final service worker file (sw.js) during the build process using the InjectManifest plugin in the webpack configuration.

const { offlineFallback, warmStrategyCache } = require('workbox-recipes');
const { CacheFirst } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { ExpirationPlugin } = require('workbox-expiration');
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');


precacheAndRoute(self.__WB_MANIFEST); // Automatically cache and route the URLs defined in self.__WB_MANIFEST during the service worker installation



// CacheFirst caching strategy for pages (NAVIGATE requests)

const pageCache = new CacheFirst({ // Creates a caching strategy named pageCache using the CacheFirst strategy. This strategy prioritizes serving responses from the cache and falls back to the network if the response is not available
  cacheName: 'page-cache',
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60, //The cached responses have a maximum age of 30 days
    }),
  ],
});

warmStrategyCache({ // Warming up the cache by pre-caching specific URLs. The warmStrategyCache function is called with an object containing the URLs and the pageCache strategy
  urls: ['/index.html', '/'],
  strategy: pageCache,
});

registerRoute(({ request }) => request.mode === 'navigate', pageCache); // Register a route for navigation requests (navigate mode) and associate it with the pageCache strategy




// Implement asset caching:
// CacheFirst caching strategy for pages (STYLE and SCRIPT requests). The strategy will cache responses and serve them from the cache first, falling back to the network if the cache is not available or the response is not cacheable. The cached responses have a maximum age of 30 days

const assetCache = new CacheFirst({
  cacheName: 'asset-cache',
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60,
    }),
  ]
});

registerRoute(({ request }) => request.destination === 'style' || request.destination === 'script', assetCache ); // Register a route for style and script requests and associate it with the assetCache strategy