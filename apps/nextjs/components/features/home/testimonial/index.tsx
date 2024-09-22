import { SectionHeader } from '~/components/shared/layout/section-header';
import Reveal from '~/components/shared/animations/reveal';
import { TestimonialCarousel } from '~/components/features/home/testimonial/carousel';

export function Testimonial() {
    return (
        <section>
            <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
                <div className="animate_top mx-auto text-center">
                    <SectionHeader
                        title={`TESTIMONIALS`}
                        subtitle={`Client’s Testimonials`}
                        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.`}
                    />
                </div>
            </div>

            <Reveal className="animate_top mx-auto mt-15 max-w-c-1235 px-4 md:px-8 xl:mt-20 xl:px-0">
                <div className="swiper testimonial-01 mb-20 pb-22.5">
                    <TestimonialCarousel />
                </div>
            </Reveal>
        </section>
    );
}
