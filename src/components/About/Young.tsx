import young from "../../assets/young.webp"

const Young = () => {
  return (
    <section>
      <div className="flex justify-center items-center w-full">
        <div className="flex justify-center items-center flex-col lg:w-[80%] w-[95%] py-[6rem]">
          <h1 className="text-5xl font-bold text-center leading-[4rem] mb-8 lg:w-[70%]">
            We are a
            <small className="bg-[#CDF462] px-4 rounded-full">young</small> and
            <small className="bg-[#CFB7F5] px-4 rounded-full">dynamic</small>
            team with people from all over the globe.
          </h1>
          <img src={young} alt="young" className="mt-8 w-full object-cover object-center lg:rounded-tl-[12rem] lg:rounded-br-[12rem] lg:rounded-tr-2xl lg:rounded-bl-2xl rounded-2xl" />
        </div>
      </div>
    </section>
  );
};

export default Young;
