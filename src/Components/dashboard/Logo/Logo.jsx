import { useContext } from "react";
import { ContextData } from "../../../Providers/ContextProviders/ContextProviders";
import { RxCross2 } from "react-icons/rx";
import { FaRegCircle } from "react-icons/fa";
import { FaRegDotCircle } from "react-icons/fa";
import logo from '../../../assets/logo.png'
import Shortlogo from '../../../assets/Shortlogo.png'
const Logo = ({ show, setShow }) => {
    const { showText, setShowText, mouseEnterInSIderber, setmouseEnterInSIderber } = useContext(ContextData)
    return (
        <div className={`flex ${showText?'pl-2':`${mouseEnterInSIderber?'pl-2':'pl-2'}`} justify-between  items-center my-2 w-full pb-3`}>
            <div className={`flex items-center gap-[6px]`}>
                {
                    showText ? <img src={logo} alt="" /> : mouseEnterInSIderber ? <img src={logo} alt="" /> : <img className=" w-8" src={Shortlogo} alt="" />
                }

            </div>
            <button onClick={() => {
                setShowText(!showText)
                setmouseEnterInSIderber(false)
            }} className={`text-xl  ${!mouseEnterInSIderber && !showText ? 'hidden' : 'lg:block hidden'} mt-2 ml-2`}>
                {
                    showText ? <FaRegCircle /> : <FaRegDotCircle />
                }
            </button>
            <button
                onClick={() => setShow(!show)}
                className=" mt-2 cursor-pointer text-xl rounded-full block lg:hidden"
            >
                <RxCross2 />
            </button>
        </div>
    );
};

export default Logo;