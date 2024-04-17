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
    <div className="lg:flex lg:px-0 px-[6px] bg-[#F8F7FA] dark:bg-[#25293C] overflow-hidden w-full">
      {/* sideber  dark:bg-[#2F3349] dark:bg-[#25293C] style={{ transition: ".5s" }}*/}
      <div  id="sideber" 
        className={` max-w-[260px]  pl-2 z-50 border-r dark:border-r-0 ${showText ? `2xl:w-[260px] xl:w-[30%] lg:w-[30%] sm:w-[33%] w-[75%]  lg:relative` : `HideTextAnimation ${mouseEnterInSIderber ? 'transitionAnimationopen 2xl:w-[260px] xl:w-[30%] lg:w-[30%] sm:w-[33%] w-[75%]  box-border' : 'w-[80px] min-w-[80px] transitionAnimationclose'} absolute  h-screen `} shadow-2xl min-h-screen absolute ${show ? 'left-0 top-0 SideberOpen' : 'hidden lg:block SideberClose'} bg-white dark:bg-[#2F3349] dark:text-gray-100 z-50 `}
      >
        <Dashboard />
      </div>
      <div style={{ transition: "1s" }} className={`w-full h-screen  pt-3 box-border ${showText ? `NavberwidhtAnimationClose` : 'lg:ml-[80px] NavberwidhtAnimationOpen '} lg:px-3 xl:px-6 px-3 px-auto box-border relative`}>
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
        <div id="contentScrollber" className="max-h-[88vh] overflow-y-auto overflow-x-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
