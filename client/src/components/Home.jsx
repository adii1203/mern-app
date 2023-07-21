import { Link } from "react-router-dom";
import Card from "./Card";
const Home = () => {
  return (
    <div className=" flex flex-col gap-12 h-screen">
      <div className="w-max mx-auto relative text-white font-Ubuntu px-8 pt-[6rem] text-center after:w-[240px] after:h-[180px] after:absolute after:bg-gradient after:blur-[45px] after:-z-10 after:left-0  after:-bottom-20 before:w-[480px] before:h-[360px] before:bg-linear  before:absolute before:blur-[45px] before:-bottom-[10rem] before:-left-[10rem] before:pointer-events-none">
        <p className="text-5xl">snippet-box </p>
      </div>
      <div className=" z-50 flex items-center justify-center gap-4">
        <Link
          className="font-[500] text-black bg-white px-8 py-2 rounded-3xl"
          to={"/login"}>
          Log In
        </Link>
        <Link
          className="font-[500] text-white px-8 py-2 rounded-3xl hover:bg-gray-800 transition-colors underline "
          to={"/signup"}>
          Sign up
        </Link>
      </div>
      <div className="font-Ubuntu w-full flex flex-col items-center justify-center pb-4 sm:flex-row sm:flex-wrap md:w-[40rem] lg:w-full md:mx-auto lg:mt-12">
        <Card />
      </div>
    </div>
  );
};

export default Home;
