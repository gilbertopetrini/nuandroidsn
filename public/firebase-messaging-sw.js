importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDtk9Zp3cq9ot0cvf4cwL3U1feju1_KlTA",
  authDomain: "notificacoes-a4f6a.firebaseapp.com",
  projectId: "notificacoes-a4f6a",
  storageBucket: "notificacoes-a4f6a.firebasestorage.app",
  messagingSenderId: "72960006900",
  appId: "1:72960006900:web:9c0ecd8b1f7289ce8d1ca1"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: '/logo.png'
  });
});