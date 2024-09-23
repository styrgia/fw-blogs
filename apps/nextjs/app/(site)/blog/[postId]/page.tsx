import { Metadata } from 'next';
import { RelatedPost } from '~/components/features/blog/post/related-post';
import { BlogSearch } from '~/components/features/blog/post/search';
import { BlogCategories } from '~/components/features/blog/post/categories';
import { PostDetail } from '~/components/features/blog/post/detail';
import { posts } from '~/components/shared/blog/posts';
import { notFound } from 'next/navigation';
import React from 'react';

export const dynamic = 'error';

export const dynamicParams = false;

export const experimental_ppr = true;

export async function generateStaticParams() {
    return posts.map(post => ({ postId: post.id }));
}

export async function generateMetadata({ params }: { params: { postId: string } }): Promise<Metadata> {
    const post = posts.find(post => post.id === params.postId);

    if (!post) {
        return {};
    }

    return {
        title: post.title,
        description: post.description,
    };
}

export default function PostPage({ params }: { params: { postId: string } }) {
    const post = posts.find(post => post.id === params.postId);

    if (!post) {
        notFound();
    }

    return (
        <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
            <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
                <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
                    <div className="md:w-1/2 lg:w-[32%]">
                        <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-3.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
                            <BlogSearch />
                        </div>

                        <BlogCategories />

                        <RelatedPost />
                    </div>

                    <div className="lg:w-2/3">
                        <PostDetail {...post} />
                    </div>
                </div>
            </div>
        </section>
    );
}
