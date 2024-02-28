import { ContactDesk, ContactMobile } from "../../utlis/Icons";

const Info = () => {
  return (
    <section>
      <div className="flex justify-center items-center w-full h-screen bg-[#041C3B] rounded-b-[6rem]">
        <div className="flex justify-center items-start flex-col w-[80%] h-full text-[#ffffff]">
          <h1 className="font-bold text-2xl">
            <a href="mailto:contact@shapescape.com">contact@shapescape.com</a>
          </h1>
          <h1 className="font-bold text-2xl mt-2">
            <a href="tel:+4523645706">+4523645706</a>
          </h1>
          <div className="flex justify-start items-center w-[55%] mt-12">
            <aside className="mr-6">
              <h2 className="font-semibold text-lg">Production</h2>
              <p>Caffamacherreihe 8 20355 Hamburg, Germany</p>
            </aside>
            <aside>
              <h2 className="font-semibold text-lg">Administration</h2>
              <p>Roskildevej 100, 3. mf. 2000 Frederiksberg, Denmark</p>
            </aside>
          </div>
          <div className="w-full flex justify-center items-center my-[4rem]">
            <span className="md:block hidden">
              <ContactDesk />
            </span>
            <span className="md:hidden block">
              <ContactMobile />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
