import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function ProtectedRoute({ children }) {
  const [logado, setLogado] = useState(null); // null = carregando

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLogado(!!user);
    });
    return () => unsubscribe();
  }, []);

  if (logado === null) {
    return <p>Carregando...</p>; // pode pôr um spinner
  }

  return logado ? children : <Navigate to="/login" />;
}