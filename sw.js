const CACHE = 'eng-zero-v6';
const FILES = ['./', './index.html', './style.css', './data.js', './data2.js', './data3.js', './data4.js', './snd/a.mp3', './snd/ah.mp3', './snd/b.mp3', './snd/c.mp3', './snd/d.mp3', './snd/e.mp3', './snd/f.mp3', './snd/g.mp3', './snd/h.mp3', './snd/i.mp3', './snd/j.mp3', './snd/k.mp3', './snd/l.mp3', './snd/m.mp3', './snd/n.mp3', './snd/o.mp3', './snd/p.mp3', './snd/q.mp3', './snd/r.mp3', './snd/s.mp3', './snd/t.mp3', './snd/u.mp3', './snd/v.mp3', './snd/w.mp3', './snd/x.mp3', './snd/y.mp3', './snd/z.mp3', './py.js', './app.js', './manifest.json', './icons/maskable-192.png', './icons/maskable-512.png',
  './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES.map(f => new Request(f, {cache: 'reload'})))).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request, {ignoreSearch: true}).then(hit => {
    const net = fetch(e.request).then(res => { if (res && res.ok && new URL(e.request.url).origin === location.origin) { const cp = res.clone(); caches.open(CACHE).then(c => c.put(e.request, cp)); } return res; }).catch(() => hit || caches.match('./index.html'));
    return hit || net;
  }));
});
