import Reveal from '~/components/shared/animations/reveal';

type SectionHeaderProps = {
    title: string;
    subtitle: string;
    description: string;
};

export function SectionHeader({ title, subtitle, description }: SectionHeaderProps) {
    return (
        <Reveal className="mx-auto text-center">
            <div className="mb-4 inline-block rounded-full bg-zumthor px-4.5 py-1.5 dark:border dark:border-strokedark dark:bg-blacksection">
                <span className="text-sectiontitle font-medium text-black dark:text-white">{title}</span>
            </div>
            <h2 className="mx-auto mb-4 text-3xl font-bold text-black dark:text-white md:w-4/5 xl:w-1/2 xl:text-sectiontitle3">
                {subtitle}
            </h2>
            <p className="mx-auto md:w-4/5 lg:w-3/5 xl:w-[46%]">{description}</p>
        </Reveal>
    );
}
