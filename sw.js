const CACHE_NAME = 'social-links-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/img/avatar.webp',
    '/img/avatar-300.webp',
    '/img/avatar-600.webp',
    '/img/phone.svg',
    '/img/telegram-1.svg',
    '/img/viber-1.svg',
    '/img/site.svg',
    '/img/facebook.svg',
    '/img/instagram.svg',
    '/img/tiktok.svg',
    '/img/telegram.svg',
    '/img/favicon-96x96.png',
    '/img/favicon.svg',
    '/img/favicon.ico',
    '/img/apple-touch-icon.png'
];

// Встановлення Service Worker і кешування ресурсів
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(urlsToCache))
    );
});

// Перехоплення запитів і відповідь з кешу
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Повернення закешованої відповіді або виконання запиту
                return response || fetch(event.request)
                    .then((response) => {
                        // Перевірка чи відповідь валідна
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        // Клонування відповіді, оскільки вона може бути використана тільки один раз
                        const responseToCache = response.clone();

                        // Додавання відповіді в кеш
                        caches.open(CACHE_NAME)
                            .then((cache) => {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    });
            })
    );
});

// Очищення старого кешу при активації нового Service Worker
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});