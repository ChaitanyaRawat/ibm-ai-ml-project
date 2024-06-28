"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'

const navLinks = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "About",
        href: "/about",
    },
    
    {
        name: "Contact",
        href: "/contact",
    },
];


const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true)
    const pathname = usePathname()
    return (
        <>


            <nav className="bg-gray-900 py-4">
                <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                    <Link href="/" className="flex items-center gap-2">

                        {/* <Image src={"website logo url"} width={24} height={24} alt={"wensite name"} /> */}

                        <span className="self-center text-xl font-semibold whitespace-nowrap text-white">Website name</span>
                    </Link>
                    <button>
                        <div onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                            <Image src={"/hamburger.svg"} width={20} height={20} alt={"open menu"} />
                        </div>
                    </button>

                    <div className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2 ${isOpen ? '' : 'hidden md:block'}`}>
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                           

                            {navLinks.map((link) => {
                                const isActive = link.href === pathname
                                return (
                                <li className="font-bold">
                                    <Link href={link.href} className={`${isActive ? 'text-blue-500' : 'text-white'} block py-2 pl-3 pr-4 rounded md:p-0`}>{link.name}</Link>
                                </li>
                            )})}
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar