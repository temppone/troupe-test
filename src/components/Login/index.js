import React, { useState } from 'react';

import { LoginForm } from './styles';
import Input from '../Input';
import Button from '../Button';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ptForm } from 'yup-locale-pt';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FlexContainer } from '../../shared/flexContainer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabledButton, setDisabledButton] = useState(false);

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
    <FlexContainer flexDirection="column" width="100%" alignItems="center" justifyContent="center">
      <LoginForm action="" onSubmit={handleSubmit(loginSubmit)}>
        <Input
          name="email"
          label="Email"
          type="text"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          register={register}
          required={true}
          inputError={errors.email?.message}
        />

        <Input
          name="password"
          label="Senha"
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          register={register}
          required={true}
          inputError={errors.password?.message}
        />

        <Button buttonName="entrar" disabled={disabledButton} />
      </LoginForm>
    </FlexContainer>
  );
};

export default Login;
