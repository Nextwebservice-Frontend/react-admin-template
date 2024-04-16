import React, { useContext, useEffect, useState } from 'react'
import { CiMonitor } from 'react-icons/ci'
import { HiOutlineSun } from 'react-icons/hi'
import { IoMoonOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { ContextData } from '../../../../Providers/ContextProviders/ContextProviders'

const ThemePopUp = ({ showThemePopUp, setshowThemePopUp }) => {
    const {
        theme, 
        setTheme
    }=useContext(ContextData)
    const HTMLelement = document.getElementById('HTMLelement')
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const ThemeOptions = [
        { name: 'light', icon: HiOutlineSun },
        { name: 'dark', icon: IoMoonOutline },
        { name: 'system', icon: CiMonitor },
    ]
    const onWindoMatch = () => {
        if (localStorage.theme === 'dark' ||  darkModeQuery.matches){
            HTMLelement.classList.add('dark')
        } else {
            HTMLelement.classList.remove('dark')
        }
    }

    useEffect(() => {
        onWindoMatch()
        switch (theme) {
            case 'dark':
                HTMLelement.classList.add('dark')
                localStorage.setItem('theme', 'dark')
                break;
            case 'light':
                HTMLelement.classList.remove('dark')
                localStorage.setItem('theme', 'light')
                break;
            default:
                localStorage.setItem('theme', 'system')
                break;
        }
    }, [theme])
    return (//
        <div className={`${showThemePopUp ? "popup" : "hidden"} dark:bg-[#2F3249] dark:border-none dark:text-gray-300 py-4 shadow mt-10 rounded box-border border absolute md:right-36 z-10 sm:right-20 right-[2%] sm:-top-12 -top-8 bg-white min-w-[96%] max-w-[96%] sm:max-w-4min-w-40 sm:min-w-40`}>
            <div className='px-4 '>
                {
                    ThemeOptions.map((item, index) =>
                        <button key={index} onClick={() => {
                            setTheme(item.name)
                            setshowThemePopUp(false)
                        }} className={`w-full flex  justify-start capitalize items-center gap-3 text-gray-500 text-base hover:text-gray-500 dark:hover:bg-slate-600 hover:no-underline hover:bg-slate-100 p-1 rounded-md transition-all dark:text-gray-300`}>
                            <item.icon className='text-2xl' />
                            {item?.name}
                        </button>)
                }
            </div>

        </div>
    )
}

export default ThemePopUp