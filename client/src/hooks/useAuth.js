import axios from "axios";
import { useEffect, useState } from "react";

const useAuth = () => {
  const [loading, setLoding] = useState(false);
  const [isLogedin, setIslogedin] = useState(false);

  useEffect(() => {
    const user = async () => {
      try {
        setLoding(true);
        const res = await axios("http://localhost:3000/auth", {
          method: "get",
          withCredentials: true,
        });
        if (res.status === 200) {
          setIslogedin(true);
          setLoding(false);
        }
      } catch (error) {
        console.log(error);
        setLoding(false);
      }
    };
    if (!isLogedin) {
      user();
    }
  }, []);

  return { loading, setLoding, isLogedin, setIslogedin };
};

export default useAuth;
