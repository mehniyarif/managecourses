'use client'

import { useRouter } from 'next/navigation'

export default function LoginPage() {
    const router = useRouter()

    return (
        <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-r from-yellow-500 to-amber-300">
            <div className="w-[475px] px-[30px] h-[550px] bg-white rounded-2xl shadow flex flex-col items-center" >
                <div className="w-full h-[39px] mt-11 flex justify-center items-center">
                    <span className="w-2 h-full bg-amber-300">&nbsp;</span>
                    <div className="text-black text-[32px] font-bold pl-4 border-amber-300">MANAGE COURSES</div>
                </div>
                <div className="text-black text-[22px] mt-[43px] font-semibold uppercase">Sign In</div>
                <div className="text-neutral-500 mt-[6.56px] text-[14px] font-normal">Enter your credentials to access your account</div>
                <div className=" mt-[50px] w-full flex flex-col font-['Montserrat']">
                    <label className="text-[14px] bold text-[#6C6C6C]">Email</label>
                    <input className="h-[44px] mt-[10px] rounded-[4px] border border-[#E5E5E5] pl-[15px] text-[#CDCDCD] text-[12px] bg-white" placeholder="Enter your email" type="email"/>
                </div>
                <div className=" mt-[20px] w-full flex flex-col font-['Montserrat']">
                    <label className="text-[14px] bold text-[#6C6C6C]">Password</label>
                    <input className="h-[44px] mt-[10px] rounded-[4px] border border-[#E5E5E5] pl-[15px] text-[#CDCDCD] text-[12px] bg-white" placeholder="Enter your password" type="password"/>
                </div>
                <button onClick={() => router.push('/')} className="flex cursor-pointer flex-col justify-start mb-4 mt-5 relative w-[415px] items-center">
                    <div className="bg-[#feaf00] flex flex-col justify-center relative w-full h-10 shrink-0 items-center rounded">
                        <div className="whitespace-nowrap text-sm font-['Montserrat'] font-medium text-white relative">
                            SIGN IN
                        </div>
                    </div>
                </button>
                <div className="whitespace-nowrap text-sm font-['Montserrat'] text-[#6c6b6b] justify-start relative">
                    Forgot your password?
                    <div className="text-sm font-['Montserrat'] font-semibold text-black contents">
                        {" "}
                    </div>
                    <a className="text-sm cursor-pointer font-['Montserrat'] font-medium text-[#feaf00] contents">Reset Password</a>
                </div>
            </div>
        </div>
    );
}
