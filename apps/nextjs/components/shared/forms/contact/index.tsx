import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import ContactForm from '~/components/shared/forms/contact/form';
import Reveal from '~/components/shared/animations/reveal';

export function Contact() {
    return (
        <section id="support" className="px-4 md:px-8 2xl:px-0">
            <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
                <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>
                <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
                    <Image src="./images/shape/shape-dotted-light.svg" alt="Dotted" className="dark:hidden" fill />
                    <Image src="./images/shape/shape-dotted-dark.svg" alt="Dotted" className="hidden dark:block" fill />
                </div>

                <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
                    <Reveal className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black md:w-3/5 lg:w-3/4 xl:p-15">
                        <h2 className="mb-15 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                            Send a message
                        </h2>

                        <ContactForm />
                    </Reveal>

                    <Reveal duration={2} className="animate_top w-full md:w-2/5 md:p-7.5 lg:w-[26%] xl:pt-15">
                        <h2 className="mb-12.5 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                            Find us
                        </h2>

                        <div className="5 mb-7">
                            <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                                Our Loaction
                            </h3>
                            <p>290 Maryam Springs 260, Courbevoie, Paris, France</p>
                        </div>
                        <div className="5 mb-7">
                            <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                                Email Address
                            </h3>
                            <p>
                                <Link href="mailto:#">yourmail@domainname.com</Link>
                            </p>
                        </div>
                        <div>
                            <h4 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                                Phone Number
                            </h4>
                            <p>
                                <Link href="tel:#">+7 (999) 999 99-99</Link>
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
