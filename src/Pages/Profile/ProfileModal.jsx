/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const ProfileModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="py-2 border w-full text-center">
                <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    className="w-[300px] h-[40px] border bg-slate-700 text-white rounded-xl"
                >
                    Password change
                </button>
                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
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
                                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                        <Dialog.Title
                                            as="h3"
                                            className="text-lg font-medium leading-6 text-gray-900"
                                        >
                                            Payment Updatejhgh
                                        </Dialog.Title>
                                        <hr className="mt-4" />
                                        <div className="mt-2">
                                            <h1>Old Password</h1>
                                            <input
                                                type="password "
                                                placeholder="Old Password"
                                                className="input input-bordered  w-full"
                                            />
                                        </div>
                                        <div className="flex gap-2">
                                            <div className="mt-2">
                                                <h1>New Password</h1>
                                                <input
                                                    type="password"
                                                    placeholder="New Password"
                                                    className="input input-bordered w-full max-w-xs"
                                                />
                                            </div>

                                            <div className="mt-2">
                                                <h1>Confirm Password</h1>
                                                <input
                                                    type="password"
                                                    placeholder="Confirm Password"
                                                    className="input input-bordered w-full max-w-xs"
                                                />
                                            </div>
                                        </div>
                                        <div className="mt-4 ">
                                            <button
                                                type="button"
                                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                Close
                                            </button>
                                            <button className="ml-4 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                                                Update
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

export default ProfileModal;