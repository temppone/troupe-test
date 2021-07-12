import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { TOKEN_POST, USER_GET } from './api';
export const UserContext = React.createContext();

const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getUser = async (token) => {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();

    setData(json);
    setLogin(true);
  };

  const userLogin = async ({ email, password }) => {
    const { url, options } = TOKEN_POST(email, password);
    const tokenRes = await fetch(url, options);

    const response = await tokenRes.json();

    if (response && response.length >= 1) {
      window.localStorage.setItem('token', email);
      await getUser(response);
      return;
    }
    throw Error('Algo deu errado');
  };

  return (
    <UserContext.Provider value={{ userLogin, login, data }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserStorage;
