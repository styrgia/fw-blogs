import { Metadata } from 'next';
import { Hero } from '~/components/features/home/hero';
import { Brands } from '~/components/features/home/brands';
import { Feature } from '~/components/features/home/features-grid';
import { About } from '~/components/features/home/about';
import { FeaturesTab } from '~/components/features/home/features-tab';
import { FunFact } from '~/components/features/home/fun-fact';
import { Integration } from '~/components/features/home/integration';
import { CTA } from '~/components/features/home/cta';
import { FAQ } from '~/components/features/home/faq';
import { Pricing } from '~/components/features/home/pricing';
import { Contact } from '~/components/shared/forms/contact';
import { Blog } from '~/components/shared/blog';
import { Testimonial } from '~/components/features/home/testimonial';

export const metadata: Metadata = {
    title: 'Next.js Starter Template for SaaS Startups - Solid SaaS Boilerplate',
    description: 'This is Home for Solid Pro',
};

export default function Home() {
    return (
        <main>
            <Hero />
            <Brands />
            <Feature />
            <About />
            <FeaturesTab />
            <FunFact />
            <Integration />
            <CTA />
            <FAQ />
            <Testimonial />
            <Pricing />
            <Contact />
            <Blog />
        </main>
    );
}
