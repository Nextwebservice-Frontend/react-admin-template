
import { MdOutlineDataset } from "react-icons/md";
import { IoListOutline } from "react-icons/io5";
import { MdMedicalInformation } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";
import { MdGroup } from "react-icons/md";
import { BsCash } from "react-icons/bs";
import { MdMeetingRoom } from "react-icons/md";
const ShortcutPopUp = ({showSortcutPopUp}) => {
    return (
        <div className={`absolute shadow-lg rounded-lg border lg:right-32 md:right-10 right-0 z-20 -top-12 mt-10 bg-white ${showSortcutPopUp ? "popup":"hidden"}`}>
            <span className='flex justify-between items-center min-w-80 max-w-80 text-lg p-3'>
                Shortcut
                <button>
                    <MdOutlineDataset className='text-2xl' />
                </button>
            </span>
            <div className='grid grid-cols-2 gap-0 justify-center items-center text-gray-500 mt-2 '>
                <button className='flex justify-center items-center flex-col border py-7 gap-2 tracking-[.8px]'>
                    <IoListOutline className='text-xl' />
                    Category
                </button>
                <button className='flex justify-center items-center flex-col border py-7 gap-2 tracking-[.8px]'>
                    <MdMedicalInformation className='text-xl' />
                    Service
                </button>
                <button className='flex justify-center items-center flex-col border py-7 gap-2 tracking-[.8px]'>
                    <MdGroup className='text-xl' />
                    Client
                </button>
                <button className='flex justify-center items-center flex-col border py-7 gap-2 tracking-[.8px]'>
                    <FaUserGroup className='text-xl' />
                    Provider
                </button>
                <button className='flex justify-center items-center flex-col border py-7 gap-2 tracking-[.8px]'>
                    <BsCash className='text-xl' />
                    Payment Type
                </button>
                <button className='flex justify-center items-center flex-col border py-7 gap-2 tracking-[.8px]'>
                    <MdMeetingRoom className='text-xl' />
                    Branch
                </button>
            </div>
        </div>
    )
}

export default ShortcutPopUp
