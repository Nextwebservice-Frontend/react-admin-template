import { useContext } from "react";
import { ContextData } from "../../../Providers/ContextProviders/ContextProviders";
import { RxCross2 } from "react-icons/rx";
import { FaRegCircle } from "react-icons/fa";
import { FaRegDotCircle } from "react-icons/fa";
import logo from '../../../assets/logo.png'
import Shortlogo from '../../../assets/Shortlogo.png'
// eslint-disable-next-line react/prop-types
const Logo = ({ show, setShow }) => {
    const { showText, setShowText, mouseEnterInSIderber,setmouseEnterInSIderber } = useContext(ContextData)
    return (
        <div className="flex justify-between items-center my-2 w-full pr-2">
            <div className="flex items-center gap-3 p-2 ">
                {
                    showText ? <img src={logo} alt="" /> : mouseEnterInSIderber ? <img src={logo} alt="" /> : <img src={Shortlogo} alt="" />
                }
            </div>
            <button onClick={() => {
                setShowText(!showText)
                setmouseEnterInSIderber(false)
                }} className={`text-xl  ${!mouseEnterInSIderber && !showText ? 'hidden' : 'lg:block hidden'} mt-2`}>
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