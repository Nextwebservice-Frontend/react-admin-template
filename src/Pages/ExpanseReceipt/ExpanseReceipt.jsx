/* eslint-disable no-unused-vars */
import React from 'react';

const ExpanseReceipt = () => {
    return (
        <>

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

                <div className='border'>

                </div>
            </div>

            {/* Select expanse  (2nd part) */}
        
        
        </>
       
    );
};

export default ExpanseReceipt;