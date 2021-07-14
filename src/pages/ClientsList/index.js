import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { CLIENTS_GET, CLIENT_DELETE } from '../../api';
import ClientCard from '../../components/ClientCard';
import { ErrorDiv } from '../../components/Error/styles';
import Head from '../../components/Head';
import Loading from '../../components/Loading';
import useFetch from '../../Hooks/useFetch';
import { FlexContainer, PageTitle } from '../../shared/flexContainer';
import { ClientListHeader, ClientsListGreeting } from './styles';

const ClientList = () => {
  const { loading, error, request } = useFetch();
  const [clients, setClients] = useState([{}]);

  useEffect(() => {
    const getClients = async () => {
      const { url, options } = CLIENTS_GET({ page: 1, limit: 4 });
      const { json: clients } = await request(url, options);
      return clients;
    };

    toast.promise(
      getClients(),
      {
        loading: () => {
          return 'Caregando clientes...';
        },
        success: (data) => {
          setClients(data);
          return 'Feito!';
        },
        error: (err) => {
          return err.toString();
        },
      },
      { position: 'bottom-center', borderRadius: '0.9rem', background: '#333' }
    );
  }, [request]);

  const handleDelete = async (id) => {
    const confirm = window.confirm('Tem certeza que deseja deletar?');

    if (confirm) {
      const { url, options } = CLIENT_DELETE(id);
      const { response } = await request(url, options);

      if (response.ok) {
        setClients(clients.filter((x) => x.id !== id));
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
          <ClientCard
            {...value}
            handleDelete={() => handleDelete(value.id)}
            key={value.id}
          />
        ))}
      </FlexContainer>
    );
  else return null;
};

export default ClientList;
