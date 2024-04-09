/* eslint-disable no-unused-vars */
import React from 'react';
import ExpenseModal from './ExpenseModal';
import { FaAlignRight } from "react-icons/fa";

const NewExpenseReceipt = () => {
    return (
        <>

            {/*  md:w-[1000px] */}

            <div className='flex  flex-col md:flex-row w-[96%] mx-auto  md:w-[100%] gap-10'>

                {/* Expanse receive list (1st part) */}


                <div className='border mt-7 w-full md:w-[76%]  mx-auto   rounded shadow-2xl pb-16'>


                    <div className='flex flex-col lg:flex-row  justify-between px-5 pt-5'>
                        <img className='mb-3 w-[90%] lg:w-[40%] h-[150px]' src="https://cashbaksho.com/backend/billing_invoice_logo.png" alt="" />

                   
                        <div className='flex flex-col lg:items-end my-4 lg:my-0'>
                            <div className='mb-2'>
                                <span className="label-text text-lg mr-7 ">Date : </span>

                                <input type="date" placeholder="Type here" className="input input-bordered w-[220px] h-[40px] bg-[#f7f7f7]" />

                            </div>

                            <div>

                                <span className="label-text text-lg">Receiver : </span>
                                <input type="text" placeholder="Receiver" className="input input-bordered  w-[220px] h-[40px] bg-[#f7f7f7]" />

                            </div>
                        </div>

                    </div>

                    <div className='border-y border-gray-300  pb-2 px-5'>


                        <h1 className=' text-gray-700 text-xl mt-2 mb-2 '>Expanse Receipt List</h1>



                        <table className='w-full mb-4'>
                            <tr>
                                <td className='text-gray-700 border text-center font-extrabold text-lg bg-[#f7f7f7] py-2'><strong>SN</strong></td>
                                <td className='text-gray-700 border text-center font-extrabold text-lg bg-[#f7f7f7] py-2'>Expense</td>
                                <td className='text-gray-700 border text-center font-extrabold text-lg bg-[#f7f7f7] py-2'>Details</td>
                                <td className='text-gray-700 border text-center font-extrabold text-lg bg-[#f7f7f7] py-2'>Amount</td>
                            </tr>
                        </table>

                    </div>

                    <div className='flex flex-col md:flex-row justify-between  mt-5 px-5'>
                        <h6 className='font-medium w-[92%] lg:w-[50%] text-lg lg:text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, illo!</h6>

                        <div className='flex flex-col items-end gap-2'>
                            <div>

                                <span className="label-text text-lg">Expense Qty :  </span>
                                <input type="number" placeholder="Expense Qty" className="input input-bordered  w-[220px] h-[40px] bg-[#f7f7f7] " />

                            </div>

                            <div>

                                <span className="label-text text-lg">Total Amount :  </span>
                                <input type="number" placeholder="Total Amount" className="input input-bordered  w-[220px] h-[40px] bg-[#f7f7f7]" />

                            </div>

                        </div>

                    </div>

                </div>

                {/* Select expanse  (2nd part) w-[340px] */}

                <div className='w-[96%] md:w-[24%] m-2 md:m-0 '>


                    <div className='border mt-7  mx-auto  rounded '>
                        <h4 className='text-lg text-black pl-3 py-2 border font-bold bg-[#f7f7f7]'><strong className='flex items-center gap-2 justify-start'><FaAlignRight />Select Expense</strong></h4>

                        <hr className='p-0 m-0 ' />

                        {/* Expense modal */}

                        <ExpenseModal></ExpenseModal>

                    </div>

                    {/* receipt notes */}

                    <div className='border mt-7  mx-auto  rounded '>
                        <h4 className='text-lg text-black pl-3 py-2  font-bold bg-[#f7f7f7]'><strong className='flex items-center gap-2 justify-start'><FaAlignRight />Receipt Notes</strong></h4>

                        <hr className='p-0 m-0 ' />
                        <div className='pl-3 py-2'>
                            <p className="label-text text-base mr-7 pb-2 ">Notes<span className="text-red-500">(required) </span></p>

                            <textarea className="textarea textarea-bordered w-[95%] " placeholder="Bio"></textarea>

                        </div>

                        <hr className='p-0 m-0 ' />

                        <div className=" py-2 w-full text-center bg-[#f7f7f7]">
                            <button className="  bg-[#5cb85c]  w-[90%]   h-[40px]   text-white text-xl">
                               Save Receipt
                            </button>
                        </div>

                      
                    </div>

                </div>



            </div>


        </>
    );
};

export default NewExpenseReceipt;