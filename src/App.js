import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './global';
import { ThemeProvider } from 'styled-components';
import { theme } from './shared/theme';
import Loading from './components/Loading';

const Footer = lazy(() => import('./components/Footer'));
const Home = lazy(() => import('./pages/Home'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>

          <Routes path='/*'>
            <Route>
              <Home />
            </Route>
          </Routes>

          <Footer />
        </Router>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
