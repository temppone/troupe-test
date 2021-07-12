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
  BallDiv,
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
      <>
        {data?.map((client) => (
          <FlexContainer
            flexDirection="column"
            justifyContetn="center"
            background={theme.colors.secundaryDark}
            margin="1rem"
            borderRadius="0.9rem"
            key={client.cpf}
          >
            <ClientInfos>
              <BallDiv />
              <ClientInfosItem>
                <ClientInfosField>Nome</ClientInfosField>
                <ClientInfosData>{client.nome}</ClientInfosData>
              </ClientInfosItem>
              <ClientInfosItem>
                <ClientInfosField>CPF</ClientInfosField>
                <ClientInfosData>{client.cpf}</ClientInfosData>
              </ClientInfosItem>
              <ClientInfosItem>
                <ClientInfosField>Email</ClientInfosField>
                <ClientInfosData>{client.email}</ClientInfosData>
              </ClientInfosItem>
              <ClientInfosItem>
                <ClientInfosField>Endereço</ClientInfosField>
                <ClientInfosData>
                  <b>CEP: </b>
                  {client.endereco?.cep}
                </ClientInfosData>
                <ClientInfosData>
                  <b>Logradouro: </b>
                  {client.endereco?.rua}
                </ClientInfosData>
                <ClientInfosData>
                  <b>Número: </b>
                  {client.endereco?.numero}
                </ClientInfosData>
                <ClientInfosData>
                  <b>Bairro: </b>
                  {client.endereco?.bairro}
                </ClientInfosData>
                <ClientInfosData>
                  <b>Cidade: </b>
                  {client.endereco?.cidade}
                </ClientInfosData>
              </ClientInfosItem>
            </ClientInfos>
          </FlexContainer>
        ))}
      </>
    );
  else return null;
};

export default ClientCard;
