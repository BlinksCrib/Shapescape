import { TellDesk, TellMobile } from "../../utlis/Icons";

const TellStories = () => {
  return (
    <section>
      <div className="flex justify-center items-center w-full bg-[#F3F6FA] rounded-b-[6rem]">
        <div className="flex lg:justify-between justify-center items-center lg:flex-row flex-col w-[80%] py-[14rem]">
          <div className="lg:w-[60%]">
            <h1 className="font-extrabold text-6xl">
              Using games as a way to tell stories and educate
            </h1>
          </div>
          <div className="lg:mt-0 mt-[3rem] lg:w-[35%] w-full flex justify-center items-center">
            <small className="lg:block hidden">
              <TellDesk />
            </small>
            <small className="lg:hidden block">
              <TellMobile />
            </small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TellStories;
