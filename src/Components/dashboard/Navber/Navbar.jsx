import { IoIosMenu } from "react-icons/io";
import { FaStore, FaUserGroup } from "react-icons/fa6";
import { CgMenuGridO } from "react-icons/cg";
import avater from "../../../assets/avator.jpg";
import ProfilePopUp from "./profile_pop_up/ProfilePopUp";
import { useContext, useState } from "react";
import ShortcutPopUp from "./Shortcut_pop_up/ShortcutPopUp";
import { ContextData } from "../../../Providers/ContextProviders/ContextProviders";

const Navbar = () => {
  // states
  const [showProfiePopUp, setShowprofilePopUp] = useState(false);
  const [showSortcutPopUp, setshowSortcutPopUp] = useState(false);
  const { setShow, show, setShowText, showText } = useContext(ContextData);
  return (
    <>
      <div className="flex justify-between items-center w-full lg:mx-5 xl:mx-0 mx-auto box-border px-8 shadow-xl py-5 z-10">
        <div className="flex justify-start items-center gap-4">
          <IoIosMenu
            onClick={() => {
              setShow(!show);
              setShowText(!showText);
            }}
            className="text-3xl lg:block hidden text-gray-600 mt-1 cursor-pointer"
          />
          <p className="text-2xl lg:block hidden">Dashboard</p>
        </div>
        <div className="flex justify-end items-center gap-4 ">
          <FaUserGroup className="text-2xl text-gray-600 mt-1 cursor-pointer" />
          <FaStore className="text-2xl text-gray-600 mt-1 cursor-pointer" />
          <CgMenuGridO
            onClick={() => {
              setShowprofilePopUp(false);
              setshowSortcutPopUp(!showSortcutPopUp);
            }}
            className="text-2xl text-gray-600 mt-1 cursor-pointer"
          />
          <img
            onClick={() => {
              setShowprofilePopUp(!showProfiePopUp);
              setshowSortcutPopUp(false);
            }}
            className="md:w-8 md:h-8 h-7 w-7 rounded-full cursor-pointer"
            src={avater}
            alt="profile pic"
          />
        </div>
      </div>
      <div className=" w-full lg:mx-5 xl:mx-10 mx-auto box-border px-8 relative">
        <ProfilePopUp showProfiePopUp={showProfiePopUp} />
        <ShortcutPopUp showSortcutPopUp={showSortcutPopUp} />
      </div>
    </>
  );
};

export default Navbar;
