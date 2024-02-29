import { Link, useLocation } from "react-router-dom";
import { Logo, LogoColored } from "../../utlis/Icons";
import Links from "../../utlis/Links";
import { useState } from "react";

// interface LocationState {
//   pathname: string;
// }

const Navbar: React.FC = () => {
  const [nav, setNav] = useState(false);

  const handClick = () => {
    setNav(!nav);
  };

  const handClose = () => {
    setNav(!nav);
  };

  const location = useLocation();

  let navbarColor = "";
  let textColor = "";
  let navImg: JSX.Element | null = null;

  // Set navbar color based on the current location
  switch (location.pathname) {
    case "/":
      navbarColor = "bg-[#041C3B]";
      textColor = "text-[#ffffff]";
      navImg = <Logo />;
      break;
    case "/education":
      navbarColor = "bg-[#F3F6FA]";
      textColor = "text-[#041c3b]";
      navImg = <LogoColored />;
      break;
    case "/about":
      navbarColor = "bg-[#F3F6FA]";
      textColor = "text-[#041c3b]";
      navImg = <LogoColored />;
      break;
    case "/catalog":
      navbarColor = "bg-[#F3F6FA]";
      textColor = "text-[#041c3b]";
      navImg = <LogoColored />;
      break;
    case "/blog":
      navbarColor = "bg-[#041C3B]";
      textColor = "text-[#ffffff]";
      navImg = <Logo />;
      break;
    case "/jobs":
      navbarColor = "bg-[#F3F6FA]";
      textColor = "text-[#041c3b]";
      navImg = <LogoColored />;
      break;
    case "/contact":
      navbarColor = "bg-[#041C3B]";
      textColor = "text-[#ffffff]";
      navImg = <Logo />;
      break;
    default:
      navbarColor = "#041C3B";
      textColor = "text-[#ffffff]";
      navImg = <Logo />;
    // Default color
  }

  return (
    // <nav>
    //   <div
    //     className={`flex justify-center items-center w-full ${navbarColor} h-[70px]`}
    //   >
    //     <div
    //       className={`flex justify-between items-center w-[80%] h-full ${textColor}`}
    //     >
    //       <aside>
    //         <Link to="/">{navImg}</Link>
    //       </aside>
    //       <aside>
    //         <Links />
    //       </aside>
    //     </div>
    //   </div>
    // </nav>

    <header
      className={`${
        nav
          ? `${navbarColor} ${textColor} h-[70px] py-[10.5px] w-full z-[10] flex justify-center`
          : `${navbarColor} ${textColor} h-[70px] py-[10.5px] w-full z-[10] flex justify-center items-center`
      }`}
    >
      <nav className="flex justify-between h-full w-[80%] items-center">
          <Link to="/" className="md:mr-6">
            {navImg}
          </Link>
          <div>
            <aside className="lg:block hidden">
              <Links />

              {/* <DarkModeSwitch /> */}
            </aside>
          </div>

          <button className="lg:hidden cursor-pointer ml-4" onClick={handClick}>
            {nav ? (
              <i className="fa-solid fa-x"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </button>
      </nav>

      {/* mobile view */}

      <div
        className={
          nav
            ? `lg:hidden left-0 ${navbarColor} ${textColor} mt-[4rem]  w-full h-full ease-in duration-500`
            : "fixed h-screen left-[-100%] mt-[4rem]  ease-out duration-700"
        }
      >
        <ul className="text-center space-y-10 py-10">
          <Links handClose={handClose} />

          <div className="flex justify-center items-center">
            {/* <DarkModeSwitch /> */}
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
