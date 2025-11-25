"use client";

import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [productMenu, setProductMenu] = useState(false);
    const [companyMenu, setCompanyMenu] = useState(false);

    const productLinks = [
        { title: "Marketing Tools", link: "/products/marketing-tools" },
        { title: "Automatization", link: "/products/automatization" },
        { title: "Payouts", link: "/products/payouts" },
        { title: "Fraud Prevention", link: "/products/fraud-prevention" },
        { title: "Lead Generation", link: "/products/lead-generation" },
        { title: "Support", link: "/products/support" },
    ];

    const companyLinks = [
        { title: "About Us", link: "/company/about" },
        { title: "Contact", link: "/company/contact" },
        { title: "Careers", link: "/company/careers" },
    ];

    return (
        <div className="w-full shadow-sm relative z-50 bg-white">
            <div className="max-w-7xl mx-auto py-5 px-4">
                <nav className="flex justify-between items-center">
                    <Link href="/">
                        <Image src="/logo.svg" alt="Logo" width={120} height={40} />
                    </Link>

                    <div className="hidden md:block">
                        <ul className="flex space-x-8 text-gray-900 font-medium">


                            <li className="relative group cursor-pointer">
                                <div className="flex items-center gap-1 hover:text-blue-600">
                                    Product <ChevronDown size={16} />
                                </div>

                                <div
                                    className="
                                    absolute left-0 top-7 
                                    bg-white shadow-xl rounded-xl 
                                    p-4 w-56 
                                    opacity-0 invisible 
                                    group-hover:opacity-100 group-hover:visible 
                                    transition-all duration-300 
                                    z-50
                                  "
                                >
                                    <ul className="space-y-3">
                                        {productLinks.map((item, index) => (
                                            <li key={index}>
                                                <Link href={item.link} className="hover:text-blue-600">
                                                    {item.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>

                            <li>
                                <Link href="/helpcenter" className="hover:text-blue-600">
                                    Help Center
                                </Link>
                            </li>

                            <li>
                                <Link href="/industries" className="hover:text-blue-600">
                                    Industries
                                </Link>
                            </li>


                            <li className="relative group cursor-pointer">
                                <div className="flex items-center gap-1 hover:text-blue-600">
                                    Company <ChevronDown size={16} />
                                </div>

                                <div
                                    className="
                    absolute left-0 top-7 
                    bg-white shadow-xl rounded-xl 
                    p-4 w-56 
                    opacity-0 invisible 
                    group-hover:opacity-100 group-hover:visible 
                    transition-all duration-300 
                    z-50
                  "
                                >
                                    <ul className="space-y-3">
                                        {companyLinks.map((item, index) => (
                                            <li key={index}>
                                                <Link href={item.link} className="hover:text-blue-600">
                                                    {item.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>

                            <li className="hover:text-blue-600 cursor-pointer">Blog</li>
                        </ul>
                    </div>


                    <div className="hidden md:flex items-center space-x-3">
                        <button className="px-3 text-blue-800 font-medium">Login</button>
                        <button className="px-4 py-2 rounded-xl bg-blue-800 text-white font-semibold shadow-md hover:bg-blue-900">
                            Signup
                        </button>
                    </div>


                    <button className="md:hidden" onClick={() => setOpen(!open)}>
                        {open ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </nav>


                {open && (
                    <div className="md:hidden mt-6 space-y-6">
                        <ul className="space-y-4 text-gray-900 font-medium">


                            <li>
                                <button
                                    className="flex justify-between w-full items-center"
                                    onClick={() => setProductMenu(!productMenu)}
                                >
                                    Product <ChevronDown size={18} />
                                </button>

                                {productMenu && (
                                    <ul className="pl-4 mt-3 space-y-3 border-l border-gray-300">
                                        {productLinks.map((item, i) => (
                                            <li key={i}>
                                                <Link href={item.link}>{item.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>


                            <li>
                                <button
                                    className="flex justify-between w-full items-center"
                                    onClick={() => setCompanyMenu(!companyMenu)}
                                >
                                    Company <ChevronDown size={18} />
                                </button>

                                {companyMenu && (
                                    <ul className="pl-4 mt-3 space-y-3 border-l border-gray-300">
                                        {companyLinks.map((item, i) => (
                                            <li key={i}>
                                                <Link href={item.link}>{item.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>

                            <li><Link href="/helpcenter">Help Center</Link></li>
                            <li><Link href="/industries">Industries</Link></li>
                            <li>Blog</li>
                        </ul>


                        <div className="pt-4 space-y-3">
                            <button className="block w-full border px-3 py-2 rounded-xl bg-blue-800 text-white font-bold">
                                Login
                            </button>
                            <button className="block w-full border px-3 py-2 rounded-xl bg-blue-800 text-white font-bold">
                                Signup
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
