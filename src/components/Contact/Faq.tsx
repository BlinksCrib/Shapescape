import { useState } from "react";

interface FAQItem {
  title: string;
  content: string;
}

const Faq = () => {
  const [openSections, setOpenSections] = useState<Record<number, boolean>>({});

  const items: FAQItem[] = [
    {
      title:
        "Is it possible to add this mod or pack to my own world? & Can I combine different mods or worlds?",
      content:
        "No, due to restrictions with how the Marketplace works, when you buy a pack or world it's attached to the dedicated world it comes with.",
    },
    {
      title: "Is it possible get <Product> for free?",
      content: `"No, but it's your lucky day! We have several free products on the Marketplace that you can check out, search ${`"Shapescape"`} to see our products!"`,
    },
    {
      title: "Can I get a refund on <Product>?",
      content:
        "Due to how the Marketplace is structured we are unable to give you a refund. You can contact Microsoft directly to potentially get a refund. Read more here: https://help.minecraft.net/hc/en-us/articles/360030463592-Mojang-refunds-policy",
    },
    {
      title: "Why does it take you so long to respond sometimes?",
      content:
        "We may not be in the same timezone as you as we're based in Europe, so it may take us a few more hours to respond sometimes!",
    },
    {
      title: "Why is my world not downloading?",
      content:
        "In the game menu, click Settings and go down to Storage. Here you will see “Cached Data”, “Worlds”, and “World Templates”. If there is anything related to the world in question mentioned in these tabs, delete it using the option in the menu. Once all mentions are deleted, try downloading the world again. If that didn’t work, try restarting Minecraft, make sure you have enough space on your device’s memory, or restart your device.",
    },
  ];

  const handleClick = (index: number) => {
    setOpenSections({
      ...openSections,
      [index]: !openSections[index],
    });
  };

  return (
    <section>
      <div className="flex justify-center items-center w-full">
        <div className="flex justify-center items-start w-[80%] flex-col py-[8rem]">
            <div>
                <h1 className="font-extrabold text-3xl text-[#041C3B] mb-4">FAQ</h1>
            </div>
          <div className="">
            {items.map((item: FAQItem, index: number) => (
              <div className="border-b border-[#D5E4F9] py-6 ease-in-out duration-700" key={index}>
                <div
                  className="flex justify-between items-start cursor-pointer"
                  onClick={() => handleClick(index)}
                >
                  <h3
                    className="font-bold text-2xl pb-7"
                    onClick={() => handleClick(index)}
                  >
                    {item.title}
                  </h3>
                  <div className="bg-[#D5E4F9] h-[30px] w-[30px] rounded-full flex justify-center items-center px-2 ease-in-out duration-700">
                    {openSections[index] ? "+" : "-"}
                  </div>
                </div>
                <div
                //   style={{ display: openSections[index] ? "none" : "flex" }}
                  className={`${openSections[index]? "hidden ease-out duration-700" : "flex ease-in duration-700"} ease-in-out duration-700`}
                >
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
