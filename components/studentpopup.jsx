"use client"


import {useEffect, useState} from "react";

export const StudentPopup = ({onClose}) => {
    const [isFormValid, setIsFormValid] = useState(false)
    const [validationError, setValidationError] = useState("")
    const [formData, setFormData] = useState({
        firstname: 'test',
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
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
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
                                   className="block mb-2 text-sm font-medium text-gray-900 ">Company</label>
                            <input type="text" id="company"
                                   name="companyName"
                                   value={formData.companyName}
                                   minLength={2}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                   placeholder="ManageCourses" required/>
                        </div>
                        <div>
                            <label htmlFor="phone"
                                   className="block mb-2 text-sm font-medium text-gray-900 ">Phone
                                number</label>
                            <input type="tel" id="phone"
                                   name="phone"
                                   value={formData.phone}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                   placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
                        </div>
                        <div>
                            <label htmlFor="website"
                                   className="block mb-2 text-sm font-medium text-gray-900 ">Website
                                URL</label>
                            <input type="text" id="website"
                                   name="website"
                                   value={formData.website}
                                   onChange={handleChange}
                                   pattern="^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$"
                                   onBlur={handleBlur}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                   placeholder="managecourses.com" required/>
                        </div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email
                            address</label>
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
