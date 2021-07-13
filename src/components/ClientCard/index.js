import { useNavigate } from 'react-router-dom';
import { CLIENT_DELETE } from '../../api';
import useFetch from '../../Hooks/useFetch';
import { theme } from '../../shared/theme';
import Button from '../Button';

import {
  ClientInfos,
  ClientInfosItem,
  ClientInfosField,
  ClientInfosData,
  ClientActions,
} from './styles';

const ClientCard = ({ id, nome, cpf, email, endereco }) => {
  const navigate = useNavigate();
  const { loading, request } = useFetch();

  const handleDelete = async () => {
    const confirm = window.confirm('Tem certeza que deseja deletar?');

    if (confirm) {
      const { url, options } = await CLIENT_DELETE(id);
      const { response } = await request(url, options);

      if (response.ok) window.location.reload();
    }
  };

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
      <ClientActions>
        <Button
          buttonName="Criar"
          onClick={() => navigate('/clientes/create')}
        />
        <Button
          buttonName="Editar"
          onClick={() => navigate('/clientes/create/:id')}
        />
        {loading ? (
          <Button
            buttonName="Deletar"
            background={theme.colors.warning}
            color={theme.colors.primaryLight}
            onClick={handleDelete}
            disabled
          />
        ) : (
          <Button
            buttonName="Deletar"
            background={theme.colors.warning}
            color={theme.colors.primaryLight}
            onClick={handleDelete}
          />
        )}
      </ClientActions>
    </ClientInfos>
  );
};

export default ClientCard;
