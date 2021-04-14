import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: pink;
  display: flex;
  justify-content: center;

  .page-header {
    height: 80px;
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    color: ${props => props.theme.colors.text}; 
    background: ${props => props.theme.colors.background}; 
  }
`;
