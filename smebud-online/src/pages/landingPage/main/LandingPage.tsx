import Body from '../Body';
import Faq from '../Faq';
import Footer from '../Footer';
import HeroSection from '../HeroSection';
import MeetTheTeam from '../MeetTheTeam';
import NavBar from '../NavBar';
import Cards from '../subComponents/Cards';
import IconRectangle from '../subComponents/IconRectangle';

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
  );
};

export default LandingPage;
