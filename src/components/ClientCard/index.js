import React, { useEffect } from 'react';
import { CLIENTS_GET } from '../../api';
import useFetch from '../../Hooks/useFetch';
import { FlexContainer } from '../../shared/flexContainer';
import { theme } from '../../shared/theme';
import Loading from '../Loading';
import {
  ClientInfos,
  ClientInfosItem,
  ClientInfosField,
  ClientInfosData,
} from './styles';

const ClientCard = () => {
  const { data, loading, error, request } = useFetch();
  console.log(useFetch());
  console.log(data);
  useEffect(() => {
    console.log(request);

    const getDataClients = async () => {
      console.log(request);

      const { url, options } = CLIENTS_GET({ clientes: 0 });
      console.log(request);

      const { response, json } = await request(url, options);
      console.log(request);

      console.log(json);
    };
    getDataClients();
  }, [request]);

  console.log(data);
  if (error) return <div>{error}</div>;
  if (loading) return <Loading />;
  if (data)
    return (
      <FlexContainer
        flexDirection="column"
        background={theme.colors.secundaryDark}
      >
        {data?.map((client) => (
          <ClientInfos>
            <ClientInfosItem>
              <ClientInfosField>Nome</ClientInfosField>
              <ClientInfosData>{client.nome}</ClientInfosData>
              <ClientInfosField>Nome</ClientInfosField>
              <ClientInfosData>{client.nome}</ClientInfosData>
              <ClientInfosField>Nome</ClientInfosField>
              <ClientInfosData>{client.nome}</ClientInfosData>
              <ClientInfosField>Nome</ClientInfosField>
              <ClientInfosData>{client.nome}</ClientInfosData>
            </ClientInfosItem>
          </ClientInfos>
        ))}
      </FlexContainer>
    );
  else return null;
};

export default ClientCard;
