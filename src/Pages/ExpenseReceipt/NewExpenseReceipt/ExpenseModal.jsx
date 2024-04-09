/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const ExpenseModal = () => {

    let [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    return (
        <>
            <div className="py-2 w-full text-center">

                <button type="button"
                    onClick={openModal} className=" bg-[#5cb85c] w-[300px]   h-[40px]   text-white text-lg font-bold">
                    Save Receipt
                </button>


                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                            <div className="flex min-h-full items-center justify-center p-4 text-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Dialog.Panel className="w-[900px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                        <Dialog.Title
                                            as="h3"
                                            className="text-lg font-medium leading-6 text-gray-900"
                                        >
                                            Add Expense To Receipt
                                        </Dialog.Title>
                                        <hr className="mt-4" />

                                        <div className="flex justify-between gap-2">
                                            <div className="mt-2">
                                                <h4 className="text-lg">Expense Category (required)</h4>
                                                <input
                                                    type="text "
                                                    placeholder="Expense Category "
                                                    className="input input-bordered  w-[270px] "
                                                />
                                            </div>


                                            <div className="mt-2">
                                                <h4 className="text-lg">Expense (required)</h4>
                                                <input
                                                    type="text"
                                                    placeholder="Expense"
                                                    className="input input-bordered w-[270px] "
                                                />
                                            </div>

                                            <div className="mt-2">
                                                <h4 className="text-lg">Expense Amount(required)</h4>
                                                <input
                                                    type="number"
                                                    placeholder="Expense Amount"
                                                    className="input input-bordered w-[270px] "
                                                />
                                            </div>

                                        </div>

                                        <div className=' py-2'>
                                            <p className="label-text text-base mr-7 pb-2 ">Expense Details(required)</p>

                                            <textarea className="textarea textarea-bordered w-full" placeholder="Expense Details"></textarea>

                                        </div>

                                      


                                        <div className="mt-4 text-end border">

                                            <button className="ml-4 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                                                Add
                                            </button>

                                            <button
                                                type="button"
                                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                onClick={closeModal}
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