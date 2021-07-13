import React, { useContext, useEffect, useState } from 'react';
import { CLIENTS_GET } from '../../api';
import ClientCard from '../../components/ClientCard';
import Head from '../../components/Head';
import useFetch from '../../Hooks/useFetch';
import { FlexContainer, PageTitle } from '../../shared/flexContainer';
import { UserContext } from '../../UserContext';
import { ClientListHeader, ClientsListGreeting } from './styles';
import toast from 'react-hot-toast';
import { ErrorDiv } from '../../components/Error/styles';
import Loading from '../../components/Loading';

const ClientList = () => {
  const { data } = useContext(UserContext);
  const { data: dataFetch, loading, error, request } = useFetch();
  const [clients, setClients] = useState([{}]);

  useEffect(() => {
    // const infiniteScroll = (event) => {
    //   console.log(event);
    // };
    const getClients = async () => {
      const { url, options } = CLIENTS_GET({ page: 1, limit: 4 });
      var { json: clients } = await request(url, options);

      setClients(clients);
    };

    toast.promise(
      getClients(),
      {
        loading: () => {
          return 'Caregando clientes...';
        },
        success: () => {
          return 'Feito!';
        },
        error: (err) => {
          return err.toString();
        },
      },
      { position: 'bottom-center', borderRadius: '0.9rem', background: '#333' }
    );

    // window.addEventListener('scroll', infiniteScroll);
    // window.addEventListener('wheel', infiniteScroll);

    // return () => {
    //   window.removeEventListener('scroll', infiniteScroll);
    //   window.removeEventListener('wheel ', infiniteScroll);
    // };
  }, [request]);

  if (error) return <ErrorDiv>Algo deu errado</ErrorDiv>;
  if (loading) return <Loading />;
  if (data)
    return (
      <FlexContainer
        flexDirection="column"
        justifyContent="center"
        margin="0"
        padding="1rem auto"
      >
        <Head title="Clientes" description="Lista de clientes do Useeers" />
        {/* <Header /> */}
        <ClientListHeader>
          <PageTitle>Clientes</PageTitle>
          <ClientsListGreeting>Lista de dados</ClientsListGreeting>
        </ClientListHeader>
        {clients?.map((value) => (
          <ClientCard key={value} {...value} />
        ))}
      </FlexContainer>
    );
  else return null;
};

export default ClientList;
