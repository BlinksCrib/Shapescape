import AboutGamific from "../components/Education/AboutGamific"
import Gamific from "../components/Education/Gamific"
import NextProject from "../components/Education/NextProject"
import WhyNot from "../components/Education/WhyNot"
import Stats from "../components/Homepage/Stats"
import Clients from "../utlis/Clients"

const Education = () => {
  return (
    <main>
        <Gamific />
        <AboutGamific />
        <WhyNot />
        <Stats />
        <Clients />
        <NextProject />
    </main>
  )
}

export default Education