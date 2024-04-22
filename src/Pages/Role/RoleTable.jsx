import React from 'react'
import { Link } from 'react-router-dom'

const RoleTable = () => {
    const roleAccess = [
        { name: 'user-list' },
        { name: 'user-create' },
        { name: 'user-edit' },
        { name: 'user-delete' },
        { name: 'payment-type-list' },
        { name: 'user-list' },
        { name: 'user-create' },
        { name: 'user-edit' },
        { name: 'user-delete' },
        { name: 'payment-type-list' },
        { name: 'user-list' },
        { name: 'user-create' },
        { name: 'user-edit' },
        { name: 'user-delete' },
        { name: 'payment-type-list' },
        { name: 'user-list' },
        { name: 'user-create' },
        { name: 'user-edit' },
        { name: 'user-delete' },
        { name: 'payment-type-list' },
    ]
    return (
        <>
            <h3 className="text-[28px] opacity-80 py-4 dark:text-white ">Role List</h3>
            <div className=" border dark:border-gray-600  p-0 lg:p-4 rounded-lg">
                <div id="roletable" style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 1px 1px 3px 2px' }} className="relative overflow-x-auto  rounded-sm">
                    <table className="w-full  text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-sm bg-[#DDDBFB] text-black uppercase  dark:bg-gray-500   dark:text-gray-300">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 border-r border-r-gray-300 dark:border-r-gray-600 w-[200px]"
                                >
                                    Name
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 border-r border-r-gray-300 dark:border-r-gray-600 w-[44px]"
                                >
                                    Gurd
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Permission
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white dark:bg-[#2F3249]  dark:text-gray-300 dark:border-b-gray-600  border-b  text-black hover:bg-gray-50 ">
                                <th className="relative px-6 pl-3 w-[152px] max-w-[152px] py-6 font-medium whitespace-nowrap border-r border-r-gray-300 dark:border-r-gray-600">
                                    <span className="absolute top-3 left-3">
                                        Superadmin
                                    </span>
                                </th>
                                <td className="px-6 pl-3 py-4 border-r border-r-gray-300 dark:border-r-gray-600 relative"><span className='absolute top-2 left-3'>Web</span></td>
                                <td className="px-6 py-4 border-r dark:border-none w-[994px]  lg:w-full  flex flex-wrap gap-1">
                                    {roleAccess?.map((item, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-[#0DCAF0] dark:bg-blue-600 text-white dark:text-gray-300  rounded-md text-sm font-bold p-1 py-0"
                                        >
                                            {item.name}
                                        </span>
                                    ))}
                                    {roleAccess?.map((item, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-[#0DCAF0] dark:bg-blue-600 text-white dark:text-gray-300 rounded-md text-sm font-bold p-1 py-0"
                                        >
                                            {item.name}
                                        </span>
                                    ))}
                                    {roleAccess?.map((item, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-[#0DCAF0] dark:bg-blue-600 text-white dark:text-gray-300 rounded-md text-sm font-bold p-1 py-0"
                                        >
                                            {item.name}
                                        </span>
                                    ))}
                                    {roleAccess?.map((item, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-[#0DCAF0] dark:bg-blue-600 text-white dark:text-gray-300 rounded-md text-sm font-bold p-1 py-0"
                                        >
                                            {item.name}
                                        </span>
                                    ))}
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:border-b-gray-600 dark:bg-[#2F3249]  dark:text-gray-300 text-black hover:bg-gray-50">
                                <th
                                    className={`px-6 pl-3 w-[152px] max-w-[152px] py-6 font-medium whitespace-nowrap border-r border-r-gray-300 dark:border-r-gray-600 relative group`}
                                >
                                    <span className="absolute top-3 left-3">
                                        Admin
                                    </span>
                                    <div className="absolute opacity-0 group-hover:opacity-100">
                                        <Link to={`/newrole`}>
                                            <button className="text-md font-bold text-[#0D6EFD]">
                                                Edit
                                            </button>
                                        </Link>
                                    </div>
                                </th>
                                <td className="px-6 pl-3 py-4 border-r border-r-gray-300 dark:border-r-gray-600 relative"><span className='absolute top-2 left-3'>Web</span></td>
                                <td className="px-6 py-4 border-r dark:border-none w-[994px]  lg:w-full  flex flex-wrap gap-1">
                                    {roleAccess?.map((item, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-[#0DCAF0] dark:bg-blue-600 text-white dark:text-gray-300 rounded-md text-sm font-bold p-1 py-0"
                                        >
                                            {item.name}
                                        </span>
                                    ))}
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:border-b-gray-600 text-black dark:bg-[#2F3249]  dark:text-gray-300 hover:bg-gray-50">
                                <th
                                    className={`px-6 pl-3 w-[152px] max-w-[152px] py-6 font-medium whitespace-nowrap border-r border-r-gray-300 dark: dark:border-r-gray-600 relative group`}
                                >
                                    <span className="absolute top-3 left-3">
                                        Manager
                                    </span>
                                    <div className="absolute opacity-0 group-hover:opacity-100">
                                    <Link to={`/newrole`}>
                                            <button className="text-md font-bold text-[#0D6EFD]">
                                                Edit
                                            </button>
                                        </Link>
                                    </div>
                                </th>
                                <td className="px-6 pl-3 py-4 border-r border-r-gray-300 dark:border-r-gray-600 relative"><span className='absolute top-2 left-3'>Web</span></td>
                                <td className="px-6 py-4 border-r dark:border-none w-[994px]  lg:w-full  flex flex-wrap gap-1">
                                    {roleAccess?.map((item, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-[#0DCAF0] dark:bg-blue-600 text-white dark:text-gray-300 rounded-md text-sm font-bold p-1 py-0"
                                        >
                                            {item.name}
                                        </span>
                                    ))}
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:border-b-gray-600 text-black dark:bg-[#2F3249]  dark:text-gray-300 hover:bg-gray-50">
                                <th
                                    className={`px-6 pl-3 w-[152px] max-w-[152px] py-6 font-medium whitespace-nowrap border-r border-r-gray-300 dark:border-r-gray-600 relative group`}
                                >
                                    <span className="absolute top-3 left-3">
                                        Staff
                                    </span>
                                    <div className="absolute opacity-0 group-hover:opacity-100">
                                    <Link to={`/newrole`}>
                                            <button className="text-md font-bold text-[#0D6EFD]">
                                                Edit
                                            </button>
                                        </Link>
                                    </div>
                                </th>
                                <td className="px-6 pl-3 py-4 border-r border-r-gray-300 dark:border-r-gray-600 relative"><span className='absolute top-2 left-3'>Web</span></td>
                                <td className="px-6 py-4 border-r dark:border-none w-[994px]  lg:w-full  flex flex-wrap gap-1">
                                    {roleAccess?.map((item, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-[#0DCAF0] dark:bg-blue-600 text-white dark:text-gray-300 rounded-md text-sm font-bold p-1 py-0"
                                        >
                                            {item.name}
                                        </span>
                                    ))}
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:border-none dark:bg-[#2F3249]  dark:text-gray-300 text-black hover:bg-gray-50">
                                <th
                                    className={`px-6 pl-3 w-[152px] max-w-[152px] py-6 font-medium whitespace-nowrap border-r border-r-gray-300 dark:border-r-gray-600 relative group`}
                                >
                                    <span className="absolute top-3 left-3">
                                        User
                                    </span>
                                    <div className="absolute opacity-0 group-hover:opacity-100">
                                    <Link to={`/newrole`}>
                                            <button className="text-md font-bold text-[#0D6EFD]">
                                                Edit
                                            </button>
                                        </Link>
                                    </div>
                                </th>
                                <td className="px-6 pl-3 py-4 border-r border-r-gray-300 dark:border-r-gray-600 relative"><span className='absolute top-2 left-3'>Web</span></td>
                                <td className="px-6 py-4 border-r dark:border-none w-[994px]  lg:w-full  flex flex-wrap gap-1">
                                    {roleAccess?.map((item, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-[#0DCAF0] dark:bg-blue-600 text-white dark:text-gray-300 rounded-md text-sm font-bold p-1 py-0"
                                        >
                                            {item.name}
                                        </span>
                                    ))}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default RoleTable
