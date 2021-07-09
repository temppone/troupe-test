import styled from 'styled-components';

export const HeaderNav = styled.header`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  width: 100%;
  background: ${({ theme }) => theme.colors.secundaryDark};
  padding: 1rem 0;
  position: fixed;
  z-index: 100;
  top: 0;
`;

export const HeaderLogo = styled.svg`
  width: 10%;
`;

export const HeaderMenu = styled.ul``;
export const HeaderMenuItem = styled.li``;
