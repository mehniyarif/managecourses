"use client"

import { usePathname, useRouter } from 'next/navigation'
import Link from "next/link";

export const Sidebar = () => {
    const activePath = usePathname();
    const router = useRouter();
    const menuItems = [
        {
            path: "/",
            header: "Home",
            svgSrc: "https://file.rendit.io/n/oaG27LI0LSiIE8vgCC4n.svg"
        },
        {
            path: "/pages/course",
            header: "Course",
            svgSrc: "https://file.rendit.io/n/cZ8eMJWiJVR3FmPTN4RH.svg"
        },
        {
            path: "/pages/students",
            header: "Students",
            svgSrc: "https://file.rendit.io/n/B256z64mgLaJq410pDzJ.svg"
        },
        {
            path: "/pages/payment",
            header: "Payment",
            svgSrc: "https://file.rendit.io/n/jibcjULLkkP64PwkLXF7.svg"
        },
        {
            path: "/pages/report",
            header: "Report",
            svgSrc: "https://file.rendit.io/n/IFajcMR4OQTuKcQvJkFL.svg"
        },
        {
            path: "/pages/settings",
            header: "Settings",
            svgSrc: "https://file.rendit.io/n/U2IZz7hPNggb4gQACRUZ.svg"
        },
    ]
    return (
        <div className="overflow-hidden bg-[#fcfcfc] flex flex-row justify-start relative w-[270px] items-center">
            <div className="bg-[#f2eae1] flex flex-col justify-start gap-8 relative w-full h-full items-start pl-6 py-4">
                <div className="self-center flex justify-start mb-6 relative items-end">
                    <span className="w-1 h-full bg-amber-300">&nbsp;</span>
                    <div className="whitespace-nowrap text-xl font-['Montserrat'] font-bold text-black ml-3 relative">
                        MANAGE COURSES
                    </div>
                </div>
                <img
                    src="https://file.rendit.io/n/QIZVhQinXB0vU9z2Trwt.svg"
                    className="min-h-0 min-w-0 self-center mb-12 relative"
                />
                {menuItems.map((menu,key) => (
                    <Link href={menu.path} key={key} className={`${activePath === menu.path ? 'bg-[#feaf00]' : ''} cursor-pointer self-center flex flex-row justify-start gap-4 relative h-10 shrink-0 items-center pl-10 pr-20 py-3 rounded`}>
                        <img
                            src={menu.svgSrc}
                            className="min-h-0 min-w-0 relative w-5 h-5 shrink-0"
                        />
                        <div className="text-sm font-['Montserrat'] font-medium text-black relative">
                            {menu.header}
                        </div>
                    </Link>
                ))}


                <div className="self-center flex mt-auto mb-[33px] flex-row justify-start gap-6 relative w-24 items-center">
                    <button onClick={() => router.push('/auth/login')} className="cursor-pointer text-sm font-['Montserrat'] font-medium text-black mb-px relative">
                        Logout
                    </button>
                    <img
                        src="https://file.rendit.io/n/KMRiiY7ti82T2r1X7BbA.svg"
                        className="min-h-0 min-w-0 relative w-4 shrink-0"
                    />
                </div>
            </div>
        </div>

    );
}
