import { useContext, useEffect, useState } from "react";
import Dashboard from "../Components/dashboard/Dashboard";
import { ContextData } from "../Providers/ContextProviders/ContextProviders";
import Navbar from "../Components/dashboard/Navber/Navbar";
import { Outlet } from "react-router-dom";


const DashboardLayout = () => {
  //context data
  const {
    setShow,
    show,
    showText,
    openAccordion,
    showProfiePopUp,
    setShowprofilePopUp,
    showSortcutPopUp,
    setshowSortcutPopUp,
    mouseEnterInSIderber,
    setmouseEnterInSIderber,
    setshowNotificationPopUp,
    showNotificationPopUp,
    showThemePopUp,
    setshowThemePopUp,
    showLanguagePopUp,
    setshowLanguagePopUp,
    showSearchOption,
    setshowSearchOption
  } = useContext(ContextData);
  // close all modal and accordions 
  const handelcloseModals = () => {
    setShow(false)
    setShowprofilePopUp(false)
    setshowSortcutPopUp(false)
    setshowNotificationPopUp(false)
    setshowThemePopUp(false)
    setshowLanguagePopUp(false)
    setshowSearchOption(false)
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

  // animation 
  const [SideberOpenAnimation, setSideberOpenAnimation] = useState(true)
  useEffect(() => {
    if (showText === SideberOpenAnimation) {
      return
    } else {
      setSideberOpenAnimation(showText)
    }
  }, [showText])

  return (
    <div className="lg:flex gap-[.3%] lg:px-0 px-3">
      {/* sideber  */}
      <div id="sideber" style={{ transition: ".5s" }}
        className={`max-w-80 pl-2 z-50 border-r ${showText ? ` xl:w-[22%] lg:w-[23%] sm:w-[33%] w-[75%]  lg:relative` : `HideTextAnimation ${mouseEnterInSIderber ? 'xl:w-[19%] lg:w-[20%] sm:w-[33%] w-[75%]  box-border' : 'w-[60px]'} absolute  h-screen `} shadow-2xl min-h-screen absolute ${show ? 'left-0 top-0 SideberOpen' : 'hidden lg:block SideberClose'} bg-white z-50 `}
      >
        <Dashboard />
      </div>
      <div style={{ transition: "1s" }} className={`w-full ${showText ? `NavberwidhtAnimationClose` : 'lg:ml-16 NavberwidhtAnimationOpen '} lg:px-3 xl:px-6  px-auto box-border relative`}>
        {/* popup & accordion close in click dive  */}
        {
          ((!showText && openAccordion.show) || showSortcutPopUp || showProfiePopUp || show || showNotificationPopUp || showThemePopUp || showLanguagePopUp || showSearchOption) && <div onClick={handelcloseModals} className={`showText openAccordion.show show bg-black min-w-full h-screen absolute left-0 top-0 z-10 bg-opacity-[0]`}>
          </div>
        }
        {/* navber  */}
        <div className="w-full ">
          <Navbar />
        </div>
        {/* outlet  */}
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
