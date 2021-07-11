import React, { useEffect } from 'react';
import { CLIENTS_GET } from '../../api';
import useFetch from '../../Hooks/useFetch';
import { FlexContainer } from '../../shared/flexContainer';
import { theme } from '../../shared/theme';
import {
  ClientInfos,
  ClientInfosItem,
  ClientInfosField,
  ClientInfosData,
} from './styles';

const ClientCard = () => {
  const { data, loading, error, request } = useFetch();
  console.log(useFetch());

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

  // fetch('http://localhost:5000/clientes').then((response) => {
  //   console.log(response.json());
  // });

  return (
    <FlexContainer
      flexDirection="column"
      background={theme.colors.secundaryDark}
    >
      <ClientInfos>
        <ClientInfosItem>
          <ClientInfosField></ClientInfosField>
          <ClientInfosData></ClientInfosData>
        </ClientInfosItem>
      </ClientInfos>
    </FlexContainer>
  );
};

export default ClientCard;
