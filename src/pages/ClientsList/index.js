import React, { useContext, useEffect, useState } from 'react';
import ClientCard from '../../components/ClientCard';
import Header from '../../components/Header';
import { FlexContainer, PageTitle } from '../../shared/flexContainer';
import { UserContext } from '../../UserContext';
import { ClientsListGreeting } from './styles';

const ClientList = () => {
  const { data } = useContext(UserContext);

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
      <Header />
      <PageTitle>Clientes</PageTitle>
      <ClientsListGreeting>
        Você está logado como: {data && 'Data'}
      </ClientsListGreeting>
      <ClientCard />
    </FlexContainer>
  );
};

export default ClientList;
