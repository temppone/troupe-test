import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { GlobalStyle } from './global';
import { ThemeProvider } from 'styled-components';
import { theme } from './shared/theme';
import Loading from './components/Loading';
import { Toaster } from 'react-hot-toast';
import UserStorage from './UserContext';
import ProtectedRoute from './components/ProtectedRoute';
import Routes from './routes'

const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import('./components/Footer'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Toaster />
        <UserStorage>
          <Routes />
        </UserStorage>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
