import "./login.css"
import { useState } from "react";
import { auth } from "./firebase.js";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      alert("Login realizado!");
      navigate("/");
    } catch (error) {
      alert("Erro no login: " + error.message);
    }
  };

  const handleCadastro = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, senha);
      alert("Cadastro feito com sucesso!");
    } catch (error) {
      alert("Erro no cadastro: " + error.message);
    }
  };
    return(
        <div className="menulogin">
          <div className="transparente">
            <div className="containerlogin">
              <p>Um mundo financeiro <br/>sem complexidades.
              </p>
              <input className="inputlogin" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
              <input className="inputlogin" type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} />
              <button className="btnlogin" onClick={handleLogin}>Entrar</button>
            </div>
          </div>
        </div>
        
    )
}

export default Login
