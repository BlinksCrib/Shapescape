import Creations from "../components/Homepage/Creations";
import Hero from "../components/Homepage/Hero";
import Minecraft from "../components/Homepage/Minecraft";
import Stats from "../components/Homepage/Stats";

const Home = () => {
   return (
    <main id="container" className="scrolling-container">
      <div>
        <Hero />
      </div>
      <div>
        <Minecraft />
      </div>
      <Creations />
      <Stats />
    </main>
  );
};

export default Home;
