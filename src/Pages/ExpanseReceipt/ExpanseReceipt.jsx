/* eslint-disable no-unused-vars */
import React from 'react';

const ExpanseReceipt = () => {
    return (
        <>

            <div className='flex w-[1350px] gap-10'>



                {/* Expanse receive list (1st part) */}


                <div className='border mt-7 w-[1000px]  mx-auto  p-4 rounded shadow-2xl'>


                    <div className='flex '>
                        <img src="https://cashbaksho.com/backend/billing_invoice_logo.png" alt="" />
                        <div className=''>
                            <p>Date :

                                <input type="date" placeholder="Type here" className="input input-bordered " />

                            </p>

                            <p>Receiver :
                                <input type="text" placeholder="Receiver" className="input input-bordered  " />

                            </p>
                        </div>

                    </div>



                    <h1 className='text-3xl mt-5'>Expanse Receipt List</h1>

                   

                    <table className='w-full'>
                        <tr>
                            <td className='text-black border text-center font-extrabold text-lg'>SN</td>
                            <td className='text-black border text-center font-extrabold text-lg'>Expense</td>
                            <td className='text-black border text-center font-extrabold text-lg'>Details</td>
                            <td className='text-black border text-center font-extrabold text-lg'>Amount</td>
                        </tr>
                    </table>
                </div>

                {/* Select expanse  (2nd part) */}

                <div className=' w-[340px]'>


                    <div className='border mt-7  mx-auto  p-4 rounded '>
                        <h4 className='border'>Select Expanse</h4>
                        <button className='border btn btn-primary'>+Add</button>


                    </div>

                    <div className='border mt-7  mx-auto  p-4 rounded '>
                        <h4 className='border'>Receipt Notes</h4>

                        <p>Notes(required)</p>

                        <textarea className="textarea textarea-bordered" placeholder="Bio"></textarea>


                      <div>
                            <button className='border btn btn-primary'>+Ad</button>

                      </div>

                    </div>

                

                </div>



            </div>


        </>

    );
};

export default ExpanseReceipt;