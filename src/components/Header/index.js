import React, { useContext } from 'react';
import { HeaderNav, HeaderLogo, HeaderMenu, HeaderMenuItem } from './styles';
import { FlexContainer } from '../../shared/flexContainer';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { UserContext } from '../../UserContext';
import Button from '../Button';

const Header = () => {
  const { login, userLogout } = useContext(UserContext);

  return (
    <HeaderNav>
      {/* <FlexContainer justifyContent="space-between" alignItems="center">
        <HeaderMenu>
          <HeaderMenuItem>
            <Link to="/lista">Lista</Link>
          </HeaderMenuItem>
          <HeaderMenuItem>
            <Link to="/cadastro">Cadastro</Link>
          </HeaderMenuItem>
        </HeaderMenu>

        <Link to="/">
          <HeaderLogo>
            <Logo />
          </HeaderLogo>
        </Link>
      </FlexContainer> */}

      {login ? <Button onClick={userLogout}>Logout</Button> : null}
    </HeaderNav>
  );
};

export default Header;
