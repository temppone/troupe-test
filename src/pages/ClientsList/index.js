import React, { useContext, useEffect, useState } from 'react';
import ClientCard from '../../components/ClientCard';
import { FlexContainer, PageTitle } from '../../shared/flexContainer';
import { UserContext } from '../../UserContext';
import { ClientsListGreeting } from './styles';

const ClientList = () => {
  const { data } = useContext(UserContext);
  console.log(data, 'data context')

  useEffect(() => {
    const infiniteScroll = (event) => {
      console.log(event);
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
      <ClientsListGreeting>
        Você está logado como: {data?.nome}
      </ClientsListGreeting>
      <ClientCard />
    </FlexContainer>
  );
};

export default ClientList;
