import { Link } from "react-router-dom";
import Button from "../../utlis/Button";

import disasterDefense6Mil from "../../assets/disasterDefense6Mil.webp";
import sofaScene from "../../assets/sofaScene.webp";
import kekuleSplashFinal_Screenshot from "../../assets/kekuleSplashFinal_Screenshot.webp";

const Blog = () => {
  const blogs = [
    {
      imgs: disasterDefense6Mil,
      title: "We are proud of our creations",
      desc: "Disaster Defense, an educational Minecraft World crafted by Shapescape, has just hit a whopping 6 million downloads. That's right, 6 million! This isn't just a game; it's a global classroom that's teaching kids about resilience in the face of natural disasters.",
      lin: "",
      cats: "Education",
    },
    {
      imgs: sofaScene,
      title: "Educating in a metaverse using Minecraft!",
      desc: "Minecraft is a game with no rules, objectives, winners, or losers. It's a blank canvas that can be molded into anything you want it to be. You can build structures, explore the vastness of space, or even go on adventures through time and space! The game has been around since 2009, and its popularity is constantly increasing among youth and broader audiences. Minecraft is a fantastic platform to bring education to a metaverse. Let us tell you how & why!",
      lin: "",
      cats: "Education",
    },
    {
      imgs: kekuleSplashFinal_Screenshot,
      title: "Teaching Chemistry in Minecraft",
      desc: "Use chemistry to create new Minecraft items like helium balloons and sparklers, view elements in the periodic table and build a custom laboratory in Minecraft!",
      lin: "",
      cats: "Education",
    },
  ];

  return (
    <section>
      <div className="flex justify-center items-center w-full">
        <div className="flex jusitfy-center items-center flex-col lg:w-[80%] w-[95%]">
          <div className="flex justify-between items-center mb-[4rem] w-full">
            <h1 className="font-extrabold lg:text-5xl text-3xl">Our blog</h1>
            <Button write="Go to the blog" links="/blog" />
          </div>
          <div className="flex justify-center items-center flex-col">
            {blogs?.map((item, i) => (
              <div
                className="flex lg:justify-between justify-center items-center lg:flex-row flex-col mb-[3.5rem] cursor-pointer home-blog"
                key={i}
              >
                <aside className="lg:w-[48%] h-[280px] object-cover">
                  <img
                    src={item.imgs}
                    alt={item.title}
                    className="w-full h-full rounded-2xl"
                  />
                </aside>
                <aside className="lg:w-[45%]">
                  <aside className="cats px-6 py-2 rounded-full border border-[#041c3b] inline-block">
                    <span className="">
                      {item.cats}
                    </span>
                  </aside>
                  <h1 className="font-extrabold text-3xl mt-3">{item.title}</h1>
                  <p className="line-clamp-2 mt-4 mb-8">{item.desc}</p>
                  <Link to={item.lin} className="font-bold text-[#041c3b]">
                    Read more
                  </Link>
                </aside>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
