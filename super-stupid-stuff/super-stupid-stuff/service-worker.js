!function(){"use strict";const e=["client/Tags.225ecbfa.js","client/index.079f22de.js","client/client.df51c64d.js","client/[slug].e7fef1ec.js","client/client.e5b45857.js"].concat(["service-worker-index.html","content/articles/1.json","content/articles.json","content/articles_md/1.md","favicon.png","global.css","great-success.png","logo-192.png","logo-512.png","manifest.json","pictures/profile.jpg"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1587415319698").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1587415319698"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1587415319698").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const n=await t.match(e.request);if(n)return n;throw s}}))))})}();
