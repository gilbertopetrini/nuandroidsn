importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIza...sua_chave",
  authDomain: "notificacoes.firebaseapp.com",
  projectId: "notificacoes",
  messagingSenderId: "72960006900",
  appId: "1:72960006900:web:xxxxxxx",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: '/logo.png'
  });
});