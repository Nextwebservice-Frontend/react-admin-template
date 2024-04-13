import { RiHomeSmile2Line } from "react-icons/ri";
import { FaRegCircle } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { GrChatOption } from "react-icons/gr";
import { HiOutlineShoppingCart } from "react-icons/hi";
export const SIderberNavLinks = [
    //groups
    {
        title: false,//group title 
        NavItems: [ //group links
            {
                link: false,
                menu: 'Dashboards', //accordion  parent
                icon: RiHomeSmile2Line,
                dropDown: [//accordion child
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
                    {
                        link: '/eCommerce',
                        menu: 'eCommerce',
                        icon: FaRegCircle,
                    },
                    {
                        link: '/logistice',
                        menu: 'Logistice',
                        icon: FaRegCircle,
                    },
                    {
                        link: '/Academy',
                        menu: 'Academy',
                        icon: FaRegCircle,
                    },
                ]
            },
            {
                link: false,
                menu: 'Layouts',
                icon: RiHomeSmile2Line,
                dropDown: [
                    {
                        link: '/Collapsed-menu',
                        menu: 'Collapsed menu',
                        icon: FaRegCircle,
                    },
                    {
                        link: '/Content-Navbar',
                        menu: 'Content Navbar',
                        icon: FaRegCircle,
                    },
                    {
                        link: '/Content-Nav-Sidever',
                        menu: 'Content Nav + Sidever',
                        icon: FaRegCircle,
                    },

                ]
            },
        ]
    },
    {
        title: 'apps & pages',
        NavItems:[
            {
                link: '/Email',
                menu: 'Email',
                icon: MdOutlineMail,
                dropDown: false
            },
            {
                link: '/Chat',
                menu: 'Chat',
                icon: GrChatOption,
                dropDown: false
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
    },
]
