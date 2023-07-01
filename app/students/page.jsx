"use client"

import {deleteUser, fetchUsers, searchUsers} from "@/services/api";
import {Table} from "@/components/table";
import {useEffect, useState} from "react";
import useRequestService from "@/services/requestService";
import {usePathname, useRouter, useSearchParams} from 'next/navigation'
import MainLayout from "@/layouts/main";
import {StudentPopup} from "@/components/studentpopup";
import swal from 'sweetalert';

export default function StudentsPage() {
    let searchParams = useSearchParams();
    const activePath = usePathname();
    const router = useRouter();
    const requestService = new useRequestService();

    const limitValue = parseInt(searchParams.get("limit")) || 5;
    const skipValue = parseInt(searchParams.get("offset")) || 0;

    const [totalValue, setTotal] = useState(0);
    const [users, setUsers] = useState([]);
    const [searchValue, setSearchValue] = useState(searchParams.get("search") || '');
    const [isOpenPopup, setOpenPopup] = useState(false)


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
        let timeoutId;
        const handleSearch = () => {
            searchUsers({q: searchValue}).then((response)=>{
                setUsers(response.data?.users || [])
            })
            let options = {
                search: searchValue
            }
            let querySet = requestService.createQuerySet(options)
            router.push(activePath + querySet)
        };


        const delayedSearch = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(handleSearch, 250);
        };


        if(!searchValue){
            let options = {limit: limitValue, offset: skipValue}
            fetchUsers(options).then((response)=>{
                setUsers(response.data.users)
                setTotal(response.data.total)
            })
        }else{
            delayedSearch();
        }

        return () => {
            clearTimeout(timeoutId);
        };

    }, [searchValue]);


    const handleSearchChange = (event) => {
        setSearchValue(event.target.value)
    };


    const handleLimitChange = (event) => {
        let options = {
            limit: event.target.value || 5,
            offset: skipValue || 0,
        }

        fetchUsers(options).then((response)=>{
            setUsers(response.data.users)
            setTotal(response.data.total)
        })

        let querySet = requestService.createQuerySet(options)
        router.push(activePath + querySet)
    };

    const handleSearchSubmit = () => {
        window.location.reload()
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {

            let options = {
                search: searchValue,
            }
            let querySet = requestService.createQuerySet(options)
            router.push(activePath + querySet)
        }
    };

    const previousPage = () => {
        if (skipValue <= 0) return
        let newSkipValue = skipValue - limitValue
        if(newSkipValue < 0){
            newSkipValue = 0
        }

        let options = {
            offset: newSkipValue || 0,
            limit: limitValue || 5,
        }


        fetchUsers(options).then((response)=>{
            setUsers(response.data.users)
            setTotal(response.data.total)
        })

        let querySet = requestService.createQuerySet(options)
        router.push(activePath + querySet)
    };

    const nextPage = (event) => {
        if(skipValue + limitValue >= totalValue) return


        let options = {
            offset: skipValue + limitValue,
            limit: limitValue || 5,
        }

        fetchUsers(options).then((response)=>{
            setUsers(response.data.users)
            setTotal(response.data.total)
        })

        let querySet = requestService.createQuerySet(options)
        router.push(activePath + querySet)
    };

    const closePopup = () => {
        setOpenPopup(false);
    };

    const openPopup = () => {
        setOpenPopup(true);
    };

    const showDeleteConfirmation = (rowData) => {
        swal({
            title: `Are you sure you want to delete the student named \"${rowData.firstName} ${rowData.lastName}\"?`,
            text: "This action cannot be undone!",
            icon: "warning",
            buttons: ["Cancel", "Delete"],
            dangerMode: true,
        })
            .then((confirmed) => {
                if (confirmed) {
                    deleteUser(rowData.id).then(()=>{
                        swal({
                            title: `\"${rowData.firstName} ${rowData.lastName}\" student account deleted successfully`,
                            text: "Successfully",
                            icon: "info"
                        }).then(()=>{
                            router.push("/students")
                            window.location.reload()
                        })
                    })
                } else {
                    // Handle cancel action
                    console.log("Delete canceled.");
                }
            });
    };


    const openStudentDetail = (rowData) => {
        router.push(`/students/${rowData.id}`)
    };

    const openStudentDelete = (rowData) => {
        showDeleteConfirmation(rowData)
    };



    return (
        <MainLayout>
            <div className="flex bg-[#F8F8F8] h-full min-h-screen w-full flex-col items-center justify-between px-[30px] pt-[72px] pb-20">
                <div className="self-start flex flex-col justify-start gap-2 relative w-full items-center">
                    <div className="flex justify-between mb-0 gap-6 relative w-full items-center">
                        <div className="whitespace-nowrap text-xl font-['Montserrat'] font-bold text-black mr-[499px] relative">
                            Students List
                        </div>
                        <div className="h-10 flex flex-col font-['Montserrat'] w-[200px] relative ml-auto">
                            <input value={searchValue} onChange={handleSearchChange} onKeyDown={handleKeyDown} className="h-full pr-10 focus:text-gray-500 rounded-lg focus:border-gray-100 focus:peer-gray-200 focus:outline-gray-200 border border-[#e5e5e5] pl-[15px] text-[#c4c4c4] text-[12px] bg-white" placeholder="Search..." type="search"/>
                            <img
                                src="https://file.rendit.io/n/3VbMVtvX04a7owYFsfuu.svg"
                                onClick={handleSearchSubmit}
                                className="min-h-0 min-w-0 absolute top-3.5 right-4 w-3 shrink-0 cursor-pointer"
                            />
                        </div>
                        <button  onClick={openPopup} className="flex flex-col justify-start relative w-[200px] items-center">
                            <div className="bg-[#feaf00] flex flex-col justify-center relative w-full h-10 shrink-0 items-center rounded">
                                <span className="whitespace-nowrap text-sm font-['Montserrat'] font-medium text-white relative">
                                    ADD NEW STUDENT
                                </span>
                            </div>
                        </button>
                    </div>
                    <div className="border-solid border-[#e5e5e5] mb-3 relative w-full h-px shrink-0 bordert borderb-0 borderx-0" />

                    <Table data={users} columns={columns} onDetailAction={openStudentDetail} onDeleteAction={openStudentDelete}></Table>

                    {
                        !searchValue && users.length > 0 &&

                        <div className="flex justify-end w-full mr-8 gap-1 mt-[33px] relative items-center mb-20">
                            <div className="text-sm font-['Mulish'] tracking-[0.30000001192092896] leading-[20px] text-[#9fa2b4] mr-1 relative h-[75%]">
                                Rows per page:
                            </div>
                            <select id="students-limit-select-box" value={limitValue} onChange={handleLimitChange} className="cursor-pointer text-right mr-12 outline-none bg-transparent text-sm font-['Mulish'] tracking-[0.30000001192092896] leading-[20px] text-[#4a4f6c] relative w-12 h-[75%]">
                                {[5,6,7,8,9,10,15,20,25].map((perPage,key) => (
                                    <option key={key} value={perPage}>{perPage}</option>
                                ))}
                            </select>
                            <div className="text-right text-sm font-['Mulish'] tracking-[0.30000001192092896] leading-[20px] text-[#9fa2b4] mr-5 relative h-[75%]">
                                {skipValue +1}-{skipValue + users.length} of {totalValue}
                            </div>
                            <button onClick={previousPage}>
                                <img
                                    src="https://file.rendit.io/n/JeemT0rIY33CVILgr1De.svg"
                                    className="hover:scale-105 min-h-0 min-w-0 mr-2 relative w-6 shrink-0"
                                />
                            </button>
                            <button onClick={nextPage}>
                                <img
                                    src="https://file.rendit.io/n/jJkGrhSkyUiHphduJWhM.svg"
                                    className="hover:scale-105 min-h-0 min-w-0 relative w-6 shrink-0"
                                />
                            </button>

                        </div>
                    }


                </div>

                {isOpenPopup && <StudentPopup onClose={closePopup}></StudentPopup>}
            </div>
        </MainLayout>
    );
}