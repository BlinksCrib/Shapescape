import logo1 from "../assets/logo1.svg"
import logo2 from "../assets/logo2.svg"
import logo3 from "../assets/logo3.svg"
import logo4 from "../assets/logo4.svg"
import logo5 from "../assets/logo5.svg"
import logo6 from "../assets/logo6.svg"
import logo7p from "../assets/logo7.png"
import logo7 from "../assets/logo7.svg"
import logo8 from "../assets/logo8.svg"
import logo9 from "../assets/logo9.svg"
import logo10 from "../assets/logo10.svg"
import logo11 from "../assets/logo11.svg"

const Clients = () => {
  return (
    <section>
        <div className="flex justify-center items-center w-full bg-[#2D7964] lg:rounded-b-[6rem] rounded-b-[2rem]">
            <div className="flex justify-center items-center flex-col lg:w-[80%] w-[95%] py-[8rem]">
                <div className="text-[#ffffff] text-center mb-16">
                    <h1 className="font-bold lg:text-5xl text-2xl mb-2">Notable Clients</h1>
                    <p>Over the years we have worked on our projects with a variety of partners.</p>
                </div>
                <aside className="grid md:grid-cols-3 grid-cols-2 gap-16 justify-center items-center w-full">
                    {[logo1,logo2,logo3,logo4,logo5,logo6,logo7p,logo7,logo8,logo9,logo10,logo11]?.map((item,i)=>(
                        <div className="h-full w-full flex justify-center items-center" key={i}>
                            <img src={item} alt={item} />
                        </div>
                    ))}
                </aside>
            </div>
        </div>
    </section>
  )
}

export default Clients