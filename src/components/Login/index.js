import React, { useState } from 'react';
import { LoginForm, LoginSection } from './styles';
import Input from '../Input';
import Button from '../Button';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const schema = yup.object().shape({
    email: yup.string().email().required('campo necessário'),
    password: yup.string().min(4).required('campo necessário'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const loginSubmit = (login) => {
    if (errors) {
      console.log(errors);
      console.log(login)
    } else {
      console.log(login);
      console.log(email, password);
    }
  };

  return (
    <LoginSection>
      <LoginForm action="" onSubmit={handleSubmit(loginSubmit)}>
        <Input
          type="text"
          name="email"
          label="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          register={register}
        />
        <Input
          type="text"
          name="password"
          label="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          register={register}
        />
        <Button buttonName="entrar" />
      </LoginForm>
    </LoginSection>
  );
};

export default Login;
