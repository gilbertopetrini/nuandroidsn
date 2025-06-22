import "./saldo.css";
import { RiArrowLeftSLine } from "react-icons/ri";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { LuWallet } from "react-icons/lu";
import { MdCurrencyExchange } from "react-icons/md";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FiArrowUp } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { useState, useEffect } from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { LiaMoneyBillSolid } from "react-icons/lia";
import { PiHandDeposit } from "react-icons/pi";
import { LiaBarcodeSolid } from "react-icons/lia";
import { RiLoopRightLine } from "react-icons/ri";
import { LuHandCoins } from "react-icons/lu";
import { PiCoinVerticalLight } from "react-icons/pi";
import { FaArrowUpFromBracket } from "react-icons/fa6";
import { FaSignal } from "react-icons/fa";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import reload from './assets/reload.gif'; 
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 1, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 1, x: -100 },
};

function Saldo() {
    
    const navigate = useNavigate();

    useEffect(() => {
    // Aplica o estilo ao body quando a página monta
    document.body.style.backgroundColor = 'black';

    // Limpa ao sair da página
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

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
    
    const [nome, setNome] = useState('');
        const [saldo, setSaldo] = useState('');
        const [emp, setEmp] = useState('');
        const [fat, setFat] = useState('');
        const [limit, setLimit] = useState('');
        const [invest, setInvest] = useState('');
        const [rendido, setRendido] = useState('');
    
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
    }, []);

  return (
    
    <motion.div
            style={{ backgroundColor: 'black', minHeight: '100vh' }}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.1 }}
        >  
    <div className="mainSaldo">
        <div className={`flash-overlay ${showBlackFlash ? 'show-flash' : ''}`}></div>
          <div className={`pull-refresh ${showRefresh ? 'show' : ''}`}>
            <img className="gif" src={reload}/>
          </div>
        <div className="barra1" onClick={() => navigate('/')}>
            <RiArrowLeftSLine/>
            <HiOutlineQuestionMarkCircle/>
        </div>
        <div className="saldodisp">
            <p>Saldo disponível</p>
            <div className="saldogrande">
                R$ {saldo}
            </div>
        </div>
        <div className="infos">
            <div className="esq">
                <div className="infosfirsticon">
                    <LuWallet/>
                </div>
                <div className="infostext">
                    <p>Saldo Separado</p>
                    <p>R$ 0,00</p>
                </div>
            </div>
            <div className="dir">
                <MdKeyboardArrowRight/>
            </div>
        </div>

        <div className="infos">
            <div className="esq">
                <div className="infosfirsticon">
                    <MdCurrencyExchange/>
                </div>
                <div className="infostext">
                    <p>Tudo certo com suas contas?</p>
                    <p>ir para Assistente de pagamentos</p>
                </div>
            </div>
            <div className="dir">
                <MdKeyboardArrowRight/>
            </div>
        </div>

        <div className="infos">
            <div className="esq">
                <div className="infosfirsticon">
                    <MdOutlineAttachMoney/>
                </div>
                <div className="infostext">
                    <p>Total em investimentos</p>
                    <p>R$ {invest}</p>
                    <div className="rend">
                        <FiArrowUp/> <p>R$ {rendido}</p>
                    </div>
                </div>
            </div>
            <div className="dir">
                <div className="novidade">
                    Novidade
                </div>
                <MdKeyboardArrowRight/>
            </div>
        </div>
        <div className="options">
            <div className='optionsmain'>
                <div className='optionsicone'><PiHandDeposit /></div>
                <div className='optionstexto'>Depositar</div>
            </div>

            <div className='optionsmain'>
                <div className='optionsicone'><LiaBarcodeSolid /></div>
                <div className='optionstexto'>Pagar</div>
            </div>

            <div className='optionsmain'>
                <div className='optionsicone'><RiLoopRightLine /></div>
                <div className='optionstexto'>Débito Automático</div>
            </div>

            <div className='optionsmain'>
                <div className='optionsicone'><LuHandCoins /></div>
                <div className='optionstexto'>Empréstimos</div>
            </div>

            <div className='optionsmain'>
                <div className='optionsicone'><LiaMoneyBillSolid /></div>
                <div className='optionstexto'>Transferir</div>
            </div>
        </div>
        <div className="ads">
            <div className="banner">
                <p>Até <strong>R$ {emp}</strong> disponíveis para empréstimo.</p>
                <div className="empicon"><PiCoinVerticalLight /></div>
            </div>
        </div>
        <div className="historico">
            <p>Histórico</p>
            <div className="histicons">
                <FaArrowUpFromBracket />
                <FaSignal />
            </div>
        </div>
        <div className="centbusca">
            <div className="busca">
                <HiMiniMagnifyingGlass />
                <p>Buscar</p>
            </div>
        </div>
        <div className="compras">

        </div>
    </div>
    </motion.div> 
)}

export default Saldo;