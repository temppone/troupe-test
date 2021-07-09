import { FlexContainer } from '../../shared/flexContainer';
import { InputLabel, InputBox, InputWarning } from './styles';

const Input = ({ name, label, register, inputError, required, ...props }) => {
  return (
    <FlexContainer
      flexDirection="column"
      justifyContente="center"
      padding="1rem"
      height="10rem"
    >
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <InputBox
        name={name}
        inputError={inputError}
        {...register(`${name}`, { required: { required } })}
        {...props}
      />
      <InputWarning>{inputError}</InputWarning>
    </FlexContainer>
  );
};

export default Input;
