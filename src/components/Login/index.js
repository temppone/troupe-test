import React, { useState } from 'react';
import { LoginForm, LoginSection } from './styles';
import Input from '../Input';
import Button from '../Button';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ptForm } from 'yup-locale-pt';
import { useForm } from 'react-hook-form';

import Toast from '../Toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  yup.setLocale(ptForm);

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(4).required('O campo é obrigatório'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors);

  const loginSubmit = (login) => {
    console.log(login);
  };

  return (
    <LoginSection>
      <Toast content="TA FUNCIONANDO" appearance="success" autoDismiss="true" />

      <LoginForm action="" onSubmit={handleSubmit(loginSubmit)}>
        <Input
          type="text"
          name="email"
          label="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          register={register}
          required={true}
          inputError={errors.email?.message}
        />

        <Input
          type="text"
          name="password"
          label="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          register={register}
          required={true}
          inputError={errors.password?.message}
        />
        <Button buttonName="entrar" />
      </LoginForm>
    </LoginSection>
  );
};

export default Login;
