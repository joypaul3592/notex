import Hero from "../../components/homePage/Hero";
import About from "../about/About";
import Projects from "../projects/Projects";
import Services from "../services/Services";
import HeroImg from "./HeroImg";

export default function Home() {
    return (
        <div>
            <Hero />
            <HeroImg />
            <About />
            <Services />
            <Projects />
        </div>
    )
}
