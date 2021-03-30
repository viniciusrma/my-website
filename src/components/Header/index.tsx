/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext } from 'react';
import { Container } from './styles';
import  Switch  from 'react-switch';
import {ThemeContext} from 'styled-components';
import { shade } from 'polished';
interface Props {
  toggleTheme(): void
}

const Header: React.FC<Props> = ({ toggleTheme}) => {
  const { colors, title } = useContext(ThemeContext);
  return(
    <Container>
      <div className="logo" />
      <div className="navigation">
        <a href="#" className="nav">Sobre mim</a>
        <a href="#" className="nav">Skills</a>
        <a href="#" className="nav">Projetos</a>
        <a href="#" className="nav">Contato</a>
      </div>
      <div className="switch">
        <div className="sun" />
        <Switch 
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          onColor={colors.bluePantone}
          offColor={shade(0.30, colors.background)}
          />
        <div className="moon" />
      </div>


      
    </Container>
  );
}

export default Header;