/* eslint-disable no-unused-vars */
import React from 'react';

const LeadDetails = () => {
    return (

        <div className="mb-16">
            <h1 className=" py-4 w-full mx-auto  text-3xl dark:text-white text-black ">Personal Profile</h1>
            <div className="flex flex-col md:flex-row gap-8 justify-center">
                {/*Green House Hotel & Tours (Budget Hotel Nearest Dhaka Airport) part */}
                <div className=" bg-white dark:bg-[#2F3249] w-full md:w-[40%] lg:w-[30%] shadow-xl rounded-lg border dark:border-none ">
                    <h1 className="text-3xl text-black bg-[#f7f7fa] dark:bg-gray-500 dark:border-none rounded-sm py-2 dark:rounded-sm dark:text-white border px-4 mx-auto">
                        Green House Hotel & Tours (Budget Hotel Nearest Dhaka Airport)
                    </h1>
                    <div className='mx-4'>
                        <img
                            className="w-[100%] h-[250px] rounded-sm border"
                            src="https://mylead.xyz/uploads/organization_image/1713674452.jpg"
                            alt="girls-image"
                        />
                    </div>
                    {/* superAdmin title */}
                    <div className="text-center ">
                        <h1 className="mt-2 text-2xl dark:text-white text-black">Abu Sadat Muhammed Sayem Khan</h1>
                    </div>
                    {/* superAdmin button */}
                    <button className="w-[24%] md:w-[32%] xl:w-[33%]  border mx-auto rounded-lg text-white text-xs xl:text-lg bg-[#6C757D] font-bol mb-3 dark:border-none dark:text-white">WB-MR-0012</button>
                    <div className="flex justify-between items-center">
                       <div >
                        <h1>1200tk</h1>
                            <p>Installation Charge</p>

                       </div>
                        <div>
                            <h1>tk</h1>
                            <p>Monthly Charge</p>

                        </div>
                    </div>
                    {/* profile modal component */}
                   
                </div>
                
            </div>
        </div>

    );
};

export default LeadDetails;