import "./transferir.css";
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { FaXmark } from "react-icons/fa6";
import { MdQrCode } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { HiOutlineMicrophone } from "react-icons/hi";

const pageVariants = {
  initial: { opacity: 1, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 1, x: -100 },
};

function Transferir() {

    const inputRef = useRef(null);
    const navigate = useNavigate();

    const [valorTransferencia, setValorTransferencia] = useState('');

     const formatMoneyInput = (value) => {
        // Remove todos os caracteres não-dígitos
        const cleanValue = value.replace(/\D/g, '');

        // Se estiver vazio, retorna string vazia
        if (!cleanValue) {
            return '';
        }

        // Converte para número, divide por 100 para obter as casas decimais
        // Usamos parseInt para evitar problemas com floats se cleanValue for muito grande
        const numberValue = parseInt(cleanValue, 10) / 100;

        // Formata usando Intl.NumberFormat para o locale pt-BR
        return new Intl.NumberFormat('pt-BR', {
            style: 'decimal',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(numberValue);
    };

    // Handler para a mudança do input de valor de transferência
    const handleValorTransferenciaChange = (e) => {
        setValorTransferencia(formatMoneyInput(e.target.value));
    };

    useEffect(() => {
        const input = inputRef.current;
        if (input) {
        input.focus(); // Tenta dar foco
        }
    }, []);
    

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
        <div className="menuvert">
            <div className="menuverticon"><HiOutlineMicrophone /></div>
            <div className="menuverticon"><MdKeyboardArrowRight /></div>
        </div>
        <div className="menutrans"onClick={() => navigate('/Pix ')}><FaXmark /> <MdQrCode /></div>
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
            <input ref={inputRef}
                        inputMode="numeric"
                        className="inseririnput"
                        value={valorTransferencia} // Conecta o input ao estado
                        onChange={handleValorTransferenciaChange} // Usa o handler de formatação
                        placeholder="0,00" // Adiciona um placeholder para guiar o usuário
                    />
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