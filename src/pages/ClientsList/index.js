import React, { useEffect, useState } from 'react';
import ClientCard from '../../components/ClientCard';
import { FlexContainer, PageTitle } from '../../shared/flexContainer';

const ClientList = () => {
  useEffect(() => {
    const infiniteScroll = (event) => {
      console.log(event)
    };

    window.addEventListener('scroll', infiniteScroll);
    window.addEventListener('wheel', infiniteScroll);

    return () => {
      window.removeEventListener('scroll', infiniteScroll);
      window.removeEventListener('wheel ', infiniteScroll);
    };
  }, []);

  return (
    <FlexContainer
      flexDirection="column"
      justifyContent="center"
      padding="1rem"
    >
      <PageTitle>Clientes</PageTitle>
      <ClientCard />
    </FlexContainer>
  );
};

export default ClientList;
