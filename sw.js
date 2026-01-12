self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // Luôn lấy dữ liệu mới từ mạng, không cache nội dung iframe
  e.respondWith(fetch(e.request));
});
