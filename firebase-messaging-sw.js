/* Avisos de TIVA Chat: muestra "Tenés un mensaje nuevo" aunque la app esté cerrada. */
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');
importScripts('config.js');
if (self.CONFIG && CONFIG.firebase && CONFIG.firebase.apiKey) {
  firebase.initializeApp(CONFIG.firebase);
  firebase.messaging();
}
self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  event.waitUntil(clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (lista) {
    for (var i = 0; i < lista.length; i++) { if ('focus' in lista[i]) return lista[i].focus(); }
    return clients.openWindow(self.registration.scope);
  }));
});
