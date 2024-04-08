const Forms = () => {
  return (
    <section>
      <div className="flex justify-center items-center w-full bg-[#041C3B] pb-12 lg:rounded-b-[6rem] rounded-b-[2rem]">
        <div className="flex justify-center items-start lg:w-[80%] w-[95%] flex-col">
          <div className="text-[#ffffff]  mt-[4rem] mb-[4rem] lg:w-[45%]">
            <h1 className="font-bold text-6xl">Contact us</h1>
            <p className="mt-2 font-medium text-xl">
              If you need help or just want to contact us, fill out the form
              below and we will contact you soon.
            </p>
          </div>
          <div className="bg-[#ffffff] w-full rounded-3xl px-12 py-[3rem]">
            <div>
                <h1 className="font-bold text-3xl mb-8">Let's chat! Send us a message.</h1>
            </div>
            <div className="grid grid-cols-2 gap-6 justify-center items-center">
            <div className="col-span-2">
              <label htmlFor="subject">Subject</label>
              <select name="subject" id="subject" className="w-full border border-[#E5E7EB] focus:border-none px-4 py-4 mt-2 rounded-lg">
                <option value="General Inquiries">General Inquiries</option>
                <option value="Education">Education</option>
                <option value="Marketplace">Marketplace</option>
                <option value="Open Job Application">
                  Open Job Application
                </option>
              </select>
            </div>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" placeholder="Your name" className="w-full border border-[#E5E7EB] focus:border-none px-3 py-4 rounded-lg mt-2" />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" placeholder="name@example.com" className="w-full border border-[#E5E7EB] focus:border-none px-3 py-4 rounded-lg mt-2" />
            </div>
            <div className="col-span-2">
                <label htmlFor="message" className="block">Message</label>
                <textarea name="message" id="message" cols={30} rows={10} className="w-full border border-[#E5E7EB] focus:border-none px-3 py-4 rounded-lg mt-2 max-h-[320px] resize-none min-h-[320px]"></textarea>
            </div>
            </div>
            <div className="my-6">
                <input type="checkbox" name="tick" id="tick" />
                <label className="ml-4" htmlFor="">I have read and understood the <b>Privacy Policy</b> and agree to its terms*</label>
            </div>
            <div>
                <button className="bg-[#041C3B] text-[#ffffff] font-bold px-12 py-4 rounded-full">Send</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forms;
