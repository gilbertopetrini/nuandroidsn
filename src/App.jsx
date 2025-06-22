import Nuu from './Nubank';
import Config from './Config';
import Pix from './Pix';
import Saldo from './saldo';
import './Ape.css'
import { useState, useEffect } from "react";
import logo from './assets/tela11.png';
import faceid from './assets/faceid.gif';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';


function App() {
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(true);
  const [showFaceId, setShowFaceId] = useState(false);

  useEffect(() => {
    // Primeiro mostra o splash-logo
    const splashTimer = setTimeout(() => {
      setShowSplash(false);
    }, 2350); // tempo total da splash (logo + faceid)

    // Depois de 1s, mostra o faceid (ajuste o tempo como quiser)
    const faceIdTimer = setTimeout(() => {
      setShowFaceId(true);
    }, 400); // aparece 1 segundo depois

    return () => {
      clearTimeout(splashTimer);
      clearTimeout(faceIdTimer);
    };
}, []);

if (showSplash) {
  return (
    <div className="splash-container">
      <img src={logo} className="splash-logo" alt="Logo" />
      {showFaceId && (
        <img src={faceid} className="splash-logo2" alt="Face ID" />
      )}
    </div>
  );
}

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Nuu />} />
        <Route path="/config" element={<Config />} />
        <Route path="/pix" element={<Pix />} />
        <Route path="/saldo" element={<Saldo />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;