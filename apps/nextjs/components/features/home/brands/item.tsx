import React from 'react';
import Image from 'next/image';
import { Brand } from '~/components/features/home/brands/brand';
import Reveal from '~/components/shared/animations/reveal';

export function SingleBrand({ brand }: { brand: Brand }) {
    const { image, name, imageLight, id } = brand;

    return (
        <Reveal delay={id} className="animate_top mx-w-full relative block h-10 w-[98px]">
            <Image
                className="opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden"
                src={image}
                alt={name}
                fill
            />
            <Image
                className="hidden opacity-50 transition-all duration-300 hover:opacity-100 dark:block"
                src={imageLight}
                alt={name}
                fill
            />
        </Reveal>
    );
}
