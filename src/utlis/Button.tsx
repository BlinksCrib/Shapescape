import React from "react";
import { Link } from "react-router-dom";

const Button: React.FC<{
  write: string;
  links: string
}> = ({ write, links }) => {
  return (
    <div>
      {" "}
      <Link to={links} className="hoverRotate flex justify-center items-center">
        <p className={`font-bold ${location.pathname === "/catalog" ? "text-[#ffffff]" : "text-[#041C3B]"}`}>{write}</p>
        <span className={`${location.pathname === "/catalog" ? "bg-[#ffffff]" : "bg-[#041C3B]"}  flex justify-center items-center h-[30px] w-[30px] py-1 px-2 rounded-full ml-3`}>
          <i className={`fa-solid fa-arrow-right ${location.pathname === "/catalog" ? "text-[#041C3B]" : "text-[#ffffff]"} -rotate-45`}></i>
        </span>
      </Link>
    </div>
  );
};

export default Button;
