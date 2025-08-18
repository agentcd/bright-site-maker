import { Element } from 'react-scroll';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Emergency from '../components/Emergency';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden max-w-full">
      <Header />
      <main className="overflow-x-hidden max-w-full">
        <Element name="hero">
          <Hero />
        </Element>
        <Element name="services">
          <Services />
        </Element>
        <Element name="emergency">
          <Emergency />
        </Element>
        <Element name="team">
          <Team />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
      </main>
      <Footer />
    </div>
  );
};

export default Index;