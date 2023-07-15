import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { SignUp, Login, Home } from "./components/index";
import Dashboard from "./components/dashboard/Dashboard";
import { AuthContext } from "./context/authcontext";
import ProtectedRoute from "./components/ProtectedRoute";
import { useContext } from "react";
import AuthProvider from "./components/Authprovider";

function App() {
  const { isLogedin } = useContext(AuthContext);
  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/user" element={<ProtectedRoute />}>
              <Route path="dashboard" element={<Dashboard />} />
            </Route>
            <Route
              path="/"
              element={
                isLogedin ? <Navigate to={"/user/dashboard"} /> : <Home />
              }
            />
            <Route
              path="/login"
              element={
                isLogedin ? (
                  <Navigate to={"/user/dashboard"} replace={true} />
                ) : (
                  <Login />
                )
              }
            />
            <Route
              path="/signup"
              element={
                isLogedin ? <Navigate to={"/user/dashboard"} /> : <SignUp />
              }
            />
          </Routes>
        </Router>
      </AuthProvider>
      <Toaster
        toastOptions={{
          style: {
            background: "#363636",
            color: "#fff",
            textTransform: "capitalize",
          },
        }}
      />
    </>
  );
}
export default App;
