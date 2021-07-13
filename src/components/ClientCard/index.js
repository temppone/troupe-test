import React from 'react';
import {
  ClientInfos, ClientInfosData, ClientInfosField, ClientInfosItem
} from './styles';



const ClientCard = ({
  nome,
  cpf,
  email,
  endereco }) => {
  return (

    <ClientInfos>
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