import Creations from "../components/Homepage/Creations"
import Hero from "../components/Homepage/Hero"
import Minecraft from "../components/Homepage/Minecraft"
import Stats from "../components/Homepage/Stats"

const Home = () => {
  return (
    <main>
        <Hero />
        <Minecraft />
        <Creations />
        <Stats />
    </main>
  )
}

export default Home