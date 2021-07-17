import { Route, Navigate } from 'react-router-dom';
import { useUserContext } from '../../UserContext';

const PublicRoute = (props) => {
  const { loggedIn } = useUserContext();

  if (!loggedIn) return <Route {...props} />;
  return <Navigate to="/" />;
};

export default PublicRoute;
