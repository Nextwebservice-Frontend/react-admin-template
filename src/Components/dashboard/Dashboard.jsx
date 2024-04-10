import Logo from "./Logo/Logo";
import "./scrollbar.css";
import { useContext, useEffect } from "react";
import { ContextData } from "../../Providers/ContextProviders/ContextProviders";
import { IoIosMenu } from "react-icons/io";
import { PanelGroup, Panel, Placeholder } from "rsuite";
import "../../CSS/customCSS.css";
import { NavLink } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdLaptopMac } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import { FaRegCircle } from "react-icons/fa";
import { MdOutlineLocalMall } from "react-icons/md";
import { MdOutlineNoteAdd } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { FaGreaterThan } from "react-icons/fa6";
const Dashboard = () => {
  const {
    setShow,
    show,
    showText,
    setShowText,
    setOpenAccordion,
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
        prevOpen:false,
        show: !openAccordion.show,
      });
    }
  }
  return (
    <div id="dBoardSideber"
      className={`${show ? "lg:w-full w-[270px]" : "w-3"
        }  absolute lg:w-full lg:relative ${showText ? "" : "w-14"}  no-underline bg-white z-[100] text-gray-600`}
    >
      <button
        onClick={() => {
          setShowText(true);
          setShow(!show);
        }}
        className={`p-2 ml-5 text-gray-600 font-bold rounded-full flex  absolute top-4 z-40 ${show ? 'hidden' : 'lg:hidden'}   text-3xl  `}
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
            <NavLink onClick={handelCloseAccordion}
              to={"/"}
              className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold  flex justify-start items-center gap-2 hover:bg-gray-200 rounded-md"
            >
              <LuLayoutDashboard /> {showText ? "Dashboard" : ""}
            </NavLink>
            <NavLink onClick={handelCloseAccordion}
              to={"/"}
              className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-gray-200 rounded-md"
            >
              <MdLaptopMac /> {showText ? "Ticket" : ""}
            </NavLink>

            <div className={`hover:text-gray-600 hover:no-underline cursor-pointer`}>
              <span
                onClick={() => HandelAccorDionOpen('Others')}
                className="text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-between items-center gap-2 hover:bg-gray-200 rounded-md"
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
                className={`ml-2 ${showText ? "" : "absolute left-20 min-w-44 bg-white  px-3 rounded-lg "
                  } ${openAccordion.show && openAccordion.name === "Others"
                    ? "h-auto accordionOpen"
                    : " max-h-0 "
                  } overflow-hidden z-50 ${((openAccordion.prev === 'Others' && openAccordion.prevOpen) || (!openAccordion.show && openAccordion.name === "Others")) ? 'accordionClose' : ''} `}
              >
                <li>
                  <NavLink onClick={handelCloseAccordion}
                    to={"/"}
                    className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-gray-200 rounded-md"
                  >
                    <FaRegCircle /> Route List
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={handelCloseAccordion}
                    to={"/"}
                    className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-gray-200 rounded-md"
                  >
                    <FaRegCircle /> Seat plan
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={handelCloseAccordion}
                    to={"/"}
                    className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-gray-200 rounded-md"
                  >
                    <FaRegCircle /> Dropping point
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={handelCloseAccordion}
                    to={"/"}
                    className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-gray-200 rounded-md"
                  >
                    <FaRegCircle /> Boarding Point
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={handelCloseAccordion}
                    to={"/"}
                    className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-gray-200 rounded-md"
                  >
                    <FaRegCircle /> Unit list
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={handelCloseAccordion}
                    to={"/"}
                    className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-gray-200 rounded-md"
                  >
                    <FaRegCircle /> Bus List
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={handelCloseAccordion}
                    to={"/"}
                    className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-gray-200 rounded-md"
                  >
                    <FaRegCircle /> Bus Type
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={handelCloseAccordion}
                    to={"/"}
                    className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-gray-200 rounded-md"
                  >
                    <FaRegCircle /> Trip List
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={handelCloseAccordion}
                    to={"/"}
                    className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-gray-200 rounded-md"
                  >
                    <FaRegCircle /> Policy List
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className={`hover:text-gray-600 hover:no-underline cursor-pointer`}>
              <span
                onClick={() => HandelAccorDionOpen('Expense')}
                className="text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-between items-center gap-2 hover:bg-gray-200 rounded-md"
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
                className={`ml-2 ${showText ? "" : "absolute left-16 min-w-44 bg-white px-3 rounded-lg"
                  } ${openAccordion.show && openAccordion.name === "Expense"
                    ? "h-auto accordionOpen"
                    : " max-h-0 "
                  } overflow-hidden z-50 ${((openAccordion.prev === 'Expense' && openAccordion.prevOpen) || (!openAccordion.show && openAccordion.name === "Expense")) ? 'accordionClose' : ''}`}
              >
                <li>
                  <NavLink onClick={handelCloseAccordion}
                    to={"/"}
                    className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-gray-200 rounded-md"
                  >
                    <FaRegCircle /> Category List
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={handelCloseAccordion}
                    to={"/"}
                    className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-gray-200 rounded-md"
                  >
                    <FaRegCircle /> Expense List
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={handelCloseAccordion}
                    to={"/"}
                    className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-gray-200 rounded-md"
                  >
                    <FaRegCircle /> Expense Receipt
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className={`hover:text-gray-600 hover:no-underline cursor-pointer`}>
              <span
                onClick={() => HandelAccorDionOpen('Blog')}
                className="text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-between items-center gap-2 hover:bg-gray-200 rounded-md"
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
                className={`ml-2 ${showText ? "" : "absolute left-16 min-w-44 bg-white px-3 rounded-lg"
                  } ${openAccordion.show && openAccordion.name === "Blog"
                    ? "h-auto accordionOpen"
                    : " max-h-0  "
                  } overflow-hidden z-50 ${((openAccordion.prev === 'Blog' && openAccordion.prevOpen) || (!openAccordion.show && openAccordion.name === "Blog")) ? 'accordionClose' : ''}`}
              >
                <li>
                  <NavLink onClick={handelCloseAccordion}
                    to={"/"}
                    className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-gray-200 rounded-md"
                  >
                    <FaRegCircle /> Blog List
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={handelCloseAccordion}
                    to={"/"}
                    className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-gray-200 rounded-md"
                  >
                    <FaRegCircle /> Blog Create
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={handelCloseAccordion}
                    to={"/"}
                    className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-gray-200 rounded-md"
                  >
                    <FaRegCircle /> Expense Receipt
                  </NavLink>
                </li>
              </ul>
            </div>

            <div  className={`hover:text-gray-600 hover:no-underline cursor-pointer`}>
              <span
                onClick={() => HandelAccorDionOpen('Setting')}
                className="text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-between items-center gap-2 hover:bg-gray-200 rounded-md"
              >
                <span className="flex justify-start items-center gap-2">
                  <IoSettings /> {showText ? "Setting " : ""}
                </span>
                <FaGreaterThan
                  className={`transition-all text-[9px] ${openAccordion.show && openAccordion.name === "Setting"
                    ? "rotate-[-90deg]"
                    : "rotate-[90deg]"
                    }`}
                />
              </span>
              <ul
                className={`ml-2 ${showText ? "" : "absolute left-16 min-w-44 bg-white px-3 rounded-lg"
                  } ${openAccordion.show && openAccordion.name === "Setting"
                    ? "h-auto   accordionOpen"
                    : " max-h-0 "
                  } overflow-hidden z-50 ${((openAccordion.prev === 'Setting' && openAccordion.prevOpen) || (!openAccordion.show && openAccordion.name === "Setting")) ? 'accordionClose' : ''}`}
              >
                <li>
                  <NavLink onClick={handelCloseAccordion}
                    to={"/"}
                    className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-gray-200 rounded-md"
                  >
                    <FaRegCircle /> General Setting
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={handelCloseAccordion}
                    to={"/"}
                    className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-gray-200 rounded-md"
                  >
                    <FaRegCircle /> Photo Gallery
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={handelCloseAccordion}
                    to={"/"}
                    className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-gray-200 rounded-md"
                  >
                    <FaRegCircle /> Role
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={handelCloseAccordion}
                    to={"/"}
                    className=" my-1 text-[16px] hover:pl-2 text-gray-600 hover:no-underline px-1 transition-all py-2 hover:text-gray-600 font-semibold flex justify-start items-center gap-2 hover:bg-gray-200 rounded-md"
                  >
                    <FaRegCircle /> User
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
