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
        text="Get to know more about us, our history and how far we've come."
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
