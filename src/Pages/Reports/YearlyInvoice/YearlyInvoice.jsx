/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { FilterMatchMode } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { CustomerService } from './YearlyInvoiceData/InvoiceData';

const YearlyInvoice = () => {
    const [customers, setCustomers] = useState(null);
    console.log(customers);
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        'country.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        representative: { value: null, matchMode: FilterMatchMode.IN },
        status: { value: null, matchMode: FilterMatchMode.EQUALS },
        verified: { value: null, matchMode: FilterMatchMode.EQUALS }
    });
    const [loading, setLoading] = useState(true);
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    useEffect(() => {
        CustomerService.getCustomersMedium().then((data) => {
            setCustomers(getCustomers(data));
            setLoading(false);
        });
    }, []);
    const getCustomers = (data) => {
        return [...(data || [])].map((d) => {
            d.date = new Date(d.date);
            return d;
        });
    };
    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };
        _filters['global'].value = value;
        setFilters(_filters);
        setGlobalFilterValue(value);
    };
    const renderHeader = () => {
        return (
            <>
                <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0 md:border mb-4 w-full'>
                    <div className='flex border md:border-none w-full'>
                        <button className='btn rounded-none border-none text-blue-600 bg-[#f7f7f7]'>ALL</button>
                        <button className='w-[100%]  bg-[#f7f7f7]'></button>
                    </div>
                    <button className='btn rounded-none bg-success text-white'>Report List</button>
                </div>
            </>
        );
    };
    const countryBodyTemplate = (rowData) => {
        return (
            <div className="flex align-items-center justify-center gap-2">
                <img alt="flag" src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`flag flag-${rowData.country.code}`} style={{ width: '24px' }} />
                <span>{rowData.country.name}</span>
            </div>
        );
    };
    const header = renderHeader();
    return (
        <>
            <div className="card px-5  py-5 ">
                <div className="flex flex-wrap align-items-center justify-content-between gap-2 my-5">
                    <h1 className="text-xl md:text-2xl text-900 font-bold ml-4 md:ml-0">Yearly Report List</h1>
                </div>
                <div className="flex flex-col justify-content-end border p-4 mb-5 rounded-lg">
                    <h1 className='mb-2 w-full text-xl'>Search Here <span className='text-red-500'>(Required)</span></h1>
                    <span className="p-input-icon-left ">
                        <i className="pi pi-search" />
                        <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" className='w-full border mb-5 h-[40px] text-lg text-lg' />
                    </span>
                </div>
                {/* Data table */}
                <DataTable className='border p-4' value={customers} paginator rows={5} dataKey="id" filters={filters} filterDisplay="row" loading={loading}
                    globalFilterFields={['name', 'country.name', 'representative.name', 'status']} header={header} emptyMessage="No customers found." tableStyle={{ minWidth: '70rem' }}  >
                    {/* Invoice Id col */}
                    <Column headerStyle={{ border: '1px solid gray', textTransform: 'uppercase', fontWeight: 'bold', backgroundColor: '#f2f2f2', padding: '8px ' }} className='border text-center' field="name" header="Invoice ID" style={{ minWidth: '6rem', backgroundColor: '#f2f2f2' }} />
                    {/* CLIENT (2nd col )*/}
                    <Column headerStyle={{ border: '1px solid gray', textTransform: 'uppercase', fontWeight: 'bold', backgroundColor: '#f2f2f2' }} className='border text-center' header="CLIENT" filterField="country.name" style={{ minWidth: '6rem', backgroundColor: '#f2f2f2' }} body={countryBodyTemplate} />
                    {/* QTY 3rd col */}
                    <Column headerStyle={{ border: '1px solid gray', textTransform: 'uppercase', fontWeight: 'bold', backgroundColor: '#f2f2f2' }} className='border text-center' header="QTY" style={{ minWidth: '6rem', backgroundColor: '#f2f2f2' }} />
                    {/*NET amount 4th col */}
                    <Column headerStyle={{ border: '1px solid gray', textTransform: 'uppercase', fontWeight: 'bold', backgroundColor: '#f2f2f2' }} className='border text-center ' field="status" header="NET amount" style={{ minWidth: '6rem', backgroundColor: '#f2f2f2' }} />
                    {/*paid amount (5) col */}
                    <Column headerStyle={{ border: '1px solid gray', textTransform: 'uppercase', fontWeight: 'bold', backgroundColor: '#f2f2f2' }} className='border text-center ' field="status" header="Paid amount" style={{ minWidth: '6rem', backgroundColor: '#f2f2f2' }} />
                    {/*Due amount (6) col */}
                    <Column headerStyle={{ border: '1px solid gray', textTransform: 'uppercase', fontWeight: 'bold', backgroundColor: '#f2f2f2' }} className='border text-center ' field="status" header="Due amount" style={{ minWidth: '6rem', backgroundColor: '#f2f2f2' }} />
                    {/*Change amount (7) col */}
                </DataTable>
            </div>
        </>
    );
};

export default YearlyInvoice;