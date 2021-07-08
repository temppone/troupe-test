import React, { useState } from 'react';
import { FlexContainer } from '../../shared/flexContainer';
import { InputLabel, InputBox } from './styles';
import { useToasts } from 'react-toast-notifications';

const Input = ({ name, label, register, inputError, required, ...props }) => {
  const { addToast } = useToasts();
  const [toastError, setToastError] = useState();

  if (inputError) {
    setToastError(addToast('Entrando...', { appearance: 'success' }));
  }

  return (
    <FlexContainer
      flexDirection="column"
      justifyContainer="center"
      padding="1rem"
    >
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <InputBox
        name={name}
        inputError={inputError}
        {...register(`${name}`, { required: { required } })}
        {...props}
      />
      <p>{inputError ? inputError && toastError : null}</p>
    </FlexContainer>
  );
};

export default Input;
