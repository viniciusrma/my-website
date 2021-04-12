import styled from 'styled-components';
import illustration from '../../assets/icons/illustration.svg';
import github from '../../assets/icons/github.svg';

export const Container = styled.div`

  @media only screen and (max-width: 960px) {
    padding: 0 180px;
  }

  @media only screen and (max-width: 768px) {
    padding: 0 140px;
  }

  @media only screen and (max-width: 360px) {
    padding: 0 40px;
  }

  @media only screen and (max-width: 414px) {
    padding: 0 50px;
  }

  @media only screen and (max-height: 750px) {
    padding: 20px 140px;
  }

  color: ${props => props.theme.colors.text};
  display: flex;
  align-items: center;
  padding: 0 400px 100px 400px;
  justify-content: space-between;
  font-family: 'Nunito', sans-serif;
  font-size: 16px;
  font-weight: 600;
  height: 100%;
  min-height: 91vh;

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.text2}; 
  }

  .section {
    margin: 100px 50px;

    @media only screen and (max-width: 360px) {
      padding: 0 20px;
      margin: 0;
    }

    @media only screen and (max-height: 750px) {
      padding: 0 20px;
      margin: 20px 0px;
    }
  }

  .text {
    font-size: 18px;
    margin: 15px 0;
    font-weight: 500;
  }

  .name {
    font: 20px;
  }

  .github__button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 70px;
    width: 300px;
    height: 70px;
    background: ${props => props.theme.colors.bluePantone};
    border-radius: 5px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
    border: none;
    color: ${props => props.theme.colors.text2};
    font-family: 'Nunito', sans-serif;
    font-size: 16px;
    font-weight: 600;

    :hover {
      background: ${props => props.theme.colors.bluePantone};
      opacity: 0.9;
      transition: 0.3s;      
    }

    @media only screen and (max-width: 960px) {
      width: 200px;
      height: 54px;
      padding: 0px 30px;
    }

    @media only screen and (max-width: 768px) {
      width: 200px;
      height: 54px;
      padding: 0px 30px;
    }
  }

  .github {
    background-image: url(${github});
    height: 30px;
    width: 30px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .illustration {
    background-image: url(${illustration});
    height: 430px;
    width: 550px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: 50px;

    @media only screen and (max-width: 960px) {
      margin-right: 0px;
      height: 312px;
      width: 407px;
    }

    @media only screen and (max-width: 768px) {
      margin-right: 0px;
      height: 212px;
      width: 307px;
    }

    @media only screen and (max-width: 360px) {
      background: none;
    }

    @media only screen and (max-width: 414px) {
      background: none;
    }

    @media only screen and (max-height: 750px) {
      height: 220px;
      width: 320px;
    }
  }
`