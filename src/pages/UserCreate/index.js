import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FlexContainer } from '../../shared/flexContainer';
import { CreateTitle, CreateInfo, CreateForm } from './styles';
import * as yup from 'yup';

const UserCreate = () => {
  const schema = yup.object().shape({
    nome: yup.string().required(),
    cpf: yup.number().max(9).positive().integer().required(),
    email: yup.string().email().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <FlexContainer
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <CreateTitle>Cadastro</CreateTitle>
      <CreateInfo>Preencha o formulário</CreateInfo>

      <CreateForm
        action=""
        onSubmit={handleSubmit(userCreateSubmit)}
      ></CreateForm>
    </FlexContainer>
  );
};

export default UserCreate;
