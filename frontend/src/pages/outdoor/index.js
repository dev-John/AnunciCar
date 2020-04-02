import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import Typing from 'react-typing-animation';


import './styles.css';

import buyImg from '../../assets/buy.jpg';

const AnimatedTextOne = () => (
  <Typing>
    <h1 className="text-up">Começe a negociar o seu auto</h1>
  </Typing>
);

const AnimatedTextTwo = () => (
  <Typing delay={10}>
    <h1 className="text-down">do seu sofá</h1>
  </Typing>
);

export default function Outdoor() {
  const history = useHistory();

  function handlesStart () {
    history.push('/register');
  }

  function handlesContinue () {
    history.push('/login');
  }

  return (
    <div className="main-container">
      <section className="form">
        <img src={buyImg} alt="Imagem Inicial"/>
        <AnimatedTextOne />
        <AnimatedTextTwo />
        
      </section>
      
      <div className="spare-buttons">
        <button onClick={handlesStart} className="button" style={{height:'100px'}}>COMEÇAR A NEGOCIAR</button>
        <button onClick={handlesContinue} className="button-secondary">ENTRAR</button>
      </div>
      
    </div>
  )
}