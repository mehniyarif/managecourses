"use client"

import {useParams, useRouter} from 'next/navigation'
import MainLayout from "@/layouts/main";
import {useEffect, useState} from "react";
import {getUser, updateUser} from "@/services/api";
import swal from 'sweetalert';

export default function StudentsDetailPage() {

    const router = useRouter();

    const [validationError, setValidationError] = useState("")
    const [isFormValid, setIsFormValid] = useState(false)
    const [formData, setFormData] = useState({
        id: null,
        firstname: 'test',
        lastname: '',
        email: '',
        phone: '',
        website: '',
        companyName: '',
        phoneCode: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));

        handleValidationError(e)
        setIsFormValid([...document.getElementById("edit-student-form").querySelectorAll('input')].every((el) => el.checkValidity()))
    };

    const handleValidationError = (e, isReport=false) => {
        const { name, value } = e.target;

        queueMicrotask(()=>{
            if(name === 'passwordConfirm' && !!value && document.querySelector("#password").value === value){
                e.target.setCustomValidity("")
                setValidationError("")
            }else if(e.target.value && !e.target.checkValidity()){
                if(isReport){
                    e.target.reportValidity()
                }
                setValidationError(e.target.validationMessage)
            }else if(name === 'passwordConfirm' && !!value && document.querySelector("#password").value !== value){
                e.target.setCustomValidity("Passwords Not Match")
                setValidationError(e.target.validationMessage)
            }else{
                e.target.setCustomValidity("")
                setValidationError("")
            }
        })

        setIsFormValid([...document.getElementById("edit-student-form").querySelectorAll('input')].every((el) => el.checkValidity()))
    };

    const handleBlur = (e) => {
        handleValidationError(e, true)
    };

    let {studentId} = useParams();

    useEffect(()=>{
        getUser(studentId).then((response)=>{
            let data = {
                id: studentId,
                email: response.data.email,
                firstname: response.data.firstName,
                lastname: response.data.lastName,
                phone: response.data.phone.toString().split(" ").slice(1, response.data.phone.toString().split(" ").length).join(""),
                companyName: response.data.company?.name,
                website: response.data.domain,
                phoneCode: response.data.phone.toString().split(" ")[0]
            }
            setFormData(data)
        })
    }, [studentId])

    const onSubmit = (e) => {
        let payload = {
            id: formData.id,
            firstName: formData.firstname,
            lastName: formData.lastname,
            email: formData.email,
            phone: `+90 ${formData.phone}`,
            domain: formData.website,
            company: {
                name: formData.companyName
            },
        }
        updateUser(payload).then(response => {
            swal({
                title: `\"${formData.firstname} ${formData.lastname}\" student account updated successfully`,
                text: "Successfully",
                icon: "success"
            })
                .then((confirmed) => {
                    if (confirmed) {
                        router.push(`/students?search=${formData.firstname}`)
                    }
                });

        }).catch((error) => {
            swal({
                title: `Failed to update student account \"${formData.firstname} ${formData.lastname}\"`,
                text: "Operation failed",
                icon: "warning"
            })
                .then((confirmed) => {
                    if (confirmed) {
                        // Perform update operation
                        console.log("update confirmed.");
                    }
                });
        })
    };


    return (
        <MainLayout>

                        <div
                            className="text-left pt-[62px] h-screen flex flex-col px-12">
                            <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4 ">
                                <div className="sm:flex sm:items-start">
                                    <div
                                        className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-300 sm:mx-0 sm:h-10 sm:w-10">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 512 512">
                                            <path d="M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48"
                                                  fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                                  strokeWidth="32"/>
                                            <path fill="currentColor"
                                                d="M459.94 53.25a16.06 16.06 0 00-23.22-.56L424.35 65a8 8 0 000 11.31l11.34 11.32a8 8 0 0011.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38zM399.34 90L218.82 270.2a9 9 0 00-2.31 3.93L208.16 299a3.91 3.91 0 004.86 4.86l24.85-8.35a9 9 0 003.93-2.31L422 112.66a9 9 0 000-12.66l-9.95-10a9 9 0 00-12.71 0z"/>
                                        </svg>
                                    </div>
                                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                        <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Edit student</h3>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">Save the made edits by using the save button below.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <form className="p-12" id="edit-student-form">
                                <div className="grid gap-6 mb-6 md:grid-cols-2">
                                    <div>
                                        <label htmlFor="first_name"
                                               className="block mb-2 text-sm font-medium text-gray-900 ">First
                                            name</label>
                                        <input type="text" id="first_name"
                                               value={formData.firstname}
                                               minLength={2}
                                               name="firstname"
                                               onChange={handleChange}
                                               onBlur={handleBlur}
                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                               placeholder="John" required/>
                                    </div>
                                    <div>
                                        <label htmlFor="last_name"
                                               className="block mb-2 text-sm font-medium text-gray-900 ">Last
                                            name</label>
                                        <input type="text" id="last_name"
                                               name="lastname"
                                               value={formData.lastname}
                                               minLength={2}
                                               onChange={handleChange}
                                               onBlur={handleBlur}
                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                               placeholder="Doe" required/>
                                    </div>
                                    <div>
                                        <label htmlFor="company"
                                               className="flex items-center gap-1 mb-2 text-sm font-medium text-gray-900 ">Company <span className="text-xs text-gray-600">(optional)</span></label>
                                        <input type="text" id="company"
                                               name="companyName"
                                               value={formData.companyName}
                                               minLength={2}
                                               onChange={handleChange}
                                               onBlur={handleBlur}
                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                               placeholder="ManageCourses" />
                                    </div>
                                    <div>
                                        <label htmlFor="phone"
                                               className="flex justify-between mb-2 text-sm font-medium text-gray-900 ">Phone
                                            number<span className="text-xs text-gray-400">e.g. 550 111 22 33</span></label>
                                        <div className="flex w-full gap-1">
                                            <input type="text" value={formData.phoneCode || '+90'} disabled className="bg-gray-50 border w-12 border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "/>
                                            <input type="tel" id="phone"
                                                   name="phone"
                                                   value={formData.phone}
                                                   onChange={handleChange}
                                                   onBlur={handleBlur}
                                                   minLength={10}
                                                   maxLength={10}
                                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                                   placeholder="550 111 22 33" required/>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="website"
                                           className="flex  items-center gap-1 mb-2 text-sm font-medium text-gray-900 ">Website
                                        URL <span className="text-xs text-gray-600">(optional)</span> <span className="ml-auto text-xs text-gray-400">e.g. managecourses.com</span></label>
                                    <input type="text" id="website"
                                           name="website"
                                           value={formData.website}
                                           onChange={handleChange}
                                           pattern=".*\..*"
                                           onBlur={handleBlur}
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                           placeholder="managecourses.com" />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="email" className="flex justify-between mb-2 text-sm font-medium text-gray-900 ">Email
                                        address<span className="text-xs text-gray-400">e.g. help@managecourses.com</span></label>
                                    <input type="email" id="email"
                                           value={formData.email}
                                           name="email"
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                           placeholder="john.doe@company.com" required/>
                                </div>

                                {validationError &&
                                    <div
                                        className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50"
                                        role="alert">
                                        <span className="font-medium">Form Validation alert!</span> {validationError}
                                    </div>}
                            </form>

                            <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button type="button"
                                        disabled={!isFormValid}
                                        onClick={onSubmit}
                                        className="inline-flex w-full justify-center cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto">Save
                                </button>
                                <button type="button" onClick={() => router.back()}
                                        className="mt-3 inline-flex w-full  justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel
                                </button>
                            </div>
                        </div>
        </MainLayout>
    );
}
