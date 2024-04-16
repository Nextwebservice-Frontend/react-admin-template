import React from 'react'
import { LanguagePopUpOptions } from '../../../../Utility/Navber/Language_pop_up_options/LanguagePopUpOptions'

const LanguagePopUp = ({ showLanguagePopUp, setshowLanguagePopUp }) => {
    return (//${showLanguagePopUp ? "popup" : "hidden"}
        <div className={` ${showLanguagePopUp ? "popup" : "hidden"} py-4 shadow mt-10 rounded box-border border absolute md:right-44 z-10 sm:right-28 right-[2%] sm:-top-12 -top-8 bg-white  min-w-[96%] max-w-[96%] sm:max-w-4min-w-40 sm:min-w-40`}>
            <div className='px-4 '>
                {
                    LanguagePopUpOptions.map((item,index) =>
                        <button key={index} onClick={() => setshowLanguagePopUp(false)} className='w-full flex justify-start items-center gap-3 text-gray-500 text-base hover:text-gray-500 hover:no-underline hover:bg-slate-100 p-1 rounded-md transition-all'>
                            {item}
                        </button>)
                }
            </div>

        </div>
    )
}
export default LanguagePopUp