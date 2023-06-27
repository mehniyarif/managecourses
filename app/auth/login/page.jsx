
export default function LoginPage() {
    return (
        <div className="SignIn w-[1440px] h-[900px] relative bg-gradient-to-r from-yellow-500 to-amber-300">
            <div className="Form w-[475px] h-[550px] left-[483px] top-[175px] absolute">
                <div className="Card w-[475px] h-[550px] left-0 top-0 absolute bg-white rounded-2xl shadow" />
                <div className="Logo w-[334.50px] h-[39px] left-[66px] top-[44px] absolute">
                    <div className="ManageCourses left-[12.50px] top-0 absolute text-black text-[32px] font-bold">MANAGE COURSES</div>
                </div>
                <div className="SignIn left-[194px] top-[126px] absolute text-black text-[22px] font-semibold uppercase">Sign In</div>
                <div className="EnterYourCredentialsToAccessYourAccount left-[79px] top-[162px] absolute text-neutral-500 text-[14px] font-normal">Enter your credentials to access your account</div>
                <div className="Input w-[415px] h-[71px] left-[30px] top-[229px] absolute">
                    <div className="Rectangle1 w-[415px] h-11 left-0 top-[27px] absolute bg-white rounded border border border border border-neutral-200" />
                    <div className="EnterYourEmail left-[15px] top-[42px] absolute text-stone-300 text-[12px] font-normal">Enter your email</div>
                    <div className="Email left-0 top-0 absolute text-neutral-500 text-[14px] font-medium">Email</div>
                </div>
                <div className="Input w-[415px] h-[71px] left-[30px] top-[320px] absolute">
                    <div className="Rectangle1 w-[415px] h-11 left-0 top-[27px] absolute bg-white rounded border border border border border-neutral-200" />
                    <div className="EnterYourPassword left-[15px] top-[42px] absolute text-stone-300 text-[12px] font-normal">Enter your password</div>
                    <div className="Password left-0 top-0 absolute text-neutral-500 text-[14px] font-medium">Password</div>
                </div>
                <div className="Btn w-[415px] h-11 left-[30px] top-[421px] absolute">
                    <div className="Rectangle1 w-[415px] h-11 left-0 top-0 absolute bg-yellow-500 rounded" />
                    <div className="SignIn left-[180px] top-[14px] absolute text-white text-[14px] font-medium">SIGN IN</div>
                </div>
            </div>
            <div className="ForgotYourPasswordResetPassword left-[582px] top-[667px] absolute"><span style="text-neutral-500 text-[14px] font-normal">Forgot your password?</span><span style="text-black text-[14px] font-semibold"> </span><span style="text-yellow-500 text-[14px] font-medium underline">Reset Password</span></div>
        </div>
    );
}
