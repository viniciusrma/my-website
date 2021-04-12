import styled from 'styled-components';
import logo from '../../assets/icons/logo.svg';
import sun from '../../assets/icons/sun.svg';
import moon from '../../assets/icons/moon.svg';

export const Container = styled.div`
  @media only screen and (max-width: 360px) {
    padding: 0 10px;
  }

  @media only screen and (max-width: 414px) {
    width: 100vw;
    margin: 0;
  }

  height: 9vh;
  background: ${(props) => props.theme.colors.header};
  color: ${(props) => props.theme.colors.text};
  display: flex;
  align-items: center;
  padding: 0 30px;
  justify-content: space-between;
  font-family: 'Nunito', sans-serif;
  font-size: 16px;
  font-weight: 600;
  width: 100vw;

  .logo {
    background-image: url(${logo});
    height: 33px;
    width: 200px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    float: left;

    @media only screen and (max-width: 360px) {
      background: none;
    }

    @media only screen and (max-width: 414px) {
      display: none;
    }
  }

  .navigation {
    margin-right: 50px;
    height: 100%;
    display: flex;
    align-items: center;

    @media only screen and (max-width: 360px) {
      margin-right: 10px;
    }

    @media only screen and (max-width: 414px) {
    }
  }

  .nav {
    margin: 5px;
    color: ${(props) => props.theme.colors.text2};
    text-decoration: none;

    :hover {
      color: ${(props) => props.theme.colors.mango};
    }
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

  .moon {
    background-image: url(${moon});
    height: 16px;
    width: 16px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;

    @media only screen and (max-width: 360px) {
      margin-left: 3px;
    }
  }
`;
