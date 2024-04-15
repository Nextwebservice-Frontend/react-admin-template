import { IoIosMenu } from "react-icons/io";
import { FaRegBell, FaStore, FaUserGroup } from "react-icons/fa6";
import avater from "../../../assets/avator.jpg";
import ProfilePopUp from "./profile_pop_up/ProfilePopUp";
import { useContext, useEffect, useState } from "react";
import ShortcutPopUp from "./Shortcut_pop_up/ShortcutPopUp";
import { ContextData } from "../../../Providers/ContextProviders/ContextProviders";
import { BiCustomize } from "react-icons/bi";
import NotificationPopUp from "./Notification_pop_up/NotificationPopUp";
import { HiOutlineSun } from "react-icons/hi";
import ThemePopUp from "./Theme_pop_up/ThemePopUp";
import { IoLanguageOutline, IoSearchOutline } from "react-icons/io5";
import LanguagePopUp from "./Language_pop_up/LanguagePopUp";
import { RxCross1 } from "react-icons/rx";
const Navbar = () => {
  // states
  const {
    setShow,
    setShowText,
    showProfiePopUp,
    setShowprofilePopUp,
    showSortcutPopUp,
    setshowSortcutPopUp,
    showNotificationPopUp,
    setshowNotificationPopUp,
    showThemePopUp,
    setshowThemePopUp,
    showLanguagePopUp,
    setshowLanguagePopUp,
    showSearchOption,
    setshowSearchOption
  } = useContext(ContextData);
  //open search option
  const handelOpenSearchInput = () => {
    setshowSearchOption(true)
  }
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Check if Ctrl key and forward slash key are pressed at once
      if (event.ctrlKey && (event.key === '/' || event.keyCode === 191)) {
        handelOpenSearchInput();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  return (
    <>
      <div className="flex justify-between items-center w-full mx-auto box-border px-2 shadow-xl py-5 z-10 relative">
        {showSearchOption &&
          <div className="w-full h-full absolute bg-white z-50 top-0 left-0 flex justify-start items-center gap-1 box-border px-6">
            <input type="text" name="search" placeholder=" Search..." className="font-semibold opacity-65 tracking-wider outline-none focus:border-0 focus:outline-none border-0 w-full" />
            <RxCross1 onClick={() => setshowSearchOption(false)} className="cursor-pointer" />
          </div>
        }
        <div className="flex justify-start items-center gap-4">
          <IoIosMenu
            onClick={() => {
              setShow(true);
              setShowText(true);
            }}
            className="text-3xl lg:hidden block text-gray-600 mt-1 cursor-pointer z-40"
          />
          <button onClick={() => setshowSearchOption(true)} className="text-2xl flex justify-start items-center gap-2">
            <IoSearchOutline /> <span className="text-base font-semibold md:block hidden text-gray-500 opacity-70">search (ctrl + /)</span>
          </button>
        </div>
        <div className="flex justify-end items-center gap-4 z-40">
          <IoLanguageOutline onClick={() => {
            setShowprofilePopUp(false);
            setshowNotificationPopUp(false)
            setshowSortcutPopUp(false);
            setshowThemePopUp(false)
            setshowLanguagePopUp(!showLanguagePopUp)
          }} className="text-2xl text-gray-600 mt-1 cursor-pointer" />
          <HiOutlineSun onClick={() => {
            setShowprofilePopUp(false);
            setshowNotificationPopUp(false)
            setshowSortcutPopUp(false);
            setshowLanguagePopUp(false)
            setshowThemePopUp(!showThemePopUp)
          }} className="text-2xl text-gray-600 mt-1 cursor-pointer" />
          <BiCustomize
            onClick={() => {
              setShowprofilePopUp(false);
              setshowNotificationPopUp(false)
              setshowThemePopUp(false)
              setshowLanguagePopUp(false)
              setshowSortcutPopUp(!showSortcutPopUp);
            }}
            className="text-2xl text-gray-600 mt-1 cursor-pointer"
          />
          <FaRegBell onClick={() => {
            setshowSortcutPopUp(false);
            setShowprofilePopUp(false);
            setshowThemePopUp(false)
            setshowLanguagePopUp(false)
            setshowNotificationPopUp(!showNotificationPopUp)
          }} className="text-2xl text-gray-600 mt-1 cursor-pointer" />
          <img
            onClick={() => {
              setshowSortcutPopUp(false);
              setshowNotificationPopUp(false)
              setshowThemePopUp(false)
              setshowLanguagePopUp(false)
              setShowprofilePopUp(!showProfiePopUp);
            }}
            className="md:w-8 md:h-8 h-7 w-7 rounded-full cursor-pointer"
            src={avater}
            alt="profile pic"
          />
        </div>
      </div>
      <div className=" w-full  mx-auto box-border px-8 relative">
        <ProfilePopUp showProfiePopUp={showProfiePopUp} setShowprofilePopUp={setShowprofilePopUp} />
        <ShortcutPopUp showSortcutPopUp={showSortcutPopUp} setshowSortcutPopUp={setshowSortcutPopUp} />
        <NotificationPopUp showNotificationPopUp={showNotificationPopUp} />
        <ThemePopUp showThemePopUp={showThemePopUp} setshowThemePopUp={setshowThemePopUp} />
        <LanguagePopUp showLanguagePopUp={showLanguagePopUp} setshowLanguagePopUp={setshowLanguagePopUp} />
      </div>
    </>
  );
};

export default Navbar;
