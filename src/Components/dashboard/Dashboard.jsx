import Logo from "./Logo/Logo";
import "./scrollbar.css";
import { useContext, useEffect } from "react";
import { ContextData } from "../../Providers/ContextProviders/ContextProviders";
import { IoIosMenu } from "react-icons/io";
import "../../CSS/customCSS.css";
import { Link, NavLink } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdLaptopMac } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import { FaRegCircle } from "react-icons/fa";
import { MdOutlineLocalMall } from "react-icons/md";
import { MdOutlineNoteAdd } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";
import { appsAndPagesLinks } from "../../Utility/Sideber/SIderberNavLinks";
const Dashboard = () => {
  const {
    setShow,
    show,
    showText,
    setShowText,
    setOpenAccordion,
    mouseEnterInSIderber,
    openAccordion,
  } = useContext(ContextData);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setShowText(true);
    });
  }, []);
  const handelCloseAccordion = () => {
    if (!showText && openAccordion.show) {
      setOpenAccordion({
        show: false,
        name: openAccordion.name
      });
    }
  }
  //accordian open function
  const HandelAccorDionOpen = (name) => {
    console.log(name)
    if (openAccordion.name !== name) {
      setOpenAccordion({
        prev: openAccordion.name,
        prevOpen: openAccordion.show,
        name: name,
        show: true,
      });
    } else {
      setOpenAccordion({
        prev: false,
        name: name,
        prevOpen: false,
        show: !openAccordion.show,
      });
    }
  }
  return (
    <div id="dBoardSideber" className="w-full mx-auto">
      <Logo show={show} setShow={setShow} />
      <div className="box-border pt-14 pl-2">
        {/* map over all the links  */}
        {appsAndPagesLinks.map(item => (item?.link) ? // checking link // if false this item has dropdown menu
          <NavLink key={item?.link}
            onClick={handelCloseAccordion}
            to={item.link}
            className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold  flex justify-start items-center gap-2 hover:bg-gray-200 rounded-md"
          >
            <item.icon /> {showText ? item?.menu : `${mouseEnterInSIderber ? item?.menu : ''}`}
          </NavLink>
          : // dropdown menus
          <div key={item?.link}
            className={`hover:text-gray-600 hover:no-underline cursor-pointer`}>
            <span
              onClick={() => HandelAccorDionOpen(item?.menu)}
              className="text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-between items-center gap-2 hover:bg-gray-200 rounded-md"
            >
              <span
                className={`flex ${showText ? 'justify-start' : 'justify-center'}  items-center gap-1`}>
                <item.icon />
                {showText ? item?.menu : `${mouseEnterInSIderber ? item?.menu : ''}`}
              </span>
              <IoIosArrowUp
                className={`transition-all ${showText ? '' : `${mouseEnterInSIderber ? '' : 'hidden'}`} text-[12px] ${openAccordion.show && openAccordion.name === item?.menu ? "rotate-[0deg]" : "rotate-[180deg]"}`}
              />
            </span>
            <ul
              className={`ml-2 ${openAccordion.show && openAccordion.name === item?.menu
                ? "h-auto accordionOpen"
                : " max-h-0 "
                } overflow-hidden z-50 ${((openAccordion.prev === item?.menu && openAccordion.prevOpen) || (!openAccordion.show && openAccordion.name === item?.menu)) ? 'accordionClose' : ''}`}
            >
              {Array.isArray(item.dropDown) ? // checking is dropdown menus is an array 
                <> {item.dropDown.map(dropDownItems => //map dropdown items
                  <li className={`${showText ? '' : `${mouseEnterInSIderber ? '' : 'hidden'}`}`} key={dropDownItems?.link}>
                    <NavLink onClick={handelCloseAccordion}
                      to={dropDownItems.link}
                      className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-gray-200 rounded-md"
                    >
                      <dropDownItems.icon />  {dropDownItems.menu}
                    </NavLink>
                  </li>
                )}
                </> : //if dropdown menus is not an array then return empty fragment
                <></>
              }
            </ul>
          </div>


        )}
      </div>
    </div>

  );
};

export default Dashboard;
