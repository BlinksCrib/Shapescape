const NewsLetter = () => {
  return (
    <section>
      <div className="flex justify-center items-center w-full bg-[#CFB7F5]">
        <div className="flex lg:justify-between justify-center items-center lg:w-[80%] w-[95%] py-[8rem]">
          <aside className="md:w-[60%] llg:text-center">
            <h1 className="text-[#162C49] font-bold lg:text-6xl md:text-5xl text-3xl">
              Stay up to date with our newsletter!
            </h1>
            <p className="my-6">
              By subscribing we will keep you updated on our latest releases,
              blogposts and other projects.
            </p>
            <div className="lg:bg-[#ffffff] flex justify-center md:items-center md:flex-row flex-col rounded-full">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                className="md:w-[70%] w-full lmd:bg-[#ffffff] lmd:py-6 lmd:rounded-full bg-transparent px-4 outline-none focus:none"
              />
              <button className="w-[30%] py-4 rounded-r-full lmd:mt-6 lmd:rounded-full font-bold bg-[#162C49] text-[#ffffff]">
                Subscribe
              </button>
            </div>
          </aside>
          <aside className="lg:flex hidden w-[35%] justify-center items-center flex-col">
            <div className="w-[150px] h-[150px] bg-[#ef38a9] rounded-xl rotate-[30deg] mb-[4rem]"></div>
            <div className="w-[150px] h-[150px] bg-[#ffffff] rounded-xl rotate-[-15deg]"></div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
