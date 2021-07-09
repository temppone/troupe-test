import React, { useState } from 'react';
import { FlexContainer } from '../../shared/flexContainer';
import { UserItem, UserInfo } from './styles';

const UsersList = () => {
  return (
    <FlexContainer>
      <UserItem>
        <UserInfo></UserInfo>
      </UserItem>
    </FlexContainer>
  );
};

export default UsersList;
