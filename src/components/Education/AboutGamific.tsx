import { useState } from "react";
import education from "../../assets/education.webp";
import marketing from "../../assets/marketing.webp";
import business from "../../assets/business.webp";

const AboutGamific = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const togglePanel = (index: any) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? prevIndex : index));
  };

  const accordionData = [
    {
      title: "Education",
      content:
        "Learning should be fun and enjoyable. Our products encourage and motivate users to learn and remember through playing and exploring immersive experiences.",
    },
    {
      title: "Digital Marketing",
      content:
        "Let your audience experience something they will remember. Connect a joyful and memorable experience to your brand through gamification; in person at a venue, or from the comfort of their own couch!",
    },
    {
      title: "Business",
      content:
        "Want to give new employees and/or partners a tour of your office, train new employees, or teach company culture? Look no further. Gamification can be used for remote employee training in a fun and memorable way.",
    },
  ];

  return (
    <section>
      <div className="flex justify-center items-center w-full">
        <div className="flex lg:justify-between justify-center items-center lg:w-[80%] w-[95%] py-[6rem]">
          <aside className="lg:w-[48%] w-full">
            <div className="llg:text-center"> 
              <h1 className="font-extrabold lg:text-6xl md:text-4xl text-3xl text-[#041C3B]">
                What is gamification?
              </h1>
              <p className="text-[#041C3B] font-medium text-lg mt-6">
                Gamification is the approach to apply game principles and
                playing methods to a non-game context to create an experience
                that is like playing a game. This is used to engage and motivate
                the user.
              </p>
            </div>
            <div className="mt-16">
              {accordionData.map((item, index) => (
                <div
                  key={index}
                  className={`px-[2rem] mb-4 ${
                    openIndex === index ? "bg-[#F3F6FA] py-6 rounded-2xl" : ""
                  }`}
                >
                  <div
                    className={`flex justify-between items-start cursor-pointer`}
                    onClick={() => togglePanel(index)}
                  >
                    <h1 className="font-extrabold mb-4 lg:text-xl">
                      {item.title}
                    </h1>
                    <div className="rounded-full h-[25px] w-[25px] bg-[#D5E4F9] flex justify-center items-center">
                      <span className="h-full w-full text-center">
                        {openIndex === index ? (
                          <i className="fa-solid fa-minus"></i>
                        ) : (
                          <i className="fa-solid fa-plus"></i>
                        )}
                      </span>
                    </div>
                  </div>
                  {openIndex === index && (
                    <>
                      <p className="accordion-content">{item.content}</p>

                      <div className="lg:hidden block mt-10">
                        <img
                          src={
                            openIndex === 0
                              ? education
                              : openIndex === 1
                              ? marketing
                              : business
                          }
                          alt=""
                          className="w-full h-full object-cover object-center rounded-3xl"
                        />
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </aside>
          <aside className="lg:block hidden lg:w-[48%] h-[500px] object-cover object-center">
            <img
              src={
                openIndex === 0
                  ? education
                  : openIndex === 1
                  ? marketing
                  : business
              }
              alt=""
              className="w-full h-full object-cover object-center rounded-3xl"
            />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default AboutGamific;
