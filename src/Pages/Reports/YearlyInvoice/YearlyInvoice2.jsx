/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { FilterMatchMode } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';
import { CustomerService } from './YearlyInvoiceData/InvoiceData';



const YearlyInvoice2 = () => {
    const [customers, setCustomers] = useState(null);
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
    const [representatives] = useState([
        { name: 'Amy Elsner', image: 'amyelsner.png' },
        { name: 'Anna Fali', image: 'annafali.png' },
        { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
        { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
        { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
        { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
        { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
        { name: 'Onyama Limba', image: 'onyamalimba.png' },
        { name: 'Stephen Shaw', image: 'stephenshaw.png' },
        { name: 'XuXue Feng', image: 'xuxuefeng.png' }
    ]);
    const [statuses] = useState(['unqualified', 'qualified', 'new', 'negotiation', 'renewal']);

    const getSeverity = (status) => {
        switch (status) {
            case 'unqualified':
                return 'danger';

            case 'qualified':
                return 'success';

            case 'new':
                return 'info';

            case 'negotiation':
                return 'warning';

            case 'renewal':
                return null;
        }
    };

    useEffect(() => {
        CustomerService.getCustomersMedium().then((data) => {
            setCustomers(getCustomers(data));
            setLoading(false);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
                <div className="flex flex-col justify-content-end border p-4 mb-5 ">
                    <h1 className='mb-2 w-full text-xl'>Select Year <span className='text-red-500'>(Required)</span></h1>
                    <span className="p-input-icon-left ">
                        <i className="pi pi-search" />
                        <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" className='w-full border mb-5 h-[40px] text-lg' />
                    </span>
                </div>
                <div className='border-x border-t p-4'>
                    <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0 md:border mb-4 w-full'>
                        <div className='flex border md:border-none w-full'>
                            <button className='btn rounded-none border-none text-blue-600 bg-[#f7f7f7]'>ALL</button>
                            <button className='w-[100%]  bg-[#f7f7f7]'></button>
                        </div>
                        <button className='btn rounded-none bg-success text-white'>Report List</button>
                    </div>
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
    const representativeBodyTemplate = (rowData) => {
        const representative = rowData.representative;
        return (
            <div className="flex align-items-center justify-center gap-2">
                <img alt={representative.name} src={`https://primefaces.org/cdn/primereact/images/avatar/${representative.image}`} width="32" />
                <span>{representative.name}</span>
            </div>
        );
    };
    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.status} severity={getSeverity(rowData.status)} />;
    };
    const header = renderHeader();
    return (
        <>
            <div className="card px-5  py-5 ">
                <DataTable className='' value={customers} paginator rows={5} dataKey="id" filters={filters} filterDisplay="row" loading={loading}
                    globalFilterFields={['name', 'country.name', 'representative.name', 'status']} header={header} emptyMessage="No customers found." tableStyle={{ minWidth: '80vw' }}  >
                    {/* Invoice Id col */}
                    <Column headerStyle={{ border: '1px solid gray', textTransform: 'uppercase', fontWeight: 'bold', backgroundColor: '#f2f2f2', padding: '8px ' }} className='border text-center' field="name" header="Invoice ID" style={{ minWidth: '10%' }} />
                    {/* CLIENT (2nd col )*/}
                    <Column headerStyle={{ border: '1px solid gray', textTransform: 'uppercase', fontWeight: 'bold', backgroundColor: '#f2f2f2' }} className='border text-center' header="CLIENT" filterField="country.name" style={{ minWidth: '5%' }} body={countryBodyTemplate} />
                    {/* QTY 3rd col */}
                    <Column headerStyle={{ border: '1px solid gray', textTransform: 'uppercase', fontWeight: 'bold', backgroundColor: '#f2f2f2' }} className='border text-center' header="QTY" style={{ minWidth: '10%' }} />
                    {/*NET amount 4th col */}
                    <Column headerStyle={{ border: '1px solid gray', textTransform: 'uppercase', fontWeight: 'bold', backgroundColor: '#f2f2f2' }} className='border text-center ' field="status" header="NET amount" style={{ minWidth: '25%' }} />
                    {/*paid amount (5) col */}
                    <Column headerStyle={{ border: '1px solid gray', textTransform: 'uppercase', fontWeight: 'bold', backgroundColor: '#f2f2f2' }} className='border text-center ' field="status" header="Paid amount" style={{ minWidth: '25%' }} />
                    {/*Due amount (6) col */}
                    <Column headerStyle={{ border: '1px solid gray', textTransform: 'uppercase', fontWeight: 'bold', backgroundColor: '#f2f2f2' }} className='border text-center ' field="status" header="Due amount" style={{ minWidth: '25%' }} />
                    {/*Change amount (7) col */}
                    
                </DataTable>
            </div>
        </>
    );
};

export default YearlyInvoice2;