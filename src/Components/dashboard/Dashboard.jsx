import Logo from "./Logo/Logo";
import "./scrollbar.css";
import { useContext, useEffect, useState } from "react";
import { ContextData } from "../../Providers/ContextProviders/ContextProviders";
import "../../CSS/customCSS.css";
import { NavLink } from "react-router-dom";
import { SIderberNavLinks } from "../../Utility/Sideber/SIderberNavLinks";
import { IoIosArrowForward } from "react-icons/io";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { UserContext } from "../../Providers/UserProvider/UserProvider";

const Dashboard = () => {
  const axiosSecure  = useAxiosSecure();
  const {user} = useContext(UserContext)

  const {
    setShow,
    show,
    showText,
    setShowText,
    setOpenAccordion,
    mouseEnterInSIderber,
    openAccordion,
    openSubMenuAccordion,
    setOpenSubMenuAccordion,
    openSubMenuAccordion2,
    setOpenSubMenuAccordion2,
  } = useContext(ContextData);

  // useEffect(() => {
  //   const auth = localStorage.getItem('token')
  //   if (auth) {
  //     const getUserInfo = async () => {
  //       try {
  //         const res = await axiosSecure('/api/profile')
  //         setPermissions(res.data);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }
  //     getUserInfo();
  //   }
  // }, [axiosSecure])

  useEffect(() => {
    window.addEventListener("resize", () => {
      setShowText(true);
    });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setShowText(true);
    });
  }, []);

  // const handelCloseAccordion = () => {
  //   if (!showText && openAccordion.show) {
  //     setOpenAccordion({
  //       show: false,
  //       name: openAccordion.name,
  //     });
  //   }
  // };
  //accordian open function

  const HandelAccorDionOpen = (name) => {
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
        prevOpen: false,
        name: name,
        show: !openAccordion.show,
      });
    }
  };

  //submenu accordion open function
  const handelSubMenuAccordion = (name) => {
    if (openSubMenuAccordion.subMenu !== name) {
      setOpenSubMenuAccordion({
        prevSubMenu: openSubMenuAccordion.subMenu,
        prevSubMenuOpen: openSubMenuAccordion.subMenuOpen,
        subMenu: name,
        subMenuOpen: true,
      });
    } else {
      setOpenSubMenuAccordion({
        prevSubMenu: false,
        prevSubMenuOpen: false,
        subMenu: name,
        subMenuOpen: !openSubMenuAccordion.subMenuOpen,
      });
    }
  };
  const handelSubMenuAccordion2 = (name) => {
    // console.log(openSubMenuAccordion)
    if (openSubMenuAccordion2.subMenu !== name) {
      setOpenSubMenuAccordion2({
        prevSubMenu: openSubMenuAccordion2.subMenu,
        prevSubMenuOpen: openSubMenuAccordion2.subMenuOpen,
        subMenu: name,
        subMenuOpen: true,
      });
    } else {
      setOpenSubMenuAccordion2({
        prevSubMenu: false,
        prevSubMenuOpen: false,
        subMenu: name,
        subMenuOpen: !openSubMenuAccordion2.subMenuOpen,
      });
    }
  };

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

  const haveAccess = user?.userPermissionData?.map(item => `${item.name}`)
  haveAccess?.push('/')

  if(!haveAccess) {
    return '...'
  }



  return (
    <div
      id="dBoardSideber"
      className="w-full mx-auto ">
      <Logo show={show} setShow={setShow} />
      <div
        className={`box-border pt-3 pl-2 h-[90vh] pr-2  ${mouseEnterInSIderber ? 'overflow-y-scroll' : 'overflow-y-scroll lg:overflow-hidden'}`}>
        {/* map over all the menu group  */}
        {SIderberNavLinks.map((item, index) => (
          <div key={index}>
            {/* check is there any title for this menu group or not */}
            {item?.title && (
              <p
                className="font-medium uppercase opacity-85 text-xs pt-3 pb-1 text-gray-500">
                {/* check show menu text or not if true then mouse entered or not  */}
                {showText
                  ? item?.title
                  : `${mouseEnterInSIderber ? item?.title : ""}`}
              </p>
            )}
             {/* map over all the menu links inside of every group */}
            {Array.isArray(item?.NavItems) &&
              item?.NavItems.map((item, index) =>
                item?.link ? ( // checking link // if false this item has dropdown menu
                  haveAccess?.includes(item.access) ? <NavLink
                    key={index}
                    to={item.link}
                    className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold opacity-80  flex justify-start items-center gap-2 hover:bg-gray-200 rounded-md tracking-wide"
                  >
                    <item.icon />
                    {/* check show menu text or not if true then mouse entered or not */}
                    {showText ? item?.menu : `${mouseEnterInSIderber ? item?.menu : ""}`}
                  </NavLink> : ""
                ) : (
                  // dropdown menus
                  <div
                    key={index}
                    className={`hover:text-gray-600 hover:no-underline cursor-pointer`}
                  >
                    <span
                      //accordion open function call
                      onClick={() => HandelAccorDionOpen(item?.menu)}
                      className="text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold opacity-80 flex justify-between items-center gap-2 hover:bg-gray-200 rounded-md"
                    >
                      <span
                        className={`flex ${showText ? "justify-start" : "justify-start"} items-center gap-1`}
                      >
                        <item.icon />
                        {/* check show menu text or not if true then mouse entered or not */}
                        {showText ? item?.menu : `${mouseEnterInSIderber ? item?.menu : ""}`}
                      </span>
                      <IoIosArrowForward
                        className={`transition-all ${showText ? "" : `${mouseEnterInSIderber ? "" : "hidden"}`} text-[12px] ${openAccordion.show && openAccordion.name === item?.menu ? "rotate-[90deg]" : "rotate-[0deg]"}`}
                      />
                    </span>
                    <ul id="dropDowns"
                      // check is accordion open or not 
                      className={`ml-2 ${openAccordion.show && openAccordion.name === item?.menu ? "h-auto accordionOpen" : " max-h-0 "} overflow-hidden z-50 ${(openAccordion.prev === item?.menu && openAccordion.prevOpen) || (!openAccordion.show && openAccordion.name === item?.menu) ? "accordionClose" : ""}`}
                    >
                      {Array.isArray(item.dropDown) ? ( // checking is dropdown menus is an array
                        <>
                          {item.dropDown.map((dropDownItems, index) => {//map dropdown items
                            //check is there any sub dropdown menu avilable or not
                            return !dropDownItems.link &&
                              Array.isArray(dropDownItems.subMenu) ? (
                              <>
                                <li
                                  onClick={() => {//open sub accordion menu
                                    handelSubMenuAccordion(dropDownItems.menu);
                                  }}
                                  className={`${showText ? "" : `${mouseEnterInSIderber ? "" : "hidden"}`}`}
                                  key={index}
                                >
                                  <span

                                    className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold opacity-80 flex justify-start items-center gap-2 hover:bg-gray-200 rounded-md tracking-wide"
                                  >
                                    <span
                                      className={`flex ${showText ? "justify-start" : "justify-start"} w-full items-center gap-1`}
                                    >
                                      <dropDownItems.icon />
                                      {showText ? dropDownItems?.menu : `${mouseEnterInSIderber ? dropDownItems?.menu : ""}`}
                                    </span>
                                    <IoIosArrowForward
                                      className={`transition-all ${showText ? "" : `${mouseEnterInSIderber ? "" : "hidden"}`} text-[12px] ${openSubMenuAccordion.subMenuOpen && openSubMenuAccordion.subMenu === dropDownItems?.menu ? "rotate-[90deg]" : "rotate-[0deg"}`}
                                    />
                                  </span>
                                </li>
                                <ul
                                  // check is subaccordion menu open or not 
                                  className={` ${openSubMenuAccordion.subMenuOpen && openSubMenuAccordion.subMenu === dropDownItems?.menu ? "h-full accordionOpen" : " max-h-0 "} overflow-hidden z-50 ${(openSubMenuAccordion.prevSubMenu === dropDownItems?.menu && openSubMenuAccordion.prevSubMenuOpen) || (!openSubMenuAccordion.prevSubMenuOpen && openSubMenuAccordion.subMenu === dropDownItems?.menu) ? "" : ""}`}
                                >
                                   {/* map over all subAccordion menus  */}
                                  {dropDownItems.subMenu.map((subMenu, index) => {
                                    return !subMenu.link &&
                                      Array.isArray(subMenu.subMenu2) ? <>
                                      <li
                                        onClick={() => {//open sub accordion menu
                                          handelSubMenuAccordion2(subMenu.menu);
                                        }}
                                        className={`${showText ? "" : `${mouseEnterInSIderber ? "" : "hidden"}`}`}
                                        key={index}
                                      >
                                        <span

                                          className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold opacity-80 flex justify-start items-center gap-2 hover:bg-gray-200 rounded-md tracking-wide"
                                        >
                                          <span
                                            className={`flex ${showText ? "justify-start" : "justify-start"} w-full items-center gap-1`}
                                          >
                                            <dropDownItems.icon />
                                            {showText ? subMenu?.menu : `${mouseEnterInSIderber ? subMenu?.menu : ""}`}
                                          </span>
                                          <IoIosArrowForward
                                            className={`transition-all ${showText ? "" : `${mouseEnterInSIderber ? "" : "hidden"}`} text-[12px] ${openSubMenuAccordion2.subMenuOpen && openSubMenuAccordion2.subMenu === subMenu?.menu ? "rotate-[90deg]" : "rotate-[90deg"}`}
                                          />
                                        </span>
                                      </li>
                                      <ul
                                        // check is subaccordion menu open or not 
                                        className={` ${openSubMenuAccordion2.subMenuOpen && openSubMenuAccordion2.subMenu === subMenu?.menu ? "h-full accordionOpen" : " max-h-0 "} overflow-hidden z-50 ${(openSubMenuAccordion2.prevSubMenu === subMenu?.menu && openSubMenuAccordion2.prevSubMenuOpen) || (!openSubMenuAccordion2.prevSubMenuOpen && openSubMenuAccordion2.subMenu === subMenu?.menu) ? "" : ""}`}
                                      >
                                        {subMenu.subMenu2.map((subMenu2, index) => {
                                          return haveAccess?.includes(subMenu2.access) ? <li
                                            className={`${showText ? "" : `${mouseEnterInSIderber ? "" : "hidden"}`}`}
                                            key={index}
                                          >
                                            <NavLink

                                              to={subMenu2.link}
                                              className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold opacity-80 flex justify-start items-center gap-2 hover:bg-gray-200 rounded-md tracking-wide"
                                            >
                                              <subMenu.icon /> {subMenu2.menu}
                                            </NavLink>
                                          </li> : ''
                                        }
                                        )}
                                      </ul>
                                    </> :
                                      haveAccess?.includes(subMenu.access) ? <li
                                        className={`${showText ? "" : `${mouseEnterInSIderber ? "" : "hidden"}`}`}
                                        key={index}
                                      >
                                        <NavLink

                                          to={subMenu.link}
                                          className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold opacity-80 flex justify-start items-center gap-2 hover:bg-gray-200 rounded-md tracking-wide"
                                        >
                                          <subMenu.icon /> {subMenu.menu}
                                        </NavLink>
                                      </li> : ''
                                  }
                                  )}
                                </ul>
                              </>
                            ) : (//is there is no subAccordion menu then return li 
                              haveAccess?.includes(dropDownItems.access) ? < li
                                className={`${showText ? "" : `${mouseEnterInSIderber ? "" : "hidden"}`}`
                                }
                                key={index}
                              >
                                <NavLink

                                  to={dropDownItems.link}
                                  className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold opacity-80 flex justify-start items-center gap-2 hover:bg-gray-200 rounded-md tracking-wide"
                                >
                                  <dropDownItems.icon /> {dropDownItems.menu}
                                </NavLink>
                              </li> : ''
                            );
                          }
                          )}
                        </> //if dropdown menus is not an array then return empty fragment
                      ) : (
                        <></>
                      )}
                    </ul>
                  </div>
                )
              )}
          </div>
        ))}
      </div>
    </div >
  );
};

export default Dashboard;