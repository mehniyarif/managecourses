"use client"


import {useState} from "react";
import {createUser} from "@/services/api";
import {useRouter} from "next/navigation";
import swal from 'sweetalert';

export const StudentPopup = ({onClose}) => {
    const router = useRouter();
    const [isFormValid, setIsFormValid] = useState(false)
    const [validationError, setValidationError] = useState("")
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        website: '',
        companyName: '',
        password: '',
        passwordConfirm: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));

        handleValidationError(e)
        setIsFormValid([...document.getElementById("create-new-student-form").querySelectorAll('input')].every((el) => el.checkValidity()))
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

        setIsFormValid([...document.getElementById("create-new-student-form").querySelectorAll('input')].every((el) => el.checkValidity()))
    };

    const handleBlur = (e) => {
        handleValidationError(e, true)
    };

    const onSubmit = (e) => {
        let payload = {
            firstName: formData.firstname,
            lastName: formData.lastname,
            email: formData.email,
            phone: `+90 ${formData.phone}`,
            domain: formData.website,
            password: formData.password,
            company: {
                name: formData.companyName
            },
        }
        createUser(payload).then(response => {
            swal({
                title: `\"${formData.firstname} ${formData.lastname}\" student account created successfully`,
                text: "Successfully",
                icon: "success"
            })
                .then((confirmed) => {
                    if (confirmed) {
                        onClose()
                        router.push(`/students`)
                        window.location.reload()
                    }
                });

        }).catch((error) => {
            swal({
                title: `Failed to create student account \"${formData.firstname} ${formData.lastname}\"`,
                text: "Operation failed",
                icon: "warning"
            })
                .then((confirmed) => {
                    if (confirmed) {
                        // Perform create operation
                        console.log("create confirmed.");
                    }
                });
        })
    };

    return (
<div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
    <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div
                className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full md:w-1/2 md:max-w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                        <div
                            className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-300 sm:mx-0 sm:h-10 sm:w-10">
                            <svg className="w-6 h-6 text-white" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                <path
                                    d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Zm11-3h-2V5a1 1 0 0 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 0 0 2 0V9h2a1 1 0 1 0 0-2Z"/>
                            </svg>
                        </div>
                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                            <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Create
                                new student</h3>
                            <div className="mt-2">
                                <p className="text-sm text-gray-500">Please enter the student information you want to add completely below.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <form className="p-12" id="create-new-student-form">
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
                                <input type="text" value="+90" disabled className="bg-gray-50 border w-12 border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "/>
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
                               pattern="^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$"
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
                    <div className="mb-6">
                        <label htmlFor="password"
                               className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                        <input type="password" id="password"
                               name="password"
                               value={formData.password}
                               minLength={8}
                               onChange={handleChange}
                               onBlur={handleBlur}
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                               placeholder="•••••••••" required/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="confirm_password"
                               className="block mb-2 text-sm font-medium text-gray-900 ">Confirm
                            password</label>
                        <input type="password" id="confirm_password"
                               name="passwordConfirm"
                               minLength={8}
                               value={formData.passwordConfirm}
                               onChange={handleChange}
                               onBlur={handleBlur}
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                               placeholder="•••••••••" required/>
                    </div>

                    {validationError &&
                    <div
                        className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50"
                        role="alert">
                        <span className="font-medium">Form Validation alert!</span> {validationError}
                    </div>}
                </form>

                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button type="button"
                            disabled={!isFormValid}
                            onClick={onSubmit}
                            className="inline-flex w-full justify-center cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto">Apply
                    </button>
                    <button type="button" onClick={onClose}
                            className="mt-3 inline-flex w-full  justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
    )}
