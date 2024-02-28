import { useState } from "react";

interface FAQItem {
    title: string;
    content: string;
  }

const Faq = () => {

    const [openSections, setOpenSections] = useState<Record<number, boolean>>({});

    const items: FAQItem[] = [
      {
        title: 'Hello',
        content:
          'In this example, the Accordion component takes an array of objects as a prop, with each object containing a title and content field. The openSections state variable is used to track which accordion sections are open, and the handleClick function toggles the open/closed state of a section when its title is clicked.',
      },
      {
        title: 'Hello',
        content:
          'In this example, the Accordion component takes an array of objects as a prop, with each object containing a title and content field. The openSections state variable is used to track which accordion sections are open, and the handleClick function toggles the open/closed state of a section when its title is clicked.',
      },
      {
        title: 'Hello',
        content:
          'In this example, the Accordion component takes an array of objects as a prop, with each object containing a title and content field. The openSections state variable is used to track which accordion sections are open, and the handleClick function toggles the open/closed state of a section when its title is clicked.',
      },
    ]
    
    const handleClick = (index: number) => {
      setOpenSections({
        ...openSections,
        [index]: !openSections[index]
      });
    };

  return (
    <section>
      <div className="flex justify-center items-center w-full">
        <div className="flex justify-center items-center w-[80%]">
          <div className="">
            {items.map((item: FAQItem, index: number) => (
              <div key={index}>
                <div className="flex justify-between items-center">
                  
                  <h3 className="font-bold text-2xl" onClick={() => handleClick(index)}>{item.title}</h3>
                  <div>
                    {}
                  </div>
                </div>
                <div
                  style={{ display: openSections[index] ? "none" : "flex" }}
                  className="gap-2"
                >
                  <div style={{ visibility: "hidden" }}>arrow</div>
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
