import React from 'react';
export const UserContext = React.createContext();

const UserStorage = ({ children }) => {
  return (
    <UserContext.Provider value={{ usuario: 'andré' }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserStorage;
