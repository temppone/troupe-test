import React from 'react';
import { ButtonBox } from './styles';

const Button = ({ buttonName , ...props}) => {
  return <ButtonBox>{buttonName}</ButtonBox>;
};

export default Button;
