/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { ProductService } from './ProductService';

const ServiceList2 = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []);
    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };
    const imageBodyTemplate = (product) => {
        return <img src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.image} className="w-[70px] h-[50px] my-4 mx-auto shadow-2 border-round " />;
    };
    const priceBodyTemplate = (product) => {
        return formatCurrency(product.price);
    };
    const ratingBodyTemplate = (product) => {
        return <Rating value={product.rating} readOnly cancel={false} />;
    };
    const statusBodyTemplate = (product) => {
        return <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>;
    };
    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };
    const header = (
        <>
            <div className='flex border mb-4 '>
                <button className='btn rounded-none border-none text-blue-600 bg-[#f7f7f7]'>ALL</button>
                <button className='btn rounded-none border-none text-blue-600 bg-[#f7f7f7]'>Active</button>
                <button className='btn rounded-none border-none text-blue-600 bg-[#f7f7f7]'>Inactive</button>
                <button className='w-[70%]  bg-[#f7f7f7]'></button>
                <button className='btn rounded-none bg-success text-white'>New Service</button>
            </div>
        </>
    );
    const footer = `In total there are ${products ? products.length : 0} products.`;

    return (
        <>
            <div className="card border p-4">
                <DataTable className='' value={products} header={header} footer={footer} tableStyle={{ minWidth: '60rem' }}>
                    {/* image column */}
                    <Column header="Image" headerStyle={{ border: '1px solid gray', textTransform: 'uppercase', textAlign: 'center', fontWeight: 'bold', backgroundColor: '#f2f2f2', padding: '8px' }} className='border' body={imageBodyTemplate}></Column>
                    {/* category name column */}
                    <Column field="category" className='border  text-center' header="Category Name" headerStyle={{ border: '1px solid gray', textTransform: 'uppercase', textAlign: 'center', fontWeight: 'bold', backgroundColor: '#f2f2f2', padding: '8px' }}></Column>
                    {/* service name column */}
                    <Column field="price" className='border  text-center' header="Service Name" headerStyle={{ border: '1px solid gray', textTransform: 'uppercase', textAlign: 'center', fontWeight: 'bold', backgroundColor: '#f2f2f2', padding: '8px' }} body={priceBodyTemplate}></Column>
                    {/*service price column */}
                    <Column field="price" className='border text-center' header="Service Price" headerStyle={{ border: '1px solid gray', textTransform: 'uppercase', textAlign: 'center', fontWeight: 'bold', backgroundColor: '#f2f2f2', padding: '8px' }} body={priceBodyTemplate}></Column>
                    <Column header="Status" headerStyle={{ border: '1px solid gray', textTransform: 'uppercase', textAlign: 'right', fontWeight: 'bold', backgroundColor: '#f2f2f2', padding: '8px' }} className='border text-center' body={statusBodyTemplate}></Column>



                </DataTable>
            </div>

        </>
    );
};

export default ServiceList2;