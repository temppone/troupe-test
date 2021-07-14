import styled from 'styled-components';

export const HeaderNav = styled.header`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  width: 100%;
  background: ${({ theme }) => theme.colors.secundaryDark};
  position: fixed;
  z-index: 100;
  top: 0;
  font-weight: bold;

  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const HeaderLogo = styled.div`
  a {
    padding: 1rem;
  }
`;

export const HeaderMenu = styled.ul`
  display: flex;
  flex-direction: rows;
  align-items: center;
  font-size: 1.4rem;
  
`;
export const HeaderMenuItem = styled.li`
  a {
    padding: 1.4rem;
  }
`;
