export const API_URL = 'http://localhost:5000';

//Teria que passar o body para pegar a token
export const TOKEN_POST = (email, password) => {
  return {
    url: API_URL + `/usuarios?${new URLSearchParams({ email, password })}`,
    options: {
      // method: 'POST',
      method: 'GET',

      // headers: {
      //   'Content-Type': 'application/json',
      // },
      // body: JSON.stringify(body),
    },
  };
};

export const CLIENTS_GET = (clientes) => {
  return {
    url: `${API_URL}/clientes`,
    options: {
      method: 'GET',
    },
  };
};

export const CLIENT_POST = (body) => {
  return {
    url: API_URL + '/clientes',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
};

export const USER_GET = (token) => {
  return {
    url: API_URL + '/clientes',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer' + token,
      },
    },
  };
};
