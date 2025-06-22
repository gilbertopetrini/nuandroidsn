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

function Saldo() {
    const navigate = useNavigate();
    
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
    <div className="mainSaldo">
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
                        <FiArrowUp/> <p>{rendido}</p>
                    </div>
                </div>
            </div>
            <div className="dir">
                <MdKeyboardArrowRight/>
            </div>
        </div>
    </div>
)}

export default Saldo;