import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    
  }
  ul{
    list-style: none;
  }
  
  button{
    box-shadow: none;
    border: none;
    font-size: 1.2rem;
    font-weight: 600;
    padding: 1rem;
  }

  a{
  text-decoration: none;
  color: ${({ theme }) => theme.primaryLight};
  }

  a:hover{
    color: ${({ theme }) => theme.secundaryLight};
  }

  html, body, #root{
    height: 100%;
    scroll-behavior: smooth;  
  }

  html {
    font-size: 10px;
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
    font-family: 'Roboto', sans-serif;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}){
      font-size: 12px;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}){
      font-size: 14px;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}){
      font-size: 16px;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}){
      font-size: 18px;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}){
      font-size: 20px;
    }
  } 
`;
