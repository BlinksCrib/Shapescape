import diversity from "../../assets/diversity.svg";
import flexibility from "../../assets/flexibility.svg";
import meaningfulWork from "../../assets/meaningful_work.svg";
import selfDevelopment from "../../assets/self_development.svg";
import digitalOffice from "../../assets/digital_office.svg";
import yearlyEvents from "../../assets/yearly_events.svg";

const BenefitScape = () => {
  const benefits = [
    {
      img: diversity,
      title: "Diversity",
      desc: "At Shapescape we value a diverse and inclusive team where everybody can be themselves.",
    },
    {
      img: flexibility,
      title: "Flexibility",
      desc: "At Shapescape employees have the freedom to arrange the hours they work, to fit both their professional and personal life.",
    },
    {
      img: meaningfulWork,
      title: "Meaningful Work",
      desc: "At Shapescape we believe that we’re doing meaningful work in the educational sector, you can be a part of our beautiful journey!",
    },
    {
      img: selfDevelopment,
      title: "Self-Development",
      desc: "At Shapescape we encourage learning, sharing knowledge, and collaborating with colleagues to stimulate self-development.",
    },
    {
      img: digitalOffice,
      title: "Digital Office",
      desc: "At Shapescape you get the possiblity to work in our office in Hamburg, or remotely from the comforts of your own home.",
    },
    {
      img: yearlyEvents,
      title: "Yearly Events",
      desc: "We organize yearly events for employees to meet in person! If you’re working remotely these events are great to meet the people you work with!",
    },
  ];
  return (
    <section>
      <div className="flex justify-center items-center w-full rounded-b-[8rem] bg-[#ffffff]">
        <div className="flex jsutify-center items-start flex-col w-[80%] py-[6rem]">
          <div className="mb-16">
            <h1 className="font-bold lg:text-6xl lg:3xl lg:w-[60%]">
              Benefits of working at Shapescape
            </h1>
          </div>
          <aside className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-[3rem]">
            {benefits?.map((item, i) => (
              <div className="h-full" key={i}>
                <img src={item.img} alt={item.title} />
                <h1 className="font-bold text-[#041c3b] text-xl my-2">{item.title}</h1>
                <p className="text-[#041c3b]">{item.desc}</p>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
};

export default BenefitScape;
