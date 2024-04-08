import { Link } from "react-router-dom";
import { Proj } from "../../utlis/Icons";

const NextProject = () => {
  return (
    <section>
      <div className="flex justify-center items-center w-full bg-[#CFB7F5]">
        <div className="flex lg:justify-between justify-center items-center lg:w-[80%] w-[95%] py-[8rem]">
          <aside className="md:w-[55%] llg:text-center">
            <h1 className="text-[#162C49] font-extrabold lg:text-6xl md:text-5xl text-3xl">
              Are you ready to have your next project gamified?
            </h1>
            <p className="my-6">
              If you want to bring a new and innovative experience to your
              target audience, contact us and we will make it possible.
            </p>
            <div className="mt-8 llg:mt-12">
              <Link
                to="contact"
                className="md:w-[30%] w-[100%!important] lmd:block px-12 rounded-full py-4 lmd:mt-8 lmd:rounded-full font-bold bg-[#162C49] text-[#ffffff]"
              >
                Contact us
              </Link>
            </div>
          </aside>
          <aside className="lg:flex hidden w-[35%] justify-center items-center flex-col">
            <Proj />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default NextProject;
