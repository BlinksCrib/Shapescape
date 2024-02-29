import React from "react";
import { Link } from "react-router-dom";

interface LinksProps {
  handClose?: any;
}
const Links: React.FC<LinksProps> = ({ handClose }) => {
  const link = [
    { name: "Education" },
    { name: "About" },
    { name: "Catalog" },
    { name: "Blog" },
    { name: "Jobs" },
    { name: "Contact" },
  ];

  return (
    <section>
      <div>
        <ul className="flex justify-center items-center lg:flex-row flex-col lg:space-x-8 lg:space-y-0 space-y-8 overflow-x-hidden">
          {link?.map((item, i) => (
            <li
              className="cursor-pointer flex justify-center items-center hover:text-[rgb(123,104,238)] active:text-[rgb(123,104,238)] focus:text-[rgb(123,104,238)] focus:underline focus:underline-offset-2 focus:decoration-2 font-semibold ease-out duration-700"
              key={i}
              onClick={handClose}
            >
              <Link to={`/${item.name.toLowerCase()}`} className="">
                {item.name}
              </Link>{" "}
              {/* <i
                className={`fa-solid fa-chevron-down ml-2 ${
                  !(i === 3 || i === 4) ? "block" : "hidden"
                }`}
              ></i> */}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Links;
