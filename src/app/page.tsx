import Header from '@/components/Header';
import Hero from '@/components/Hero';  // Original hero
// import HeroV2 from '@/components/HeroV2';  // New 3D treasure chest hero
import About from '@/components/About';
// import ScrollSection from '@/components/ScrollSection';

import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Process from '@/components/Process';
import LeadMagnet from '@/components/LeadMagnet';
import Testimonials from '@/components/Testimonials';

import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import PhoneUI from '@/components/ui/phoneui';
import ParallaxTransition from '@/components/ParallaxTransition';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      {/* <ParallaxTransition label="Strategic Impact" /> */}
      <PhoneUI />
      {/* <ParallaxTransition label="The Solutions" /> */}
      <Projects />
      {/* <ParallaxTransition label="Our Expertise" /> */}
      <Services />
      {/* <ParallaxTransition label="The Journey" /> */}
      <Process />
      {/* <ParallaxTransition label="Client Stories" /> */}
      <Testimonials />
      {/* <ParallaxTransition label="Get Started" /> */}
      <LeadMagnet />
      {/* <ParallaxTransition label="Connect" /> */}
      <Contact />
      <Footer />
    </main>
  );
}

