import { Routes, Route } from 'react-router-dom';
import Nuu from './Nubank';
import Config from './Config';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Nuu />} />
      <Route path="/config" element={<Config />} />
    </Routes>
  );
}

export default App;