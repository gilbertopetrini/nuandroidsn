import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx';
import React from 'react';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(function (registration) {
      console.log('Service Worker registrado com sucesso:', registration.scope);
    })
    .catch(function (error) {
      console.log('Erro ao registrar o Service Worker:', error);
    });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);