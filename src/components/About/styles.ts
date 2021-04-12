import styled from 'styled-components';
import aboutImg from '../../assets/icons/aboutImg.svg';

export const AboutContent = styled.div`
  @media only screen and (max-width: 960px) {
    padding: 50px;
  }

  @media only screen and (max-width: 768px) {
    padding: 50px;
    height: 100%;
    flex-direction: column;
  }

  @media only screen and (max-width: 414px) {
    padding: 30px;
    height: 100%;
    margin: 50px 0px;
  }

  height: 100vh;
  width: 100%;
  background: ${(props) => props.theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.text};
  padding: 50px;
  font-family: 'Nunito', sans-serif;
  font-size: 16px;
  font-weight: 500;

  .aboutImg {
    background-image: url(${aboutImg});
    height: 400px;
    width: 400px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    margin-right: 200px;

    @media only screen and (max-width: 960px) {
      height: 300px;
      width: 300px;
      margin-right: 50px;
    }

    @media only screen and (max-width: 768px) {
      height: 250px;
      width: 250px;
      margin-right: 50px;
    }

    @media only screen and (max-width: 414px) {
      margin-left: 200px;
    }
  }

  .text {
    width: 600px;

    @media only screen and (max-width: 768px) {
      width: 400px;
    }

    @media only screen and (max-width: 414px) {
      margin-left: 200px;
      margin-top: 20px;
    }
  }

  h1 {
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 10px;
  }
`;
