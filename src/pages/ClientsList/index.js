import React, { useEffect, useState } from 'react';
import ClientCard from '../../components/ClientCard';
import { FlexContainer, PageTitle } from '../../shared/flexContainer';

const ClientsList = () => {
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
    <FlexContainer>
      <ClientCard />
    </FlexContainer>
  );
};

export default ClientsList;
