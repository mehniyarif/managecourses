"use client"

import { usePathname, useRouter } from 'next/navigation'
import Link from "next/link";
import Image from "next/image"

export const Sidebar = () => {
    const activePath = usePathname();
    const router = useRouter();
    const menuItems = [
        {
            path: "/",
            header: "Home",
            width: 19,
            height: 17,
            svgSrc: "https://file.rendit.io/n/oaG27LI0LSiIE8vgCC4n.svg"
        },
        {
            path: "/course",
            header: "Course",
            width: 12,
            height: 15,
            svgSrc: "https://file.rendit.io/n/cZ8eMJWiJVR3FmPTN4RH.svg"
        },
        {
            path: "/students",
            header: "Students",
            width: 20,
            height: 16,
            svgSrc: "https://file.rendit.io/n/B256z64mgLaJq410pDzJ.svg"
        },
        {
            path: "/payment",
            header: "Payment",
            width: 15,
            height: 17,
            svgSrc: "https://file.rendit.io/n/jibcjULLkkP64PwkLXF7.svg"
        },
        {
            path: "/report",
            header: "Report",
            width: 13,
            height: 17,
            svgSrc: "https://file.rendit.io/n/IFajcMR4OQTuKcQvJkFL.svg"
        },
        {
            path: "/settings",
            header: "Settings",
            width: 15,
            height: 17,
            svgSrc: "https://file.rendit.io/n/U2IZz7hPNggb4gQACRUZ.svg"
        },
    ]
    return (
        <aside className="overflow-hidden bg-[#fcfcfc] flex flex-row justify-start fixed z-10 min-w-[270px] h-full items-center">
            <div className="bg-[#f2eae1] flex flex-col justify-start gap-8 relative w-full h-full text-center items-center py-4">
                <div className="flex justify-center mb-6 relative justify-center">
                    <span className="w-1 h-full bg-amber-300">&nbsp;</span>
                    <div className="whitespace-nowrap text-[20px] font-['Montserrat'] font-bold text-black ml-2 relative">
                        MANAGE COURSES
                    </div>
                </div>
                <div className="min-h-[150px] h-[150px] min-w-0 self-center mb-12 relative">
                    <img
                        src="https://file.rendit.io/n/QIZVhQinXB0vU9z2Trwt.svg"
                        className="min-h-0 min-w-0"
                    />
                </div>
                <div className="w-full gap-8 flex justify-center flex-col items-center">
                    {menuItems.map((menu,key) => (
                        <Link href={menu.path} key={key} className={`${activePath === menu.path ? 'bg-[#feaf00]' : ''} cursor-pointer flex justify-center gap-4 relative h-10 items-center w-[193px] py-3 rounded`}>

                            <Image src={menu.svgSrc} alt="no image alt" height={menu.height} width={menu.height} className="min-h-0 min-w-0 relative w-5 h-5 shrink-0"></Image>
                            <div className="text-sm font-['Montserrat'] font-medium text-black relative">
                                {menu.header}
                            </div>
                        </Link>
                    ))}


                </div>
                <div className="self-center flex mt-auto mb-[33px] flex-row justify-start gap-6 relative w-24 items-center">
                    <button onClick={() => router.push('/login')} className="cursor-pointer text-sm font-['Montserrat'] font-medium text-black mb-px relative">
                        Logout
                    </button>
                    <img
                        src="https://file.rendit.io/n/KMRiiY7ti82T2r1X7BbA.svg"
                        className="min-h-0 min-w-0 relative w-4 shrink-0"
                    />
                </div>
            </div>
        </aside>

    );
}
