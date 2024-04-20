/* eslint-disable no-unused-vars */
import React, { useMemo, useState } from 'react';
import { useReactTable, getCoreRowModel, flexRender, getPaginationRowModel, getSortedRowModel, getFilteredRowModel } from '@tanstack/react-table';
import JsonData from '../../../../public/rowData.json'
import { DateTime } from 'luxon'
import './CSS/TableTanStackCss.css'
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { MdArrowBackIos, MdArrowForwardIos, MdKeyboardArrowLeft } from 'react-icons/md';

const YearlyInvoice = () => {
    const data = useMemo(() => JsonData, [])
    const columns = [
        {
            header: 'ID',
            accessorKey: 'id',
            footer: 'ID'
        },
        {
            header: 'Make',
            accessorKey: 'make',
            footer: 'Make'

        },
        {
            header: 'Model',
            accessorKey: 'model',
            footer: 'Model'
        }
        ,
        {
            header: 'Price',
            accessorKey: 'price',
            footer: 'Price'
        }
        ,
        {
            header: 'Month',
            accessorKey: 'month',
            footer: 'Month',
        },
        {
            header: 'Date of birth',
            accessorKey: 'dob',
            footer: 'Date of birth',
            cell: info => DateTime.fromISO(info.getValue()).toLocaleString(DateTime.DATE_MED),
        }
    ]
    const [sorting, setSorting] = useState([])
    const [filtering, setFiltering] = useState('')
    const table = useReactTable({
        data, columns, getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),

        state: {
            sorting: sorting,
            globalFilter: filtering
        },
        onSortingChange: setSorting,
        onGlobalFilterChange: setFiltering
    })
    return (
        <>
            <div className='w3-container '>
                <div className="flex flex-wrap align-items-center justify-content-between gap-2 my-5 ">
                    <h1 className="text-xl md:text-2xl text-900 font-bold ml-4 md:ml-0 dark:text-gray-300">Yearly Report List</h1>
                </div>
                <div style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 1px 1px 3px 2px' }} className='dark:bg-[#2F3349] rounded-md'>
                    <div className="flex flex-col justify-content-end border dark:border-gray-600 p-4 mb-5 rounded-lg">
                        <h1 className='mb-2 w-full text-xl dark:text-white'>Search Here <span className='text-red-500'>(Required)</span></h1>
                        <span>
                            <input className='border dark:text-white dark:border-gray-600 w-full py-2 rounded-sm text-lg pl-3 dark:outline-gray-600 dark:bg-[#25293C]' type="text" value={filtering} onChange={(e) => setFiltering(e.target.value)} placeholder='Search here' />
                        </span>
                    </div>
                    <div className='border dark:border-none p-4 rounded-lg'>
                        <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0 md:border dark:border-none mb-4 w-full'>
                            <div className='flex border md:border-none w-full'>
                                <button className='btn rounded-none border-none text-blue-600 dark:bg-gray-500 hover:bg-green-500 dark:hover:bg-green-500 dark:text-white bg-[#f7f7f7]'>ALL</button>
                                <button className='w-[100%] dark:bg-gray-500 bg-[#f7f7f7]'></button>
                            </div>
                            <button className='btn rounded-none bg-success text-white'>Report List</button>
                        </div>
                        {/* table start here */}
                        <div className='w-[100%]' style={{ overflow: 'auto' }} >
                            <table className='w3-table-all w-[100%]'>
                                <thead >
                                    {table.getHeaderGroups().map(headerGroup => (
                                        <tr key={headerGroup.id}>
                                            {headerGroup.headers.map(header => <th key={header.id} className='border dark:border-gray-600 py-2 dark:bg-gray-500 bg-[#f2f2f2]'>
                                                {flexRender(
                                                    header.column.columnDef.header, header.getContext()
                                                )}
                                                {
                                                    {
                                                        asc: 'asc', desc: 'desc'
                                                    }[header.column.getIsSorted() ?? null]
                                                }
                                            </th>)}
                                        </tr>
                                    ))}
                                </thead>
                                <tbody className=''>
                                    {table.getRowModel().rows.map(row => (
                                        <tr key={row.id} >
                                            {row.getVisibleCells().map(cell => (
                                                <td key={cell.id} className='border dark:border-gray-600 text-center dark:text-gray-300'>
                                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {/* pagination */}
                            <div className='text-end mt-2'>
                                {/* first page */}
                                <button className='btn rounded-full mr-2 text-xs md:text-base' onClick={() => table.setPageIndex(0)}><FaGreaterThan /> </button>
                                {/* previous page */}
                                <button className='btn px-1 mr-2 text-xs md:text-base' disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()}>Previous </button>
                                {/* next page */}
                                <button className='btn text-xs px-2 md:text-base' disabled={!table.getCanNextPage()} onClick={() => table.nextPage()}><MdArrowForwardIos />  </button>
                                {/* last page */}
                                <button className='btn rounded-full  ml-2 text-xs md:text-base' onClick={() => table.setPageIndex(table.getPageCount() - 1)}> <MdArrowForwardIos /></button>
                                <div className='dark:text-white'>
                                    <button disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()} className='p-2 hover:bg-gray-200  dark:hover:bg-gray-600 rounded-md'>
                                        <MdArrowBackIos />
                                    </button>
                                    <button onClick={() => table.setPageIndex(1)} className='p-2 hover:bg-gray-200  dark:hover:bg-gray-600 rounded-md'>
                                        1
                                    </button>
                                    <button onClick={() => table.setPageIndex(1)} className='p-2 hover:bg-gray-200  dark:hover:bg-gray-600 rounded-md'>
                                        2
                                    </button>
                                    <button onClick={() => table.setPageIndex(1)} className='p-2 hover:bg-gray-200  dark:hover:bg-gray-600 rounded-md'>
                                        3
                                    </button>

                                    <button disabled={!table.getCanNextPage()} onClick={() => table.nextPage()} className='p-2 hover:bg-gray-200  dark:hover:bg-gray-600 rounded-md'>
                                        <MdArrowForwardIos />
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default YearlyInvoice;