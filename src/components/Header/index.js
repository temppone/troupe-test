import React from 'react';
import { HeaderNav, HeaderLogo, HeaderMenu, HeaderMenuItem } from './styles';
import { FlexContainer } from '../../shared/flexContainer';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { useUserContext } from '../../UserContext';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness2Icon from '@material-ui/icons/Brightness2';

const Header = () => {
  const { loggedIn, actualTheme, toggleTheme } = useUserContext();

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

            <HeaderMenuItem onClick={() => toggleTheme()}>
              {actualTheme === 'dark' ? <Brightness2Icon /> : <WbSunnyIcon />}
            </HeaderMenuItem>
          </HeaderMenu>

          <HeaderLogo>
            <Link to="/clientes">
              <Logo width="7rem" height="6rem" />
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
