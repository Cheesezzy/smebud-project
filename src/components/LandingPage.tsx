import Body from "./landingPage/Body"
import Faq from "./landingPage/Faq"
import Footer from "./landingPage/Footer"
import HeroSection from "./landingPage/HeroSection"
import MeetTheTeam from "./landingPage/MeetTheTeam"
import NavBar from "./landingPage/NavBar"
import Cards from "./subComponents/Cards"
import IconRectangle from "./subComponents/IconRectangle"

const LandingPage = () => {
    return (
        <div>
            <NavBar />
            <HeroSection />
            <Body />
            <IconRectangle />
            <Cards />
            <Faq />
            <MeetTheTeam />
            <Footer />
        </div>
    )
}

export default LandingPage
