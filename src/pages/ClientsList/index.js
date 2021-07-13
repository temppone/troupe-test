import React, { useContext, useEffect, useState } from 'react';
import { CLIENTS_GET } from '../../api';
import ClientCard from '../../components/ClientCard';
import Header from '../../components/Header';
import useFetch from '../../Hooks/useFetch';
import { FlexContainer, PageTitle } from '../../shared/flexContainer';
import { UserContext } from '../../UserContext';
import { ClientsListGreeting } from './styles';

const ClientList = () => {
  const { data } = useContext(UserContext);
  const { data: dataFetch, loading, error, request } = useFetch();
  const [clients, setClients] = useState([{}]);

  useEffect(() => {
    console.log('useEffect');
    // const infiniteScroll = (event) => {
    //   console.log(event);
    // };
    const getClients = async () => {
      const { url, options } = CLIENTS_GET();

      var { json: clients } = await request(url, options);
      console.log(clients);
      setClients(clients);
    };

    getClients();

    // window.addEventListener('scroll', infiniteScroll);
    // window.addEventListener('wheel', infiniteScroll);

    // return () => {
    //   window.removeEventListener('scroll', infiniteScroll);
    //   window.removeEventListener('wheel ', infiniteScroll);
    // };
  }, []);

  return (
    <FlexContainer
      flexDirection="column"
      justifyContent="center"
      padding="1rem"
    >
      <Header />
      <PageTitle>Clientes</PageTitle>
      <ClientsListGreeting>Lista de dados</ClientsListGreeting>
      {clients && clients?.map((value) => <ClientCard {...value} />)}
    </FlexContainer>
  );
};

export default ClientList;
