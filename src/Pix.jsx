import './pix.css'
import { HiOutlineMicrophone } from "react-icons/hi";
import { FaXmark } from "react-icons/fa6";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { LiaMoneyBillSolid } from "react-icons/lia";
import { FaRegCalendarMinus } from "react-icons/fa";
import { MdQrCode } from "react-icons/md";
import { FiCopy } from "react-icons/fi";
import { RiCurrencyLine } from "react-icons/ri";
import { PiHandDeposit } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import { IoSparklesSharp } from "react-icons/io5";
import { MdCurrencyExchange } from "react-icons/md";
import { MdOutlineShield } from "react-icons/md";
import { HiMiniAdjustmentsVertical } from "react-icons/hi2";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useState, useEffect } from 'react'

import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

function Pix() {
     const navigate = useNavigate();

    useEffect(() => {
    document.body.style.backgroundColor = 'black';

    return () => {
      document.body.style.backgroundColor = '';
    };
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
    <div className='bodi'>
        <div className='menudecima' >
            <div onClick={() => navigate('/')}>
            <FaXmark />
            </div>
            <div>
                <HiOutlineQuestionMarkCircle/>
            </div>
            
        </div>
        <div className='mainpix'>
            <p>Área Pix</p>
            <div className='barraroxa1'>
                <div>
                    Digite tudo: chave e valor
                </div>
                <HiOutlineMicrophone/>
            </div>
        </div>
        <div className='mainpix2'>
            <div className='faixadeiconespix'>
                <div className='iconepixs'>
                    <div className='iconemainpix'><LiaMoneyBillSolid/></div>
                    <div className='textodoicone'>Transferir</div>
                </div>

                <div className='iconepixs'>
                    <div className='iconemainpix'><FaRegCalendarMinus/></div>
                    <div className='textodoicone'>Programar</div>
                </div>

                <div className='iconepixs'>
                    <div className='iconemainpix'><MdQrCode/></div>
                    <div className='textodoicone'>Ler QR code</div>
                </div>
            </div>

            <div className='faixadeiconespix'>
                <div className='iconepixs'>
                    <div className='iconemainpix'><FiCopy/></div>
                    <div className='textodoicone'>Pix Copia e Cola</div>
                </div>

                <div className='iconepixs'>
                    <div className='iconemainpix'><RiCurrencyLine/></div>
                    <div className='textodoicone'>Cobrar</div>
                </div>

                <div className='iconepixs'>
                    <div className='iconemainpix'><PiHandDeposit/></div>
                    <div className='textodoicone'>Depositar</div>
                </div>
            </div>
            
            <div className='faixadeiconespix'>
                <div className='iconepixs'>
                    <div className='iconemainpix'><HiOutlineMicrophone/></div>
                    <div className='textodoicone'>Pix por voz</div>
                </div>
            </div>
        </div>
        <div className='mainpix3'>
            <div className='pixnocred'>
                <p><strong>Pix no crédito:</strong> transfira até R$ 350 sem usar o saldo da sua conta.</p>
                <p className='pnc'><IoSparklesSharp/></p>
            </div>
        </div>
        <div className='mainpix4'>
            <p>Preferências</p>
            <div className='pref'>
                <div className='pref2'>
                    <MdCurrencyExchange/>
                    <p>Pix automático</p>
                </div>
                <MdKeyboardArrowRight/>
            </div>

            <div className='pref'>
                <div className='pref2'>
                    <MdOutlineShield/>
                    <p>Registrar ou trazer chaves</p>
                </div>
                <MdKeyboardArrowRight/>
            </div>

            <div className='pref'>
                <div className='pref2'>
                    <HiMiniAdjustmentsVertical/>
                    <p>Meus limites</p>
                </div>
                <MdKeyboardArrowRight/>
            </div>
        </div>
    </div>
    </motion.div>
  );
}

export default Pix;