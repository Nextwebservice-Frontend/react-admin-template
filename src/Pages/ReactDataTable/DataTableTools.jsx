/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import DataTable from 'react-data-table-component';

const DataTableTools = () => {
   
    const columns = [
        {
            name:'Name',
            selector:row =>row.name,
            sortable:true

        },
        {
            name: 'Email',
            selector: row =>row.email,
            sortable: true

        }
        ,
        {
            name: 'Age',
            selector: row => row.age,
            sortable: true

        }
        ,
        {
            name: 'tAge',
            selector: row => row.tage,
            sortable: true

        },
        {
            name: 'nAge',
            selector: row => row.nage,
            sortable: true

        }
    ]

    const data = [
        {
            id:1,
            name:'stand',
            email:'dfjd@gmail.com',
            age: '20'
        },
        {
            id: 2,
            name: 'Rina',
            email: 'dfjd@gmail.com',
            age: '20'
        }
        , {
            id: 3,
            name: 'Tina',
            email: 'dfjd@gmail.com',
            age: '20'
        },
        {
            id: 4,
            name: 'Karan',
            email: 'dfjd@gmail.com',
            age: '20'
        },
        {
            id: 5,
            name: 'Nandini',
            email: 'dfjd@gmail.com',
            age: '20'
        }
        , {
            id: 6,
            name: 'Ajgor',
            email: 'dfjd@gmail.com',
            age: '20'
        }
        , {
            id: 7,
            name: 'stand',
            email: 'dfjd@gmail.com',
            age: '20'
        },
        {
            id: 8,
            name: 'astand',
            email: 'dfjd@gmail.com',
            age: '20'
        }
        , {
            id: 9,
            name: 'tstand',
            email: 'dfjd@gmail.com',
            age: '20'
        },
        {
            id: 10,
            name: 'stand',
            email: 'dfjd@gmail.com',
            age: '20'
        },
        {
            id: 11,
            name: 'astand',
            email: 'dfjd@gmail.com',
            age: '20'
        }
        , {
            id: 12,
            name: 'tstand',
            email: 'dfjd@gmail.com',
            age: '20'
        }
        , {
            id: 13,
            name: 'stand',
            email: 'dfjd@gmail.com',
            age: '20'
        },
        {
            id: 14,
            name: 'astand',
            email: 'dfjd@gmail.com',
            age: '20'
        }
        , {
            id: 15,
            name: 'tstand',
            email: 'dfjd@gmail.com',
            age: '20'
        }
    ]
    const [records, setRecords] = useState(data);
    const handleFilter = (event) => {
        const newData = records.filter(row => {
            return row.name.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setRecords(newData)

    };
    

    return (
        <div className='container mt-5'>
            <div className=''>
                <h1>type</h1>
                <input type="text" onChange={handleFilter} placeholder='type here '/>
            </div>
            <DataTable columns={columns} data={data} selectableRows fixedHeader pagination
            
            >

            </DataTable>
        </div>
    );
};

export default DataTableTools;