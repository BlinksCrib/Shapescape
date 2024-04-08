import Cat from "../components/Catalog/Cat";
import DonePojects from "../components/Catalog/DonePojects";
import Featured from "../components/Catalog/Featured";

const Catalog = () => {
  return (
    <main>
      <Cat />
      <Featured />
      <DonePojects />
    </main>
  );
};

export default Catalog;
