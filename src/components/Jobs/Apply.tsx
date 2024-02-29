import { Link } from "react-router-dom";
import { Applies } from "../../utlis/Icons";

const Apply = () => {
  return (
    <section>
      <div className="flex justify-center items-center w-full bg-[#cfb7f5]">
        <div className="flex lg:justify-between justify-center lg:flex-row flex-col items-center w-[80%] py-[8rem]">
          <div className="lg:w-[55%]">
            <h1 className="font-extrabold text-5xl text-[#041C3B]">Didn’t find what you were looking for?</h1>
            <p className="py-8">
              Do you think you have what it takes to be a great addition to our
              team? Feel free to send an open application through our contact
              page!
            </p>
            <Link to="/contact" className="px-12 py-3 rounded-full font-bold text-[#ffffff] bg-[#041C3B]">
                Apply now
            </Link>
          </div>
          <div className="w-[35%]">
            <Applies />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apply;
