import { useState } from "react";

import august from "../../assets/august.webp";
import bramW from "../../assets/bram+W.webp";
import przemyslaw from "../../assets/przemyslaw.webp";
import bramG from "../../assets/bram+G_New_g.webp";
import julitaNew from "../../assets/julita_new.webp";
import jassen from "../../assets/jassen.webp";
import lotta from "../../assets/lotta.webp";
import jonatan from "../../assets/jonatan.webp";
import johannesNew from "../../assets/johannes_new.webp";
import luigi from "../../assets/luigi.webp";
import lars from "../../assets/lars.webp";
import artur from "../../assets/artur.webp";
import tomasz from "../../assets/tomasz.webp";

interface TeamsItem {
  imgs: any;
  name: string;
  position: string;
  desc: string;
}

const Team = () => {
  const [openSections, setOpenSections] = useState<Record<number, boolean>>({});

  const handleClick = (index: number) => {
    setOpenSections({
      ...openSections,
      [index]: !openSections[index],
    });
  };

  const teams: TeamsItem[] = [
    {
      imgs: august,
      name: "August Gade",
      position: "CEO",
      desc: "Everything is done better when you have fun doing it!",
    },
    {
      imgs: bramW,
      name: "Bram Wulteputte",
      position: "Head of Education",
      desc: "It's child's play.",
    },
    {
      imgs: przemyslaw,
      name: "Przemyslaw Lapinski",
      position: "COO",
      desc: "The Office, Season 2: The Fight, 21:04-21:13",
    },
    {
      imgs: bramG,
      name: "Bram van Gent",
      position: "CMO & Office Manager",
      desc: "Stay hydrated!",
    },
    {
      imgs: julitaNew,
      name: "Julita Lapinska",
      position: "Developer",
      desc: "Kill a plant and I will haunt you ;)",
    },
    {
      imgs: jassen,
      name: "Jassen Scharifie",
      position: "Media Content Creator",
      desc: "That was a great shot! Let's try to do it again...",
    },
    {
      imgs: lotta,
      name: "Lotta Pastel",
      position: "3D Artist",
      desc: "Johannes, please stop smoking ;)",
    },
    {
      imgs: jonatan,
      name: "Jonatan Eriksson",
      position: "Level Designer",
      desc: "Tea is great!",
    },
    {
      imgs: johannesNew,
      name: "Johannes Neumann",
      position: "Producer & 3D Artist",
      desc: "Do more things that make you forget to check your phone.",
    },
    {
      imgs: luigi,
      name: "Luigi Belli",
      position: "Level Designer",
      desc: "",
    },
    {
      imgs: lars,
      name: "Lars Rickert",
      position: "Senior Developer",
      desc: "Spaghetti code is like cheap enchiladas - you end up paying for it on the back end.",
    },
    {
      imgs: artur,
      name: "Artur",
      position: "Senior Developer",
      desc: "Bedrock is cool, but have you ever heard of Regolith?",
    },
    {
      imgs: tomasz,
      name: "Tomasz Klosek",
      position: "Senior Developer",
      desc: "",
    },
  ];

  return (
    <section>
      <div className="flex justify-center items-center w-full">
        <div className="flex justify-center items-start flex-col lg:w-[80%] w-[95%] py-[6rem]">
          <div className="mb-12">
            <h1 className="font-bold lg:text-6xl text-3xl">Meet our team</h1>
          </div>
          <aside className="w-full">
            {teams?.map((item: TeamsItem, index) => (
              <div
                className="flex justify-between items-center md:flex-row flex-col py-[1.3rem] border-b border-[#d0d5dd] teams cursor-default"
                key={index}
              >
                <div
                  className="flex md:justify-center justify-between items-center lmd:w-full"
                  onClick={() => handleClick(index)}
                >
                  <aside className="flex justify-center items-center">
                    <div className="w-[70px] h-[70px]">
                      <img
                        src={item.imgs}
                        alt={item.name}
                        className="w-full h-full rounded-2xl"
                      />
                    </div>
                    <div className="flex justify-center items-start flex-col ml-4">
                      <h1 className="font-bold text-[#041c3b] text-xl">
                        {item.name}
                      </h1>
                      <p className="text-[#041c3b]">{item.position}</p>
                    </div>
                  </aside>
                  <aside className="flex justify-center items-center p-1 w-[30px] h-[30px] bg-[#f3f6fa] rounded-lg">
                    <i className={`fa-solid fa-chevron-down md:hidden block ${openSections[index] ? "rotate-180 ease-in duration-700" : "ease-out duration-700"}`}></i>
                  </aside>
                </div>
                <p
                  className={`${
                    openSections[index]
                      ? "flex ease-out duration-700"
                      : "md:flex hidden ease-in duration-700"
                  } ease-in-out duration-700 text-[#041c3b] font-medium md:w-[30%] w-full lmd:mt-3 text-start team-p`}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Team;
