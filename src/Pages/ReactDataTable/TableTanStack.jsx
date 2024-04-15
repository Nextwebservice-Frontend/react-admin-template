/* eslint-disable no-unused-vars */
import React, { useMemo, useState } from 'react';
import { useReactTable, getCoreRowModel, flexRender,getPaginationRowModel,getSortedRowModel, getFilteredRowModel } from '@tanstack/react-table';
import JsonData from '../../../public/rowData.json'
import {DateTime} from 'luxon'

const TableTanStack = () => {
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
            cell : info => DateTime.fromISO(info.getValue()).toLocaleString(DateTime.DATE_MED),

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
        sorting:sorting,
        globalFilter:filtering
    },
    onSortingChange:setSorting,
    onGlobalFilterChange: setFiltering
    })
    return (
        <>
            <div className='w3-container'>
                <input type="text my-5 py-10" value={filtering} onChange={(e) => setFiltering(e.target.value)} placeholder='type here' />
                <table className='w3-table-all'>
                    <thead>
                        {table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map(header => <th key={header.id}>
                                    {flexRender(
                                        header.column.columnDef.header, header.getContext()
                                    )}

                                    {
                                        {
                                            asc:'asc',desc:'desc'
                                        }[header.column.getIsSorted()?? null]
                                    }
                                </th>)}

                            </tr>

                        ))}

                    </thead>
                  
                    <tbody>
                        {table.getRowModel().rows.map(row =>(
                            <tr key={row.id}>
                                {row.getVisibleCells().map(cell =>(
                                    <td key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell,cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))}
                        
                    </tbody>
                </table>
                <div>
                    <button className='btn' onClick={() => table.setPageIndex(0)}>First page</button>
                    <button className='btn' disabled={!table.getCanPreviousPage()} onClick={() =>table.previousPage()}>Previous page</button>
                    <button className='btn' disabled={!table.getCanNextPage()} onClick={() =>table.nextPage()}>Next page</button>
                    <button className='btn' onClick={() =>table.setPageIndex(table.getPageCount()-1)}>Last page</button>
                </div>
            </div>
        </>
    );
};

export default TableTanStack;