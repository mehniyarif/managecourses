import MainLayout from "@/layouts/main";

export default function Home() {
  return (
      <MainLayout>
            <div className="flex bg-[#FDFDFD] h-full w-full flex-col items-center justify-between py-24 px-[30px]">
                <div className="flex flex-row justify-between relative w-full items-center gap-[30px]">
                    <div className="bg-[#f0f9ff] flex flex-row justify-between relative w-1/4 h-40 items-start p-5 rounded-lg">
                        <div className="flex flex-col justify-start gap-4 relative w-12 shrink-0 items-center">
                            <img
                                src="https://file.rendit.io/n/bqd1TZnwJOE9SGuaw8CJ.svg"
                                className="min-h-0 min-w-0 self-start relative w-12"
                            />
                            <div className="text-sm font-['Montserrat'] font-medium text-[#6c6b6b] relative">
                                Students
                            </div>
                        </div>
                        <div className="text-3xl font-['Montserrat'] font-bold uppercase text-black self-end relative">
                            243
                        </div>
                    </div>
                    <div className="bg-[#fef6fb] flex flex-row justify-between relative w-1/4 h-40 items-start p-5 rounded-lg">
                        <div className="flex flex-col justify-start gap-4 relative w-12 shrink-0 items-center">
                            <img
                                src="https://file.rendit.io/n/ro8z0hv0bM4nmvrLc5QF.svg"
                                className="min-h-0 min-w-0 self-start relative w-6"
                            />
                            <div className="text-sm font-['Montserrat'] font-medium text-[#6c6b6b] relative">
                                Course
                            </div>
                        </div>
                        <div className="text-right text-3xl font-['Montserrat'] font-bold uppercase text-black self-end relative">
                            13
                        </div>
                    </div>
                    <div className="bg-[#fefbec] flex flex-col justify-start gap-2 relative w-1/4 h-40 items-start pt-4 pb-5 px-5 rounded-lg">
                        <img
                            src="https://file.rendit.io/n/PtWAMcqYkwbmjc94BQFY.svg"
                            className="min-h-0 min-w-0 mb-1 relative w-8"
                        />
                        <div className="text-sm font-['Montserrat'] font-medium uppercase text-[#6c6b6b] justify-start relative">
                            P
                            <div className="text-sm font-['Montserrat'] font-medium text-[#6c6b6b] contents">
                                ayments
                            </div>
                        </div>
                        <div className="text-right whitespace-nowrap text-lg font-['Montserrat'] font-bold uppercase text-black self-end justify-start relative">
                            {" "}
                            <div className="text-3xl font-['Montserrat'] font-bold uppercase text-black contents">
                                556,000
                            </div>
                            <div className="text-lg font-['Montserrat'] font-bold uppercase text-black contents">
                                ₺
                            </div>
                        </div>
                    </div>
                    <div className="bg-[linear-gradient(110deg,_#feaf00_13%,#f8d442_110%)] bg-cover bg-50%_50% bg-blend-normal flex flex-row justify-between relative w-1/4 h-40 items-start p-5 rounded-lg">
                        <div className="flex flex-col justify-start gap-5 relative w-10 shrink-0 items-center">
                            <img
                                src="https://file.rendit.io/n/yqwXG2LWYJKBbibPqX0R.svg"
                                className="min-h-0 min-w-0 relative w-8"
                            />
                            <div className="text-sm font-['Montserrat'] font-medium text-white relative">
                                Users
                            </div>
                        </div>
                        <div className="text-right text-3xl font-['Montserrat'] font-bold uppercase text-black self-end relative">
                            3
                        </div>
                    </div>
                </div>

            </div>
      </MainLayout>
  )
}
