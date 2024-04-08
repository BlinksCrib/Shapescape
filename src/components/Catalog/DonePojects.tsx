import { useEffect, useState } from "react";
import Pagination from "../../utlis/Pagination/Pagination";

const DonePojects = () => {
  const items = [
    {
      img: "",
      type: "Commercial",
      title: "The End 2.0",
      descp:
        "Enter The End 2.0! Discover new mobs, biomes & structures all over the end dimension! New blocks, weapons, plants, and armor.. the depths of The End 2.0 have it all! Can you survive this eerie dimension? Make",
      took: "",
    },
    {
      img: "",
      type: "Educational",
      title: "TractorCraft: Secrets of Soil",
      descp:
        "Explore the secrets of soil in TractorCraft: Secrets of Soil! Learn about agriculture and the amazing wonders of farming through this new world, Sponsored by John Deere.",
      took: "",
    },
    {
      img: "",
      type: "Educational",
      title: "Frozen Planet 2",
      descp:
        "Explore the worlds of Frozen Planet 2 in Minecraft, learn and document about wonderful animals and see how our world is being affected by rapid changes in our climate!",
      took: "",
    },
    {
      img: "",
      type: "Commercial",
      title: "Warden Dimension",
      descp:
        "Go even deeper than the deep dark! Discover the Warden Dimension! A completely new dimension to explore! Explore dark, eerie biomes full of monstrous creatures, unique weapons, and epic items. Face the deadly Warden Queen boss and unlock the secrets of this otherworldly",
      took: "",
    },
    {
      img: "",
      type: "Educational",
      title: "Planet Earth III",
      descp: "Experience survival as predator and prey!",
      took: "",
    },
    {
      img: "",
      type: "Commercial",
      title: "More Blocks",
      descp:
        "Unlock your creativity with a whole new set of blocks! Who wants one block when you can get hundreds?! The only limit is your imagination. Decorate your base with awnings, beams, roof tiles, new plants, and so much more!",
      took: "",
    },
    {
      img: "",
      type: "Educational",
      title: "Zoo",
      descp:
        "Discover a world of animals in the interactive zoo! Explore exhibits, ride karts & bikes, and chat with expert guides to learn in-depth curiosities about more than 50 species!",
      took: "",
    },
    {
      img: "",
      type: "Educational",
      title: "Artemis: Rocket Builds",
      descp:
        "Blast off to the Moon with Artemis: Rocket Builds in Minecraft Education!",
      took: "",
    },
    {
      img: "",
      type: "Educational",
      title: "Great Ormond Street Hospital",
      descp:
        "Explore the Great Ormond Street Hospital and get to know the complex before your visit. Chat and interact with other patients and feel right at home. Walk through the colorful hallways and get comfortable before your",
      took: "",
    },
    {
      img: "",
      type: "Commercial",
      title: "Sniffer Dimension",
      descp:
        "Discover the long-forgotten, ancient world of the Sniffer Dimension! Meet prehistoric mobs, and find ancient armor, tools, and weapons in this preserved area! Can you beat the Sniffer boss? Find ancient builders, new blocks,",
      took: "",
    },
    {
      img: "",
      type: "Commercial",
      title: "Dead Souls",
      descp:
        "Pick up your weapon! The ruler’s mind has been compromised by a dark power! Fight the corruption by defeating the monstrous enemies! Gather their souls and",
      took: "",
    },
    {
      img: "",
      type: "Commercial",
      title: "Grave Danger 2",
      descp:
        "It’s vacation time! OR IS IT!? Hordes of undead monsters are attacking the island and trying to ruin the vacation! New levels, new bosses, new monsters, new traps, and new weapons! What are you waiting for? Jump in and help",
      took: "",
    },
    {
      img: "",
      type: "Commercial",
      title: "Hercules",
      descp:
        "Become a hero! Jump into an action-packed adventure as the ancient Greek demigod Hercules! Complete your training and help the gods save Olympus from Hades and the titans! Are you strong enough to defeat the hydra and",
      took: "",
    },
    {
      img: "",
      type: "Commercial",
      title: "Eternity",
      descp:
        "Ready for a fight? Hades has found a way to awake death into an army of undeath soldiers! If Olympia falls, so will Olympus; Zeus needs you to protect Olympia!",
      took: "",
    },
    {
      img: "",
      type: "Commercial",
      title: "Heist 2",
      descp:
        "Get ready for Heist 2! Become a MILLIONAIRE! Help your friend Chester to snatch the Hope Diamond from the Smithsonian in DC! Plan your way inside and prepare for a safe escape after retrieving the diamond!",
      took: "",
    },
    {
      img: "",
      type: "Commercial",
      title: "Tools Expansion",
      descp:
        "Ever needed a flashlight to discover some dark caves? We've got you! A flashlight, a backpack, and more than 90 other extra useful tools and items have been added to Minecraft in this world! New foods, obsidian boats,",
      took: "",
    },
    {
      img: "",
      type: "Commercial",
      title: "Angry Dragon",
      descp:
        "Jump on an angry dragon and bring destruction! The gnomes are ready for a fight, are you? Train your dragons to have new abilities or unlock other species to defeat the gnomes!",
      took: "",
    },
    {
      img: "",
      type: "Commercial",
      title: "Survival+ Orcs",
      descp:
        "Survive in an expansion of vanilla Minecraft with Dwarves, Orcs, and Ogres! Can you defeat the new boss..?",
      took: "",
    },
    {
      img: "",
      type: "Educational",
      title: "Disaster Defense",
      descp:
        "With the Worldbank Group, we created a heavily modified version of Minecraft where earthquakes, hurricanes, droughts, and floods are a constant threat to the world, and building your house of resilient materials and by resilient methods is important.",
      took: "",
    },
    {
      img: "",
      type: "Commercial",
      title: "Grave Danger",
      descp:
        "The castle is under attack by hordes of undead monsters! Protect and free the castle from the invaders with the help of traps, magical weapons, and your trusty companion! Fight zombies, undead plushies, and many more fantastic creatures. Unlock more weapons and traps",
      took: "",
    },
    {
      img: "",
      type: "Commercial",
      title: "Survival+ SCI-FI",
      descp:
        "Survive in an expansion of vanilla Minecraft with robots & drones! Craft Sci-Fi modules to help you mine and explore the SCI-FI dungeons! Get ready to fight the new robot boss!",
      took: "",
    },
    {
      img: "",
      type: "Commercial",
      title: "Ultimate Armor Expansion",
      descp:
        "Expand your armor collection with over 250 new pieces of EPIC armor! Turtle armor, beacon armor, axolotl armor, lucky block armor, ghost armor, and many more amazing sets with incredible abilities and fantastic looks are",
      took: "",
    },
    {
      img: "",
      type: "Commercial",
      title: "E-SPORTS TYCOON",
      descp:
        "Become the best E-Sporter ever in E-Sports Tycoon! Play competitive games to gain popularity amongst the fans! Start your very own team, hire other e-sporters, win tournaments and sell merchandise to get RICH!",
      took: "",
    },
    {
      img: "",
      type: "Commercial",
      title: "Pixels Resource Pack",
      descp:
        "Give Minecraft a completely new look with the Pixels Resource Pack, a vibrant, colorful and inspiring resource pack that will give any Minecraft world the make-over it needs!",
      took: "",
    },
    {
      img: "",
      type: "Commercial",
      title: "Mini Melbourne",
      descp:
        "Come and design the new Town Hall Station! Use the five different design themes and test them out in the six design spaces. Get inspired by solutions already installed around the world like the piano stairs in Stockholm. Unlock various power-ups by interacting with the NPCs",
      took: "",
    },
    {
      img: "",
      type: "Commercial",
      title: "Clash",
      descp:
        "In Clash you take the role of a medieval general to command troops in one of the many battle arenas. You can either fight one of the four bosses or challenge your friends to epic battles to find out who is the best general.",
      took: "",
    },
    {
      img: "",
      type: "Virtual Erasmus",
      title: "Clash",
      descp:
        "With COVID-19 preventing the usual campus tours for new prospect students, we helped Erasmus University in Rotterdam, The Netherlands, make a virtual solution.",
      took: "",
    },
  ];

  const [dataPerPages, setDataPerPages] = useState(8);

  useEffect(() => {
    // Function to update dataPerPage based on viewport width
    const updateDataPerPage = () => {
      if (window.innerWidth <= 992) {
        setDataPerPages(5); // Set 6 items per page for mobile view
      } else {
        setDataPerPages(8); // Set 8 items per page for desktop view
      }
    };

    // Call the function initially and add event listener for window resize
    updateDataPerPage();
    window.addEventListener('resize', updateDataPerPage);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateDataPerPage);
    };
  }, []); // useEffect dependency array ensures this effect runs only once

  // Pagination logic and rendering...

  return (
    <section>
      <div className="flex justify-center item-center w-full bg-[#ffffff]">
        <div className="flex justify-center items-center lg:w-[80%] w-[95%] py-[6rem]">
          <Pagination dataPerPage={dataPerPages} totalData={items}>
            {(dataOnCurrentPage: any) => (
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-[5rem] w-full">
                {dataOnCurrentPage.map((item: any, i: number) => (
                  <main key={i} className="creation-cont">
                    <aside>
                      <div className="w-full flex justify-center items-start flex-col cursor-pointer  even:mt-[4rem]">
                        <div className="move">
                          <img
                            src={item.img}
                            alt={item.title}
                            className="w-full mb-4"
                          />
                          <span
                            className={`${
                              item.type === "Educational"
                                ? "bg-[#CDF462]"
                                : "bg-[#CFB7F5]"
                            } px-2 rounded-full font-medium`}
                          >
                            {item.type}
                          </span>
                        </div>
                        <h1 className="font-bold text-2xl py-2">
                          {item.title}
                        </h1>
                        <p className="font-medium line-clamp-3">{item.descp}</p>
                      </div>
                    </aside>
                  </main>
                ))}
              </div>
            )}
          </Pagination>
        </div>
      </div>
    </section>
  );
};

export default DonePojects;
