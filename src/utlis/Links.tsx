import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

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
  const location = useLocation();

  let activeColor = "";
  let activeBg = "";

  // Set navbar color based on the current location
  switch (location.pathname) {
    case "/":
    case "/blog":
    case "/contact":
      activeColor = "lg:text-[#cdf462]";
      activeBg = "bg-[#cdf462]";
      break;
    case "/education":
    case "/about":
    case "/catalog":
    case "/jobs":
      activeColor = "lg:text-[#4b927e]";
      activeBg = "bg-[#4b927e]";
      break;
    default:
      activeColor = "lg:text-[#041C3B]";
      activeBg = "bg-[#4b927e]";
    // Default color
  }

  return (
    <section>
      <div>
        <ul className="flex justify-center items-center lg:flex-row flex-col lg:space-x-8 lg:space-y-0 space-y-8 ">
          <li
            className="lg:hidden cursor-pointer flex justify-center items-center hover:text-[rgb(123,104,238)] font-semibold ease-out duration-700"
            onClick={handClose}
          >
            <Link to="/" className="">
              Home
            </Link>
          </li>
          {link?.map((item, i) => (
            <li
              className={`cursor-pointer flex justify-center items-center flex-col hover:${activeColor}  font-semibold ease-out duration-700`}
              key={i}
              onClick={handClose}
            >
              <NavLink
                to={`/${item.name.toLowerCase()}`}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? `${activeColor}` : `hover:${activeColor}`
                }
              >
                {item.name}
              </NavLink>
              {location.pathname === `/${item.name.toLowerCase()}` && (
                <div
                  className={`rotate-45 w-[5px] h-[5px] ${activeBg} mt-1`}
                ></div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Links;
