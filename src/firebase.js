import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDtk9Zp3cq9ot0cvf4cwL3U1feju1_KlTA",
  authDomain: "notificacoes-a4f6a.firebaseapp.com",
  projectId: "notificacoes-a4f6a",
  storageBucket: "notificacoes-a4f6a.firebasestorage.app",
  messagingSenderId: "72960006900",
  appId: "1:72960006900:web:9c0ecd8b1f7289ce8d1ca1"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export { messaging, getToken, onMessage };