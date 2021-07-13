import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './global';
import { ThemeProvider } from 'styled-components';
import { theme } from './shared/theme';
import Loading from './components/Loading';
import { Toaster } from 'react-hot-toast';
import UserStorage from './UserContext';
import ProtectedRoute from './components/ProtectedRoute';

const Footer = lazy(() => import('./components/Footer'));
const Home = lazy(() => import('./pages/Home'));
const ClientCreate = lazy(() => import('./pages/ClientCreate'));
const ClientsList = lazy(() => import('./pages/ClientsList'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <UserStorage>
            <Toaster />
            <Routes>
              <Route path="/">
                <Home />
              </Route>
              <ProtectedRoute path="clientcreate">
                <ClientCreate />
              </ProtectedRoute>
              <ProtectedRoute path="clientslist">
                <ClientsList />
              </ProtectedRoute>
            </Routes>
            <Footer />
          </UserStorage>
        </Router>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
