import Logo from "./Logo/Logo";
import "./scrollbar.css";
import { useContext, useEffect, useState } from "react";
import { ContextData } from "../../Providers/ContextProviders/ContextProviders";
import { IoIosMenu } from "react-icons/io";
import { PanelGroup, Panel, Placeholder } from "rsuite";
import '../../CSS/customCSS.css'
import { Link, NavLink } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdLaptopMac } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import { FaRegCircle } from "react-icons/fa";
import { MdOutlineLocalMall } from "react-icons/md";
import { MdOutlineNoteAdd } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { FaGreaterThan } from "react-icons/fa6";
const Dashboard = () => {
  const { setShow, show, showText, setShowText, setOpenAccordion, openAccordion } = useContext(ContextData);
  useEffect(() => {
    window.addEventListener('resize', () => {
      setShowText(true)
    })
  }, [])
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

            <NavLink to={'/'} className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold  flex justify-start items-center gap-2 hover:bg-slate-100">
              <LuLayoutDashboard />  {showText ? 'Dashboard' : ''}
            </NavLink>
            <NavLink to={'/'} className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-slate-100">
              <MdLaptopMac /> {showText ? 'Ticket' : ''}
            </NavLink>

            <NavLink className={`hover:text-gray-600 hover:no-underline`}>
              <span onClick={() => {
                setOpenAccordion({ name: 'Others', show: !openAccordion.show })
              }} className="text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-between items-center gap-2 hover:bg-slate-100">
                <span className="flex justify-start items-center gap-2"> <AiOutlineLogout />{showText ? 'Others' : ''} </span>
                <FaGreaterThan className={`transition-all text-[9px] ${(openAccordion.show && openAccordion.name === 'Others') ? 'rotate-[-90deg]' : 'rotate-[90deg]'}`} />
              </span>
              <ul className={`ml-2 ${showText?'':'absolute left-11 min-w-44'} ${(openAccordion.show && openAccordion.name === 'Others') ? 'h-auto   accordionOpen' : 'h-0'} overflow-hidden`}>
                <li>
                  <NavLink to={'/'} className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-slate-100">
                    <FaRegCircle /> Route List
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/'} className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-slate-100">
                    <FaRegCircle /> Seat plan
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/'} className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-slate-100">
                    <FaRegCircle /> Dropping point
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/'} className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-slate-100">
                    <FaRegCircle /> Boarding Point
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/'} className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-slate-100">
                    <FaRegCircle /> Unit list
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/'} className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-slate-100">
                    <FaRegCircle /> Bus List
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/'} className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-slate-100">
                    <FaRegCircle /> Bus Type
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/'} className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-slate-100">
                    <FaRegCircle /> Trip List
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/'} className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-slate-100">
                    <FaRegCircle /> Policy List
                  </NavLink>
                </li>
              </ul>
            </NavLink>

            <NavLink className={`hover:text-gray-600 hover:no-underline`}>
              <span onClick={() => {
                setOpenAccordion({ name: 'Expense', show: !openAccordion.show })
              }} className="text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-between items-center gap-2 hover:bg-slate-100">
                <span className="flex justify-start items-center gap-2"><MdOutlineLocalMall />{showText ? 'Expense' : ''}  </span>
                <FaGreaterThan className={`transition-all text-[9px] ${(openAccordion.show && openAccordion.name === 'Expense') ? 'rotate-[-90deg]' : 'rotate-[90deg]'}`} />
              </span>
              <ul className={`ml-2 ${showText?'':'absolute left-11 min-w-44'} ${(openAccordion.show && openAccordion.name === 'Expense') ? 'h-auto   accordionOpen' : 'h-0'} overflow-hidden`}>
                <li>
                  <NavLink to={'/'} className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-slate-100">
                    <FaRegCircle /> Category List
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/'} className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-slate-100">
                    <FaRegCircle /> Expense List
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/'} className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-slate-100">
                    <FaRegCircle /> Expense Receipt
                  </NavLink>
                </li>

              </ul>
            </NavLink>

            <NavLink className={`hover:text-gray-600 hover:no-underline`}>
              <span onClick={() => {
                setOpenAccordion({ name: 'Blog', show: !openAccordion.show })
              }} className="text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-between items-center gap-2 hover:bg-slate-100">
                <span className="flex justify-start items-center gap-2"><MdOutlineNoteAdd />{showText ? 'Blog' : ''} </span>
                <FaGreaterThan className={`transition-all text-[9px] ${(openAccordion.show && openAccordion.name === 'Blog') ? 'rotate-[-90deg]' : 'rotate-[90deg]'}`} />
              </span>
              <ul className={`ml-2 ${showText?'':'absolute left-11 min-w-44'} ${(openAccordion.show && openAccordion.name === 'Blog') ? 'h-auto   accordionOpen' : 'h-0'} overflow-hidden`}>
                <li>
                  <NavLink to={'/'} className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-slate-100">
                    <FaRegCircle /> Blog List
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/'} className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-slate-100">
                    <FaRegCircle /> Blog Create
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/'} className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-slate-100">
                    <FaRegCircle /> Expense Receipt
                  </NavLink>
                </li>

              </ul>
            </NavLink>

            <NavLink className={`hover:text-gray-600 hover:no-underline`}>
              <span onClick={() => {
                setOpenAccordion({ name: 'Setting', show: !openAccordion.show })
              }} className="text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-between items-center gap-2 hover:bg-slate-100">
                <span className="flex justify-start items-center gap-2"><IoSettings /> {showText ? 'Setting ' : ''}</span>
                <FaGreaterThan className={`transition-all text-[9px] ${(openAccordion.show && openAccordion.name === 'Setting') ? 'rotate-[-90deg]' : 'rotate-[90deg]'}`} />
              </span>
              <ul className={`ml-2 ${showText?'':'absolute left-11 min-w-44'} ${(openAccordion.show && openAccordion.name === 'Setting') ? 'h-auto   accordionOpen' : 'h-0'} overflow-hidden`}>
                <li>
                  <NavLink to={'/'} className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-slate-100">
                    <FaRegCircle /> General Setting
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/'} className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-slate-100">
                    <FaRegCircle /> Photo Gallery
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/'} className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-slate-100">
                    <FaRegCircle /> Role
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/'} className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-slate-100">
                    <FaRegCircle /> User
                  </NavLink>
                </li>

              </ul>
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
