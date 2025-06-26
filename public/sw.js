self.addEventListener('install', (event) => {
  console.log('[ServiceWorker] Instalado');
  self.skipWaiting(); // Garante que ele ative imediatamente
});

self.addEventListener('activate', (event) => {
  console.log('[ServiceWorker] Ativado');
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  // Exemplo: abrir o app ou uma URL
  event.waitUntil(
    clients.openWindow('/')
  );
});