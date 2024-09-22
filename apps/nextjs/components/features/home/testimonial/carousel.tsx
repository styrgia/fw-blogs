'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { testimonialData } from '~/components/features/home/testimonial/testimonialData';
import { SingleTestimonial } from '~/components/features/home/testimonial/item';

export function TestimonialCarousel() {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={2}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            breakpoints={{
                // when window width is >= 640px
                0: {
                    slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                    slidesPerView: 2,
                },
            }}
        >
            {testimonialData.map(review => (
                <SwiperSlide key={review?.id}>
                    <SingleTestimonial review={review} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
