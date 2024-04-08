import innovation from "../../assets/innovation.svg";
import creativity from "../../assets/creativity.svg";
import flexibility from "../../assets/flexibility1.svg";
import experience from "../../assets/experience.svg";
import global from "../../assets/global.svg";
import centralised from "../../assets/centralised.svg";

const Virtues = () => {
  const benefits = [
    {
      img: innovation,
      title: "Innovation",
      desc: "We love bringing unique and innovative ways to bring memorable experiences that make an impact to your audience.",
    },
    {
      img: creativity,
      title: "Creativity",
      desc: "With a diverse team from different backgrounds we bring creativity to every aspect of our products.",
    },
    {
      img: flexibility,
      title: "Flexibility",
      desc: "With a young and flexible team, we can adjust our resources quickly to meet your deadlines.",
    },
    {
      img: experience,
      title: "Experience",
      desc: "We have over 8 years of experience in creating educational, immersive, and entertaining products for all audiences.",
    },
    {
      img: global,
      title: "Global",
      desc: "Our international team brings a huge variety of cultural experiences from all over the globe.",
    },
    {
      img: centralised,
      title: "Centralised",
      desc: "Our headquarters in Hamburg speed up communication and coordination, giving us a significant edge over virtual offices.",
    },
  ];

  return (
    <section>
      <div className="flex justify-center items-center w-full rounded-b-[8rem] bg-[#ffffff]">
        <div className="flex jsutify-center items-start flex-col lg:w-[80%] w-[95%] py-[6rem]">
          <div className="mb-16">
            <h1 className="font-bold lg:text-6xl text-3xl">
              Our Virtues
            </h1>
          </div>
          <aside className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-[3rem]">
            {benefits?.map((item, i) => (
              <div className="h-full" key={i}>
                <img src={item.img} alt={item.title} />
                <h1 className="font-bold text-[#041c3b] text-xl my-2">
                  {item.title}
                </h1>
                <p className="text-[#041c3b]">{item.desc}</p>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Virtues;
