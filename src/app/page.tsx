import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WhoIWorkWith from '@/components/WhoIWorkWith';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Process from '@/components/Process';
import LeadMagnet from '@/components/LeadMagnet';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import CommunityBanner from '@/components/CommunityBanner';
import EventsPreview from '@/components/EventsPreview';
import AdReviewsBar from '@/components/AdReviewsBar';
import { faqItems } from '@/lib/data/faq';

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Adbibe',
    url: 'https://adbibe.com',
    email: 'hello@adbibe.com',
    founder: {
      '@type': 'Person',
      name: 'Dipayan Dey',
      jobTitle: 'Founder',
      sameAs: ['https://www.linkedin.com/in/dipayan-dey'],
    },
    sameAs: ['https://www.linkedin.com/in/dipayan-dey'],
    description:
      'Adbibe is a founder-led growth consultancy focused on paid acquisition, conversion optimization, analytics, and programmatic execution.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Adbibe',
    url: 'https://adbibe.com',
    areaServed: 'Worldwide',
    serviceType: [
      'Performance marketing',
      'Conversion rate optimization',
      'Programmatic advertising',
      'Analytics and attribution consulting',
    ],
    description:
      'Adbibe helps D2C, SaaS, agencies, and growth-stage brands improve acquisition efficiency through paid media, CRO, and analytics.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <Hero />
      <About />
      <WhoIWorkWith />
      <Projects />
      <AdReviewsBar />
      <Services />
      <CommunityBanner />
      <EventsPreview />
      <Process />
      <Testimonials />
      <FAQ />
      <LeadMagnet />
      <Contact />
      <Footer />
    </main>
  );
}

