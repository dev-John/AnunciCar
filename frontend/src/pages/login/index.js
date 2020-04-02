import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import logoImg from '../../assets/logo.png';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="main-container">
      <div className="content">
      <section>
          <img src={logoImg} style={{height: '150px', width: '150px'}} alt="Be The Hero"/>

          <h1>Login</h1>
          <p>Faça login para continuar negociando com a AnunciCar!!</p>

          <Link className="back-link" to="/register">
						<FiArrowLeft size={16} color="#e02041" />
						Não tenho cadastro
					</Link>
      </section>

        <form action="">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Senha" />          
          <button className="button">Entrar</button>
        </form>
      </div>      
    </div>
  )
}