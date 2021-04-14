import styled from 'styled-components';
import reactjs from '../../assets/icons/react.svg';
import angular from '../../assets/icons/angular.svg';
import typescript from '../../assets/icons/typescript.svg';
import javascript from '../../assets/icons/javascript.svg';
import nodejs from '../../assets/icons/nodejs.svg';
import nestjs from '../../assets/icons/nestjs.svg';
import antdesign from '../../assets/icons/ant-design.svg';
import materialui from '../../assets/icons/material-ui.svg';
import styledcomponents from '../../assets/icons/styled-components.svg';
import sass from '../../assets/icons/sass.svg';
import bootstrap from '../../assets/icons/bootstrap.svg';
import mongodb from '../../assets/icons/mongodb.svg';
import mysql from '../../assets/icons/mysql.svg';
import postgresql from '../../assets/icons/postgresql.svg';
import docker from '../../assets/icons/docker.svg';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background: pink;
  justify-content: center;
  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.background};
  font-family: 'Nunito', sans-serif;
  justify-content: center;
  padding: 10px 200px;
  margin-bottom: 50px;

  .page-header {
    height: 80px;
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 16px;
    margin-bottom: 20px;
  }

  .skills {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .skill-title {
    margin-right: 50px;
  }

  #skill {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    background: ${(props) => props.theme.colors.stroke};
    padding: 10px 20px;
    border-radius: 25px;
    height: 15vh;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  }

  #skill-id {
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    margin-right: 50px;
    height: 70px;
    width: 70px;
  }

  .react {
    background-image: url(${reactjs});
  }

  .angular {
    background-image: url(${angular});
  }

  .typescript {
    background-image: url(${typescript});
  }

  .javascript {
    background-image: url(${javascript});
  }

  .nodejs {
    background-image: url(${nodejs});
  }

  .nestjs {
    background-image: url(${nestjs});
  }

  .ant-design {
    background-image: url(${antdesign});
  }

  .material-ui {
    background-image: url(${materialui});
  }

  .styled-components {
    background-image: url(${styledcomponents});
  }

  .sass {
    background-image: url(${sass});
  }

  .bootstrap {
    background-image: url(${bootstrap});
  }

  .mongodb {
    background-image: url(${mongodb});
  }

  .mysql {
    background-image: url(${mysql});
  }

  .postgresql {
    background-image: url(${postgresql});
  }

  .docker {
    background-image: url(${docker});
  }
`;
