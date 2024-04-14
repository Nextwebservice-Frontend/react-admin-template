import avatar from '../../../../assets/avator.jpg'
import { IoMdHelpCircleOutline } from "react-icons/io";
import { Link } from 'react-router-dom';
import { CiSettings } from "react-icons/ci";
import { CiCreditCard1 } from "react-icons/ci";
import { TbUserCheck } from "react-icons/tb";
import { TbCurrencyDollar } from "react-icons/tb";
import { IoLogOutOutline } from "react-icons/io5";
const ProfilePopUp = ({ showProfiePopUp, setShowprofilePopUp }) => {
    return (
        <div className={`py-4 shadow mt-10 rounded box-border border absolute md:right-20 z-10 right-12 -top-12 bg-white ${showProfiePopUp ? "popup" : "hidden"}`}>
            <div onClick={() => { setShowprofilePopUp(false) }} className=' flex justify-start items-center p-2 rounded-md cursor-pointer gap-3 pr-24 hover:bg-slate-100  transition-all'>
                <div className="relative ">
                    <span className="absolute bottom-0 right-0 w-3 h-3 dark:bg-green-400 border rounded-full dark:text-gray-800 dark:border-gray-50"></span>
                    <img src={avatar} alt="" className="w-10 h-10 border rounded-full dark:bg-gray-500 dark:border-gray-300" />
                </div>
                <span>
                    <p className='text-gray-500 font-medium text-base'>john doe</p>
                    <p className='text-gray-500 text-sm -mt-1 opacity-85'> Admin</p>
                </span>
            </div>
            <hr className='my-3 w-full' />
            <div className='px-4 '>
                <Link onClick={() => { setShowprofilePopUp(false) }} to='/profile' className='flex justify-start items-center gap-3 text-gray-500 text-base hover:text-gray-500 hover:no-underline hover:bg-slate-100 p-1 rounded-md transition-all'>
                    <TbUserCheck className='text-2xl' />
                    My profile
                </Link>
                <Link onClick={() => { setShowprofilePopUp(false) }} to='/profile' className='flex justify-start items-center gap-3 text-gray-500 text-base hover:text-gray-500 hover:no-underline hover:bg-slate-100 p-1 rounded-md transition-all'>
                    <CiSettings className='text-2xl' />
                    Settings
                </Link>
                <Link onClick={() => { setShowprofilePopUp(false) }} to='/profile' className='flex justify-start items-center gap-3 text-gray-500 text-base hover:text-gray-500 hover:no-underline hover:bg-slate-100 p-1 rounded-md transition-all'>
                    <CiCreditCard1 className='text-2xl' />
                    Billing
                </Link>
            </div>
            <hr className='my-3 w-full' />
            <div className='px-4 '>
                <Link onClick={() => { setShowprofilePopUp(false) }} to='/profile' className='flex justify-start items-center gap-3 text-gray-500 text-base hover:text-gray-500 hover:no-underline hover:bg-slate-100 p-1 rounded-md transition-all'>
                    <IoMdHelpCircleOutline className='text-2xl' />
                    FAQ
                </Link>
                <Link onClick={() => { setShowprofilePopUp(false) }} to='/profile' className='flex justify-start items-center gap-3 text-gray-500 text-base hover:text-gray-500 hover:no-underline hover:bg-slate-100 p-1 rounded-md transition-all'>
                    <TbCurrencyDollar className='text-2xl' />
                    Pricing
                </Link>

            </div>
            <hr className='my-3 w-full' />
            <div className='px-4 '>
                <Link onClick={() => { setShowprofilePopUp(false) }} to='/profile' className='flex justify-start items-center gap-3 text-gray-500 text-base hover:text-gray-500 hover:no-underline hover:bg-slate-100 p-1 rounded-md transition-all'>
                    <IoLogOutOutline className='text-2xl' />
                    Log Out
                </Link>
            </div>
        </div>
    )
}

export default ProfilePopUp
