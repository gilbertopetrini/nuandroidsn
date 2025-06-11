import { useState } from 'react'
import './App.css'
import { VscEye } from "react-icons/vsc";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { IoShieldCheckmark } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { PiPixLogoLight } from "react-icons/pi";
import { LiaBarcodeSolid } from "react-icons/lia";
import { LuHandCoins } from "react-icons/lu";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaInbox } from "react-icons/fa6";
import { FaCreditCard } from "react-icons/fa6";
import ccimg from './assets/ccimg.png';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="main">
        <div className="roxocima">
          <div className="roxo1">
          </div>
          <div className="roxo2">
            <div className="pfp"/>
              <div>
                <VscEye className="icone"/>
                <HiOutlineQuestionMarkCircle className="icone"/>
                <IoShieldCheckmark className="icone"/>
              </div>
          </div>
          <div className="roxo3">
            Olá, Gilberto
          </div>
        </div>
        <div className="preto1">
          <div>
            <p>Saldo em conta</p>
            <p className="saldo">R$12.000,00</p>
          </div>
          <div className="flecha">
            <MdKeyboardArrowRight />
          </div>
        </div>
        <div className="preto2">
          <div className='main1'>
            <div className='iconemain'><PiPixLogoLight/></div>
            <div className='textomain'>Área Pix e transferir</div>
          </div>
          <div className='main1'>
            <div className='iconemain2'><LiaBarcodeSolid/></div>
            <div className='textomain'>Pagar</div>
          </div>
          <div className='main1'>
            <div className='iconemain2'><LuHandCoins/></div>
            <div className='emprestimo'>R$10.000</div>
            <div className='textomain'>Pegar emprestado</div>
          </div>
          <div className='main1'>
            <div className='iconemain2'><BsCurrencyDollar/></div>
            <div className='textomain'>Converter limite</div>
          </div>
          <div className='main1'>
            <div className='iconemain2'><FaInbox/></div>
            <div className='emprestimo'>115% CDI</div>
            <div className='textomain'>Caixinha turbo</div>
          </div>
        </div>
        <div className='preto3'>
          <div className='header1'>
            <div className='cc'>
              <FaCreditCard/>
            </div>
            <div>Meus Cartões</div>
          </div>
          <div className='header2'>
            <p>
              <strong>Aumente seu limite</strong> do cartão hoje com o Nu Limite Garantido
            </p>
            <img src={ccimg} className='ccimg'/>
          </div>
        </div>
        <div className='preto4'>
          <div>
            <div className='cartao'>
              <p className='p1'>Cartão de crédito</p>
              <MdKeyboardArrowRight className='cartao2'/>
            </div>
            <p className='p2'>Fatural Atual</p>
            <p className='p3'>R$532,00</p>
            <p className='p4'>Limite disponível de R$950,00</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
