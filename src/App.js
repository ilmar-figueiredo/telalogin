import { useState } from "react";

import "./styles.css";

function SignIn() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <div className="container-center">
      <div className="login">
        <div className="login-area"></div>
        <div className="texttitle">Seja bem vindo!</div>
        <div className="subtitle">Por favor, faça seu login.</div>
        <a className="cadastro" href="#">
          Cadastre-se
        </a>

        <form>
          <div className="email"> E-mail </div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="email@email.com"
          />
          <div className="senha">Senha</div>
          <input
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            type="password"
            placeholder="********"
          />
          <button type="submit">Acessar Sistema</button>
        </form>
        <a className="resgatarsenha" href="#">
          Esqueceu sua senha?
        </a>
      </div>
    </div>
  );
}

export default SignIn;
