import React, { useEffect, useState } from 'react';
import { set } from 'react-hook-form';
import toast from 'react-hot-toast';
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from './api';
export const UserContext = React.createContext();

const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const autoLogin = async () => {
      const token = window.localStorage.getItem('token');
      if (token && token === '12072021') {
        // try {
        //   setError(true);
        //   setLoading(true);
        //   const { url, options } = TOKEN_VALIDATE_POST(token);
        //   const response = await fetch(url, options);
        //   if (response.ok) throw new Error('Token Inválido');
        //   await getUser(token);
        // } catch (err) {
        //   userLogout();
        // } finally {
        //   setLoading(false);
        // }

        await getUser(token);
        return;
      }
      userLogout();
    };
    autoLogin();
  }, []);

  const userLogout = () => {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem('token');
  };

  const getUser = async (token) => {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();

    setData(json);
    setLogin(true);
  };

  const userLogin = async ({ email, password }) => {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST(email, password);
      const tokenRes = await fetch(url, options);
      if (tokenRes.ok) {
        throw new Error(`Error: ${tokenRes.statusText}`);
      }
      const response = await tokenRes.json();

      if (response.length >= 1) {
        window.localStorage.setItem('token', '12072021');
        await getUser(response);
      }
    } catch (err) {
      setLogin(false);
      throw new Error('Login incorreto');
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider value={{ userLogin, userLogout, login, data }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserStorage;
