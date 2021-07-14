import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';

const ProtectedRoute = (props) => {
  const { loggedIn } = useContext(UserContext);

  if (loggedIn) return <Route {...props} />;
  return <Navigate to="/" />;
};

export default ProtectedRoute;
