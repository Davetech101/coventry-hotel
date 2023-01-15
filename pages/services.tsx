import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";

export default function OurServices() {
  return (
    <>
      <Navbar />
      <Hero
        text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
        title="Our Services"
        type="serviceHero"
      />
      <Services/>
      <Footer />
    </>
  );
}
