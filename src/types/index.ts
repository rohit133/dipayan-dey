// Hero V2 Types

export interface HeroData {
    badge: string;
    headline: string;
    subheadline: string;
    cta: string;
    ctaSecondary: string;
    scrollLabel: string;
    stats: { value: string; label: string }[];
}

export interface TrustData {
    title: string;
    companies: string[];
}

export interface AboutData {
    badge: string;
    title: string;
    mobile_title: string;
    description: string;
    expertise: string[];
    image: string;
    imageName: string;
    imageRole: string;
}

export interface Service {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    icon: string;
}

export interface ServicesData {
    badge: string;
    titleFirst: string;
    titleSecond: string;
    subtitle: string;
    services: Service[];
}

export interface Step {
    number: string;
    title: string;
    description: string;
}

export interface ProcessData {
    title: string;
    subtitle: string;
    steps: Step[];
}

export interface Metric {
    label: string;
    value: string;
}

export interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    fullDescription?: string;
    metrics: Metric[];
    channels: string[];
    image: string;
    tags?: string[];
    challenge?: string;
    solution?: string;
    result?: string;
    gallery?: string[];
}

export interface SkillCategory {
    name: string;
    skills: string[];
}

export interface SkillsData {
    title: string;
    subtitle: string;
    categories: SkillCategory[];
}

export interface Experience {
    year: string;
    role: string;
    company: string;
    description: string;
    achievements: string[];
}

export interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    image: string;
    quote: string;
}

export interface TestimonialsData {
    badge: string;
    title: string;
    titleItalic: string;
    testimonials: Testimonial[];
}

export interface Audience {
    type: string;
    description: string;
}

export interface WhoIWorkWithData {
    title: string;
    subtitle: string;
    audiences: Audience[];
}

export interface LeadMagnetData {
    badge: string;
    title: string;
    titleItalic: string;
    subtitle: string;
    description: string;
    cta: string;
    benefits: string[];
}

export interface FooterLink {
    label: string;
    href: string;
}

export interface FooterSection {
    title: string;
    content?: string;
    links?: FooterLink[];
}

export interface FooterData {
    about: {
        title: string;
        description: string;
    };
    services: {
        title: string;
        items: string[];
    };
    caseStudies: {
        title: string;
        description: string;
    };
    legal: {
        privacy: FooterSection;
        cookies: FooterSection;
        terms: FooterSection;
        aiDisclosure: FooterSection;
    };
    socialLinks: {
        platform: string;
        href: string;
        icon: string;
    }[];
    ecosystem: {
        label: string;
        href: string;
    }[];
    contact: {
        title: string;
        email: string;
    };
    nexus: {
        title: string;
        sessionLabel: string;
        sessionValue: string;
        directLabel: string;
    };
    copyright: string;
    trustStatement?: string;
    status: string;
}

export interface ProjectsData {
    badge: string;
    title: string;
    titleItalic: string;
    projects: Project[];
}

export interface ContactData {
    badge: string;
    title: string;
    titleItalic: string;
    description: string;
    subtitle: string;
    email: string;
    linkedin: string;
    calendly: string;
    calCom: string;
    boxLabels: {
        email: string;
        linkedin: string;
        calendly: string;
    };
    protocol: {
        title: string;
        description: string;
    };
}
