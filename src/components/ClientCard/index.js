import React from 'react';
import { FlexContainer } from '../../shared/flexContainer';
import { theme } from '../../shared/theme';
import { ClientInfos, ClientInfosItem, ClientInfosField, ClientInfosData } from './styles';

const ClientCard = () => {
  return (
    <FlexContainer
      flexDirection="column"
      background={theme.colors.secundaryDark}
    >
      <ClientInfos>
        <ClientInfosItem>
          <ClientInfosField></ClientInfosField>
          <ClientInfosData></ClientInfosData>
        </ClientInfosItem>
      </ClientInfos>
    </FlexContainer>
  );
};

export default ClientCard;
