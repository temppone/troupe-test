//TODO bug com o get da token de login com o servidor

import React, { useState } from 'react';

import { LoginHeader, LoginForm, LoginGreeting } from './styles';
import Input from '../Input';
import Button from '../Button';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ptForm } from 'yup-locale-pt';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FlexContainer, PageTitle } from '../../shared/flexContainer';
import { TOKEN_POST } from '../../api';

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

  const loginSubmit = async (login) => {
    const { url, options } = TOKEN_POST({
      email: login.email,
      password: login.password,
    });

    console.log(url, options);

    console.log(login);
    if (login) {
      setDisabledButton(true);
      toast.success('Logando', {
        position: 'botton-center',
      });

      const response = await fetch(url, options);
      const json = await response.json();
      console.log(json);
      window.localStorage.setItem('token', json.token);

      console.log(json);
    } else {
      toast.error('Algo deu errado :(', {
        position: 'botton-center',
      });
    }
  };

  return (
    <FlexContainer
      flexDirection="column"
      width="100%"
      alignItems="center"
      justifyContent="center"
    >
      <LoginHeader>
        <PageTitle>Faça seu login.</PageTitle>
        <LoginGreeting>Olá de novo!</LoginGreeting>
      </LoginHeader>
      <LoginForm
        action=""
        onSubmit={handleSubmit(async (e) => await loginSubmit(e))}
      >
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

        <Button buttonName="Entrar" disabled={disabledButton} />
      </LoginForm>
    </FlexContainer>
  );
};

export default Login;
