import { Routes, Route } from 'react-router-dom';
import Nuu from './Nubank';
import Config from './Config';
import { useEffect } from "react";
import { messaging, getToken, onMessage } from "./firebase";

function App() {

   useEffect(() => {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        getToken(messaging, {
          vapidKey: "BE7vD_ovfFNfuojxY621XpzwehIG3eEeqryLfb6P_Ujgbxn07TcyGK8nuRTI_F1VrlRK_O3A_0XmmjXh0SXILDw"
        }).then((currentToken) => {
          if (currentToken) {
            console.log("Token do dispositivo:", currentToken);
            alert("Token gerado! Veja no console.");
          } else {
            console.log("Nenhum token disponível. Solicite permissão para gerar um.");
          }
        }).catch((err) => {
          console.error("Erro ao obter o token:", err);
        });
      }
    });

    onMessage(messaging, (payload) => {
      console.log("Mensagem recebida:", payload);
      alert(`${payload.notification.title}: ${payload.notification.body}`);
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Nuu />} />
      <Route path="/config" element={<Config />} />
    </Routes>
  );
}

export default App;