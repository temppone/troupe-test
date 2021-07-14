import { useNavigate } from 'react-router-dom';
import { theme } from '../../shared/theme';
import Button from '../Button';
import {
  ClientActions,
  ClientInfos,
  ClientInfosData,
  ClientInfosField,
  ClientInfosItem,
} from './styles';

const ClientCard = ({
  id,
  nome,
  cpf,
  email,
  endereco,
  handleDelete,
  loading,
}) => {
  const navigate = useNavigate();

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
          buttonName="Editar"
          onClick={() => navigate(`/clientes/edit/${id}`)}
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
