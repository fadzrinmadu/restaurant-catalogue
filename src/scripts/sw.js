import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

const { assets } = global.serviceWorkerOption;
const assetsToCache = [
  ...assets,
  './',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=Alice&family=Montserrat:wght@600&display=swap',
];

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell(assetsToCache));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
