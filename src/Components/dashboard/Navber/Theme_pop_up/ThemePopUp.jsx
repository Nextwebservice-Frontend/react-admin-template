import React from 'react'
import { CiMonitor } from 'react-icons/ci'
import { HiOutlineSun } from 'react-icons/hi'
import { IoMoonOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const ThemePopUp = ({ showThemePopUp, setshowThemePopUp }) => {
    return (//
        <div className={`${showThemePopUp ? "popup" : "hidden"} py-4 shadow mt-10 rounded box-border border absolute md:right-36 z-10 sm:right-20 right-0 -top-12 bg-white min-w-full max-w-full sm:max-w-4min-w-40 sm:min-w-40`}>
            <div className='px-4 '>
                <button onClick={() => setshowThemePopUp(false)} className='w-full flex justify-start items-center gap-3 text-gray-500 text-base hover:text-gray-500 hover:no-underline hover:bg-slate-100 p-1 rounded-md transition-all'>
                    <HiOutlineSun className='text-2xl' />
                    Light
                </button>
                <button onClick={() => setshowThemePopUp(false)} className='w-full flex justify-start items-center gap-3 text-gray-500 text-base hover:text-gray-500 hover:no-underline hover:bg-slate-100 p-1 rounded-md transition-all'>
                    <IoMoonOutline className='text-2xl' />
                    Dark
                </button>
                <button onClick={() => setshowThemePopUp(false)} className='w-full flex justify-start items-center gap-3 text-gray-500 text-base hover:text-gray-500 hover:no-underline hover:bg-slate-100 p-1 rounded-md transition-all'>
                    <CiMonitor className='text-2xl' />
                    System
                </button>
            </div>

        </div>
    )
}

export default ThemePopUp