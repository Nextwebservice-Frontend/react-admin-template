import { useContext } from "react";
import Dashboard from "../Components/dashboard/Dashboard";
import { ContextData } from "../Providers/ContextProviders/ContextProviders";
import Navbar from "../Components/dashboard/Navber/Navbar";
import { Outlet } from "react-router-dom";


const DashboardLayout = () => {
  const {
    setShow,
    show,
    showText,
    setShowText,
    setOpenAccordion,
    openAccordion,
    showProfiePopUp,
    setShowprofilePopUp,
    showSortcutPopUp,
    setshowSortcutPopUp
  } = useContext(ContextData);

  const handelcloseModals = () => {
    setShow(false)
    setShowprofilePopUp(false)
    setshowSortcutPopUp(false)
    if (!showText && openAccordion.show) {
      setOpenAccordion({
        show: false,
        name: openAccordion.name
      });
    }
    // console.log(openAccordion)
  }
  return (
    <div className="lg:flex gap-[1%]">
      <div
        className={` ${showText ? "xl:w-[20%] lg:w-[21%] w-[30%]" : "w-[70px]"
          } `}
      >
        <Dashboard />
      </div>
      <div className='w-full lg:px-5 xl:px-10 px-auto box-border relative'>
        {
          ((!showText && openAccordion.show) || showSortcutPopUp || showProfiePopUp || show) && <div onClick={handelcloseModals} className={`showText openAccordion.show show bg-black min-w-full h-screen absolute left-0 top-0 z-10 bg-opacity-[0]`}>
          </div>
        }

        <div className="w-full ">
          <Navbar />
        </div>
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
