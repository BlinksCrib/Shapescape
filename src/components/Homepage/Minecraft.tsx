import Button from "../../utlis/Button";

const Minecraft = () => {
  return (
    <section>
      <div className="flex justify-center items-center w-full bg-[#F3F6FA] rounded-b-[6rem]">
        <div className="flex justify-center items-center w-[65%] flex-col py-[9rem]">
          <h1 className="text-5xl font-bold text-center leading-[4rem] mb-8">
            We are Shapescape. Since 2013 we have sought to{" "}
            <small className="bg-[#CDF462] px-4 rounded-full">educate</small> children through play
            and create interactive{" "}
            <small className="bg-[#CFB7F5] px-4 rounded-full">art pieces</small> through Minecraft.
          </h1>
          <Button write="Read more" />
        </div>
      </div>
    </section>
  );
};

export default Minecraft;
