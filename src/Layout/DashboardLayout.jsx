import { useContext, useEffect } from "react";
import Dashboard from "../Components/dashboard/Dashboard";
import { ContextData } from "../Providers/ContextProviders/ContextProviders";
import Navbar from "../Components/dashboard/Navber/Navbar";
import { Outlet } from "react-router-dom";


const DashboardLayout = () => {
  const {
    setShow,
    show,
    showText,
    setOpenAccordion,
    openAccordion,
    showProfiePopUp,
    setShowprofilePopUp,
    showSortcutPopUp,
    setshowSortcutPopUp,
    mouseEnterInSIderber,
    setmouseEnterInSIderber
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
  useEffect(() => {
    // get the sideber dive
    const sideber = document.getElementById('sideber')
    //mouse enter function
    const handleMouseEnter = (event) => {
      if (event.target === sideber || sideber.contains(event.target)) {
        setmouseEnterInSIderber(true)
      }
    };
    const handleMouseLeave = (event) => {
      if (event.target === sideber || sideber.contains(event.target)) {
        setmouseEnterInSIderber(false)
      }
    };
    // event listener 
    sideber.addEventListener('mouseenter', handleMouseEnter)
    sideber.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      //remove event listener 
      sideber.removeEventListener('mouseenter', handleMouseEnter);
      sideber.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="lg:flex gap-[.3%]">
      <div id="sideber" style={{ transition: ".5s" }}
        className={`pl-2 ${showText ? "xl:w-[20%] lg:w-[21%] w-[30%] lg:relative" : ` ${mouseEnterInSIderber ? 'xl:w-[17%] lg:w-[18%] w-[27%] pr-2 box-border' : 'w-[60px]'} absolute  min-h-screen `
          } border-r-2 pr-2 shadow-2xl min-h-screen absolute ${show?'left-0 top-0 SideberOpen':'hidden lg:block SideberClose'} bg-white z-50  overflow-y-scroll`}
      >
        <Dashboard />
      </div>
      <div style={{ transition: "1s" }} className={`w-full ${showText?'':'lg:ml-16'} lg:px-3 xl:px-6  px-auto box-border relative`}>
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
