import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../../UserContext';

const ProtectedRoute = (props) => {
  const { loggedIn } = useContext(UserContext);

  if (loggedIn) return <Route {...props} />;
  return <Redirect to="/" />;
};

export default ProtectedRoute;