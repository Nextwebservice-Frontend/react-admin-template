import { useContext } from "react";
import Dashboard from "../Components/dashboard/Dashboard";
import { ContextData } from "../Providers/ContextProviders/ContextProviders";
import Navbar from "../Components/dashboard/Navber/Navbar";
import { Outlet } from "react-router-dom";


const DashboardLayout = () => {
  const { showText } = useContext(ContextData);

  return (
<<<<<<< HEAD
    <div className="lg:flex gap-[1%]">
=======
    <div className="md:flex gap-3">
>>>>>>> 5af757f1d4a43c2725ada9679ee09fa78032d26a
      <div
        className={` ${showText ? "xl:w-[20%] lg:w-[21%] w-[30%]" : "w-[70px]"
          } `}
      >
        <Dashboard />
      </div>
      <div className='w-full lg:px-5 xl:px-10 px-auto box-border'>
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
