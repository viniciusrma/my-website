/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button } from 'antd';
import React from 'react';
import { Container } from './styles';

// import { Container } from './styles';

const Main: React.FC = () => {
  return(
    <Container>
      <div className="section">
        <p className="text">Olá, eu sou o</p>
        <h1 className="name">Vinícius</h1>
        <p className="text">
          Sou Desenvolvedor FullStack e apaixonado por UI/UX.
        </p>
        <a href="https://github.com/viniciusrma">
          <Button className="github__button">
            Meu GitHub
            <div className="github" />
          </Button>
        </a>
        
      </div>
      <div className="illustration" />
    </Container>
  );
}

export default Main;