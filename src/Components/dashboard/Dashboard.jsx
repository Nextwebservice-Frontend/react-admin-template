import Logo from "./Logo/Logo";
import "./scrollbar.css";
import { useContext } from "react";
import { ContextData } from "../../Providers/ContextProviders/ContextProviders";
import { IoIosMenu } from "react-icons/io";
import { PanelGroup, Panel, Placeholder } from "rsuite";
import '../../CSS/customCSS.css'
import { Link, NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Dashboard = () => {
  const { setShow, show, showText, setShowText } = useContext(ContextData);
  return (
    <div
      className={`${
        show ? "w-auto" : "w-3"
      } max-w-[320px] absolute lg:w-full lg:relative ${showText ? "" : "w-14"}`}
    >
      <button
        onClick={() => {
          setShowText(true);
          setShow(!show);
        }}
        className={`p-2 ml-5 text-gray-500 font-bold rounded-full flex  absolute top-4 lg:hidden  text-3xl  `}
      >
        <IoIosMenu />
      </button>

      <div
        style={{ transition: "1s" }}
        className={`h-screen p-2 border bg-white overflow-y-scroll relative z-10 lg:static  ${
          show ? "right-0" : "right-96"
        }  `}
      >
        <div className="   ">
          <Logo show={show} setShow={setShow} />
          <hr />
          <div>
            <PanelGroup accordion className="">
              <div className="text-[16px] font-semibold border-b  hover:bg-slate-100">
                Dashboard
              </div>
              <div className="text-[16px] font-semibold border-b">
              <Panel bodyFill header="Expense" className="m-0 rounded-sm w-full">
                
                  <Link className="w-full">Expense</Link>
              </Panel>
              </div>
              <div className="text-[16px] font-semibold border-b">
              <Panel header="Setting" className="m-0 rounded-sm">
                <ul className="space-y-1 mt-2">
                  <li className="hover:bg-slate-300 py-2 px-1"><NavLink className="text-gray-600 " to='/expense'>Expense</NavLink></li>
                  <li className="hover:bg-slate-300 py-2 px-1"><NavLink className="text-gray-600 " to='/expense'>Expense</NavLink></li>
                  <li className="hover:bg-slate-300 py-2 px-1"><NavLink className="text-gray-600 " to='/expense'>Expense</NavLink></li>
                </ul>
              </Panel>
              </div>
            </PanelGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
