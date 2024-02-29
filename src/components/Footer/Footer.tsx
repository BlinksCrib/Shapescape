import { LogoColored } from "../../utlis/Icons";

const Footer = () => {
  return (
    <section>
      <div className="flex justify-center items-center w-full">
        <div className="flex justify-center tems-start flex-col w-[80%] pt-[5rem]">
          <LogoColored />
          <div className="flex justify-between mt-12 w-full">
            <aside className="w-[40%]">
              <h1 className="font-bold text-5xl">Using games to excite.</h1>
            </aside>
            <ul className="w-[10%]">
              <li className="mb-4">Education</li>
              <li className="mb-4">About</li>
              <li className="mb-4">Catalog</li>
              <li className="mb-4">Blog</li>
              <li className="mb-4">Jobs</li>
            </ul>
            <aside className="w-[20%]">
              <div>
                <h1 className="font-bold text-xl">Administration</h1>
                <p>Roskildevej 100, 3. mf. 2000 Frederiksberg, Denmark</p>
              </div>
              <div className="mt-8">
                <h1 className="font-bold text-xl">Production</h1>
                <p>Caffamacherreihe 8 20355 Hamburg, Germany</p>
              </div>
            </aside>
            <div className="flex justify-start items-start flex-col w-[20%]">
              <h1 className="font-bold text-xl">Contacts</h1>
              <a href="mailto:contact@shapescape.com">contact@shapescape.com</a>
              <a href="tel:+4523645706">+4523645706</a>
            </div>
          </div>

          <div className="mt-[8rem] flex justify-between items-center mb-[3rem]">
            <aside className=" flex justify-center items-center text-[#44566e] font-medium">
              <p className="cursor-pointer">Copyright &copy; Shapescape 2024</p>
              <div className="w-[4px] h-[4px] rounded-full bg-[#44566e] mx-2"></div>
              <p className="cursor-pointer">Privacy Policy</p>
              <div className="w-[4px] h-[4px] rounded-full bg-[#44566e] mx-2"></div>
              <p className="cursor-pointer">Terms and Conditions</p>
            </aside>
            <aside className="flex justify-center items-center">
              {["YouTube", "Twitter", "Instagram"]?.map((item, i) => (
                <div
                  className="bg-[#cfb7f5] rounded-full px-5 py-2 text-[#041c3b] font-semibold even:mx-6 cursor-pointer hover:mb-2 ease-in-out duration-700"
                  key={i}
                >
                  <p>{item}</p>
                </div>
              ))}
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
