import React, { useState } from 'react';
import { LoginForm, LoginSection } from './styles';
import Input from '../Input';
import Button from '../Button';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
  };

  return (
    <LoginSection>
      <LoginForm action="" onSubmit={handleSubmit}>
        <Input
          type="text"
          name="email"
          label="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <Input
          type="text"
          name="password"
          label="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <Button buttonName="entrar" />
      </LoginForm>
    </LoginSection>
  );
};

export default Login;
