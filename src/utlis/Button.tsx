import React from "react";
import { Link } from "react-router-dom";

const Button: React.FC<{
  write: string;
}> = ({ write }) => {
  return (
    <div>
      {" "}
      <Link to="" className="hoverRotate flex justify-center items-center">
        <p className="font-bold">{write}</p>
        <span className="bg-[#041C3B] flex justify-center items-center h-[30px] w-[30px] py-1 px-2 rounded-full ml-3">
          <i className="fa-solid fa-arrow-right text-[#ffffff] -rotate-45"></i>
        </span>
      </Link>
    </div>
  );
};

export default Button;
