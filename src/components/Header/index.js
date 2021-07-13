import React, { useContext } from 'react';
import { HeaderNav, HeaderLogo, HeaderMenu, HeaderMenuItem } from './styles';
import { FlexContainer } from '../../shared/flexContainer';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { UserContext } from '../../UserContext';
import Button from '../Button/index';

const Header = () => {
  const { loggedIn, userLogout } = useContext(UserContext);

  if (loggedIn === true) {
    return (
      <HeaderNav>
        <FlexContainer
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          background={({ theme }) => theme.colors.secundaryDark}
        >
          <HeaderMenu>
            <HeaderMenuItem>
              <Link to="/clientes">Lista</Link>
            </HeaderMenuItem>
            <HeaderMenuItem>
              <Link to="/clientes/create">Cadastro</Link>
            </HeaderMenuItem>
          </HeaderMenu>

          <HeaderLogo>
            <Link to="/clientes">
              <Logo width="6rem" height="5rem" />
            </Link>
          </HeaderLogo>
        </FlexContainer>
      </HeaderNav>
    );
  } else {
    return null;
  }
};

export default Header;
