import Nuu from './Nubank';
import Config from './Config';
import Pix from './Pix';
import Saldo from './saldo';
import Transferir from './transferir';
import Login from './login';
import Pagar from './pagar';
import './Ape.css'
import { useState, useEffect } from "react";
import logo from './assets/tela11.png';
import faceid from './assets/faceid.gif';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ProtectedRoute from "./protectedRoute.jsx";

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
    return () => {
      clearTimeout(splashTimer)
    };
}, []);

if (showSplash) {
  return (
    <div className="splash-container">
      <img src={logo} className="splash-logo" alt="Logo" />
    </div>
  );
}

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<ProtectedRoute> <Nuu /> </ProtectedRoute>} />
        <Route path="/config" element={<ProtectedRoute> <Config /> </ProtectedRoute>} />
        <Route path="/pix" element={<ProtectedRoute> <Pix /> </ProtectedRoute>} />
        <Route path="/saldo" element={<ProtectedRoute> <Saldo /> </ProtectedRoute>} />
        <Route path="/transferir" element={<ProtectedRoute> <Transferir /> </ProtectedRoute>} />
        <Route path="/pagar" element={<ProtectedRoute> <Pagar /> </ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;