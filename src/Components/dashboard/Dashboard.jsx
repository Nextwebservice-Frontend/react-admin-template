import Logo from "./Logo/Logo";
import "./scrollbar.css";
import { useContext, useEffect } from "react";
import { ContextData } from "../../Providers/ContextProviders/ContextProviders";
import { IoIosMenu } from "react-icons/io";
import "../../CSS/customCSS.css";
import { NavLink } from "react-router-dom";
import { SIderberNavLinks } from "../../Utility/Sideber/SIderberNavLinks";
import { IoIosArrowForward } from "react-icons/io";
const Dashboard = () => {
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
    useEffect(() => {
        window.addEventListener("resize", () => {
            setShowText(true);
        });
    }, []);

    return (
        <div id="dBoardSideber"
            className={`${show ? "lg:w-full w-[270px]" : "w-3"
                }  absolute lg:w-full lg:relative ${showText ? "" : "w-14"} no-underline text-gray-600`}
        >
            <button
                onClick={() => {
                    setShowText(true);
                    setShow(!show);
                }}
                className={`p-2 ml-5 text-gray-600 font-bold rounded-full flex  absolute top-4 lg:hidden  text-3xl  `}
            >
                <IoIosMenu />
            </button>

            <div
                style={{ transition: "1s" }}
                className={`h-screen p-2 border bg-white overflow-y-scroll relative z-10 lg:static  ${show ? "right-0" : "right-96"
                    }  `}
            >
                <div className="   ">
                    <Logo show={show} setShow={setShow} />
                    <hr />
                    <nav>
                        <NavLink
                            to={"/"}
                            className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold  flex justify-start items-center gap-2 hover:bg-slate-100"
                        >
                            <LuLayoutDashboard /> {showText ? "Dashboard" : ""}
                        </NavLink>
                        <NavLink
                            to={"/"}
                            className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-slate-100"
                        >
                            <MdLaptopMac /> {showText ? "Ticket" : ""}
                        </NavLink>

                        <NavLink className={`hover:text-gray-600 hover:no-underline`}>
                            <span
                                onClick={() => {
                                    setOpenAccordion({
                                        name: "Others",
                                        show: !openAccordion.show,
                                    });
                                }}
                                className="text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-between items-center gap-2 hover:bg-slate-100"
                            >
                                <span className="flex justify-start items-center gap-2">
                                    {" "}
                                    <AiOutlineLogout />
                                    {showText ? "Others" : ""}{" "}
                                </span>
                                <FaGreaterThan
                                    className={`transition-all text-[9px] ${openAccordion.show && openAccordion.name === "Others"
                                            ? "rotate-[-90deg]"
                                            : "rotate-[90deg]"
                                        }`}
                                />
                            </span>
                            <ul
                                className={`ml-2 ${showText ? "" : "absolute left-11 min-w-44"
                                    } ${openAccordion.show && openAccordion.name === "Others"
                                        ? "h-auto   accordionOpen"
                                        : "h-0"
                                    } overflow-hidden`}
                            >
                                <li>
                                    <NavLink
                                        to={"/"}
                                        className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-slate-100"
                                    >
                                        <FaRegCircle /> Route List
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={"/"}
                                        className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-slate-100"
                                    >
                                        <FaRegCircle /> Seat plan
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={"/"}
                                        className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-slate-100"
                                    >
                                        <FaRegCircle /> Dropping point
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={"/"}
                                        className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-slate-100"
                                    >
                                        <FaRegCircle /> Boarding Point
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={"/"}
                                        className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-slate-100"
                                    >
                                        <FaRegCircle /> Unit list
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={"/"}
                                        className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-slate-100"
                                    >
                                        <FaRegCircle /> Bus List
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={"/"}
                                        className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-slate-100"
                                    >
                                        <FaRegCircle /> Bus Type
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={"/"}
                                        className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-slate-100"
                                    >
                                        <FaRegCircle /> Trip List
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={"/"}
                                        className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-slate-100"
                                    >
                                        <FaRegCircle /> Policy List
                                    </NavLink>
                                </li>
                            </ul>
                        </NavLink>

                        <NavLink className={`hover:text-gray-600 hover:no-underline`}>
                            <span
                                onClick={() => {
                                    setOpenAccordion({
                                        name: "Expense",
                                        show: !openAccordion.show,
                                    });
                                }}
                                className="text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-between items-center gap-2 hover:bg-slate-100"
                            >
                                <span className="flex justify-start items-center gap-2">
                                    <MdOutlineLocalMall />
                                    {showText ? "Expense" : ""}{" "}
                                </span>
                                <FaGreaterThan
                                    className={`transition-all text-[9px] ${openAccordion.show && openAccordion.name === "Expense"
                                            ? "rotate-[-90deg]"
                                            : "rotate-[90deg]"
                                        }`}
                                />
                            </span>
                            <ul
                                className={`ml-2 ${showText ? "" : "absolute left-11 min-w-44"
                                    } ${openAccordion.show && openAccordion.name === "Expense"
                                        ? "h-auto   accordionOpen"
                                        : "h-0"
                                    } overflow-hidden`}
                            >
                                <li>
                                    <NavLink
                                        to={"/expenseList"}
                                        className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-slate-100"
                                    >
                                        <FaRegCircle /> Category List
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={"/expenseList"}
                                        className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-slate-100"
  const handelCloseAccordion = () => {
    if (!showText && openAccordion.show) {
      setOpenAccordion({
        show: false,
        name: openAccordion.name,
      });
    }
  };
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
    // console.log(openSubMenuAccordion)
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
  return (
    <div
    id="dBoardSideber"
    className="w-full mx-auto ">
      {/* logo  */}
      <Logo show={show} setShow={setShow} />
      <div
      className="box-border pt-3 pl-2 h-[90vh] pr-2 overflow-y-scroll">
        {/* map over all the menu group  */}
        {SIderberNavLinks.map((item, index) => (
          <div key={index}>
            {/* check is there any title for this menu group or not  */}
            {item?.title && (
              <p
              className="font-medium uppercase opacity-85 text-sm text-gray-500">
                {/* check show menu text or not // if true then mouse entered or not  */}
                {showText
                  ? item?.title
                  : `${mouseEnterInSIderber ? item?.title : ""}`}
              </p>
            )}
            {/* map over all the menu links inside of every group */}
            {Array.isArray(item?.NavItems) &&
              item?.NavItems.map((item, index) =>
                item?.link ? ( // checking link // if false this item has dropdown menu
                  <NavLink
                    key={index}
                    //
                    to={item.link}
                    className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold opacity-80  flex justify-start items-center gap-2 hover:bg-gray-200 rounded-md tracking-wide"
                                    >
                                        <item.icon />
                                        {/* check show menu text or not // if true then mouse entered or not  */}
                                        {showText ? item?.menu : `${mouseEnterInSIderber ? item?.menu : ""}`}
                                    </NavLink>
                </li >
    <li>
        <NavLink
            to={"/newExpenseReceipt"}
            className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-slate-100"
        >
            <FaRegCircle /> Expense Receipt
        </NavLink>
    </li>
              </ul >
            </NavLink >

    <NavLink className={`hover:text-gray-600 hover:no-underline`}>
        <span
            onClick={() => {
                setOpenAccordion({ name: "Blog", show: !openAccordion.show });
            }}
            className="text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-between items-center gap-2 hover:bg-slate-100"
        >
            <span className="flex justify-start items-center gap-2">
                <MdOutlineNoteAdd />
                {showText ? "Blog" : ""}{" "}
            </span>
            <FaGreaterThan
                className={`transition-all text-[9px] ${openAccordion.show && openAccordion.name === "Blog"
                        ? "rotate-[-90deg]"
                        : "rotate-[90deg]"
                    }`}
            />
        </span>
        <ul
            className={`ml-2 ${showText ? "" : "absolute left-11 min-w-44"
                } ${openAccordion.show && openAccordion.name === "Blog"
                    ? "h-auto   accordionOpen"
                    : "h-0"
                } overflow-hidden`}
        >
            <li>
                <NavLink
                    to={"/"}
                    className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-slate-100"
                >
                    <FaRegCircle /> Blog List
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={"/"}
                    className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-slate-100"
                >
                    <FaRegCircle /> Blog Create
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={"/"}
                    className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-slate-100"
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
                            {/* check show menu text or not // if true then mouse entered or not  */}
                            {showText ? item?.menu : `${mouseEnterInSIderber ? item?.menu : ""}`}
                        </span>
                        <IoIosArrowForward
                            className={`transition-all ${showText ? "" : `${mouseEnterInSIderber ? "" : "hidden"}`} text-[12px] ${openAccordion.show && openAccordion.name === item?.menu ? "rotate-[90deg]" : "rotate-[0deg]"}`}
                        />
                    </span>
                    <ul
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
                                                            {subMenu.subMenu2.map((subMenu2, index) => <li
                                                                className={`${showText ? "" : `${mouseEnterInSIderber ? "" : "hidden"}`}`}
                                                                key={index}
                                                            >
                                                                <NavLink

                                                                    to={subMenu2.link}
                                                                    className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold opacity-80 flex justify-start items-center gap-2 hover:bg-gray-200 rounded-md tracking-wide"
                                                                >
                                                                    <subMenu.icon /> {subMenu2.menu}
                                                                </NavLink>
                                                            </li>
                                                            )}
                                                        </ul>
                                                    </> : <li
                                                        className={`${showText ? "" : `${mouseEnterInSIderber ? "" : "hidden"}`}`}
                                                        key={index}
                                                    >
                                                        <NavLink

                                                            to={subMenu.link}
                                                            className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold opacity-80 flex justify-start items-center gap-2 hover:bg-gray-200 rounded-md tracking-wide"
                                                        >
                                                            <subMenu.icon /> {subMenu.menu}
                                                        </NavLink>
                                                    </li>
                                                }
                                                )}
                                            </ul>
                                        </>
                                    ) : (//is there is no subAccordion menu then return li 
                                        <li
                                            className={`${showText ? "" : `${mouseEnterInSIderber ? "" : "hidden"}`}`}
                                            key={index}
                                        >
                                            <NavLink

                                                to={dropDownItems.link}
                                                className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold opacity-80 flex justify-start items-center gap-2 hover:bg-gray-200 rounded-md tracking-wide"
                                            >
                                                <dropDownItems.icon /> {dropDownItems.menu}
                                            </NavLink>
                                        </li>
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
    </div>
  );
};

export default Dashboard;
