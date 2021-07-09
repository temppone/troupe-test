import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './global';
import { ThemeProvider } from 'styled-components';
import { theme } from './shared/theme';
import Loading from './components/Loading';
import { Toaster } from 'react-hot-toast';

const Footer = lazy(() => import('./components/Footer'));
const Home = lazy(() => import('./pages/Home'));
const UserCreate = lazy(() => import('./pages/UserCreate'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Toaster />
          <Routes>
            <Route path="/*">
              <Home />
            </Route>
            <Route path="/userCreate">
              <UserCreate />
            </Route>
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
