import { useContext } from "react";
import Dashboard from "../Components/dashboard/Dashboard";
import { ContextData } from "../Providers/ContextProviders/ContextProviders";
import Navbar from "../Components/dashboard/Navber/Navbar";
import { Outlet } from "react-router-dom";


const DashboardLayout = () => {
  const { showText } = useContext(ContextData);

  return (
    <div className="md:flex gap-3">
      <div
        className={` ${showText ? "xl:w-[36%] lg:w-[50%] w-[30%]" : "w-[70px]"
          } `}
      >
        <Dashboard />
      </div>
      <div className=''>
        <Navbar />
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
