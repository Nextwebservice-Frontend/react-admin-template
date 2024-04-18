/* eslint-disable no-unused-vars */
import React from 'react';
import CategoryModal from './CategoryModal';

const CategoryList = () => {
    return (
        <div>
            <div>
                <div className="flex flex-wrap align-items-center justify-content-between gap-2 my-5">
                    <h1 className="w-full mx-auto  text-3xl dark:text-white text-black ">Category List</h1>
                </div>


                <div className='border dark:border-black p-4'>
                    <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0 dark:border-none  mb-4 w-full'>

                        <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0 dark:border-black border mb-4 w-full'>
                            <div className='flex  w-ful'>
                                <button className='btn rounded-none border-none bg-success text-white hover:bg-green-600 '>ALL(1)</button>
                                <button className='btn rounded-none border-none text-blue-600 bg-[#f7f7f7] hover:bg-green-600 hover:text-white dark:bg-base-100'>Active(1)</button>
                                <button className='btn rounded-none border-none text-blue-600 bg-[#f7f7f7] hover:bg-green-600 hover:text-white dark:bg-base-100 dar'>Inactive(0)</button>
                                <button className='w-[100%]  bg-[#f7f7f7] dark:bg-base-100 '></button>
                            </div>

                            <CategoryModal></CategoryModal> 

                        </div>

                    </div>

                    <div className="overflow-x-auto">
                        <table className="table border dark:border-black">
                            {/* head */}
                            <thead >
                                <tr className='uppercase text-center font-bold text-black bg-[#F2F2F2] dark:bg-base-100 dark:border-black text-lg dark:text-white'>
                                    <th className=' '>Name</th>
                                    <th className='border dark:border-black'>status</th>
                                   
                                </tr>
                            </thead>
                            <tbody className=' text-center'>
                                {/* row 1 */}
                                
                                <tr>
                                    <th
                                        className={`px-6 pt-2 font-medium whitespace-nowrap text-center relative group pb-8 text-lg border dark:border-black text-black dark:text-white `}
                                    >
                                        Beauty
                                        <div className="absolute text-center  opacity-0 group-hover:opacity-100 flex items-center ">
                                            <h1 className="text-base font-bold text-blue-600 text-center">
                                                Edit <span className='text-black'>|</span> <span className='text-yellow-400'>Inactive</span>
                                            </h1>

                                        </div>
                                    </th>  
                                   
                                   
                                    <td className='border dark:border-black'>
                                        <button className='rounded-md bg-success border-none text-white py-0 px-2'>Active</button>
                                    </td>
                                
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>



            </div>
            
        </div>
    );
};

export default CategoryList;