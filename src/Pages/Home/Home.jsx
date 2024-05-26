import About from "../About/About"
import Feature from "../Feature/Feature"
import Hero from "../Hero/Hero"
import Services from "../Services/Services"
import Team from "../Team/Team"
import Time from "../Time/Time"

const Home = () => {
  return (
    <div>
        <Hero></Hero>
        <About></About>
        <Services></Services>
        <Time></Time>
        <Team></Team>
        <Feature></Feature>
    </div>
  )
}

export default Home