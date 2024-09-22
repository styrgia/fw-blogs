import Image from 'next/image';
import Reveal from '~/components/shared/animations/reveal';
import { TabsContent, TabsProvider, TabTriggers } from '~/components/features/home/features-tab/tabs';

export function FeaturesTab() {
    return (
        <section className="relative pb-20 pt-18.5 lg:pb-22.5">
            <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
                <div className="absolute -top-16 -z-1 mx-auto h-[350px] w-[90%]">
                    <Image fill className="dark:hidden" src="/images/shape/shape-dotted-light.svg" alt="Dotted Shape" />
                    <Image
                        fill
                        className="hidden dark:block"
                        src="/images/shape/shape-dotted-dark.svg"
                        alt="Dotted Shape"
                    />
                </div>

                <TabsProvider>
                    <Reveal
                        duration={0.5}
                        className="animate_top mb-15 flex flex-wrap justify-center rounded-[10px] border border-stroke bg-white shadow-solid-5 dark:border-strokedark dark:bg-blacksection dark:shadow-solid-6 md:flex-nowrap md:items-center lg:gap-7.5 xl:mb-21.5 xl:gap-12.5"
                    >
                        <TabTriggers />
                    </Reveal>

                    <Reveal duration={0.5} delay={0.5} className="animate_top mx-auto max-w-c-1154">
                        <TabsContent />
                    </Reveal>
                </TabsProvider>
            </div>
        </section>
    );
}
