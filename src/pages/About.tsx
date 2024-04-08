import Craft from "../components/About/Craft"
import Journey from "../components/About/Journey"
import Team from "../components/About/Team"
import Virtues from "../components/About/Virtues"
import Young from "../components/About/Young"
import WorkingScape from "../components/Jobs/WorkingScape"
import Clients from "../utlis/Clients"

const About = () => {
  return (
    <main>
        <Craft />
        <WorkingScape />
        <Young />
        <Virtues />
        <Team />
        <Clients />
        <Journey />
    </main>
  )
}

export default About