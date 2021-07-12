export const API_URL = 'http://localhost:5000';

export const TOKEN_POST = (body) => {
  return {
    url: API_URL + '/usuarios',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
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
