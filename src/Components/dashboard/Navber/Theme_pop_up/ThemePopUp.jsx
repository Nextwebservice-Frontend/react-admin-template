import React, { useEffect, useState } from 'react'
import { CiMonitor } from 'react-icons/ci'
import { HiOutlineSun } from 'react-icons/hi'
import { IoMoonOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const ThemePopUp = ({ showThemePopUp, setshowThemePopUp }) => {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme')
    )
    const HTMLelement = document.getElementById('HTMLelement')
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const ThemeOptions = [
        { name: 'light', icon: HiOutlineSun },
        { name: 'dark', icon: IoMoonOutline },
        { name: 'system', icon: CiMonitor },
    ]
    const onWindoMatch = () => {
        if (localStorage.theme === 'dark' ||  darkModeQuery.matches){
            console.log
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
        <div className={`${showThemePopUp ? "popup" : "hidden"} py-4 shadow mt-10 rounded box-border border absolute md:right-36 z-10 sm:right-20 right-0 -top-12 bg-white min-w-full max-w-full sm:max-w-4min-w-40 sm:min-w-40`}>
            <div className='px-4 '>
                {
                    ThemeOptions.map((item, index) =>
                        <button key={index} onClick={() => {
                            setTheme(item.name)
                            setshowThemePopUp(false)
                        }} className={`w-full flex ${theme === item.name ? 'bg-[#978EF4] text-white' : ''} justify-start capitalize items-center gap-3 text-gray-500 text-base hover:text-gray-500 hover:no-underline hover:bg-slate-100 p-1 rounded-md transition-all`}>
                            <item.icon className='text-2xl' />
                            {item?.name}
                        </button>)
                }
            </div>

        </div>
    )
}

export default ThemePopUp