import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Config.css'

function Config() {
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
    </div>
  );
}

export default Config;