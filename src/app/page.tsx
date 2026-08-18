import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import StatsBar from '@/components/StatsBar';
import { faqItems } from '@/lib/data/faq';

const CANONICAL_DESCRIPTION =
  'Adbibe is a founder-led AI performance marketing agency based in Bangalore, India, specializing in paid acquisition, programmatic advertising, CRO, marketing automation, and brand strategy for D2C and SaaS brands.';

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Adbibe',
    url: 'https://adbibe.com',
    logo: 'https://adbibe.com/logo.png',
    email: 'hello@adbibe.com',
    description: CANONICAL_DESCRIPTION,
    founder: {
      '@type': 'Person',
      name: 'Dipayan Dey',
      jobTitle: 'Founder',
      sameAs: ['https://www.linkedin.com/in/dipayan-dey'],
    },
    sameAs: [
      'https://www.linkedin.com/in/dipayan-dey',
      'https://www.linkedin.com/company/adbibeofficial/',
      'https://www.instagram.com/adbibeofficial',
      'https://www.facebook.com/adbibeofficial',
    ],
    areaServed: 'IN',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bangalore',
      addressCountry: 'IN',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Adbibe',
    url: 'https://adbibe.com',
    areaServed: 'IN',
    serviceType: [
      'Performance marketing',
      'Programmatic advertising',
      'Marketing automation',
      'Social media marketing',
      'Brand strategy',
      'Marketing consulting',
      'Conversion rate optimization',
      'Analytics and attribution',
    ],
    description: CANONICAL_DESCRIPTION,
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
      <StatsBar />
      <About />
      <Projects />
      <Services />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
