import Footer from "../components/Footer";
import Hero from "../components/Hero";
import History from "../components/History";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import WhoWeAre from "../components/WhoWeAre";
import WhyUs from "../components/WhyUs";

export default function about() {
  return (
    <>
      <Navbar />
      <Hero
        text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
        title="About us"
        type=""
        bgImg="aboutHero"
      />
      <History/>
      <WhoWeAre/>
      <Footer />
    </>
  );
}
