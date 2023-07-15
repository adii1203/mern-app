import { useContext } from "react";
import { AuthContext } from "../context/authcontext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { isLogedin, loading } = useContext(AuthContext);

  return (
    <>
      {loading ? (
        <div>
          <h1>loading....</h1>
        </div>
      ) : isLogedin ? (
        <Outlet />
      ) : (
        <Navigate to={"/login"} />
      )}
    </>
  );
};

export default ProtectedRoute;
