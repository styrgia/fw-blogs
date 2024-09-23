import menuData from '~/components/shared/headers/header/menuData';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export function HeaderNav() {
    const [dropdownToggler, setDropdownToggler] = useState(false);

    const pathUrl = usePathname();

    return (
        <nav>
            <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10">
                {menuData.map((menuItem, key) => (
                    <li key={key} className={menuItem.submenu && 'group relative'}>
                        {menuItem.submenu ? (
                            <>
                                <button
                                    onClick={() => setDropdownToggler(!dropdownToggler)}
                                    className="flex cursor-pointer items-center justify-between gap-3 hover:text-primary"
                                >
                                    {menuItem.title}
                                    <span>
                                        <svg
                                            className="h-3 w-3 cursor-pointer fill-waterloo group-hover:fill-primary"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                        >
                                            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                                        </svg>
                                    </span>
                                </button>

                                <ul className={`dropdown ${dropdownToggler ? 'flex' : ''}`}>
                                    {menuItem.submenu.map((item, key) => (
                                        <li key={key} className="hover:text-primary">
                                            <Link href={item.path || '#'}>{item.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        ) : (
                            <Link
                                href={`${menuItem.path}`}
                                className={
                                    pathUrl === menuItem.path ? 'text-primary hover:text-primary' : 'hover:text-primary'
                                }
                            >
                                {menuItem.title}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
}
