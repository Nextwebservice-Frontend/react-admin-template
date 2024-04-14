import { IoIosMenu } from "react-icons/io";
import { FaRegBell, FaStore, FaUserGroup } from "react-icons/fa6";
import avater from "../../../assets/avator.jpg";
import ProfilePopUp from "./profile_pop_up/ProfilePopUp";
import { useContext, useState } from "react";
import ShortcutPopUp from "./Shortcut_pop_up/ShortcutPopUp";
import { ContextData } from "../../../Providers/ContextProviders/ContextProviders";
import { BiCustomize } from "react-icons/bi";
import NotificationPopUp from "./Notification_pop_up/NotificationPopUp";
import { HiOutlineSun } from "react-icons/hi";
import ThemePopUp from "./Theme_pop_up/ThemePopUp";
import { IoLanguageOutline } from "react-icons/io5";
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
    setshowThemePopUp
  } = useContext(ContextData);
  return (
    <>
      <div className="flex justify-between items-center w-full mx-auto box-border px-2 shadow-xl py-5 z-10">
        <div className="flex justify-start items-center gap-4">
          <IoIosMenu
            onClick={() => {
              setShow(true);
              setShowText(true);
            }}
            className="text-3xl lg:hidden block text-gray-600 mt-1 cursor-pointer z-40"
          />
          <p className="text-2xl lg:block hidden">Dashboard</p>
        </div>
        <div className="flex justify-end items-center gap-4 z-40">
          <IoLanguageOutline  onClick={() => {
            setShowprofilePopUp(false);
            setshowNotificationPopUp(false)
            setshowSortcutPopUp(false);
            setshowThemePopUp(false)
          }} className="text-2xl text-gray-600 mt-1 cursor-pointer" />
          <HiOutlineSun onClick={() => {
            setShowprofilePopUp(false);
            setshowNotificationPopUp(false)
            setshowSortcutPopUp(false);
            setshowThemePopUp(!showThemePopUp)
          }} className="text-2xl text-gray-600 mt-1 cursor-pointer" />
          <BiCustomize
            onClick={() => {
              setShowprofilePopUp(false);
              setshowNotificationPopUp(false)
              setshowThemePopUp(false)
              setshowSortcutPopUp(!showSortcutPopUp);
            }}
            className="text-2xl text-gray-600 mt-1 cursor-pointer"
          />
          <FaRegBell onClick={() => {
            setshowSortcutPopUp(false);
            setShowprofilePopUp(false);
            setshowThemePopUp(false)
            setshowNotificationPopUp(!showNotificationPopUp)
          }} className="text-2xl text-gray-600 mt-1 cursor-pointer" />
          <img
            onClick={() => {
              setshowSortcutPopUp(false);
              setshowNotificationPopUp(false)
              setshowThemePopUp(false)
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
        <ThemePopUp showThemePopUp={showThemePopUp} setshowThemePopUp={setshowThemePopUp}/>
      </div>
    </>
  );
};

export default Navbar;
