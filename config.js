/* Datos públicos de Firebase (no son claves secretas: Google los publica en toda app web). */
var CONFIG = {
  firebase: {
    apiKey: "AIzaSyAZNS6RnleazSGHr3-cj9pDd5vgWbo4jFY",
    authDomain: "tiva-chat-notificaciones.firebaseapp.com",
    projectId: "tiva-chat-notificaciones",
    storageBucket: "tiva-chat-notificaciones.firebasestorage.app",
    messagingSenderId: "37768361854",
    appId: "1:37768361854:web:48e498b0987853f274252f"
  },
  vapid: "BJGWXmahmXOza7Nk2NDpYxUose5ORS3RzDbGt0kMtWbNa5SkWiQPTIpexHX5jfffZnrs80y7_7DuxY8v5W7PKjo"
};
if (typeof self !== 'undefined') self.CONFIG = CONFIG;
