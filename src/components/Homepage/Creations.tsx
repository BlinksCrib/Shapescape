import Button from "../../utlis/Button";
import Create from "../../utlis/Create";

const Creations = () => {
  const creation = [
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
      title: "Planet Earth III",
      descp: "Experience survival as predator and prey!",
      took: "",
    },
    {
      img: "",
      type: "Educational",
      title: "TractorCraft: Secrets of Soil",
      descp:
        "Explore the secrets of soil in TractorCraft: Secrets of Soil! Learn about agriculture and the amazing wonders of farming through this new world, Sponsored by John...",
      took: "",
    },
    {
      img: "",
      type: "Commercial",
      title: "Warden Dimension",
      descp:
        "Go even deeper than the deep dark! Discover the Warden Dimension! A completely new dimension to explore! Explore dark, eerie biomes full of monstrous creatures,...",
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
      title: "Great Ormond Street Hospital",
      descp:
        "Explore the Great Ormond Street Hospital and get to know the complex before your visit. Chat and interact with other patients and feel right at home. Walk through...",
      took: "",
    },
  ];
  return (
    <section>
      <div className="flex justify-center items-center w-full">
        <div className="flex justify-center items-center flex-col w-[80%] py-[8rem]">
          <main className="grid grid-cols-2 gap-8 justify-center items-center w-full  mb-[4rem]">
            {creation?.map((item, i) => (
              <main key={i} className="creation-cont">
                <Create item={item} />
              </main>
            ))}
          </main>
          <Button write="See more Projects" />
        </div>
      </div>
    </section>
  );
};

export default Creations;
