import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading"

const Home = lazy(() => import("./Pages/Home"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Routes path="/">
          <Route>
            <Home />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
