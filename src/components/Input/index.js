import toast from 'react-hot-toast';
import { FlexContainer } from '../../shared/flexContainer';
import { InputLabel, InputBox } from './styles';

const Input = ({ name, label, register, inputError, required, ...props }) => {
  const notify = () => toast.success('Successfully created!');

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
      <p>{inputError}</p>

      {notify}
    </FlexContainer>
  );
};

export default Input;
