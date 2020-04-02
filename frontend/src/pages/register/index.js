import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import logoImg from '../../assets/logo.png';


export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');

  return (
    <div className="main-container">
      <div className="content">
      <section>
          <img src={logoImg} style={{height: '150px', width: '150px'}} alt="Be The Hero"/>

          <h1>Cadastro</h1>
          <p>Faça seu cadastro e anuncie agora mesmo seu veículo com a AnunciCar, vrummm</p>

          <Link className="back-link" to="/login">
						<FiArrowLeft size={16} color="#e02041" />
						Já tenho cadastro
					</Link>
      </section>

        <form action="">
          <input type="text" placeholder="Nome" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Senha" />
          <input type="password" placeholder="Confirme sua senha" />
          <button className="button">Cadastrar</button>
        </form>
      </div>      
    </div>
  )
}