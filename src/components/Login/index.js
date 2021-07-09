import React, { useState } from 'react';

import { LoginForm, LoginGreeting, LoginTitle } from './styles';
import Input from '../Input';
import Button from '../Button';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import { ptForm } from 'yup-locale-pt';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FlexContainer } from '../../shared/flexContainer';

const Login = () => {
  const [disabledButton, setDisabledButton] = useState(false);

  yup.setLocale(ptForm);

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(4).required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const loginSubmit = (login) => {
    console.log(login);
    if (login) {
      setDisabledButton(true);
      toast.success('Logando');
    } else {
      toast.error('Error');
    }
  };

  return (
    <FlexContainer
      flexDirection="column"
      width="100%"
      alignItems="center"
      justifyContent="center"
    >
      <LoginTitle>Login</LoginTitle>
      <LoginGreeting>Bem vindo de volta!</LoginGreeting>
      <LoginForm action="" onSubmit={handleSubmit(loginSubmit)}>
        <Input
          name="email"
          label="Email"
          type="text"
          register={register}
          required={true}
          inputError={errors.email?.message}
        />

        <Input
          name="password"
          label="Senha"
          type="password"
          register={register}
          required={true}
          inputError={errors.password?.message}
        />

        <Button
          buttonName="Entrar"
          disabled={disabledButton}
        />
      </LoginForm>
    </FlexContainer>
  );
};

export default Login;
