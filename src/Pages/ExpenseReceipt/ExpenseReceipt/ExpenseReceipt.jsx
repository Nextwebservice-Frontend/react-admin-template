/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseReceipt = () => {
    return (
    
            <div>
                <div className=" border dark:border-none p-4 mt-5">
                    <div className='flex flex-row md:flex-row items-center justify-between md:gap-0 md:border dark:border-none mb-4 w-full '>
                        <div className='flex w-full'>
                            <button className='btn rounded-none border-none bg-green-500 text-white'>ALL</button>
                            <button className='w-[100%] bg-[#f7f7f7] dark:bg-gray-300'></button>
                        </div>
                    <Link to='/newExpenseReceipt'>
                        <button className='btn rounded-none border-none bg-green-500 text-white px-7 hover:bg-green-400'>New Expense List</button>
                    </Link>
                        
                        
                    </div>
                <div className="relative rounded-sm " style={{ overflow: 'auto' }}>
                    <table className="w-full text-sm text-left rtl:text-right  border dark:border-none">
                        <thead className="text-xs text-black uppercase dark:border-none border bg-[#f0f0f3] dark:bg-gray-500 text-center">
                                <tr className='border dark:border-none'>
                                    <th
                                        scope="col"
                                        className="px-6 py-3  w-[30%] font-bold text-xl border dark:border-none"
                                    >
                                        Expense ID
                                    </th>
                                    <th
                                        scope="col"
                                    className="px-6 py-3 w-[30%] font-bold text-xl border dark:border-none"
                                    >
                                       Received By
                                    </th>
                                <th scope="col" className="px-6 py-3 w-[40p%] font-bold text-xl border dark:border-none">
                                       Created At
                                    </th>
                                </tr>
                            </thead>
                            <tbody className='text-center'>
                                <tr className="bg-white  text-black hover:bg-gray-50 dark:bg-gray-200">
                                <th
                                    className={`px-6 pt-2 font-medium whitespace-nowrap dark:border-none relative group pb-8 text-lg `}
                                >
                                    Id
                                    <div className="absolute opacity-0 group-hover:opacity-100 flex items-center ">
                                        <button className="text-base font-bold text-blue-600 text-center">
                                           Invoice View
                                        </button>
                                    </div>
                                </th>                              
                                    <td className="px-6 pb-4 text-lg border dark:border-none">Superadmin</td>
                                <td className="px-6 pb-4 text-lg">Date : 18-05-23</td>
                                   
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>

           
            </div>


          


    
    );
};

export default ExpenseReceipt;