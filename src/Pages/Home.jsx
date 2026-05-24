import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import StateSection from "../components/StateSection";
 import CityService from "../components/CityService";
 import MapSection from "../components/MapSection";
import ContactSection from "../components/ContactSection";


function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <StateSection />
       <CityService /> 
       <MapSection city="Faisalabad" />
             <ContactSection />
             </div>
              

             
  );
}

export default Home;
