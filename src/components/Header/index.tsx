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
      Hello world

      <div className="switch">
          <div className="sun" />
          <Switch 
            onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={15}
            onColor={colors.secondary}
            offColor={shade(0.15, colors.primary)}
           />
          <div className="moon" />
        </div>
    </Container>
  );
}

export default Header;