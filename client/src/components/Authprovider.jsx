import { useState } from "react";
import { AuthContext } from "../context/authcontext";
import useAuth from "../hooks/useAuth";
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const { loading, isLogedin, setIslogedin } = useAuth();
  const [user, setUser] = useState({});

  return (
    <AuthContext.Provider
      value={{
        isLogedin,
        setIslogedin,
        loading,
        user,
        setUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
