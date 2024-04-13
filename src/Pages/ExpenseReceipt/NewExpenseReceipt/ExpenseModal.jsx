/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const ExpenseModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="py-2 w-full text-center bg-[#f7f7f7]">
                <button type="button" onClick={() => setIsOpen(true)} className="bg-[#5bc0de] w-[90%] h-[40px] text-white text-lg font-bold">
                    +Add
                </button>
                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)} >
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black/25" />
                        </Transition.Child>
                        <div className="fixed inset-0 overflow-y-auto">
                            <div className="flex min-h-full items-center justify-center text-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Dialog.Panel className="w-[96%] md:w-[48%] transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                                        <Dialog.Title
                                            as="h3"
                                            className="border py-6 pl-4 font-bold text-xl leading-6 text-gray-900 bg-[#f7f7f7]"
                                        >
                                            Add Expense To Receipt
                                        </Dialog.Title>
                                        {/* <hr className="mt-4" /> */}
                                        <div className="flex flex-col md:flex-row justify-between gap-2 px-6">
                                            <div className="mt-2">
                                                <p className="text-lg text-gray-900">Expense Category<span className="text-red-500">(required)</span> </p>
                                                <input
                                                    type="text "
                                                    placeholder="Expense Category "
                                                    className="input input-bordered w-[98%] md:w-[270px] "
                                                />
                                            </div>
                                            <div className="mt-2">
                                                <p className="text-lg text-gray-900">Expense<span className="text-red-500">(required)</span></p>
                                                <input
                                                    type="text"
                                                    placeholder="Expense"
                                                    className="input input-bordered w-[98%] md:w-[270px] "
                                                />
                                            </div>
                                            <div className="mt-2">
                                                <p className="text-lg text-gray-900">Expense Amount<span className="text-red-500">(required)</span></p>
                                                <input
                                                    type="number"
                                                    placeholder="Expense Amount"
                                                    className="input input-bordered w-[98%] md:w-[270px] bg-[#f7f7f7]"
                                                />
                                            </div>
                                        </div>
                                        <div className=' py-2 px-6'>
                                            <p className="label-text text-lg text-gray-900 mr-7 pb-2">Expense Details <span className="text-red-500">(required) </span></p>
                                            <textarea className="textarea textarea-bordered w-[98%] md:w-full bg-[#f7f7f7]" placeholder="Expense Details"></textarea>
                                        </div>
                                        <div className="bg-[#f7f7f7] mt-4 p-6 border flex gap-2 justify-end">
                                            <button className="bg-[#5cb85c] text-lg text-white ml-4 inline-flex justify-center rounded-md border border-transparent  px-4 py-2  font-medium  hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                                                Add
                                            </button>
                                            <button
                                                type="button"
                                                className="bg-[#d9534f] inline-flex text-white justify-center rounded-md border border-transparent  px-4 py-2 text-lg font-medium hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition>
            </div>
        </>
    );
};
export default ExpenseModal;