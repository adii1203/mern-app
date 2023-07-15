/* eslint-disable react/prop-types */
const SideNav = () => {
  return (
    <div className="bg-[#202020]  ">
      <div className="">
        <div className="text-[#bababa] flex justify-start flex-col gap-4">
          <button
            // onClick={click}
            className="flex items-center px-2 py-1  gap-2  text-md font-semibold rounded hover:bg-[#2c2c2c]">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0,0,256,256">
                <g fill="#808182" transform="scale(10.66667,10.66667)">
                  <path d="M11,2v9h-9v2h9v9h2v-9h9v-2h-9v-9z"></path>
                </g>
              </svg>
            </span>
            Create snippet
          </button>
          <button className="flex items-center px-2 py-1 gap-2  text-md font-semibold rounded hover:bg-[#2c2c2c]">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 24 24">
                <path
                  fill="#808182"
                  d="M20,6h-8l-2-2H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V8C22,6.9,21.1,6,20,6z"></path>
              </svg>
            </span>
            Create collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
