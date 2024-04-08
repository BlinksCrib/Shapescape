import { Link } from "react-router-dom";
import { Journ } from "../../utlis/Icons";

const Journey = () => {
  return (
    <section>
      <div className="flex justify-center items-center w-full bg-[#CDF462] lg:rounded-b-[6rem] rounded-b-[2rem]">
        <div className="flex lg:justify-between justify-center lg:flex-row flex-col items-center lg:w-[80%] w-[95%] py-[8rem]">
          <div className="lg:w-[40%] w-full llg:text-center">
            <h1 className="font-extrabold lg:text-5xl text-3xl text-[#041C3B]">
              Want to be part of a journey?
            </h1>
            <p className="py-8">Check out our open job offers!</p>
            <Link
              to="/jobs"
              className="lg:px-16 px-10 llg:block llg:w-full text-center py-4 rounded-full font-bold text-[#ffffff] bg-[#041C3B]"
              >
              Job Opportunities
            </Link>
          </div>
          <div className="lg:w-[48%] lg:block hidden">
            <Journ />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
