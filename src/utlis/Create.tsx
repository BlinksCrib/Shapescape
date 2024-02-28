interface Creat {
  img: any;
  title: string;
  descp: string;
  type: string;
}

const Create: React.FC<{
  item: Creat;
}> = ({ item }) => {
  // Deconstruct the item from props
  const { img, title, descp, type } = item;

  return (
    <aside>
      <div className="w-full flex justify-center items-start flex-col cursor-pointer  even:mt-[4rem]">
        <div className="move">
          <img src={img} alt={title} className="w-full mb-4" />
          <span
            className={`${
              type === "Educational" ? "bg-[#CDF462]" : "bg-[#CFB7F5]"
            } px-2 rounded-full font-medium`}
          >
            {" "}
            {type}
          </span>
        </div>
        <h1 className="font-bold text-2xl py-2">{title}</h1>
        <p className="font-medium">{descp}</p>
      </div>
    </aside>
  );
};

export default Create;
