"use client"

import { usePathname, useRouter } from 'next/navigation'
import Link from "next/link";
import Image from "next/image"

export const Navbar = () => {
    return (
        <nav className="bg-white flex fixed z-10 justify-between w-full h-[60px] w-[calc(100%-270px)] right-0 top-0 items-center pl-8 pr-12">
            <img
                src="https://file.rendit.io/n/98li1Ek27heYzXST0FbT.svg"
                className="min-h-0 min-w-0 relative w-4 shrink-0"
            />
            <img
                src="https://file.rendit.io/n/nUHUpvjMJwvw2XgGs79w.svg"
                className="min-h-0 min-w-0 relative w-4 shrink-0"
            />
        </nav>


    );
}
