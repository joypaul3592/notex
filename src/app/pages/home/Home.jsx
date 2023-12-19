import Hero from "../../components/homePage/Hero";
import About from "../about/About";
import HeroImg from "./HeroImg";

export default function Home() {
    return (
        <div>
            <Hero />
            <HeroImg />
            <About />
        </div>
    )
}
