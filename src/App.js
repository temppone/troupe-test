import { lazy, Suspense } from 'react';
import { Routes } from 'react-router-dom';
import { GlobalStyle } from './global';
import { ThemeProvider } from 'styled-components';
import { defaultTheme, lightTheme, darkTheme } from './shared/theme';
import Loading from './components/Loading';
import { Toaster } from 'react-hot-toast';
import ProtectedRoute from './components/ProtectedRoute';
import { useUserContext } from './UserContext';
import PublicRoute from './components/PublicRoute';

const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import('./components/Footer'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Home = lazy(() => import('./pages/Home'));
const ClientCreate = lazy(() => import('./pages/ClientCreate'));
const ClientsList = lazy(() => import('./pages/ClientsList'));

function App() {
  const { actualTheme } = useUserContext();
  console.log(actualTheme);

  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <ThemeProvider theme={actualTheme === 'dark' ? darkTheme : lightTheme}>
          <GlobalStyle />
          <Toaster />
          <Header />
          <Routes>
            <PublicRoute path="/" element={<Home />} />
            <ProtectedRoute exact path="/clientes/" element={<ClientsList />} />
            <ProtectedRoute
              exact
              path="/clientes/create"
              element={<ClientCreate />}
            />
            <ProtectedRoute
              exact
              path="/clientes/edit/:id"
              element={<ClientCreate />}
            />
            <PublicRoute path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </Suspense>
    </div>
  );
}

export default App;
