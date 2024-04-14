/* eslint-disable no-unused-vars */
import React from 'react';
import YearlyInvoice2 from './YearlyInvoice2';

const YearlyInvoice = () => {
    return (
        <>
            <div className="flex flex-wrap align-items-center justify-content-between gap-2 my-5">
                <h1 className="text-xl md:text-2xl text-900 font-bold ml-4 md:ml-0">Yearly Report List</h1>
            </div>
            <YearlyInvoice2 />
        </>
    );
};

export default YearlyInvoice;