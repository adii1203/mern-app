import { cardData } from "../static/data";

const Card = () => {
  return (
    <>
      {cardData.map((card, index) => {
        return (
          <div
            key={index}
            className="group text-white flex flex-col w-[18rem] h-[14rem] px-6 py-4 gap-4 rounded hover:bg-[#191919] transition-colors">
            <div className=" flex gap-1 text-[18px] font-[500]">
              {card.title}
              <svg
                className="pt-1 opacity-0 -translate-x-4 group-hover:translate-x-0 transition-all group-hover:opacity-[1]"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            <p className=" text-[#8a8b8d] text-[16px] ">{card.desc}</p>
          </div>
        );
      })}
    </>
  );
};

export default Card;
