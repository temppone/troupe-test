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

export const TOKEN_VALIDATE_POST = (token) => {
  return {
    url: API_URL + '/usuarios',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer' + token,
      },
    },
  };
};

export const CLIENTS_GET = ({ page, limit }) => {
  return {
    url: `${API_URL}/clientes?_page=${page}&_limit=${limit}`,
    options: {
      method: 'GET',

      cache: 'no-store',
    },
  };
};

export const CLIENT_GET = (id) => {
  return {
    url: `${API_URL}/clientes/${id}`,
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

export const CLIENT_DELETE = (id) => {
  return {
    url: `${API_URL}/clientes/${id}`,
    options: {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
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
