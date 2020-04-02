import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import logoImg from '../../assets/logo.png';
import carroImg from '../../assets/uno.jpeg';


export default function Home() {
  const [name, setName] = useState('');

  return (
    <>
      <header>
        <img src={logoImg} style={{height: '70px', width: '70px'}} alt="Be The Hero"/>
      </header>
      
      <div className="search-container">
        {/* <div className="content"> */}
            
          <div className="spare-items">
            <h2>Carros</h2>
            <h2>Motos</h2>
          </div>
          <form action="">
            <input type="text" placeholder="Pesquisar um veículo =D" />
          </form>  
          

          {/* <form action="">
            <input type="text" placeholder="Nome" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <input type="password" placeholder="Confirme sua senha" />
            <button className="button">Cadastrar</button>
          </form> */}
        {/* </div>       */}
      </div>
      <span className="results-span">Resultados da sua pesquisa</span>
      <div className="content">
          <ul>
            <li>              
              <img src={carroImg} alt="Imagem do veículo"/>
              <div className="spare-items">
                <strong>Fiat Uno</strong> <strong>R$ 33.000,00</strong>
              </div>
              <p>Sporting Automático . 2016</p>
            </li>

            <li>              
              <img src={carroImg} alt="Imagem do veículo"/>
              <div className="spare-items">
                <strong>Fiat Uno</strong> <strong>R$ 33.000,00</strong>
              </div>
              <p>Sporting Automático . 2016</p>
            </li>

            <li>              
              <img src={carroImg} alt="Imagem do veículo"/>
              <div className="spare-items">
                <strong>Fiat Uno</strong> <strong>R$ 33.000,00</strong>
              </div>
              <p>Sporting Automático . 2016</p>
            </li>

            <li>              
              <img src={carroImg} alt="Imagem do veículo"/>
              <div className="spare-items">
                <strong>Fiat Uno</strong> <strong>R$ 33.000,00</strong>
              </div>
              <p>Sporting Automático . 2016</p>
            </li>


          </ul>
      </div>
    </>
  )
}