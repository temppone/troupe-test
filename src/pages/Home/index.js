import React, { useContext } from 'react';
import Input from '../../components/Input';
import Login from '../../components/Login';
import { FlexContainer } from '../../shared/flexContainer';

const Home = () => {
  // const { userLogin } = useContext(useContext);

  return (
    <FlexContainer
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
      margin="0 auto"
      padding="1rem"
    >
      <img
        width="80%"
        src="/imgs/homeImg.svg"
        alt="Imagem da página inicial"
      ></img>
      <Login />

      {/* <Input label='email' name='email' required='true'></Input> */}
    </FlexContainer>
  );
};

export default Home;
