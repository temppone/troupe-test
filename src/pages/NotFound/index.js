import React from 'react';
import { FlexContainer } from '../../shared/flexContainer';
import { ErrorDiv } from '../../components/Error/styles';

const NotFound = () => {
  return (
    <FlexContainer>
      <ErrorDiv>
        <h1>Erro 404</h1>
        <p>Página não encontrada :(</p>
      </ErrorDiv>
    </FlexContainer>
  );
};

export default NotFound;
