import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/66531820?s=460&u=9fdccc9b926aea95edb0de6486c3de23a2828d08&v=4" alt="imagem perfil"/>
        <div>
          <strong>Alex Moura</strong>
          <span>Informática</span>              
        </div>
      </header>

      <p>
        Entusiasta de tecnologia.
        <br /><br />
        Buscando sempre aprender mais, para um dia ser um bom dev.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 20,00</strong>
        </p>
        <button>
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;