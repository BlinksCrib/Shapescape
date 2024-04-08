import { CrafDesk, CrafMobile } from "../../utlis/Icons"

const Craft = () => {
  return (
    <section>
        <div className="flex justify-center items-center w-full bg-[#F3F6FA] lg:rounded-b-[6rem] rounded-b-[2rem]">
        <div className="flex lg:justify-between justify-center items-center lg:flex-row flex-col lg:w-[80%] w-[95%] lg:py-[14rem] pt-[2rem] pb-[4rem]">
          <div className="lg:w-[60%] llg:text-center">
            <h1 className="font-extrabold lg:text-6xl md:text-5xl text-3xl">
            Crafting a better world for every- one
            </h1>
          </div>
          <div className="lg:mt-0 mt-[3rem] lg:w-[35%] w-full flex justify-center items-center">
            <small className="lg:block md:hidden block w-full">
              <CrafDesk />
            </small>
            <small className="lg:hidden md:block hidden w-full">
              <CrafMobile />
            </small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Craft