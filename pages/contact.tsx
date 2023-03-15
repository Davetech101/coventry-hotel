import Footer from "../components/Footer";
import GetInTouch from "../components/GetInTouch";
import Hero from "../components/Hero";
import History from "../components/History";
import Navbar from "../components/Navbar";
import WhoWeAre from "../components/WhoWeAre";

export default function about() {
  return (
    <>
      <Navbar />
      <Hero
        text="Do you have any inquiry? let us know how we can be of assistance."
        title="Contact us"
        type=""
        bgImg="contactHero"
      />
      <GetInTouch/>
      <Footer />
    </>
  );
}
