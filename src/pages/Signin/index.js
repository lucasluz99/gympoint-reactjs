import React from 'react';

import logo from '../../assets/images/logo.png';

function Signin() {
  return (
    <>
      <img src={logo} alt="Gympoint" />

      <form>
        <div>
          <h1>Seu e-mail</h1>
          <input type="email" />
        </div>
        <div>
          <h1>Sua senha</h1>
          <input type="password" />
        </div>
        <button type="submit">Entrar no sistema</button>
      </form>
    </>
  );
}

export default Signin;
