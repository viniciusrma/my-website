/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext } from 'react';
import { Container } from './styles';
import  Switch  from 'react-switch';
import {ThemeContext} from 'styled-components';
import { shade } from 'polished';
import { Link } from 'react-router-dom';
interface Props {
  toggleTheme(): void
}

const Header: React.FC<Props> = ({ toggleTheme}) => {
  const { colors, title } = useContext(ThemeContext);
  return(
    <Container>
      <Link to={"/"}>
        <div className="logo" />
      </Link>
      
      
      <div className="navigation">
        <Link to="/about" className="nav"> Sobre mim </Link>
        <Link to="/skills" className="nav"> Skills </Link>
        <Link to="/projects" className="nav"> Projects </Link>
        <Link to="/contact" className="nav"> Contato </Link>
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