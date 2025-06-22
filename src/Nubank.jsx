import { useState, useEffect } from 'react'
import './App.css'
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { IoShieldCheckmark } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { PiPixLogoLight } from "react-icons/pi";
import { LiaBarcodeSolid } from "react-icons/lia";
import { LuHandCoins } from "react-icons/lu";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaInbox, FaCreditCard, FaRegHeart } from "react-icons/fa6";
import ccimg from './assets/ccimg.png';
import pfp from './assets/pfp.png';
import reload from './assets/reload.gif'; 
import { RiArrowUpDownFill } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiSmartphone } from "react-icons/fi";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

function BotaoOlho({ visivel, setVisivel }) {
    return (
      <p className='btn' 
        onClick={() => setVisivel(!visivel)}
      >
        {visivel ? <VscEye /> : <VscEyeClosed/>}
      </p>
    );
  }

function Nuu() {
  const [showRefresh, setShowRefresh] = useState(false);
  const startY = useRef(0);
  const hasPulled = useRef(false);
  const [showBlackFlash, setShowBlackFlash] = useState(false);


  useEffect(() => {
    const handleTouchStart = (e) => {
      if (window.scrollY === 0) {
        startY.current = e.touches[0].clientY;
        hasPulled.current = false;
      }
    };

  const handleTouchMove = (e) => {
    const currentY = e.touches[0].clientY;
    const distance = currentY - startY.current;

    // Procede apenas se estiver no topo e puxando para baixo
    if (window.scrollY === 0 && distance > 0) {
      // Previne o comportamento padrão para parar a rolagem nativa ao puxar para atualizar
      e.preventDefault();
      if (distance > 50 && !hasPulled.current) { // Garante que só acione uma vez por puxada
        hasPulled.current = true;
        setShowRefresh(true);
      }
    }
  };

  const handleTouchEnd = () => {
    if (hasPulled.current) {
      setShowBlackFlash(true);
      setTimeout(() => {
        setShowRefresh(false);
      }, 1200); // tempo da "falsa atualização"
      setTimeout(() => {
        setShowBlackFlash(false);
      }, 120);
    }
  };

  

  // Adicione passive: false ao touchmove para permitir preventDefault
  window.addEventListener('touchstart', handleTouchStart);
  window.addEventListener('touchmove', handleTouchMove, { passive: false });
  window.addEventListener('touchend', handleTouchEnd);

  return () => {
    window.removeEventListener('touchstart', handleTouchStart);
    window.removeEventListener('touchmove', handleTouchMove);
    window.removeEventListener('touchend', handleTouchEnd);
  };
}, []);

  const navigate = useNavigate();
const [isEyeVisible, setIsEyeVisible] = useState(true);

 const [nome, setNome] = useState('');
  const [saldo, setSaldo] = useState('');
  const [emp, setEmp] = useState('');
  const [fat, setFat] = useState('');
  const [limit, setLimit] = useState('');
  const [invest, setInvest] = useState('');

  useEffect(() => {
    const nomeSalvo = localStorage.getItem('nome');
    const saldoSalvo = localStorage.getItem('saldo');
    const empSalvo = localStorage.getItem('emp');
    const fatSalvo = localStorage.getItem('fat');
    const limitSalvo = localStorage.getItem('limit');
    const investSalvo = localStorage.getItem('invest');
    
    if (nomeSalvo) setNome(nomeSalvo);
    if (saldoSalvo) setSaldo(saldoSalvo);
    if (empSalvo) setEmp(empSalvo);
    if (fatSalvo) setFat(fatSalvo);
    if (limitSalvo) setLimit(limitSalvo);
    if (investSalvo) setInvest(investSalvo);
  }, []);

  const [fotoPerfil, setFotoPerfil] = useState('');

  useEffect(() => {
    const foto = localStorage.getItem('fotoPerfil');
  setFotoPerfil(foto || '/pfp.png');  // ou '/pfp.png' conforme sua pasta
}, []);

  return (
    <div className="main">
      <div className={`flash-overlay ${showBlackFlash ? 'show-flash' : ''}`}></div>
      <div className={`pull-refresh ${showRefresh ? 'show' : ''}`}>
        <img className="gif" src={reload}/>
      </div>
      <div className='prin'>
       <header className='menuu'>
          <div className='sel'>
            <RiArrowUpDownFill/>
          </div>
          <div className='nsel'>
          <BsCurrencyDollar/>
          </div>
          <div className='nsel'>
          <HiOutlineShoppingBag/>
          </div>
          <div className='nsel'>
          <FiSmartphone/>
          </div>
        </header>
      </div>
      <div className="roxocima">
        
        <div className="roxo2">
          <div>
            <div className='bolia'></div>
            <img src={fotoPerfil} className="pfp" alt="Foto de perfil" />
          </div> 
          <div className='sla'>
            <BotaoOlho visivel={isEyeVisible} setVisivel={setIsEyeVisible} />
            <HiOutlineQuestionMarkCircle className="icone" />
            <IoShieldCheckmark className="icone" />
          </div>
        </div>
        <div className="roxo3">
          Olá, {nome}
        </div>
      </div>

      <div className="preto1" onClick={() => navigate('/Saldo ')}>
        <div >
          <p>Saldo em conta</p>
          <p className="saldo">{isEyeVisible ? ("R$ "+saldo || '0,00') : '••••'}</p>
        </div>
        <div className="flecha">
          <MdKeyboardArrowRight />
        </div>
      </div>

      <div className="preto2">
        <div className='main1' onClick={() => navigate('/Pix')}>
          <div className='iconemain'><PiPixLogoLight /></div>
          <div className='textomain'>Área Pix e transferir</div>
        </div>
        <div className='main1'>
          <div className='iconemain2'><LiaBarcodeSolid /></div>
          <div className='textomain'>Pagar</div>
        </div>
        <div className='main1'>
          <div className='iconemain2'><LuHandCoins /></div>

          <div className='textomain'>Pegar emprestado</div>
        </div>
        <div className='main1'>
          <div className='iconemain2'><BsCurrencyDollar /></div>
          <div className='textomain'>Converter limite</div>
        </div>
        <div className='main1'>
          <div className='iconemain2'><FaInbox /></div>
          <div className='emprestimo'>115% CDI</div>
          <div className='textomain'>Caixinha turbo</div>
        </div>
      </div>

      <div className='preto3'>
        <div className='header1'>
          <div className='cc'>
            <FaCreditCard />
          </div>
          <div>Meus Cartões</div>
        </div>
        <div className='header2'>
          <p onClick={() => navigate('/config')}>
             <strong>Aumente seu limite</strong> do cartão hoje com o Nu Limite Garantido
          </p>
          <img src={ccimg} className='ccimg' />
        </div>
      </div>

      <div className='preto4'>
        <div>
          <div className='cartao'>
            <p className='p1'>Cartão de crédito</p>
            <MdKeyboardArrowRight className='cartao2' />
          </div>
          <p className='p2'>Fatural Atual</p>
          <p className='p3'>{isEyeVisible ? ("R$ "+fat || '0,00') : '••••'}</p>
          <p className='p4'>Limite disponível de {isEyeVisible ? ("R$ "+ limit || '0,00') : '••••'}</p>
        </div>
      </div>

      <div className='preto5'>
        <div>
          <div className='cartao'>
            <p className='p1'>Empréstimo</p>
            <MdKeyboardArrowRight className='cartao2' />
          </div>
          <p className='p2'>Valor disponível de até</p>
          <p className='p3'>{isEyeVisible ? ("R$ "+emp || '0,00') : '••••'}</p>
        </div>
      </div>

      <div className='preto6'>
        <div>
          <div className='cartao'>
            <p className='p1'>Planeje suas contas</p>
            <MdKeyboardArrowRight className='cartao2' />
          </div>
          <p className='p2'>Acompanhe, pague e programe com a ajuda do Assistente de pagamentos.</p>
          <div className='btnacessar'>Acessar</div>
        </div>
      </div>

      <a className='preto7' >
        <FaRegHeart className='heart' />
        Avalie esta tela
      </a>
            
    </div>
    
  );
}

export default Nuu;
