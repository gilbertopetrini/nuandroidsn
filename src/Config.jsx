import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Config.css'


function Config() {
  const [token, setToken] = useState(null);
  const [nome, setNome] = useState('');
  const [saldo, setSaldo] = useState('');
  const [emp, setEmp] = useState('');
  const [fat, setFat] = useState('');
  const [limit, setLimit] = useState('');
  const [valorpix, setValorpix] = useState('');
  const [nomepix, setNomepix] = useState('');
  const navigate = useNavigate();
  const [fotoPerfil, setFotoPerfil] = useState('');
  const [invest, setInvest] = useState('');
  const [rendido, setRendido] = useState('');

  const removerFoto = () => {
    localStorage.removeItem('fotoPerfil');
    setFotoPerfil('');
    alert("Foto removida com sucesso.")
  };  

  const handleFotoChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setFotoPerfil(reader.result);
    };
    reader.readAsDataURL(file);
  }
  };
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
    showNotification('Transferência recebida','Você recebeu uma transferência de R$ ' +valorpix+' de ' +nomepix);
  };

  useEffect(() => {

    const nomeSalvo = localStorage.getItem('nome');
    const saldoSalvo = localStorage.getItem('saldo');
    const empSalvo = localStorage.getItem('emp');
    const fatSalvo = localStorage.getItem('fat');
    const limitSalvo = localStorage.getItem('limit');
    const investSalvo = localStorage.getItem('invest');
    const rendidoSalvo = localStorage.getItem('rendido');
    if (nomeSalvo) setNome(nomeSalvo);
    if (saldoSalvo) setSaldo(saldoSalvo);
    if (empSalvo) setEmp(empSalvo);
    if (fatSalvo) setFat(fatSalvo);
    if (limitSalvo) setLimit(limitSalvo);
    if (investSalvo) setInvest(investSalvo);
    if (rendidoSalvo) setRendido(rendidoSalvo);

    const fotoSalva = localStorage.getItem('fotoPerfil');
    if (fotoSalva) setFotoPerfil(fotoSalva);
  }, []);

  const salvar = () => {
    localStorage.setItem('nome', nome);
    localStorage.setItem('saldo', saldo);
    localStorage.setItem('emp', emp);
    localStorage.setItem('fat', fat);
    localStorage.setItem('limit', limit)
    localStorage.setItem('invest', invest)
    localStorage.setItem('rendido', rendido)
    localStorage.setItem('fotoPerfil', fotoPerfil);

    navigate('/');
  };

  return (
    <div className='mainc' style={{ padding: '20px' }}>
      <h2>Configurar Interface</h2>
      <label>
          Foto de perfil :
        <input type="file" accept="image/*" onChange={handleFotoChange} />
      </label>
      <button className='input' onClick={removerFoto}>Remover</button>

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

      <label>
        Total investido: 
        <input className='input' placeholder='Respeite a formatacão 0.000,00' value={invest} onChange={(e) => setInvest(e.target.value)} />
      </label>

      <label>
        Total rendido: 
        <input className='input' placeholder='Respeite a formatacão 0.000,00' value={rendido} onChange={(e) => setRendido(e.target.value)} />
      </label>
      
      <button className='input' onClick={salvar}>Salvar e voltar</button>

      <label>
        Valor pix: 
        <input className='input' placeholder='Respeite a formatacão 0.000,00' value={valorpix} onChange={(e) => setValorpix(e.target.value)} />
      </label>
      <label>
        Nome pix: 
        <input className='input' placeholder='Nome completo' value={nomepix} onChange={(e) => setNomepix(e.target.value)} />
      </label>

      <button className='input' onClick={simularPix}>pix</button>

      
    </div>
  );
}

export default Config;