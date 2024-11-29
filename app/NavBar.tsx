import Link from 'next/link';
import React from 'react';
import { AiFillBug } from 'react-icons/ai';

const NavBar = () => {
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
                        key={href} href={href} className='text-zinc-500 hover:text-zinc-200 transition-colors'>
                        {label}
                    </Link>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;