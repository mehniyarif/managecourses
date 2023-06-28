"use client"

import {fetchUsers, searchUsers} from "@/services/api";
import {Table} from "@/components/table";
import {useEffect, useState} from "react";

export default function StudentsPage() {

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
        fetchUsers().then((response)=>{
            setUsers(response.data.users)
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

            </div>
        </main>
    );
}
