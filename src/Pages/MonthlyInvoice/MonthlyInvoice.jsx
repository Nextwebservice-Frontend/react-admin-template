/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Calendar } from 'primereact/calendar';

const MonthlyInvoice = () => {
  const [date, setDate] = useState(null);
  return (
    <div className='mt-4'>
        <h1 className="text-2xl text-black bg-[#f7f7fa] dark:bg-gray-500 dark:border-none mb-6 border-b py-2 dark:rounded-sm dark:text-white">
            User Details
          </h1>
        <div className="card flex flex-col lg:flex-row lg:items-center lg:justify-between  gap-3 p-fluid">
        <div className="flex-auto lg:w-[50%] ">
                <label htmlFor="buttondisplay" className="font-bold block mb-2 text-black dark:text-white">
                Select Date
                </label>
                <Calendar id="buttondisplay" className='border border-gray-400 dark:border-black dark:bg-base-100 rounded-md pl-5 pr-2 py-2' placeholder='' value={date} onChange={(e) => setDate(e.value)} showIcon />
            </div>
            <div className="flex-auto lg:w-[50%] ">
                <label htmlFor="buttondisplay" className="font-bold block mb-2 text-black dark:text-white">
                Select Date
                </label>
                <Calendar id="buttondisplay" className='border border-gray-400 dark:border-black dark:bg-base-100 rounded-md pl-5 pr-2 py-2' placeholder='' value={date} onChange={(e) => setDate(e.value)} showIcon />
            </div>
        </div>
    </div>
  )
}

export default MonthlyInvoice