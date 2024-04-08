import { useEffect, useRef } from "react";
import Blog from "../components/Homepage/Blog";
import Creations from "../components/Homepage/Creations";
import Hero from "../components/Homepage/Hero";
import Minecraft from "../components/Homepage/Minecraft";
import NewsLetter from "../components/Homepage/NewsLetter";
import Stats from "../components/Homepage/Stats";
import Clients from "../utlis/Clients";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Home = () => {
  const container1Ref = useRef(null);
  const container2Ref = useRef(null);
  const container3Ref = useRef<any>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Define the animation for the first container
    gsap.to(container1Ref.current, {
      scrollTrigger: {
        trigger: container1Ref.current,
        start: "top top",
        // end: '+=100%',
        end: "bottom top",
        pin: true,
        pinSpacing: false,
        markers: true, // for debugging
      },
    });

    // Define the animation for the second container
    gsap.to(container2Ref.current, {
      scrollTrigger: {
        trigger: container1Ref.current,
        start: "top top",
        // end: '+=100%',
        end: "bottom top",
        pin: true,
        pinSpacing: false,
        scrub: 1, // Adjust scrub value for smoothness
      },
    });

    gsap.to(container3Ref.current, {
      scrollTrigger: {
        trigger: container1Ref.current,
        start: "top top",
        // end: '+=100%',
        end: () => `+=${container3Ref.current.offsetHeight}`, // Pin until the content of container3 starts showing
        pin: true,
        pinSpacing: false,
        scrub: 1, // Adjust scrub value for smoothness
      },
    });
  }, []);
  return (
    <main className="relative">
      <div ref={container1Ref} className="element1 z-[26]">
        <Hero />
      </div>
      <div ref={container2Ref} className="element2 z-[20]">
        <Minecraft />
      </div>
      <div ref={container3Ref}>
        <Creations />
      </div>
      <Stats />
      <Blog />
      <Clients />
      <NewsLetter />
    </main>
  );
};

export default Home;
