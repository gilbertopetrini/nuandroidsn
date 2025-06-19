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

function Pix() {
     const navigate = useNavigate();
  return (
    <>
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
    </>
  );
}

export default Pix;