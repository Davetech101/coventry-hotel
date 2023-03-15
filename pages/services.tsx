import Brusque from "../components/Brusque";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Instagram from "../components/Instagram";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import WhyUs from "../components/WhyUs";

export default function OurServices() {
  return (
    <>
      <Navbar />
      <Hero
        text="We offer the best services here in Coventry, be rest assured you'll have a great time."
        title="Our Services"
        type=""
        bgImg="serviceHero"
      />
      <Services/>
      <WhyUs/>
      <Footer />
    </>
  );
}
