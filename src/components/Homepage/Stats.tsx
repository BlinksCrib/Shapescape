import { useState, useEffect } from "react";
import { Stat } from "../../utlis/Icons";
import { useLocation } from "react-router-dom";

const slides = [
  {
    tags: "11%",
    body: "increase in knowledge recall when taught through gamification",
    num: "01",
  },
  {
    tags: "28 million",
    body: "people have played our games",
    num: "02",
  },
  {
    tags: "100+",
    body: "games published",
    num: "03",
  },
];

const gamific = [
  {
    tags: "11%",
    body: "increase in knowledge recall when taught through gamification",
    num: "01",
  },
  {
    tags: "14%",
    body: "increase in procedural knowledge when trained with gamification",
    num: "02",
  },
  {
    tags: "9%",
    body: "greater retention of knowledge through gamification",
    num: "03",
  },
];

const Stats = () => {
  // Get the current location using the useLocation hook
  const location = useLocation();

  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    let interval: any = null;
    interval = setInterval(() => {
      setSlideIndex((prev) => {
        return prev >= slides.length - 1 ? 0 : prev + 1;
      });
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    let interval: any = null;
    interval = setInterval(() => {
      setSlideIndex((prev) => {
        return prev >= gamific.length - 1 ? 0 : prev + 1;
      });
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  

  return (
    <section>
      <div className="flex justify-center items-center w-full">
        <div className="flex justify-between items-center lg:w-[80%] w-[95%] llg:flex-col py-[6rem]">
          <div className="bg-[#f3f6fa] lg:h-[80vh] h-[50vh] lg:w-[48%] w-full rounded-2xl py-8 px-10 flex justify-center items-center flex-col text-center llg:mb-6">
            {location.pathname === "/" ? (
              <>
                <p className="font-medium">Some cool stats</p>
                <div className="lg:my-[4rem] my-[2.5rem]">
                  <h1 className="font-bold lg:text-7xl text-4xl">
                    {slides[slideIndex].tags}
                  </h1>
                  <p className="font-medium mt-3">{slides[slideIndex].body}</p>
                </div>
                <button className="border border-[#041c3b] rounded-full px-6 py-1">
                  {slides[slideIndex].num} / 0{slides.length}
                </button>
              </>
            ) : (
              <>
                <p className="font-medium">Here's some gamification stats</p>
                <div className="lg:my-[4rem] my-[2.5rem]">
                  <h1 className="font-bold lg:text-7xl text-4xl">
                    {gamific[slideIndex].tags}
                  </h1>
                  <p className="font-medium mt-3">{gamific[slideIndex].body}</p>
                </div>
                <button className="border border-[#041c3b] rounded-full px-6 py-1">
                  {gamific[slideIndex].num} / 0{gamific.length}
                </button>
              </>
            )}

            {/* <img src={slides[slideIndex].ims} alt='woman farming' /> */}
            {/* <div
                className='red'
                style={{ backgroundColor: slides[slideIndex].color }}
              >
                <div className='top'>
                  <span className='num'>{slides[slideIndex].num}</span>
                  <h4 className='title'>{slides[slideIndex].title}</h4>
                </div>
                <div
                  className='bottom'
                //   style={{ backgroundColor: slides[slideIndex].colors }}
                >
                  <p>{slides[slideIndex].body}</p>
                </div>
              </div> */}
          </div>
          <div className="bg-[#cdf462] lg:h-[80vh] h-[50vh] lg:w-[48%] w-full rounded-2xl flex justify-center items-center flex-col">
            <Stat />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
