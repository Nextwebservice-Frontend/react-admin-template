/* eslint-disable no-unused-vars */
import React, { useMemo, useState } from 'react';
import { useReactTable, getCoreRowModel, flexRender, getPaginationRowModel, getSortedRowModel, getFilteredRowModel } from '@tanstack/react-table';
import JsonData from '../../../../public/rowData.json'
import { DateTime } from 'luxon'
import './CSS/TableTanStackCss.css'
import { FaGreaterThan, FaLessThan } from "react-icons/fa";

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
            <div className='w3-container'>
                <div className="flex flex-wrap align-items-center justify-content-between gap-2 my-5 ">
                    <h1 className="text-xl md:text-2xl text-900 font-bold ml-4 md:ml-0">Yearly Report List</h1>
                </div>
                <div className="flex flex-col justify-content-end border p-4 mb-5 rounded-lg">
                    <h1 className='mb-2 w-full text-xl'>Search Here <span className='text-red-500'>(Required)</span></h1>
                    <span>
                        <input className='border w-full py-2 rounded-sm text-lg pl-3' type="text" value={filtering} onChange={(e) => setFiltering(e.target.value)} placeholder='Search here' />
                    </span>
                </div>
                <div className='border p-4 rounded-lg'>
                    <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0 md:border mb-4 w-full'>
                        <div className='flex border md:border-none w-full'>
                            <button className='btn rounded-none border-none text-blue-600  bg-[#f7f7f7]'>ALL</button>
                            <button className='w-[100%]  bg-[#f7f7f7]'></button>
                        </div>
                        <button className='btn rounded-none bg-success text-white'>Report List</button>
                    </div>
                    {/* table start here */}
                    <div className='' style={{ overflow: 'auto' }} >
                        <table className='w3-table-all '>
                            <thead >
                                {table.getHeaderGroups().map(headerGroup => (
                                    <tr key={headerGroup.id}>
                                        {headerGroup.headers.map(header => <th key={header.id} className='border bg-[#f2f2f2]'>
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
                                            <td key={cell.id} className='border text-center'>
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
                            <button className='btn text-xs px-2 md:text-base' disabled={!table.getCanNextPage()} onClick={() => table.nextPage()}>Next </button>
                            {/* last page */}
                            <button className='btn rounded-full  ml-2 text-xs md:text-base' onClick={() => table.setPageIndex(table.getPageCount() - 1)}> <FaLessThan /></button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default YearlyInvoice;