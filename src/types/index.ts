export interface HeroData {
    headline: string;
    subheadline: string;
    cta: string;
    ctaSecondary: string;
    stats: { value: string; label: string }[];
}

export interface TrustData {
    title: string;
    companies: string[];
}

export interface AboutData {
    title: string;
    description: string;
    expertise: string[];
    image: string;
}

export interface Service {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    icon: string;
}

export interface ServicesData {
    title: string;
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
    metrics: Metric[];
    channels: string[];
    image: string;
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
    title: string;
    subtitle: string;
    description: string;
    cta: string;
    benefits: string[];
}

export interface ContactData {
    title: string;
    description: string;
    subtitle: string;
    email: string;
    linkedin: string;
    calendly: string;
    calCom: string;
}
