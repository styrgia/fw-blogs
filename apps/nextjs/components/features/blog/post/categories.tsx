import React from 'react';
import Link from 'next/link';

export function BlogCategories() {
    return (
        <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
            <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">Categories</h4>

            <ul>
                <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <Link href="#">Blog</Link>
                </li>
                <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <Link href="#">Events</Link>
                </li>
                <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <Link href="#">Grids</Link>
                </li>
                <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <Link href="#">News</Link>
                </li>
                <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <Link href="#">Rounded</Link>
                </li>
            </ul>
        </div>
    );
}
