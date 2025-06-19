import { Routes, Route } from 'react-router-dom';
import Config from './Config';
import { useEffect } from "react";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Nuu />} />
      <Route path="/config" element={<Config />} />
    </Routes>
  );
}

export default App;