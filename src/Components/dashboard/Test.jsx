import Logo from "./Logo/Logo";
import "./scrollbar.css";
import { useContext, useState } from "react";
import { ContextData } from "../../Providers/ContextProviders/ContextProviders";
import { IoIosMenu } from "react-icons/io";
import { PanelGroup, Panel, Placeholder } from "rsuite";
import '../../CSS/customCSS.css'
import { Link, NavLink } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdLaptopMac } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import { FaRegCircle } from "react-icons/fa";
import { SidebarLinks, SideberLinks } from "../../Utils/Dashboard/SideberLinks/SideberLinks";

const Test = () => {
  const { setShow, show, showText, setShowText, setOpenAccordion, openAccordion } = useContext(ContextData);
  return (
    <div
      className={`${show ? "w-full" : "w-3"
        }  absolute md:w-full md:relative ${showText ? "" : "w-14"} no-underline text-gray-600`}
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
          <div>
            {/* <PanelGroup accordion className="">
                <div className="text-[16px] font-semibold border-b  hover:bg-slate-100">
                  Dashboard
                </div>
                <div className="text-[16px] font-semibold border-b">
                <Panel bodyFill header="Expense" className="m-0 rounded-sm w-full">
                    <Link className="w-full">Expense</Link>
                </Panel>
                </div>
                <div className="text-[16px] font-semibold border-b">
                <Panel header="Setting" className="m-0 rounded-sm">
                  <ul className="space-y-1 mt-2">
                    <li className="hover:bg-slate-300 py-2 px-1"><NavLink className="text-gray-600 " to='/expense'>Expense</NavLink></li>
                    <li className="hover:bg-slate-300 py-2 px-1"><NavLink className="text-gray-600 " to='/expense'>Expense</NavLink></li>
                    <li className="hover:bg-slate-300 py-2 px-1"><NavLink className="text-gray-600 " to='/expense'>Expense</NavLink></li>
                  </ul>
                </Panel>
                </div>
              </PanelGroup> */}
            <div>
              {SidebarLinks.map(item => (
                <NavLink key={item.name} to={item.path} className="text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold  flex justify-start items-center gap-2 hover:bg-slate-100">
                  {item.icon} {item.name}
                </NavLink>
              ))}
            </div>


            <NavLink to={'/'} className="text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold  flex justify-start items-center gap-2 hover:bg-slate-100">
              <LuLayoutDashboard />  {showText ? 'Dashboard' : ''}
            </NavLink>
            <NavLink to={'/'} className="text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-slate-100">
              <MdLaptopMac /> Ticket
            </NavLink>
            <NavLink className={`hover:text-gray-600 hover:no-underline`}>
              <span className="text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-slate-100">
                <AiOutlineLogout /> Others
              </span>
              <ul className="ml-2">
                <li>
                  <NavLink to={'/'} className="text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-slate-100">
                    <FaRegCircle /> Route List
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/'} className="text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-slate-100">
                    <FaRegCircle /> Seat plan
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/'} className="text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-slate-100">
                    <FaRegCircle /> Dropping point
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/'} className="text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-slate-100">
                    <FaRegCircle /> Boarding Point
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/'} className="text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-slate-100">
                    <FaRegCircle /> Unit list
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/'} className="text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-slate-100">
                    <FaRegCircle /> Bus List
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/'} className="text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-slate-100">
                    <FaRegCircle /> Bus Type
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/'} className="text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-slate-100">
                    <FaRegCircle /> Trip List
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/'} className="text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-slate-100">
                    <FaRegCircle /> Policy List
                  </NavLink>
                </li>
              </ul>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test