'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { AiFillBug } from 'react-icons/ai';
import classNames from 'classnames';



const NavBar = () => {
    const currentPath = usePathname();
    const links = [
        { href: '/dashboard', label: 'Dashboard' },
        { href: '/issues', label: 'Issues' },
    ];

    return (
        <nav className='flex space-x-4 border-b-2 mb-5 px-5 h-14 items-center'>
            <Link href="/">
                <AiFillBug className='text-rose-400' />
            </Link>
            <ul className='flex space-x-4'>
                {links.map(({ href, label }) => (
                    <Link
                        key={href} href={href} className={
                            classNames({
                                'text-zinc-200': href === currentPath,
                                'text-zinc-400': href !== currentPath,
                                'hover:text-zinc-50': true,
                                'transition-colors': true,
                            })
                        }>
                        {label}
                    </Link>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;