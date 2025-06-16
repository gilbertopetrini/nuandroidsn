import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Config.css'
import { messaging, getToken, onMessage } from './firebase';

function Config() {

  async function mostrarNotificacao() {
    // Pede permissão para notificações
    if (!("Notification" in window)) {
      alert("Seu navegador não suporta notificações");
      return;
    }

    if (Notification.permission === "granted") {
      // Se já tem permissão, mostra a notificação
      new Notification("Pix Recebido!", {
        body: "R$ 55,00 recebido de João Silva.",
        icon: "/logo.png" // URL do ícone Nubank ou algum similar
      });
    } else if (Notification.permission !== "denied") {
      // Solicita permissão
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        new Notification("Pix Recebido!", {
          body: "R$ 55,00 recebido de João Silva.",
          icon: "/logo.png"
        });
      }
    }
  }

  const [token, setToken] = useState(null);

   useEffect(() => {
    // Solicita permissão e pega o token
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        getToken(messaging, {
          vapidKey: 'BE7vD_ovfFNfuojxY621XpzwehIG3eEeqryLfb6P_Ujgbxn07TcyGK8nuRTI_F1VrlRK_O3A_0XmmjXh0SXILDw'
        }).then((currentToken) => {
          if (currentToken) {
            setToken(currentToken);
            console.log('Token:', currentToken);
          } else {
            console.log('Sem token disponível');
          }
        }).catch((err) => {
          console.error('Erro ao obter o token:', err);
        });
      }
    });

    // Quando uma notificação é recebida com a aba aberta
    onMessage(messaging, (payload) => {
      console.log('Mensagem recebida:', payload);
      showNotification(payload.notification.title, payload.notification.body);
    });
  }, []);

  // Função para mostrar a notificação local
  const showNotification = (title, body) => {
    if (Notification.permission === 'granted') {
      navigator.serviceWorker.getRegistration().then((reg) => {
        reg.showNotification(title, {
          body: body,
          icon: '/logo.png', // ícone opcional do Pix
          vibrate: [200, 100, 200],
          tag: 'pix-notification',
          renotify: true
        });
      });
    }
  };

  // Simula uma notificação de Pix
  const simularPix = () => {
    showNotification('Pix Recebido!', 'R$ 50,00 recebido de João Silva.');
  };

  const [nome, setNome] = useState('');
  const [saldo, setSaldo] = useState('');
  const [emp, setEmp] = useState('');
  const [fat, setFat] = useState('');
  const [limit, setLimit] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const nomeSalvo = localStorage.getItem('nome');
    const saldoSalvo = localStorage.getItem('saldo');
    const empSalvo = localStorage.getItem('emp');
    const fatSalvo = localStorage.getItem('fat');
    const limitSalvo = localStorage.getItem('limit');
    if (nomeSalvo) setNome(nomeSalvo);
    if (saldoSalvo) setSaldo(saldoSalvo);
    if (empSalvo) setEmp(empSalvo);
    if (fatSalvo) setFat(fatSalvo);
    if (limitSalvo) setLimit(limitSalvo);
  }, []);

  const salvar = () => {
    localStorage.setItem('nome', nome);
    localStorage.setItem('saldo', saldo);
    localStorage.setItem('emp', emp);
    localStorage.setItem('fat', fat);
    localStorage.setItem('limit', limit);
    navigate('/');
  };

  return (
    <div className='mainc' style={{ padding: '20px' }}>
      <h2>Configurar Interface</h2>
      <label>
        Nome: 
        <input className='input' placeholder='Somente o primeiro' value={nome} onChange={(e) => setNome(e.target.value)} />
      </label>

      <label> 
        Saldo: 
        <input className='input' placeholder='Respeite a formatacão 0.000,00' value={saldo} onChange={(e) => setSaldo(e.target.value)} />
      </label>

      <label>
        Emprést: 
        <input className='input' placeholder='Respeite a formatacão 0.000,00' value={emp} onChange={(e) => setEmp(e.target.value)} />
      </label>

      <label>
        Fatura: 
        <input className='input' placeholder='Respeite a formatacão 0.000,00' value={fat} onChange={(e) => setFat(e.target.value)} />
      </label>

      <label>
        Limite: 
        <input className='input' placeholder='Respeite a formatacão 0.000,00' value={limit} onChange={(e) => setLimit(e.target.value)} />
      </label>
      <button className='input' onClick={salvar}>Salvar e voltar</button>
      <button className='input' onClick={simularPix}>pix</button>
      <button className='input' onClick={mostrarNotificacao}>pix 2</button>
    </div>
  );
}

export default Config;