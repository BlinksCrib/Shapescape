import { GamicDesk, GamicMobile } from "../../utlis/Icons";

const Gamific = () => {
  return (
    <section>
      <div className="flex justify-center items-center w-full bg-[#F3F6FA] lg:rounded-b-[6rem] rounded-b-[2rem]">
        <div className="flex lg:justify-between justify-center items-center lg:flex-row flex-col lg:w-[80%] w-[95%] py-[14rem]">
          <div className="lg:w-[60%]">
            <h1 className="font-extrabold lg:text-6xl text-3xl">
              Using gamification to elevate the way we educate
            </h1>
          </div>
          <div className="lg:mt-0 mt-[3rem] lg:w-[35%] w-full flex justify-center items-center">
            <small className="lg:block hidden w-full">
              <GamicDesk />
            </small>
            <small className="lg:hidden block w-full">
              <GamicMobile />
            </small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gamific;
