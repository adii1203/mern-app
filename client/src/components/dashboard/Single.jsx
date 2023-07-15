import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import clip_icon from "../../assets/clipboard.png";

// eslint-disable-next-line react/prop-types
const Single = ({ data }) => {
  const code = `<div key={item.id} className="px-4 flex flex-col gap-12 ">
  <div className="">
    <p className="text-3xl capitalize font-semibold">{item.name}</p>
  </div>
  <div>
    <p className="text-lg text-white/80 lg:w-[70%]">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Aspernatur perferendis unde voluptatem voluptates, dolore at
      porro eveniet accusamus facilis commodi placeat corrupti
      adipisci doloremque. Quidem?
    </p>
  </div>
  <textarea
    className="text-black"
    name=""
    id=""
    cols="30"
    rows="10"
    value={input}
    onChange={(e) => setInput(e.target.value)}></textarea>
  <SyntaxHighlighter>
    
  </SyntaxHighlighter>`;
  return (
    <div
      className={
        "text-white mt-16 sm:ml-4 sm:mr-4 h-full lg:w-[70%] lg:mx-auto"
      }>
      {/* eslint-disable-next-line react/prop-types */}
      {data?.map((item) => {
        return (
          <div key={item.id} className="px-4 flex flex-col gap-12 ">
            <div className="">
              <p className="text-3xl capitalize font-semibold">{item.title}</p>
            </div>
            <div>
              <p className="text-lg text-white lg:w-[70%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur perferendis unde voluptatem voluptates, dolore at
                porro eveniet accusamus facilis commodi placeat corrupti
                adipisci doloremque. Quidem?
              </p>
            </div>
            <div className=" w-[21rem] sm:w-full mx-auto bg-slate-800 px-4 text-black my-4 py-4 rounded-md">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-md font-medium text-white">javascript</p>
                <button>
                  <img src={clip_icon} alt="" className="w-[24px]" />
                </button>
              </div>
              <SyntaxHighlighter
                wrapLines={true}
                // wrapLongLines={true}
                customStyle={{ backgroundColor: "transparent" }}
                language="javascript"
                showLineNumbers={true}
                style={vscDarkPlus}>
                {code}
              </SyntaxHighlighter>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Single;
