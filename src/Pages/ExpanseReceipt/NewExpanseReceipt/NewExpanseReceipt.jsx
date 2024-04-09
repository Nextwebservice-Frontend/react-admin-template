/* eslint-disable no-unused-vars */
import React from 'react';

const NewExpanseReceipt = () => {
    return (
        <>

            <div className='flex w-[1350px] gap-10'>



                {/* Expanse receive list (1st part) */}


                <div className='border mt-7 w-[1000px]  mx-auto   rounded shadow-2xl pb-16'>


                    <div className='flex justify-between px-5 pt-5'>
                        <img className='mb-3 w-[40%] h-[150px]' src="https://cashbaksho.com/backend/billing_invoice_logo.png" alt="" />

                        <hr />
                        <div className='flex flex-col items-end'>
                            <div className='mb-2'>
                                <span className="label-text text-lg mr-7 ">Date : </span>

                                <input type="date" placeholder="Type here" className="input input-bordered w-[220px] h-[40px]" />

                            </div>

                            <div>

                                <span className="label-text text-lg">Receiver : </span>
                                <input type="text" placeholder="Receiver" className="input input-bordered  w-[220px] h-[40px]" />

                            </div>
                        </div>

                    </div>

                    <div className='border-y border-gray-300  pb-2 px-5'>


                        <h1 className='text-black text-xl mt-2 mb-2 '>Expanse Receipt List</h1>



                        <table className='w-full mb-4'>
                            <tr>
                                <td className='text-black border text-center font-extrabold text-lg bg-[#f7f7f7] py-2'>SN</td>
                                <td className='text-black border text-center font-extrabold text-lg bg-[#f7f7f7] py-2'>Expense</td>
                                <td className='text-black border text-center font-extrabold text-lg bg-[#f7f7f7] py-2'>Details</td>
                                <td className='text-black border text-center font-extrabold text-lg bg-[#f7f7f7] py-2'>Amount</td>
                            </tr>
                        </table>

                    </div>

                    <div className='flex justify-between  mt-5 px-5'>
                        <h6 className='font-medium w-[50%] text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, illo!</h6>

                        <div className='flex flex-col items-end gap-2'>
                            <div>

                                <span className="label-text text-lg">Expense Qty :  </span>
                                <input type="number" placeholder="Expense Qty" className="input input-bordered  w-[220px] h-[40px] " />

                            </div>

                            <div>

                                <span className="label-text text-lg">Total Amount :  </span>
                                <input type="number" placeholder="Total Amount" className="input input-bordered  w-[220px] h-[40px]" />

                            </div>

                        </div>


                    </div>







                </div>



                {/* Select expanse  (2nd part) */}

                <div className=' w-[340px] '>


                    <div className='border mt-7  mx-auto  rounded '>
                        <h4 className='text-lg text-black pl-3 py-2 border font-bold'>Select Expense</h4>

                        <hr className='p-0 m-0 ' />

                        <div className=" py-2 w-full text-center ">
                            <button className=" bg-[#5bc0de] w-[300px]   h-[40px]   text-white text-xl">
                                +Add
                            </button>
                        </div>



                    </div>

                    {/* receipt notes */}

                    <div className='border mt-7  mx-auto  rounded '>
                        <h4 className='text-lg text-black pl-3 py-2  font-bold'>Receipt Notes</h4>

                        <hr className='p-0 m-0 ' />
                        <div className='pl-3 py-2'>
                            <p className="label-text text-base mr-7 pb-2 ">Notes(required)</p>

                            <textarea className="textarea textarea-bordered w-[300px]" placeholder="Bio"></textarea>

                        </div>


                        <hr className='p-0 m-0 ' />


                        <div className=" py-2 w-full text-center ">
                            <button className=" bg-[#5cb85c] w-[300px]   h-[40px]   text-white text-lg font-bold">
                                Save Receipt
                            </button>
                        </div>

                    </div>



                </div>



            </div>


        </>
    );
};

export default NewExpanseReceipt;