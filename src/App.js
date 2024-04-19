import React from 'react';
import './App.css';

function Link({ text }) {
  // Função para associar ação ao clicar no botão 1
  const handleClickBotao1 = () => {
    // Redireciona para o link correspondente ao botão 1
    window.location.href = "link_do_botao_1";
  };

  // Função para associar ação ao clicar no botão 2
  const handleClickBotao2 = () => {
    // Redireciona para o link correspondente ao botão 2
    window.location.href = "link_do_botao_2";
  };

  // Função para associar ação ao clicar no botão 3
  const handleClickBotao3 = () => {
    // Redireciona para o link correspondente ao botão 3
    window.location.href = "link_do_botao_3";
  };

  return (
    <div className='mainDiv'> 
      {/* <p>
        <code>{text}</code>
      </p> */}
      
      <div className="buttonsDiv">
        <button className="btn1" onClick={handleClickBotao1}>Botão 1</button>
        <button className="btn2" onClick={handleClickBotao2}>Botão 2</button>
        <button className="btn3" onClick={handleClickBotao3}>Botão 3</button>
      </div>
    </div>
  );
}

export default Link;
