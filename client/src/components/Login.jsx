import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../context/authcontext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const { setUser } = useContext(AuthContext);
  const { setIslogedin } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isLoding, setIsloding] = useState(false);
  const [userData, setUserdata] = useState({
    email: "",
    password: "",
  });

  const login = async () => {
    try {
      setIsloding(true);
      toast.loading("loading...");
      const res = await axios("http://localhost:3000/login", {
        method: "post",
        data: userData,
        withCredentials: true,
      });
      if (res.status === 200) {
        setIslogedin(true);
        setUser(res.data.user);
        console.log(res.data.user);
        navigate("/user/dashboard", { replace: true });
        toast.remove();
        toast.success(res.data.msg);
      }
    } catch (error) {
      toast.remove();
      toast.error(error.response.data);
    } finally {
      setIsloding(false);
      setUserdata({
        email: "",
        password: "",
      });
    }
  };

  return (
    <>
      <div className="pl-8 pt-4">
        <Link
          className="flex w-max items-center transition-colors text-[gray] hover:bg-[#181b1c] px-4 py-2 rounded-3xl text-lg font-semibold"
          to={"/"}>
          <svg
            className="inline"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18.3639 7.75735L16.9497 6.34314L11.2929 12L16.9497 17.6568L18.3639 16.2426L14.1213 12L18.3639 7.75735Z"
              fill="gray"
            />
            <path
              d="M11.2929 6.34314L12.7071 7.75735L8.46447 12L12.7071 16.2426L11.2929 17.6568L5.63605 12L11.2929 6.34314Z"
              fill="gray"
            />
          </svg>
          Home
        </Link>
      </div>
      <div className=" rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white font-Ubuntu">
        <div className=" w-[20rem] sm:w-[22rem] px-[1rem] sm:px-[2rem] py-12 flex flex-col gap-5">
          <h1 className="text-2xl capitalize font-medium">log In</h1>
          <div className="outline-1 outline outline-gray-200 hover:bg-blue-100/30 px-3 rounded-3xl py-2 hover:outline-blue-300">
            <button className="flex gap-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="28"
                height="28"
                viewBox="0 0 48 48">
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
              </svg>
              <p className="text-[1.025rem]">Login with google</p>
            </button>
          </div>
          <div className="bg-gray-300 h-[1px] mt-4 relative">
            <div className="text-gray-400 font-medium text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[48px] h-[48px] rounded-full grid place-content-center ">
              OR
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-4">
            <div className="bg-[#f6f7f8] px-4 py-3 rounded-3xl hover:outline hover:outline-[.245px] hover:outline-blue-300">
              <label htmlFor="email" className="hidden"></label>
              <input
                value={userData.email}
                onChange={(e) =>
                  setUserdata({ ...userData, email: e.target.value })
                }
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                className="w-full bg-transparent outline-none border-none"
              />
            </div>
            <div className="bg-[#f6f7f8] px-4 py-3 rounded-3xl hover:outline hover:outline-[.245px] hover:outline-blue-300 focus:outline-blue-300 ">
              <label htmlFor="password" className="hidden"></label>
              <input
                value={userData.password}
                onChange={(e) =>
                  setUserdata({ ...userData, password: e.target.value })
                }
                type="password"
                name="password"
                id="password"
                placeholder="password"
                className="w-full bg-transparent outline-none border-none "
              />
            </div>
          </div>
          <div>
            <p className="text-[13px] capitalize">
              forget your{" "}
              <Link
                className="text-[#0e80d5] font-medium text-[14px] underline"
                to={"/forgetpassword"}>
                password
              </Link>{" "}
              ?
            </p>
          </div>
          <div>
            <button
              disabled={isLoding}
              onClick={login}
              className={
                isLoding
                  ? `bg-gray-400 w-full rounded-3xl py-2 text-white capitalize font-medium cursor-not-allowed `
                  : `bg-orange-600 w-full rounded-3xl py-2 text-white capitalize font-medium hover:bg-orange-500`
              }>
              log in
            </button>
            <div className="flex gap-1 text-sm mt-2">
              <p>new here?</p>
              <Link
                to={"/signup"}
                className="text-[#0e80d5] font-medium text-[14px] underline">
                signup
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
