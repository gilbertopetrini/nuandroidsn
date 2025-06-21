import { Routes, Route } from 'react-router-dom';
import Nuu from './Nubank';
import Config from './Config';
import Pix from './Pix';
import './Ape.css'
import { useState, useEffect } from "react";
import logo from './assets/tela11.png';

function App() {
 const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Exibe splash por 2 segundos ao carregar o site
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000); // duração da animação em ms

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <div className="splash-container">
        <img src={logo} className="splash-logo" alt="Logo" />
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Nuu />} />
      <Route path="/config" element={<Config />} />
      <Route path="/pix" element={<Pix />} />
    </Routes>
  );
}

export default App;