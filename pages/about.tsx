import Brusque from "../components/Brusque";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Instagram from "../components/Instagram";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import WhyUs from "../components/WhyUs";

export default function about() {
  return (
    <>
      <Navbar />
      <Hero
        text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
        title="About us"
        type=""
        bgImg="serviceHero"
      />
      <Services/>
      <WhyUs/>
      <Instagram/>
      <Footer />
    </>
  );
}
