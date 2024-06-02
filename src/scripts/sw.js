import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { NetworkFirst } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';

precacheAndRoute(self.__WB_MANIFEST);
registerRoute(
  ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev'),
  new NetworkFirst({
    cacheName: 'restaurant-api-cache',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 30,
        maxAgeSeconds: 60 * 60 * 24,
      }),
    ],
  }),
);

self.addEventListener('install', () => {
  console.log('Service Worker: Installed');
  self.skipWaiting();
});

self.addEventListener('push', () => {
  console.log('Service Worker: Pushed');
});
