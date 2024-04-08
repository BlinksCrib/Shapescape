import keyart from "../../assets/keyart.webp"
import Button from "../../utlis/Button"

const Featured = () => {
  return (
    <section>
        <div className="flex justify-center items-center w-full bg-[#2D7964]">
            <div className="flex justify-center items-center flex-col lg:w-[80%] w-[95%] py-[8rem]">
                <div>
                    <h1 className="font-extrabold lg:text-5xl text-[#ffffff]"><span className="bg-[#CDF462] text-[#041C3B] px-4 py-1 rounded-full">Featured</span> project</h1>
                </div>
                <aside className="flex lg:justify-between justify-center items-center w-full lg:flex-row flex-col mt-[4rem]">
                    <div className="lg:w-[60%]">
                        <img src={keyart} alt="keyart" className="rounded-2xl" />
                    </div>
                    <div className="lg:w-[35%]">
                        <div className="bg-[#CDF462] text-[#041C3B] font-medium inline-block px-3 py-1 rounded-full mb-2">
                            <p>Education</p>
                        </div>
                        <h1 className="font-extrabold text-5xl text-[#ffffff]">Planet Earth III</h1>
                        <p className="text-[#ffffff] font-medium py-6">Experience survival as predator and prey!</p>
                        <div className="flex justify-start items-start">

                        <Button write="Learn more" links="/" />
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    </section>
  )
}

export default Featured