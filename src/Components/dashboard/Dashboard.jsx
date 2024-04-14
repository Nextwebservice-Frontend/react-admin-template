import Logo from "./Logo/Logo";
import "./scrollbar.css";
import { useContext, useEffect } from "react";
import { ContextData } from "../../Providers/ContextProviders/ContextProviders";
import "../../CSS/customCSS.css";
import { NavLink } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";
import { SIderberNavLinks } from "../../Utility/Sideber/SIderberNavLinks";
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
    <div id="dBoardSideber" className="w-full mx-auto ">
      <Logo show={show} setShow={setShow} />
      <div className="box-border pt-3 pl-2 h-[90vh] pr-2 overflow-y-scroll">
        {SIderberNavLinks.map((item,index) =>
          <div key={index}>
            {/* map over all the menu group  */}
            {item?.title  && <p className="font-medium uppercase opacity-85 text-sm text-gray-500">
            {showText ? item?.title : `${mouseEnterInSIderber ? item?.title : ''}`}
              </p>}
            {/* map over all the links  */}
            {Array.isArray(item?.NavItems) && item?.NavItems.map((item,index) => (item?.link) ? // checking link // if false this item has dropdown menu
              <NavLink key={index}
                // onClick={handelCloseAccordion}
                to={item.link}
                className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold opacity-80  flex justify-start items-center gap-2 hover:bg-gray-200 rounded-md tracking-wide"
              >
                <item.icon /> {showText ? item?.menu : `${mouseEnterInSIderber ? item?.menu : ''}`}
              </NavLink>
              : // dropdown menus
              <div key={index}
                className={`hover:text-gray-600 hover:no-underline cursor-pointer`}>
                <span
                  onClick={() => HandelAccorDionOpen(item?.menu)}
                  className="text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold opacity-80 flex justify-between items-center gap-2 hover:bg-gray-200 rounded-md"
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
                    <> {item.dropDown.map((dropDownItems,index) => //map dropdown items
                      <li className={`${showText ? '' : `${mouseEnterInSIderber ? '' : 'hidden'}`}`} key={index}>
                        <NavLink onClick={handelCloseAccordion}
                          to={dropDownItems.link}
                          className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold opacity-80 flex justify-start items-center gap-2 hover:bg-gray-200 rounded-md tracking-wide"
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
        )}

      </div>
    </div>

  );
};

export default Dashboard;
