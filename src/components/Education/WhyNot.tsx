import { Rob, Rob1 } from "../../utlis/Icons";

const WhyNot = () => {
  return (
    <section>
      <div className="flex justify-center items-center w-full bg-[#041C3B]">
        <div className="flex justify-center items-center flex-col w-[80%] py-[8rem]">
          <aside className="w-full lg:h-[100vh]">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/6SfRDPbT18Y?controls=0&amp;amp;start=22"
              title="Shapescape - Educating Through Play!"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              frameBorder={`0`}
            ></iframe>
          </aside>
          <aside className="text-[#ffffff] flex lg:justify-between justify-center items-center flex-col lg:flex-row llg:text-center mt-[4rem] w-full">
            <div className="lg:w-[55%]">
              <h1 className="font-bold lg:text-6xl text-3xl">
                Why choose Minecraft or Roblox?
              </h1>
              <h4 className="font-bold my-4">
                Minecraft is one of the most played games in the world.
              </h4>
              <p>
                From children to adults, many enjoy this game in many ways. It
                is easy to navigate for newcomers and provides you with
                unlimited options to customize your project. You will create a
                positive connection with your project instantly.
              </p>
            </div>
            <div className="lg:w-[40%] llg:mt-8">
              <Rob />
            </div>
          </aside>
          <aside className="text-[#ffffff] flex lg:justify-between justify-center items-center flex-col-reverse lg:flex-row llg:text-center mt-[4rem] w-full">
            <div className="lg:w-[40%] llg:mt-8">
              <Rob1 />
            </div>
            <div className="lg:w-[55%]">
              <h1 className="font-bold lg:text-6xl text-3xl">
                Why Shapescape?
              </h1>
              <h4 className="font-bold my-4">
                Since our inception in 2013 we have created a variety of
                content.
              </h4>
              <p>
                We have taken part in multiple academic studies to achieve more
                significant learning, both standing alone and used alongside
                classroom teaching, books, and other educational tools.
              </p>
              <p>With that and our expertise to bring enjoyable experiences through Minecraft, we are ready to take on your next gamified project!</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default WhyNot;
