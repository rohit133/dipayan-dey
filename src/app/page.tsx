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
      <ParallaxTransition label="What We Build" />
      <PhoneUI />
      <ParallaxTransition label="Strategic Impact" />
      <Projects />
      <Services />
      <Process />
      <Testimonials />
      <LeadMagnet />
      <Contact />
      <Footer />
    </main>
  );
}

