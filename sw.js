const CACHE_PREFIX = 'saga-pnfi-cache';
const MANIFEST_URL = 'assets-manifest.json';

// Evento de Instalación
self.addEventListener('install', (event) => {
    console.log('👷 Service Worker: Instalando...');
    self.skipWaiting();
});

// Evento de Activación
self.addEventListener('activate', (event) => {
    console.log('🚀 Service Worker: Activado y listo.');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (!cacheName.startsWith(CACHE_PREFIX)) {
                        console.log('🗑️ Service Worker: Borrando caché antigua:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Estrategia de Cache: Cache-First con actualización en segundo plano
self.addEventListener('fetch', (event) => {
    // No cachear peticiones externas (CDNs) o chrome-extensions
    if (!event.request.url.startsWith(self.location.origin)) {
        return;
    }

    event.respondWith(
        caches.match(event.request).then((response) => {
            if (response) {
                return response;
            }
            return fetch(event.request).then((networkResponse) => {
                // Solo cachear si la respuesta es válida
                if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                    return networkResponse;
                }
                const responseToCache = networkResponse.clone();
                caches.open(CACHE_PREFIX + '-v_current').then((cache) => {
                    cache.put(event.request, responseToCache);
                });
                return networkResponse;
            });
        })
    );
});

// Escuchar mensajes para forzar actualización
self.addEventListener('message', (event) => {
    if (event.data === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});
