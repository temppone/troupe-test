import React, { useState } from 'react';
import { CreateTitle, CreateInfo, CreateForm } from './styles';
import { FlexContainer, PageTitle } from '../../shared/flexContainer';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ptForm } from 'yup-locale-pt';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Header from '../../components/Header';

const UserCreate = () => {
  const [disabledButtonCreate, setDisabledButtonCreate] = useState(false);

  yup.setLocale(ptForm);

  const schema = yup.object().shape({
    nome: yup.string().required(),
    cpf: yup
      .string()
      .matches(
        '([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})',
        'Digite um CPF válido'
      )
      .required(),
    email: yup.string().email().required(),
    cep: yup
      .string()
      .matches('([0-9]{5}-[0-9]{3})', 'Digite um CEP válido')
      .required(),
    rua: yup.string().required(),
    numero: yup.string().required(),
    bairro: yup.string().required(),
    cidade: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(handleSubmit);
  console.log(register);
  console.log(errors);

  const userCreateSubmit = (createdUser) => {
    console.log(createdUser);
    if (createdUser) {
      setDisabledButtonCreate(true);

      toast.success('Cadastrando');
    } else {
      toast.error('Algo deu errado :(');
    }

    console.log(createdUser);
  };

  return (
    <FlexContainer
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Header />
      <PageTitle>Cadastro</PageTitle>
      <CreateInfo>Preencha o formulário</CreateInfo>

      <CreateForm action="" onSubmit={handleSubmit(userCreateSubmit)}>
        <Input
          name="nome"
          label="Nome"
          type="text"
          register={register}
          required={true}
          inputError={errors.nome?.message}
        />
        <Input
          name="cpf"
          label="CPF"
          type="text"
          register={register}
          required={true}
          inputError={errors.cpf?.message}
        />
        <Input
          name="email"
          label="Email"
          type="text"
          register={register}
          required={true}
          inputError={errors.email?.message}
        />

        <Input
          name="cep"
          label="CEP"
          type="text"
          register={register}
          required={true}
          inputError={errors.cep?.message}
        />
        <Input
          name="rua"
          label="Rua"
          type="text"
          register={register}
          required={true}
          inputError={errors.rua?.message}
        />
        <Input
          name="numero"
          label="Numero"
          type="text"
          register={register}
          required={true}
          inputError={errors.numero?.message}
        />
        <Input
          name="bairro"
          label="Bairro"
          type="text"
          register={register}
          required={true}
          inputError={errors.bairro?.message}
        />
        <Input
          name="cidade"
          label="Cidade"
          type="text"
          register={register}
          required={true}
          inputError={errors.cidade?.message}
        />

        <Button buttonName="Cadastrar" disabled={disabledButtonCreate} />
      </CreateForm>
    </FlexContainer>
  );
};

export default UserCreate;
