import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Process from '@/components/Process';
import LeadMagnet from '@/components/LeadMagnet';
import Testimonials from '@/components/Testimonials';
import WhoIWorkWith from '@/components/WhoIWorkWith';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Process />
      <LeadMagnet />
      <Testimonials />
      <WhoIWorkWith />
      <Contact />
      <Footer />
    </main>
  );
}
