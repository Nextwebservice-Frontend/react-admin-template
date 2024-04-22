import { TfiReload } from "react-icons/tfi";
import { RxCross2 } from "react-icons/rx";
import { FiSun } from "react-icons/fi";
import { PiCloudSunLight } from "react-icons/pi";
import { MdLaptopChromebook } from "react-icons/md";
import Default from '../../../assets/default.svg';
import Default_dark from '../../../assets/default-dark.svg';
import Borderd from '../../../assets/border.svg';
import Borderd_dark from '../../../assets/border-dark.svg';
import SemiDark from '../../../assets/semi-dark.svg';
import SemiDark_dark from '../../../assets/semi-dark-dark.svg';
import Collapsed from '../../../assets/collapsed.svg';
import Collapsed_dark from '../../../assets/collapsed-dark.svg';
import Expanded from '../../../assets/expanded.svg';
import Expanded_dark from '../../../assets/expanded-dark.svg';
import StickyNav from '../../../assets/sticky.svg';
import StaticNav from '../../../assets/static.svg';
import HiddenNav from '../../../assets/hidden.svg';
import Compact from '../../../assets/compact.svg';
import Wide from '../../../assets/wide.svg';
import { useContext, useEffect, useState } from "react";
import { ContextData } from "../../../Providers/ContextProviders/ContextProviders";

const TemplateCustomizer = () => {
    const {
        theme,
        themeChangerOpen,
        setThemeChangerOpen,
        setTheme,
        navberType,
        setNavberType,
        setShowText,
        showText,
        Content,
        setContent
    } = useContext(ContextData)
    const [themeChack, setthemeChack] = useState(window.matchMedia('(prefers-color-scheme: dark)'))
    useEffect(() => {
        const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)')
        setthemeChack(darkModeQuery)
    }, [theme])
    return (
        <div id="themeChangerParent" style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 1px 1px 3px 2px' }} className={`sm:w-[400px] w-[300px] top-0 ${themeChangerOpen ? 'right-0 ThemeChangerOpen' : '-right-[400px] ThemeChangerClose'} themeChanger h-screen min-h-screen  bg-white absolute z-[60] dark:bg-[#2F3349] dark:text-gray-300`}>
            <div className="border-b">
                <div className="grid grid-cols-5 justify-between items-start p-4 px-[26px] opacity-90 ">
                    <span className="col-span-4">
                        <h4 className="text-xl font-semibold tracking-wide dark:text-[#CBCFE9]">Template Customizer</h4>
                        <p className="text-[15px] font-medium -mt-2 tracking-wide">Customize and preview in real time</p>
                    </span>
                    <span className="flex justify-around items-center text-xl pt-3 ">
                        <button>
                            <TfiReload />
                        </button>
                        <button onClick={() => setThemeChangerOpen(false)}>
                            <RxCross2 />
                        </button>
                    </span>
                </div>
                <button className="text-[#EAE8FD] bg-[#8E85F3] p-2 hover:scale-105 active:scale-95 transition-all rounded-sm ml-7 mb-4">
                    Apply Changes
                </button>
            </div>
            <div id="themeChanger" className="overflow-y-scroll lg:h-[85dvh] h-[83dvh]">
                <div className="px-[26px]">

                    <button className="button">Theming</button>
                    <h5 className="py-0 my-0 mt-1 mb-1 dark:text-gray-300">Style (Mode)</h5>
                    <span className="grid grid-cols-3 gap-6 pt-2">
                        <span onClick={() => {
                            setTheme('light')
                        }} className="cursor-pointer">
                            <button className={`border flex justify-center ${theme === 'light' ? 'border-[#8E85F3]' : ''} items-center py-4 text-2xl rounded-md w-full mb-[2px]`}>
                                <FiSun />
                            </button >
                            Light
                        </span>
                        <span onClick={() => {
                            setTheme('dark')
                        }} className="cursor-pointer">
                            <button className={`border flex justify-center ${theme === 'dark' ? 'border-[#8E85F3]' : ''} items-center py-4 text-2xl rounded-md w-full mb-[2px]`}>
                                <PiCloudSunLight />
                            </button>
                            Dark
                        </span>
                        <span onClick={() => {
                            setTheme('system')
                        }} className="cursor-pointer">
                            <button className={`border flex justify-center ${theme === 'system' ? 'border-[#8E85F3]' : ''} items-center py-4 text-2xl rounded-md w-full mb-[2px]`}>
                                <MdLaptopChromebook />
                            </button>
                            System
                        </span>
                    </span>
                    <h5 className="py-0 my-0 mt-4 mb-1 dark:text-gray-300">Themes</h5>
                    <span className="grid grid-cols-3 gap-6 pt-2">
                        <span className="cursor-pointer">
                            <div className="border rounded-md mb-[2px]">
                                <img src={theme === 'dark' || themeChack.matches ? Default_dark : Default} className=" rounded-md w-full" />
                            </div>
                            Default
                        </span>
                        <span className="cursor-pointer">
                            <div className="border rounded-md mb-[2px]">
                                <img src={theme === 'dark' || themeChack.matches ? Borderd_dark : Borderd} className=" rounded-md w-full" />
                            </div>
                            Bordered
                        </span>
                        <span className="cursor-pointer">
                            <div className="border rounded-md mb-[2px]">
                                <img src={theme === 'dark' || themeChack.matches ? SemiDark_dark : SemiDark} className=" rounded-md w-full" />
                            </div>
                            Semi Dark
                        </span>
                    </span>
                </div>
                <hr className="w-full  my-6 mb-2" />
                <div className="px-[26px]">
                    <button className="button">Layout</button>
                    <h5 className="py-0 my-0 mt-1 mb-1 dark:text-gray-300">Menu (Navigation)</h5>
                    <span className="grid grid-cols-3 gap-6 pt-2">
                        <span onClick={() => {
                            setShowText(true)
                        }} className="cursor-pointer">
                            <div className={`border rounded-md ${showText ? 'border-[#8E85F3]' : ''} mb-[2px]`}>
                                <img src={theme === 'dark' || themeChack.matches ? Expanded_dark : Expanded} className=" rounded-md w-full" />
                            </div>
                            Expanded
                        </span>
                        <span onClick={() => {
                            setShowText(false)
                        }} className="cursor-pointer">
                            <div className={`border ${showText ? '' : 'border-[#8E85F3]'} rounded-md mb-[2px]`}>
                                <img src={theme === 'dark' || themeChack.matches ? Collapsed_dark : Collapsed} className=" rounded-md w-full" />
                            </div>
                            Collapsed
                        </span>
                    </span>
                    <h5 className="py-0 my-0 mt-4 mb-1 dark:text-gray-300">Navbar Type  </h5>
                    <span className="grid grid-cols-3 gap-6 pt-2">
                        <span onClick={() => { setNavberType('sticky') }} className="cursor-pointer">
                            <div className={`border rounded-md mb-[2px] ${navberType === 'sticky' ? 'border-[#8E85F3]' : ''}`}>
                                <img src={StickyNav} className=" rounded-md w-full" />
                            </div>
                            Sticky
                        </span>
                        <span onClick={() => { setNavberType('static') }} className="cursor-pointer">
                            <div className={`border rounded-md mb-[2px] ${navberType === 'static' ? 'border-[#8E85F3]' : ''}`}>
                                <img src={StaticNav} className=" rounded-md w-full" />
                            </div>
                            Static
                        </span>
                        <span onClick={() => { setNavberType('hidden') }} className="cursor-pointer">
                            <div className={`border rounded-md mb-[2px] ${navberType === 'hidden' ? 'border-[#8E85F3]' : ''}`}>
                                <img src={HiddenNav} className=" rounded-md w-full" />
                            </div>
                            Hidden
                        </span>
                    </span>
                    <h5 className="py-0 my-0 mt-4 mb-1 dark:text-gray-300">Content</h5>
                    <span className="grid grid-cols-3 gap-6 pt-2">
                        <span onClick={()=>{
                            setContent(true)
                        }} className="cursor-pointer">
                         
                         <div className={`border ${Content?'border-[#8E85F3]':''} rounded-md mb-[2px]`}>
                                <img src={Compact} className=" rounded-md w-full" />
                            </div>
                            Compact
                        </span>
                        <span  onClick={()=>{
                            setContent(false)
                        }} className="cursor-pointer">
                          <div className={`border ${Content?'':'border-[#8E85F3]'} rounded-md mb-[2px]`}>
                                <img src={Wide} className=" rounded-md w-full" />
                            </div>
                            Wide
                        </span>
                    </span>
                </div>
            </div>

        </div>
    )
}

export default TemplateCustomizer