"use client"

import { Menu, X } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'

const Navbar = () => {
    const [open, setopen] = useState(false);

    return (
        <div className='max-w-6xl mx-auto py-5 mt-4 px-4'>
            <nav className='flex justify-between items-center'>
                <div>
                    <Link href="/">
                        <Image src="/logo.svg" alt="Logo" width={120} height={40} />
                    </Link>
                </div>

                <div className='hidden md:block'>
                    <ul className='flex space-x-7  text-gray-900'>
                        <li className='cursor-pointer'>Product</li>
                        <Link href="/helpcenter"><li className='cursor-pointer'>Help Center</li></Link>
                        <Link href="/industries"><li className='cursor-pointer'>Industries</li></Link>
                        <li className='cursor-pointer'>Company</li>
                        <li className='cursor-pointer'>Blog</li>
                    </ul>
                </div>

                <div className='hidden md:flex items-center space-x-3'>
                    <button className='px-2   text-blue-800'>Login</button>
                    <button className='border px-2 py-1 rounded-xl bg-blue-800 text-white'>Signup</button>
                </div >

                <button className='md:hidden ' onClick={() => setopen(!open)}>
                    {open ? <X size={26} /> : <Menu size={26} />}
                </button>
            </nav>
            {open && (
                <div className='md:hidden mt-8 space-y-4'>
                    <ul className='space-y-3 text-gray-900'>
                        <li className='cursor-pointer'>Product</li>
                        <li className='cursor-pointer'>Help Center</li>
                        <li className='cursor-pointer'>Industries</li>
                        <li className='cursor-pointer'>Company</li>
                        <li className='cursor-pointer'>Blog</li>
                    </ul>

                    <div className="pt-4 space-y-3">
                        <button className="block w-full border px-3 py-2 rounded-xl bg-blue-800 text-white font-bold">Login</button>
                        <button className="block w-full border px-3 py-2 rounded-xl bg-blue-800 text-white font-bold">Signup</button>
                    </div>
                </div>

            )}

        </div>
    )
}

export default Navbar