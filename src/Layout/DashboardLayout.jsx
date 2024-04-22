import { useContext, useEffect, useState } from "react";
import Dashboard from "../Components/dashboard/Dashboard";
import { ContextData } from "../Providers/ContextProviders/ContextProviders";
import Navbar from "../Components/dashboard/Navber/Navbar";
import { Outlet } from "react-router-dom";
import TemplateCustomizer from "../Components/dashboard/TemplateCustomizer/TemplateCustomizer";
import { IoSettingsOutline } from "react-icons/io5";
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
    setshowSearchOption,
    themeChangerOpen,
    setThemeChangerOpen,
    navberType,
    Content,
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
    setThemeChangerOpen(false)
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
    <div className="lg:flex lg:px-0 px-[6px] bg-[#F8F7FA]  dark:bg-[#25293C] overflow-hidden w-full relative">
      {/* sideber  dark:bg-[#2F3349] dark:bg-[#25293C] style={{ transition: ".5s" }}*/}
      <>
        <div id="sideber"
          className={`w-[260px]  z-[70] border-r dark:border-r-0 ${showText ? `w-[260px] min-w-[260px] lg:relative` : `HideTextAnimation ${mouseEnterInSIderber ? 'transitionAnimationopen w-[260px]  box-border' : 'w-[80px] min-w-[80px] transitionAnimationclose'} absolute  h-screen `} shadow-2xl min-h-screen absolute ${show ? 'left-0 top-0 SideberOpen' : 'hidden lg:block SideberClose'} bg-white dark:bg-[#2F3349] dark:text-gray-100 z-50 `}
        >
          <Dashboard />
        </div>
        {Content && <div className={`w-[80px] ${showText?'hidden':'hidden lg:block'}`}></div>}
      </>
      <div style={{ transition: "1s" }} className={`w-full h-screen  ${Content ? 'container mx-auto' : ''}   pt-3 box-border ${showText ? `NavberwidhtAnimationClose` : ` ${Content ? 'container ' : 'lg:ml-[80px] '} NavberwidhtAnimationOpen `} lg:px-3 xl:px-6 px-3 px-auto box-border relative`}>
        {/* popup & accordion close in click dive  */}
        {
          ((!showText && openAccordion.show) || showSortcutPopUp || showProfiePopUp || show || showNotificationPopUp || showThemePopUp || showLanguagePopUp || showSearchOption || themeChangerOpen) && <div onClick={handelcloseModals} className={`showText openAccordion.show show bg-black min-w-full h-screen absolute left-0 top-0 z-10 bg-opacity-[0]`}>
          </div>
        }
        {/* navber  */}

        {/* outlet  */}

        <div id="contentScrollber" className="max-h-[100vh] overflow-y-auto overflow-x-hidden">
          <div className={`w-full ${navberType} top-0 z-50`}> <Navbar />
          </div>
          <Outlet />
        </div>
      </div>
      <TemplateCustomizer />
      <button onClick={() => {
        setThemeChangerOpen(true)
      }} className={`p-2 text-2xl bg-[#8E85F3] ${themeChangerOpen ? 'ThemeChangerTogglerClose' : 'ThemeChangerTogglerOpen'} z-[50] rounded-l-md text-white fixed w-12 flex justify-center items-center h-10 right-3 top-[50%] translate-y-[-50%]`}>
        <IoSettingsOutline />
      </button>
    </div>
  );
};

export default DashboardLayout;
