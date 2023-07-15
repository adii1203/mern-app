import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="">
      <div className="pt-16 text-center capitalize">
        <h1 className="text-white text-3xl font-semibold">
          welcome to home page
        </h1>
        <div className="mt-8">
          <Link
            className="bg-orange-500 px-3 py-3 font-medium rounded"
            to={"/signup"}>
            Sign Up
          </Link>
          <Link
            className="ml-2 bg-orange-500 px-3 py-3 font-medium rounded"
            to={"/login"}>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
