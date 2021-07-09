import React, { useState } from 'react';
import { FlexContainer, PageTitle } from '../../shared/flexContainer';
import { UserItem, UserInfo } from './styles';

const UsersList = () => {
  return (
    <FlexContainer>
      <PageTitle>Usuários</PageTitle>
      <UserItem>
        <UserInfo></UserInfo>
      </UserItem>
    </FlexContainer>
  );
};

export default UsersList;
