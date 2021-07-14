import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TOKEN_POST, USER_GET } from './api';
export const UserContext = React.createContext();

const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      navigate('/clientes');
    }
  }, [loggedIn, navigate]);

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

        setLoggedIn(true);
        await getUser(token);
      }
    };
    autoLogin();
  }, []);

  const userLogout = () => {
    setData(null);
    setError(null);
    setLoading(false);
    setLoggedIn(false);
    window.localStorage.removeItem('token');
  };

  const getUser = async (token) => {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();

    setData(json);
    setLoggedIn(true);
  };

  const userLogin = async ({ email, password }) => {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST(email, password);
      const response = await fetch(url, options);

      const userResponseBody = await response.json();
      if (userResponseBody.length >= 1) {
        window.localStorage.setItem('token', '12072021');
        setLoggedIn(true);
        await getUser(response);
      }
    } catch (err) {
      setLoggedIn(false);
      console.log(err);
      throw new Error('Login incorreto');
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider value={{ userLogin, userLogout, loggedIn, data }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserStorage;
