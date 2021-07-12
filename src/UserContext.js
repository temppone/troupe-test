import React, { useState } from 'react';
import { TOKEN_POST, USER_GET } from './api';
export const UserContext = React.createContext();

const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getUser = async (token) => {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();

    setData(json);
    setLogin(true);
    setData('teste data');
    console.log(data)
  };

  const userLogin = async (email, password) => {
    const { url, options } = TOKEN_POST({ email, password });
    const tokenRes = await fetch(url, options);

    const { token } = await tokenRes.json();

    window.localStorage.setItem('token', 'tokenString');

    getUser(token);
  };

  return (
    <UserContext.Provider value={{ userLogin }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserStorage;
