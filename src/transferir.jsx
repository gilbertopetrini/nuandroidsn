import "./transferir.css";
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { FaXmark } from "react-icons/fa6";
import { MdQrCode } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const pageVariants = {
  initial: { opacity: 1, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 1, x: -100 },
};

function Transferir() {

    const inputRef = useRef(null);

    useEffect(() => {
        const input = inputRef.current;
        if (input) {
        input.focus(); // Tenta dar foco
        }
    }, []);
    
    const navigate = useNavigate();

    useEffect(() => {
    // Aplica o estilo ao body quando a página monta
    document.body.style.backgroundColor = 'black';

    // Limpa ao sair da página
    return () => {
      document.body.style.backgroundColor = '';
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

    <div className="mainTransferir">
        <div className="menutrans"><FaXmark /> <MdQrCode /></div>
        <div className="trans1">
            <p className="line0">Qual é o valor da <br/>transferência?</p>
            <div className="line">
                <p className="line2">Saldo da conta:</p> <p>R$ {saldo}</p>
            </div>
            <div className="line">
                <p className="line2">Limite do cartão:</p> <p>R$ {limit}</p>
            </div>
        </div>
        <div className="inserir">
            <p>R$</p>
            <input ref={inputRef} inputMode="numeric" className="inseririnput"></input>
        </div>
        <div className="fim">
            <p>Consultar meus limites pix</p>
            <div className="fimicon">
                <MdKeyboardArrowRight />
            </div>
        </div>
    </div>
    </motion.div> 
)}

export default Transferir;