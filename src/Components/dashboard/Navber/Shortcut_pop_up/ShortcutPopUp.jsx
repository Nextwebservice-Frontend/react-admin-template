
import { BiCustomize } from "react-icons/bi";;
import { ShortcutPopUpMenu } from "../../../../Utility/Navber/Shortcut_pop_up_menus/ShortcutPopUpMenus";
const ShortcutPopUp = ({ showSortcutPopUp,setshowSortcutPopUp }) => {

    return (
        <div className={`absolute shadow-lg rounded-lg border lg:right-24 md:right-20 right-0 z-20 -top-12 mt-10 bg-white ${showSortcutPopUp ? "popup" : "hidden"}  max-h-[90vh] overflow-y-auto`}>
            <span className='flex justify-between items-center min-w-80 max-w-80 sm:max-w-96 sm:min-w-96 text-lg p-3 text-gray-600 font-semibold opacity-70'>
                Shortcuts
                <button>
                    <BiCustomize className='text-2xl' />
                </button>
            </span>
            <div className='grid grid-cols-2 gap-0 justify-center items-center text-gray-500 mt-2 '>
                {
                    ShortcutPopUpMenu.map(item =>
                        <button onClick={()=>setshowSortcutPopUp(false)} key={item?.title} className='flex justify-center items-center font-semibold flex-col border py-4 gap-2 tracking-[.8px] hover:bg-slate-100 transition-all'>
                            <item.icon className='text-xl' />
                            {item.title}
                            <span className="-mt-[6px] font-normal block opacity-70">{item?.subTitle}</span>
                        </button>)
                }
            </div>
        </div>
    )
}

export default ShortcutPopUp
