import Image from 'next/image';
import { SharePost } from '~/components/features/blog/post/share-post';
import { Post } from '~/components/shared/blog/posts';

export function PostDetail({ title, text, date, author, image }: Post) {
    return (
        <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
            <div className="mb-10 w-full overflow-hidden">
                <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                        src={image}
                        alt="Kobe Steel plant that supplied"
                        fill
                        quality={100}
                        priority
                        className="rounded-md object-cover object-center"
                    />
                </div>
            </div>

            <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                {title}
            </h2>

            <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
                <li>
                    <span className="text-black dark:text-white">Author: </span> {author.name} {author.surname}
                </li>
                <li>
                    <span className="text-black dark:text-white">Published On: {date.toISOString()}</span>{' '}
                </li>
                <li>
                    <span className="text-black dark:text-white">Category:</span>
                    Events
                </li>
            </ul>

            <div className="blog-details">
                <p>{text}</p>

                <div className="flex flex-wrap gap-5">
                    <Image src={'/images/blog/blog-01.png'} width={350} height={200} alt="image" />
                    <Image src={'/images/blog/blog-02.png'} width={350} height={200} alt="image" />
                </div>

                <h3 className="pt-8">Nunc elementum elit viverra, tempus quam non</h3>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nibh lorem. Duis sed odio lorem.
                    In a efficitur leo. Ut venenatis rhoncus quam sed condimentum. Curabitur vel turpis in dolor
                    volutpat imperdiet in ut mi. Integer non volutpat nulla. Nunc elementum elit viverra, tempus quam
                    non, interdum ipsum.
                </p>
            </div>

            <SharePost />
        </div>
    );
}
