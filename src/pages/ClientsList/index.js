import React, { useEffect, useState } from 'react';
import ClientCard from '../../components/ClientCard';
import { FlexContainer, PageTitle } from '../../shared/flexContainer';

const ClientList = () => {
  //   const [loading, setLoading] = useState(false);
  //   const [errorMessage, setErrorMessage] = useState(false);
  //   const [data, setData] = useState('');
  //
  //
  //   useEffect(() =>{
  //
  // try{
  //
  // }
  //
  // }, [])
  //
  return (
    <FlexContainer flexDirection="column" justifyContent="center" padding="1rem">
      <PageTitle>Clientes</PageTitle>
      <ClientCard />
    </FlexContainer>
  );
};

export default ClientList;
