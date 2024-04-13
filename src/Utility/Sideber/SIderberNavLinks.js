import { RiHomeSmile2Line } from "react-icons/ri";
import { FaRegCircle } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { GrChatOption } from "react-icons/gr";
import { HiOutlineShoppingCart } from "react-icons/hi";
export const SIderberNavLinks = [
    {
        link: false,
        menu: 'Dashboards',
        icon: RiHomeSmile2Line,
        dropDown: [
            {
                link: '/Analytice',
                menu: 'Analytice',
                icon: FaRegCircle,
            },
            {
                link: '/CRM',
                menu: 'CRM',
                icon: FaRegCircle,
            },
        ]
    },
]
export const appsAndPagesLinks = [
    {
        link: '/Email',
        menu: 'Email',
        icon: MdOutlineMail,
        dropDown:false
    },
    {
        link: '/Chat',
        menu: 'Chat',
        icon: GrChatOption,
        dropDown:false
    },
    {
        link: false,
        menu: 'eCommerce',
        icon: HiOutlineShoppingCart,
        dropDown: [
            {
                link: '/Dashboard',
                menu: 'Dashboard',
                icon: FaRegCircle,
            },
            {
                link: '/Products',
                menu: 'Products',
                icon: FaRegCircle,
            },
        ]
    },
]