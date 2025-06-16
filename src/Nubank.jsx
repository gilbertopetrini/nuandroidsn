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
import logo from './assets/tela11.png'; // imagem da splash screen
import { RiArrowUpDownFill } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiSmartphone } from "react-icons/fi";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { useNavigate } from 'react-router-dom';

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
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();
const [isEyeVisible, setIsEyeVisible] = useState(false);

 const [nome, setNome] = useState('');
  const [saldo, setSaldo] = useState('');
  const [emp, setEmp] = useState('');
  const [fat, setFat] = useState('');
  const [limit, setLimit] = useState('');

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


  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setShowSplash(false);
      }, 1000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#8A05BE',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 1s ease',
        zIndex: 9999,
      }}>
        <img src={logo} alt="Logo" style={{ width: '150px' }} />
      </div>
    );
  }



  return (
    <div className="main">
      <div className='prin'>
       <header class='menu'>
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
        <div className="roxo1"></div>
        <div className="roxo2">
          <img src={pfp} className="pfp" />
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

      <div className="preto1">
        <div>
          <p>Saldo em conta</p>
          <p className="saldo">{isEyeVisible ? ("R$ "+saldo || '0,00') : '••••'}</p>
        </div>
        <div className="flecha">
          <MdKeyboardArrowRight />
        </div>
      </div>

      <div className="preto2">
        <div className='main1'>
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
          <p className='p4'>Limite disponível de {isEyeVisible ? ("R$ "+limit || '0,00') : '••••'}</p>
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
