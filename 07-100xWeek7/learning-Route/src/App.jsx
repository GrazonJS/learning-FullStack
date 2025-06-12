import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

const Dashboard = lazy(() => import("./components/Dashboard"));
const Landing = lazy(() => import("./components/Landing"));

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <DirectionsComponent />
        <Routes>
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={"Loading..."}>
                {" "}
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="/"
            element={
              <Suspense fallback={"Loading..."}>
                <Landing />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const DirectionsComponent = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        go to Landing page
      </button>
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        go to dashboard
      </button>
    </div>
  );
};

export default App;
