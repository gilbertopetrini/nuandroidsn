import { Routes, Route } from 'react-router-dom';
import Nuu from './Nubank';
import Config from './Config';
import Pix from './Pix';
import { useEffect } from "react";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Nuu />} />
      <Route path="/config" element={<Config />} />
      <Route path="/pix" element={<Pix />} />
    </Routes>
  );
}

export default App;