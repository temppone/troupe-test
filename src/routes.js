import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import UserStorage from './UserContext';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/Header';
const Home = lazy(() => import('./pages/Home'));
const ClientCreate = lazy(() => import('./pages/ClientCreate'));
const ClientsList = lazy(() => import('./pages/ClientsList'));
const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <ProtectedRoute path="/clientes" exact component={ClientsList} />
        <ProtectedRoute path="/clientes/create" exact component={ClientCreate} />
        <ProtectedRoute path="/clientes/:id" exact component={ClientCreate} />
      </Switch>
    </Router>
  );
}

export default Routes;