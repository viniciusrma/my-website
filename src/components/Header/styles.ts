import styled from 'styled-components';
import logo from '../../assets/logo.svg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';

export const Container = styled.div`
  height: 80px;
  background: ${props => props.theme.colors.header};
  color: ${props => props.theme.colors.text};
  display: flex;
  align-items: center;
  padding: 0 30px;
  justify-content: space-between;
  font-family: 'Nunito', sans-serif;
  font-size: 15px;
  font-weight: 600;

  .menu {
    display: flex;
  }

  .navigation {
    margin-right: 20px;
  }

  .nav {
    margin: 5px;
    color: ${props => props.theme.colors.text2};
    text-decoration: none;
  }

  .switch {
    display: flex;
    justify-content: space-around;
    align-items: center;
    display: flex;
    height: 100%;
    width: 100px;
    justify-content: space-around;
  }

  .sun {
    background-image: url(${sun});
    height: 20px;
    width: 20px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .logo {
    background-image: url(${logo});
    height: 40px;
    width: 250px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .moon {
    background-image: url(${moon});
    height: 16px;
    width: 16px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    margin-left: 0px;

  }

`