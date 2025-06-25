import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import "./pagar.css"
import { FaXmark } from "react-icons/fa6";
import { FaCreditCard } from "react-icons/fa";
import { LiaBarcodeSolid } from "react-icons/lia";
import { PiPixLogoLight } from "react-icons/pi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdCurrencyExchange } from "react-icons/md";
import { MdOutlineLoop } from "react-icons/md";

function Pagar() {
    const navigate = useNavigate();

    useEffect(() => {
    document.body.style.backgroundColor = 'black';

    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

    return(
        <motion.div>
            <div className="mainPagar">
                <div className='headerPagar'>
                    <FaXmark onClick={() => navigate('/')}/>
                </div>
                <div className='centralizarpagar'>
                    <div className='title'>
                        Opções de pagamento
                    </div>
                </div>
                <div className='centralizarcbp'>
                    <div className="optionspagar">
                        <div className='optionpagar'>
                            <div className='iconespagar'><FaCreditCard /></div>
                            <div className='textospagar'>Fatura do cartão<br/>Nubank</div>
                        </div>

                        <div className='optionpagar' >
                            <div className='iconespagar'><LiaBarcodeSolid /></div>
                            <div className='textospagar'>Boleto</div>
                        </div>

                        <div className='optionpagar'>
                            <div className='iconespagar'><PiPixLogoLight /></div>
                            <div className='textospagar'>Pix</div>
                        </div>
                    </div>
                </div>
                <div className='centralizarpagarballoon'>
                        <div className='pagarballoon'>
                            <div className='balloonesq'>
                                <MdCurrencyExchange/>
                                <p>Assistentede de Pagamentos</p>
                            </div>
                            <div className='balloonicon'>
                            <MdKeyboardArrowRight/>
                            </div>
                        </div>

                        <div className='pagarballoon'>
                            <div className='balloonesq'>
                                <MdOutlineLoop />
                                <p>Boleto Automático</p>
                            </div>
                            <div className='balloonicon'>
                            <MdKeyboardArrowRight/>
                            </div>
                        </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Pagar;