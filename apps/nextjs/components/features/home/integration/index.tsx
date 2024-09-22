import Image from 'next/image';
import { SectionHeader } from '~/components/shared/layout/section-header';
import Reveal from '~/components/shared/animations/reveal';
import React, { Fragment } from 'react';

export function Integration() {
    return (
        <section>
            <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
                <SectionHeader
                    title="INTEGRATIONS"
                    subtitle="Remotely Maintain Your Data, From Anywhere, Anytime."
                    description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.`}
                />
            </div>

            <div className="pattern-dots pattern-blue-500 pattern-bg-white pattern-size-4 pattern-opacity-10 relative z-50 mx-auto mt-15 max-w-c-1154 px-4 md:px-8 xl:mt-20 xl:px-0">
                <div className="absolute -top-3/4 left-0 right-0 -z-1 mx-auto h-full w-full">
                    <Image
                        width={1200}
                        height={400}
                        sizes="(max-width: 768px) 100vw"
                        src="/images/shape/shape-dotted-light.svg"
                        alt="Dotted"
                        className="dark:hidden"
                        style={{ position: 'static' }}
                    />
                    <Image fill src="/images/shape/shape-dotted-dark.svg" alt="Dotted" className="hidden dark:block" />
                </div>
                <div className="flex flex-wrap justify-around gap-y-10">
                    <Reveal className="animate_top w-1/6">
                        <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
                            <Image width={50} height={50} src="./images/brand/brand-07.svg" alt="Brand" />
                        </div>
                    </Reveal>

                    <Reveal className="animate_top w-1/6">
                        <Fragment />
                    </Reveal>

                    <Reveal className="animate_top w-1/6">
                        <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
                            <Image width={50} height={50} src="./images/brand/brand-08.svg" alt="Brand" />
                        </div>
                    </Reveal>

                    <Reveal className="animate_top w-1/6">
                        <div className="h-[11px] w-[11px] rounded-full bg-[#FFDB26]" />
                    </Reveal>

                    <Reveal className="animate_top w-1/6">
                        <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
                            <Image width={50} height={50} src="./images/brand/brand-09.svg" alt="Brand" />
                        </div>
                    </Reveal>

                    <Reveal className="animate_top w-1/6">
                        <Fragment />
                    </Reveal>

                    <Reveal className="animate_top w-1/6">
                        <div className="h-[15px] w-[15px] rounded-full bg-[#62E888]"></div>
                    </Reveal>

                    <Reveal className="animate_top w-1/6">
                        <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
                            <Image width={50} height={50} src="./images/brand/brand-10.svg" alt="Brand" />
                        </div>
                    </Reveal>

                    <Reveal className="animate_top w-1/6">
                        <div className="h-[23px] w-[23px] rounded-full bg-[#EF5C00]"></div>
                    </Reveal>

                    <Reveal className="animate_top w-1/6">
                        <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
                            <Image width={50} height={50} src="./images/brand/brand-11.svg" alt="Brand" />
                        </div>
                    </Reveal>

                    <Reveal className="animate_top w-1/6">
                        <div className="h-[15px] w-[15px] rounded-full bg-[#016BFF]"></div>
                    </Reveal>

                    <Reveal className="animate_top w-1/6">
                        <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
                            <Image width={50} height={50} src="./images/brand/brand-12.svg" alt="Brand" />
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
