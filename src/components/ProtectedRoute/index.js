import React, { useContext } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { UserContext } from '../../UserContext';

const ProtectedRoute = (props) => {
  const { loggedIn } = useContext(UserContext);

  if (loggedIn === true) return <Route {...props} />;
  else if (loggedIn === false) return <Navigate to="/" />;
  else return null;
  return <></>;
};

export default ProtectedRoute;
