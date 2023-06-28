import {fetchUsers} from "@/services/api";
import {Table} from "@/components/table";

export default async function StudentsPage() {

    let users = []
    const columns = [
        {
            name:"image",
            type:"image",
            title:""
        },
        {
            name:"firstName",
            type:"merge",
            mergeColumnNames: ["firstName", "lastName"],
            title:"Name"
        },
        {
            name:"email",
            title:"Email"
        },
        {
            name:"phone",
            title:"Phone"
        },
        {
            name:"domain",
            title:"Website"
        },
        {
            name:"company.name",
            title:"Company Name"
        },
    ]
    await fetchUsers().then((response)=>{
        users = response.data.users
    })
    return (
        <main className="flex bg-[#F8F8F8] h-full flex-col items-center justify-between px-[30px] pt-[15px]">
            <div className="self-start flex flex-col justify-start gap-2 relative w-full items-center">
                <div className="flex justify-between mb-0 gap-6 relative w-full items-center">
                    <div className="whitespace-nowrap text-xl font-['Montserrat'] font-bold text-black mr-[499px] relative">
                        Students List
                    </div>
                    <div className="border-solid border-[#e5e5e5] bg-white flex flex-row justify-between relative ml-auto w-1/5 h-10 items-center px-3 border rounded-lg">
                        <div className="text-sm font-['Montserrat'] text-[#c4c4c4] relative">
                            Search...
                        </div>
                        <img
                            src="https://file.rendit.io/n/3VbMVtvX04a7owYFsfuu.svg"
                            className="min-h-0 min-w-0 relative w-3 shrink-0"
                        />
                    </div>
                    <button className="flex flex-col justify-start relative w-1/6 items-center">
                        <div className="bg-[#feaf00] flex flex-col justify-center relative w-full h-10 shrink-0 items-center rounded">
                            <div className="whitespace-nowrap text-sm font-['Montserrat'] font-medium text-white relative">
                                ADD NEW STUDENT
                            </div>
                        </div>
                    </button>
                </div>
                <div className="border-solid border-[#e5e5e5] mb-3 relative w-full h-px shrink-0 bordert borderb-0 borderx-0" />

                <Table data={users} columns={columns}></Table>

                <div className="self-start flex flex-row justify-start gap-20 relative items-center mb-3 ml-[139px]">
                    <div className="text-xs font-['Montserrat'] font-semibold text-[#acacac] mr-10 relative">
                        Name
                    </div>
                    <div className="text-xs font-['Montserrat'] font-semibold text-[#acacac] mr-16 relative">
                        Email
                    </div>
                    <div className="text-xs font-['Montserrat'] font-semibold text-[#acacac] relative">
                        Phone
                    </div>
                    <div className="text-xs font-['Montserrat'] font-semibold text-[#acacac] mr-20 relative">
                        Website
                    </div>
                    <div className="whitespace-nowrap text-xs font-['Montserrat'] font-semibold text-[#acacac] relative">
                        Company Name
                    </div>
                </div>
                <div className="bg-white flex flex-row justify-start gap-8 relative w-full h-20 shrink-0 items-center px-3 rounded-lg">
                    <img
                        src="https://file.rendit.io/n/LLQMRIIstKp0aBE3jSZd.svg"
                        className="min-h-0 min-w-0 relative w-16 shrink-0"
                    />
                    <div className="whitespace-nowrap text-sm font-['Montserrat'] text-black mr-16 relative">
                        John Doe
                    </div>
                    <div className="text-sm font-['Montserrat'] text-black mr-10 relative">
                        john@gmail.com
                    </div>
                    <div className="text-sm font-['Montserrat'] text-black mr-2 relative">
                        7305477760
                    </div>
                    <div className="text-sm font-['Montserrat'] text-black mr-16 relative">
                        karthi.lorem.com
                    </div>
                    <div className="text-sm font-['Montserrat'] text-black mr-24 relative">
                        Deckow-Crist
                    </div>
                    <img
                        src="https://file.rendit.io/n/pdiByupnLc7WmIratEPK.svg"
                        className="min-h-0 min-w-0 mr-px relative w-5 shrink-0"
                    />
                    <img
                        src="https://file.rendit.io/n/N6w3TkMCGWEXWbskdNqb.svg"
                        className="min-h-0 min-w-0 relative w-4 shrink-0"
                    />
                </div>
                <div className="bg-white flex flex-row justify-start gap-8 relative w-full h-20 shrink-0 items-center px-3 rounded-lg">
                    <img
                        src="https://file.rendit.io/n/lahLEwLrwlLIVfLSyrXr.svg"
                        className="min-h-0 min-w-0 relative w-16 shrink-0"
                    />
                    <div className="whitespace-nowrap text-sm font-['Montserrat'] text-black mr-16 relative">
                        John Doe
                    </div>
                    <div className="text-sm font-['Montserrat'] text-black mr-10 relative">
                        john@gmail.com
                    </div>
                    <div className="text-sm font-['Montserrat'] text-black mr-2 relative">
                        7305477760
                    </div>
                    <div className="text-sm font-['Montserrat'] text-black mr-16 relative">
                        karthi.lorem.com
                    </div>
                    <div className="text-sm font-['Montserrat'] text-black mr-24 relative">
                        Deckow-Crist
                    </div>
                    <img
                        src="https://file.rendit.io/n/MOe4KgIy25InD2YdwIKQ.svg"
                        className="min-h-0 min-w-0 mr-px relative w-5 shrink-0"
                    />
                    <img
                        src="https://file.rendit.io/n/hk9C4SissMA1tgPjNwVt.svg"
                        className="min-h-0 min-w-0 relative w-4 shrink-0"
                    />
                </div>
                <div className="bg-white flex flex-row justify-start gap-8 relative w-full h-20 shrink-0 items-center px-3 rounded-lg">
                    <img
                        src="https://file.rendit.io/n/0KfvoQXPXkPIKAh4b69I.svg"
                        className="min-h-0 min-w-0 relative w-16 shrink-0"
                    />
                    <div className="whitespace-nowrap text-sm font-['Montserrat'] text-black mr-16 relative">
                        John Doe
                    </div>
                    <div className="text-sm font-['Montserrat'] text-black mr-10 relative">
                        john@gmail.com
                    </div>
                    <div className="text-sm font-['Montserrat'] text-black mr-2 relative">
                        7305477760
                    </div>
                    <div className="text-sm font-['Montserrat'] text-black mr-16 relative">
                        karthi.lorem.com
                    </div>
                    <div className="text-sm font-['Montserrat'] text-black mr-24 relative">
                        Deckow-Crist
                    </div>
                    <img
                        src="https://file.rendit.io/n/nnpZMq86f7Cqr9gBNxnV.svg"
                        className="min-h-0 min-w-0 mr-px relative w-5 shrink-0"
                    />
                    <img
                        src="https://file.rendit.io/n/wdENxundsCP57DbhRqVP.svg"
                        className="min-h-0 min-w-0 relative w-4 shrink-0"
                    />
                </div>
                <div className="bg-white flex flex-row justify-start gap-8 relative w-full h-20 shrink-0 items-center px-3 rounded-lg">
                    <img
                        src="https://file.rendit.io/n/jUWeXYFpeD2yBlXyFxfH.svg"
                        className="min-h-0 min-w-0 relative w-16 shrink-0"
                    />
                    <div className="whitespace-nowrap text-sm font-['Montserrat'] text-black mr-16 relative">
                        John Doe
                    </div>
                    <div className="text-sm font-['Montserrat'] text-black mr-10 relative">
                        john@gmail.com
                    </div>
                    <div className="text-sm font-['Montserrat'] text-black mr-2 relative">
                        7305477760
                    </div>
                    <div className="text-sm font-['Montserrat'] text-black mr-16 relative">
                        karthi.lorem.com
                    </div>
                    <div className="text-sm font-['Montserrat'] text-black mr-24 relative">
                        Deckow-Crist
                    </div>
                    <img
                        src="https://file.rendit.io/n/nospsENLH1Qbszxysj2T.svg"
                        className="min-h-0 min-w-0 mr-px relative w-5 shrink-0"
                    />
                    <img
                        src="https://file.rendit.io/n/hpYLopmynFFfIjnWlXnr.svg"
                        className="min-h-0 min-w-0 relative w-4 shrink-0"
                    />
                </div>
                <div className="bg-white flex flex-row justify-start gap-8 relative w-full h-20 shrink-0 items-center px-3 rounded-lg">
                    <img
                        src="https://file.rendit.io/n/Ip1rjI2gyFP7sWEZxujD.svg"
                        className="min-h-0 min-w-0 relative w-16 shrink-0"
                    />
                    <div className="whitespace-nowrap text-sm font-['Montserrat'] text-black mr-16 relative">
                        John Doe
                    </div>
                    <div className="text-sm font-['Montserrat'] text-black mr-10 relative">
                        john@gmail.com
                    </div>
                    <div className="text-sm font-['Montserrat'] text-black mr-2 relative">
                        7305477760
                    </div>
                    <div className="text-sm font-['Montserrat'] text-black mr-16 relative">
                        karthi.lorem.com
                    </div>
                    <div className="text-sm font-['Montserrat'] text-black mr-24 relative">
                        Deckow-Crist
                    </div>
                    <img
                        src="https://file.rendit.io/n/1pZ8ipeRVbD36wTiUNYn.svg"
                        className="min-h-0 min-w-0 mr-px relative w-5 shrink-0"
                    />
                    <img
                        src="https://file.rendit.io/n/PHKG10B4czTXFooLdW0p.svg"
                        className="min-h-0 min-w-0 relative w-4 shrink-0"
                    />
                </div>
                <div className="bg-white flex flex-row justify-start mb-5 gap-8 relative w-full h-20 shrink-0 items-center px-3 rounded-lg">
                    <img
                        src="https://file.rendit.io/n/BfWAD5vLfQUAIWIal5K1.svg"
                        className="min-h-0 min-w-0 relative w-16 shrink-0"
                    />
                    <div className="whitespace-nowrap text-sm font-['Montserrat'] text-black mr-16 relative">
                        John Doe
                    </div>
                    <div className="text-sm font-['Montserrat'] text-black mr-10 relative">
                        john@gmail.com
                    </div>
                    <div className="text-sm font-['Montserrat'] text-black mr-2 relative">
                        7305477760
                    </div>
                    <div className="text-sm font-['Montserrat'] text-black mr-16 relative">
                        karthi.lorem.com
                    </div>
                    <div className="text-sm font-['Montserrat'] text-black mr-24 relative">
                        Deckow-Crist
                    </div>
                    <img
                        src="https://file.rendit.io/n/stmXWhIklamma6RfYg8R.svg"
                        className="min-h-0 min-w-0 mr-px relative w-5 shrink-0"
                    />
                    <img
                        src="https://file.rendit.io/n/2ooZ7pHHTgGBFQAFBaMe.svg"
                        className="min-h-0 min-w-0 relative w-4 shrink-0"
                    />
                </div>
                <div className="self-end flex flex-row justify-start mr-8 gap-1 relative items-center">
                    <div className="text-sm font-['Mulish'] tracking-[0.30000001192092896] leading-[20px] text-[#9fa2b4] mr-1 relative w-1/4 h-[75%]">
                        Rows per page:
                    </div>
                    <div className="text-right text-sm font-['Mulish'] tracking-[0.30000001192092896] leading-[20px] text-[#4a4f6c] relative w-[2.7%] h-[75%]">
                        6
                    </div>
                    <img
                        src="https://file.rendit.io/n/GifouAQIHSf9ajHX8GPF.svg"
                        className="min-h-0 min-w-0 mr-12 relative w-3 shrink-0"
                    />
                    <div className="text-right text-sm font-['Mulish'] tracking-[0.30000001192092896] leading-[20px] text-[#9fa2b4] mr-5 relative w-1/4 h-[75%]">
                        1-5 of 1240
                    </div>
                    <img
                        src="https://file.rendit.io/n/3Xw6cXNiLo9buuh9Mp56.svg"
                        className="min-h-0 min-w-0 mr-2 relative w-6 shrink-0"
                    />
                    <img
                        src="https://file.rendit.io/n/L8EAWMuMqdbhaiKI5yBT.svg"
                        className="min-h-0 min-w-0 relative w-6 shrink-0"
                    />
                </div>
            </div>
        </main>
    );
}
