"use client"

import {fetchUsers, searchUsers} from "@/services/api";
import {Table} from "@/components/table";
import {useEffect, useState} from "react";

export default function StudentsPage() {

    const [limitValue, setLimit] = useState(5);
    const [totalValue, setTotal] = useState(0);
    const [searchValue, setSearchValue] = useState('');
    const [users, setUsers] = useState([]);
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
        {
            name:"action",
            type:"actions",
            title:""
        },
    ]

    useEffect(() => {
        let options = {limit: limitValue}
        fetchUsers(options).then((response)=>{
            setUsers(response.data.users)
            setTotal(response.data.total)
        })
    }, []);

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
        if(!event.target.value){
            fetchUsers().then((response)=>{
                setUsers(response.data.users)
            })
        }
    };

    const handleSearchSubmit = () => {
        if(!searchValue) return
        let options = {q: searchValue}
        searchUsers(options).then((response)=>{
            setUsers(response.data?.users || [])
        })
    };

    const handleKeyDown = (event) => {
        if(!searchValue) return
        if (event.key === 'Enter') {
            let options = {q: searchValue}
            searchUsers(options).then((response)=>{
                setUsers(response.data?.users || [])
            })
        }
    };

    return (
        <main className="flex bg-[#F8F8F8] h-full flex-col items-center justify-between px-[30px] pt-[15px] mb-20">
            <div className="self-start flex flex-col justify-start gap-2 relative w-full items-center">
                <div className="flex justify-between mb-0 gap-6 relative w-full items-center">
                    <div className="whitespace-nowrap text-xl font-['Montserrat'] font-bold text-black mr-[499px] relative">
                        Students List
                    </div>
                    <div className="h-10 w-full flex flex-col font-['Montserrat'] w-1/5 relative ml-auto">
                        <input value={searchValue} onChange={handleSearchChange} onKeyDown={handleKeyDown} className="h-full pr-10 focus:text-gray-500 rounded-lg focus:border-gray-100 focus:peer-gray-200 focus:outline-gray-200 border border-[#e5e5e5] pl-[15px] text-[#c4c4c4] text-[12px] bg-white" placeholder="Search..." type="search"/>
                        <img
                            src="https://file.rendit.io/n/3VbMVtvX04a7owYFsfuu.svg"
                            onClick={handleSearchSubmit}
                            className="min-h-0 min-w-0 absolute top-3.5 right-4 w-3 shrink-0 cursor-pointer"
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

                <div className="flex justify-end w-full mr-8 gap-1 mt-[33px] relative items-center">
                    <div className="text-sm font-['Mulish'] tracking-[0.30000001192092896] leading-[20px] text-[#9fa2b4] mr-1 relative h-[75%]">
                        Rows per page:
                    </div>
                    <div className="text-right text-sm font-['Mulish'] tracking-[0.30000001192092896] leading-[20px] text-[#4a4f6c] relative w-[2.7%] h-[75%]">
                        6
                    </div>
                    <img
                        src="https://file.rendit.io/n/fqm36HTfWm0jXw9Hpt8a.svg"
                        className="min-h-0 min-w-0 mr-12 relative w-3 shrink-0"
                    />
                    <div className="text-right text-sm font-['Mulish'] tracking-[0.30000001192092896] leading-[20px] text-[#9fa2b4] mr-5 relative h-[75%]">
                        1-5 of {totalValue}
                    </div>
                    <img
                        src="https://file.rendit.io/n/JeemT0rIY33CVILgr1De.svg"
                        className="min-h-0 min-w-0 mr-2 relative w-6 shrink-0"
                    />
                    <img
                        src="https://file.rendit.io/n/jJkGrhSkyUiHphduJWhM.svg"
                        className="min-h-0 min-w-0 relative w-6 shrink-0"
                    />
                </div>

            </div>
        </main>
    );
}
