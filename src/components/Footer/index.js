import React from 'react';

import { FooterItem } from './styles';
import { FlexContainer } from '../../shared/flexContainer';

const Footer = () => {
  return (
    <FlexContainer flexDirection="row" padding="1rem" justifyContent="center">
      <FooterItem>&copy; 2021 | Todos os direitos reservados.</FooterItem>
      <FooterItem></FooterItem>
    </FlexContainer>
  );
};

export default Footer;
