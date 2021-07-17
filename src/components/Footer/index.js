
import { FooterItem } from './styles';
import { FlexContainer } from '../../shared/flexContainer';
import { useUserContext } from '../../UserContext';
import Button from '../Button';

const Footer = () => {
  const { loggedIn, userLogout } = useUserContext();

  return (
    <FlexContainer
      flexDirection="column"
      padding="1rem"
      justifyContent="center"
      margin="0  auto"
    >
      <FooterItem>&copy; 2021 | Todos os direitos reservados.</FooterItem>
      <FooterItem>
        {loggedIn && loggedIn ? (
          <Button buttonName="Deslogar" onClick={() => userLogout()}></Button>
        ) : null}
      </FooterItem>
    </FlexContainer>
  );
};

export default Footer;
