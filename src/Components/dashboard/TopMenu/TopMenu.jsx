import { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { permission } from "../../../Utility/Sideber/permision";
import { ContextData } from "../../../Providers/ContextProviders/ContextProviders";
import { SIderberNavLinks, SIderberNavLinksbl } from "../../../Utility/Sideber/SIderberNavLinks";
import Logo from "../Logo/Logo";

const TopMenu = () => {
    const {
        setShow,
        show,
        showText,
        mouseEnterInSIderber,
        openAccordion,
        openSubMenuAccordion,
        openSubMenuAccordion2,
        language
    } = useContext(ContextData);
    const HaveAcces = permission.map(item => `${item.name}`)
    const [sideBerlink, setSideberLink] = useState([])
    useEffect(() => {
        switch (language) {
            case 'বাংলা':
                setSideberLink(SIderberNavLinksbl)
                break;
            case 'English':
                setSideberLink(SIderberNavLinks)
                break;
            default:
                setSideberLink(SIderberNavLinks)
                break;
        }
    }, [language])
    const location = useLocation()

    //dont show if any dropdown doesnt have any content 
    useEffect(() => {
        const dropDowns = document.querySelectorAll('#dropDowns');
        if (dropDowns) {
            for (const dropDown of dropDowns) {
                // console.log(dropDown);
                const Links = dropDown.querySelectorAll('li');
                Links.length <= 0 && dropDown.parentElement.classList.add('hidden')
            }
        }
    }, []);
    useEffect(() => {
        const dropDownButtons = document.querySelectorAll('#dropDownButton')
        if (dropDownButtons) {
            for (const dropDownButton of dropDownButtons) {
                const isActive = dropDownButton.parentElement.querySelectorAll('#dropDowns .active')

                if (isActive.length > 0) {
                    for (const activeLink of isActive) {
                        activeLink.closest('#dropDowns').parentElement.querySelector('#dropDownButton').classList.add('activeLink')
                    }
                } else {
                    dropDownButton.classList.remove('activeLink')
                }
            }
        }

    }, [location.pathname, showText])
    return (
        <div
            id="dBoardSideber"
            className={`w-full mx-auto h-[100vh] overflow-y-scroll z-[70]`}>
            {/* logo   */}
            <div id="sideberScrollber"
                className={` flex justify-start items-center z-50 bg-white rounded`}>
                {/* map over all the menu group  */}
                {sideBerlink.map((item, index) => (
                    <div className="flex justify-center items-center " key={index}>
                        {/* check is there any title for this menu group or not */}
                        {Array.isArray(item?.NavItems) &&
                            item?.NavItems.map((item, index) =>
                                item?.link ? ( // checking link // if false this item has dropdown menu
                                    HaveAcces.includes(item.access) && <NavLink
                                        key={index}
                                        to={item.link}
                                        className={`my-[6px] text-[15px] hover:pl-4 hover:text-rose-500 dark:hover:text-rose-500 px-3 justify-start text-gray-600 dark:text-gray-100 hover:no-underline  transition-all py-[8px]  font-medium opacity-80  flex  items-center gap-2 hover:bg-gray-200 rounded-md tracking-wide`}
                                    >
                                        <item.icon className={`text-xl`} />
                                        {/* check show menu text or not if true then mouse entered or not */}
                                        {item?.menu}
                                    </NavLink>
                                ) : (
                                    // dropdown menus
                                    <div
                                        key={index}
                                        className={` hover:no-underline cursor-pointer`}
                                    >
                                        <li id="dropDownButton"
                                            className={`px-3 relative text-[15px] z-50 hover:text-rose-500 dark:hover:text-rose-500 text-gray-600 dark:text-gray-100 hover:no-underline transition-all py-[8px]  font-semibold opacity-80 w-fit flex items-center gap-2 hover:bg-gray-200 rounded-md my-[2px]`}

                                        >
                                            <span
                                                className={`flex justify-start items-center gap-1`}
                                            >
                                                <item.icon className={`text-xl`} />
                                                {/* check show menu text or not // if true then mouse entered or not  */}
                                                {item?.menu}
                                            </span>
                                            <IoIosArrowForward
                                                className={` text-[12px] rotate-[90deg]`}
                                            />

                                            <ul id="dropDowns"
                                                // check is accordion open or not 
                                                className={`absolute left-0 hidden overflow-hidden bg-white z-40 px-2 min-w-72`}
                                            >
                                                {Array.isArray(item.dropDown) ? ( // checking is dropdown menus is an array
                                                    <div >
                                                        {item.dropDown.map((dropDownItems, index) => {//map dropdown items
                                                            //check is there any sub dropdown menu avilable or not
                                                            return !dropDownItems.link &&
                                                                Array.isArray(dropDownItems.subMenu) ? (
                                                                <div key={index}>
                                                                    <li id="dropDownButton2"
                                                                        className={`relative`}
                                                                        key={index}
                                                                    >
                                                                        <span

                                                                            className={`${showText ? 'px-3' : mouseEnterInSIderber ? "px-3" : ''} my-[6px]  text-[15px] hover:pl-4 hover:text-rose-500 dark:hover:text-rose-500 text-gray-600 dark:text-gray-100 hover:no-underline px-1 transition-all py-2  font-semibold opacity-80 flex justify-start items-center gap-2 hover:bg-gray-200 rounded-md tracking-wide`}
                                                                        >
                                                                            <span
                                                                                className={`flex justify-start w-full items-center gap-1`}
                                                                            >
                                                                                <dropDownItems.icon className="text-[10px]" />
                                                                                {dropDownItems?.menu}
                                                                            </span>
                                                                            <IoIosArrowForward
                                                                                className={` text-[12px] rotate-[90deg]`}
                                                                            />
                                                                        </span>
                                                                        <ul id="dropDowns2"
                                                                            // check is subaccordion menu open or not 
                                                                            className={`absolute left-0 hidden overflow-hidden bg-white z-40 px-2 min-w-72`}
                                                                        >
                                                                            {/* map over all subAccordion menus  */}
                                                                            {dropDownItems.subMenu.map((subMenu, index) => {
                                                                                return !subMenu.link &&
                                                                                    Array.isArray(subMenu.subMenu2) ? <div key={index}>
                                                                                    <li id="dropDownButton"
                                                                                        
                                                                                        className={`${showText ? "" : `${mouseEnterInSIderber ? "" : "hidden"}`}`}

                                                                                    >
                                                                                        <span

                                                                                            className={`my-[6px] ${showText ? 'px-3' : mouseEnterInSIderber ? "px-3" : ''} text-[15px] hover:pl-4 hover:text-rose-500 dark:hover:text-rose-500 text-gray-600 dark:text-gray-100 hover:no-underline px-1 transition-all py-2  font-semibold opacity-80 flex justify-start items-center gap-2 hover:bg-gray-200 rounded-md tracking-wide`}
                                                                                        >
                                                                                            <span
                                                                                                className={`flex ${showText ? "justify-start" : "justify-start"} w-full items-center gap-1`}
                                                                                            >
                                                                                                <dropDownItems.icon className="text-[10px]" />
                                                                                                {showText ? subMenu?.menu : `${mouseEnterInSIderber ? subMenu?.menu : ""}`}
                                                                                            </span>
                                                                                            <IoIosArrowForward
                                                                                                className={`transition-all ${showText ? "" : `${mouseEnterInSIderber ? "" : "hidden"}`} text-[12px] ${openSubMenuAccordion2.subMenuOpen && openSubMenuAccordion2.subMenu === subMenu?.menu ? "rotate-[90deg]" : "rotate-[90deg"}`}
                                                                                            />
                                                                                        </span>
                                                                                    </li>
                                                                                    <ul //id='dropDowns'
                                                                                        // check is subaccordion menu open or not 
                                                                                        className={` ${openSubMenuAccordion2.subMenuOpen && openSubMenuAccordion2.subMenu === subMenu?.menu ? "h-full accordionOpen" : " max-h-0 "} overflow-hidden z-50 ${(openSubMenuAccordion2.prevSubMenu === subMenu?.menu && openSubMenuAccordion2.prevSubMenuOpen) || (!openSubMenuAccordion2.subMenuOpen && openSubMenuAccordion2.subMenu === subMenu?.menu) ? "accordionClose" : ""}`}
                                                                                    >
                                                                                        {subMenu.subMenu2.map((subMenu2, index) => {
                                                                                            return HaveAcces.includes(subMenu2.access) && <li
                                                                                                className={`${showText ? "" : `${mouseEnterInSIderber ? "" : "hidden"}`}`}
                                                                                                key={index}
                                                                                            >
                                                                                                <NavLink

                                                                                                    to={subMenu2.link}
                                                                                                    className={`${showText ? 'px-3' : mouseEnterInSIderber ? "px-3" : ''} my-[6px] text-[15px] hover:pl-4 hover:text-rose-500 dark:hover:text-rose-500 text-gray-600 dark:text-gray-100 hover:no-underline px-1 transition-all py-[8px]  font-semibold opacity-80 flex justify-start items-center gap-2 hover:bg-gray-200 rounded-md tracking-wide`}
                                                                                                >
                                                                                                    <subMenu.icon className="text-[10px]" /> {subMenu2.menu}
                                                                                                </NavLink>
                                                                                            </li>
                                                                                        }
                                                                                        )}
                                                                                    </ul>
                                                                                </div> : HaveAcces.includes(subMenu.access) && <li
                                                                                    className={`${showText ? "" : `${mouseEnterInSIderber ? "" : "hidden"}`}`}
                                                                                    key={index}
                                                                                >
                                                                                    <NavLink

                                                                                        to={subMenu.link}
                                                                                        className={`${showText ? 'px-3' : mouseEnterInSIderber ? "px-3" : ''} my-[6px] text-[15px] hover:pl-4 hover:text-rose-500 dark:hover:text-rose-500 text-gray-600 dark:text-gray-100 hover:no-underline px-1 transition-all py-[8px]  font-semibold opacity-80 flex justify-start items-center gap-2 hover:bg-gray-200 rounded-md tracking-wide`}
                                                                                    >
                                                                                        <subMenu.icon className="text-[10px]" /> {subMenu.menu}
                                                                                    </NavLink>
                                                                                </li>
                                                                            }
                                                                            )}
                                                                        </ul>
                                                                    </li>

                                                                </div>
                                                            ) : (//is there is no subAccordion menu then return li 
                                                                HaveAcces.includes(dropDownItems.access) && <li
                                                                    className={`${showText ? "" : `${mouseEnterInSIderber ? "" : "hidden"}`}`}
                                                                    key={index}
                                                                >
                                                                    <NavLink

                                                                        to={dropDownItems.link}
                                                                        className={`${showText ? 'px-3' : mouseEnterInSIderber ? "px-3" : ''} my-[6px] text-[15px] hover:pl-4 hover:text-rose-500 dark:hover:text-rose-500 text-gray-600  dark:text-gray-100 hover:no-underline px-1 transition-all py-[8px]  font-semibold opacity-80 flex justify-start items-center gap-2 hover:bg-gray-200 rounded-md tracking-wide`}
                                                                    >
                                                                        <dropDownItems.icon className="text-[10px]" /> {dropDownItems.menu}
                                                                    </NavLink>
                                                                </li>
                                                            );
                                                        }
                                                        )}
                                                    </div> //if dropdown menus is not an array then return empty fragment
                                                ) : (
                                                    <></>
                                                )}
                                            </ul>
                                        </li>
                                    </div>
                                )
                            )}
                    </div>
                ))}
            </div>
        </div >
    );
};
export default TopMenu