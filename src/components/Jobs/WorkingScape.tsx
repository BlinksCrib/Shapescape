import workone from "../../assets/about_img_one.webp";
import worktwo from "../../assets/about_img_two.webp";
import workthree from "../../assets/about_img_three.webp";
import workfour from "../../assets/about_img_four.webp";

const WorkingScape = () => {
  return (
    <section>
      <div className="flex justify-center items-center w-full">
        <div className="flex justify-between items-center w-[80%] py-[4rem]">
          <aside className="lg:w-[35%]">
            <h1 className="font-extrabold text-5xl">Working at Shapescape</h1>
            <h4 className="font-semibold text-base mt-3">
              Shapescape is a game development company that uses the game
              Minecraft as an engine to create educational and entertaining
              content for everybody.
            </h4>
            <p className="my-6">
              We have been creating a variety of products focusing on education,
              immersion, and entertainment since 2013. We have worked together
              with universities, governments, and multinationals such as The
              World Bank and developed projects tailored to their needs.
            </p>
            <p>
              At Shapescape we’re always looking to expand our team with
              talented people, so if you’re interested in being a part of our
              journey, have a look at the jobs below!
            </p>
          </aside>
          <aside className="flex justify-center items-center lg:w-[60%] flex-wrap flex-row gap-4 workscape">
            {[workone, worktwo, workthree, workfour]?.map((item, i) => (
              <div key={i} className="h-[240px] w-[48%] object-cover object-center">
                <img src={item} alt="" className="w-full h-full" />
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
};

export default WorkingScape;
