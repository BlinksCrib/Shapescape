import { Logo } from "../../utlis/Icons"
import Links from "../../utlis/Links"

const Navbar = () => {
  return (
    <nav>
        <div className="flex justify-center items-center w-full bg-[#041C3B] h-[70px]">
            <div className="flex justify-between items-center w-[80%] h-full text-[#ffffff]">
                <aside>
                    <Logo />
                </aside>
                <aside>
                    <Links />
                </aside>
            </div>
        </div>
    </nav>
  )
}

export default Navbar