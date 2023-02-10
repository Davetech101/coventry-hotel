import Footer from "../components/Footer";
import Hero from "../components/Hero";
import History from "../components/History";
import Navbar from "../components/Navbar";
import WhoWeAre from "../components/WhoWeAre";

export default function about() {
  return (
    <>
      <Navbar />
      <Hero
        text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
        title="Contact us"
        type=""
        bgImg="contactHero"
      />
      
      <Footer />
    </>
  );
}
