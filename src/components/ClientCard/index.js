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

const ClientCard = ({
  nome,
  cpf,
  email,
  endereco }) => {
  return (

    <ClientInfos>
      {console.log(nome)}
      <ClientInfosItem>
        <ClientInfosField>Nome</ClientInfosField>
        <ClientInfosData>{nome}</ClientInfosData>
      </ClientInfosItem>
      <ClientInfosItem>
        <ClientInfosField>CPF</ClientInfosField>
        <ClientInfosData>{cpf}</ClientInfosData>
      </ClientInfosItem>
      <ClientInfosItem>
        <ClientInfosField>Email</ClientInfosField>
        <ClientInfosData>{email}</ClientInfosData>
      </ClientInfosItem>
      <ClientInfosItem>
        <ClientInfosField>Endereço</ClientInfosField>
        <ClientInfosData>
          <b>CEP: </b>
          {endereco?.cep}
        </ClientInfosData>
        <ClientInfosData>
          <b>Logradouro: </b>
          {endereco?.rua}
        </ClientInfosData>
        <ClientInfosData>
          <b>Número: </b>
          {endereco?.numero}
        </ClientInfosData>
        <ClientInfosData>
          <b>Bairro: </b>
          {endereco?.bairro}
        </ClientInfosData>
        <ClientInfosData>
          <b>Cidade: </b>
          {endereco?.cidade}
        </ClientInfosData>
      </ClientInfosItem>
    </ClientInfos>
  );
};

export default ClientCard;
