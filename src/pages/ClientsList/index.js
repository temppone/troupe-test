import React, { useContext, useEffect, useState } from 'react';
import { CLIENTS_GET, CLIENT_DELETE } from '../../api';
import ClientCard from '../../components/ClientCard';
import Head from '../../components/Head';
import useFetch from '../../Hooks/useFetch';
import { FlexContainer, PageTitle } from '../../shared/flexContainer';
import { UserContext } from '../../UserContext';
import { ClientListHeader, ClientsListGreeting } from './styles';
import toast from 'react-hot-toast';
import { ErrorDiv } from '../../components/Error/styles';
import Loading from '../../components/Loading';
import Input from '../../components/Input';

const ClientList = () => {
  const { loading, error, request } = useFetch();
  const [clients, setClients] = useState([{}]);

  useEffect(() => {
    // const infiniteScroll = (event) => {
    //   console.log(event);
    // };
    const getClients = async () => {
      const { url, options } = CLIENTS_GET({ page: 1, limit: 4 });
      var { json: clients } = await request(url, options);
      return clients;
    };

    toast.promise(
      getClients(),
      {
        loading: () => {
          return 'Caregando clientes...';
        },
        success: (data) => {
          setClients(data)
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

  const handleDelete = async (id) => {
    const confirm = window.confirm('Tem certeza que deseja deletar?');

    if (confirm) {
      const { url, options } = await CLIENT_DELETE(id);
      const { response } = await request(url, options);

      if (response.ok) {
        setClients(clients.filter(x => x.id !== id));
      }
    }
  };

  if (error) return <ErrorDiv>Algo deu errado :(</ErrorDiv>;
  if (loading) return <Loading />;
  if (clients)
    return (
      <FlexContainer
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        margin="0 auto"
        padding="1rem auto"
      >
        <Head title="Clientes" description="Lista de clientes do Useeers" />
        {/* <Header /> */}
        <ClientListHeader>
          <PageTitle>Clientes</PageTitle>
          <ClientsListGreeting>Lista de dados</ClientsListGreeting>
        </ClientListHeader>
        {clients?.map((value) => (
          <ClientCard key={value} {...value} handleDelete={() => handleDelete(value.id)} />
        ))}
      </FlexContainer>
    );
  else return null;
};

export default ClientList;
