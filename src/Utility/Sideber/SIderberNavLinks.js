import { RiHomeSmile2Line } from "react-icons/ri";
import { FaRegCircle } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { GrChatOption } from "react-icons/gr";
import { HiOutlineShoppingCart, HiOutlineTruck } from "react-icons/hi";
import { VscFiles } from "react-icons/vsc";
import { CiCalendarDate } from "react-icons/ci";
import { TbFileDollar, TbLayoutKanban } from "react-icons/tb";
import { IoBookOutline } from "react-icons/io5";
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
                        subMenu: false
                    },
                    {
                        link: '/CRM',
                        menu: 'CRM',
                        icon: FaRegCircle,
                        subMenu: false
                    },
                    {
                        link: '/eCommerce',
                        menu: 'eCommerce',
                        icon: FaRegCircle,
                        subMenu: false
                    },
                    {
                        link: '/logistice',
                        menu: 'Logistice',
                        icon: FaRegCircle,
                        subMenu: false
                    },
                    {
                        link: '/Academy',
                        menu: 'Academy',
                        icon: FaRegCircle,
                        subMenu: false
                    },
                ]
            },
            {
                link: false,
                menu: 'service',
                icon: RiHomeSmile2Line,
                dropDown: [
                    {
                        link: '/serviceList',
                        menu: 'service',
                        icon: FaRegCircle,
                        subMenu: false
                    },
                ]
            },
            {
                link: false,
                menu: 'Expance',
                icon: RiHomeSmile2Line,
                dropDown: [
                    {
                        link: '/yearlyInvoiceList',
                        menu: 'yearly Invoice List',
                        icon: FaRegCircle,
                        subMenu: false
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
                        subMenu: false
                    },
                    {
                        link: '/Content-Navbar',
                        menu: 'Content Navbar',
                        icon: FaRegCircle,
                        subMenu: false
                    },
                    {
                        link: '/Content-Nav-Sidever',
                        menu: 'Content Nav + Sidever',
                        icon: FaRegCircle,
                        subMenu: false
                    },
                    {
                        link: '/Horizontal',
                        menu: 'Horizontal',
                        icon: FaRegCircle,
                        subMenu: false
                    },
                    {
                        link: '/Without-menu',
                        menu: 'Without menu',
                        icon: FaRegCircle,
                        subMenu: false
                    },
                    {
                        link: '/Without-navbar',
                        menu: 'Without navbar',
                        icon: FaRegCircle,
                        subMenu: false
                    },
                    {
                        link: '/Fluid',
                        menu: 'Fluid',
                        icon: FaRegCircle,
                        subMenu: false
                    },
                    {
                        link: '/Container',
                        menu: 'Container',
                        icon: FaRegCircle,
                        subMenu: false
                    },
                    {
                        link: '/Blank',
                        menu: 'Blank',
                        icon: FaRegCircle,
                        subMenu: false
                    },

                ]
            },
            {
                link: false,
                menu: 'Front Pages',
                icon: VscFiles,
                dropDown: [
                    {
                        link: '/Landing',
                        menu: 'Landing',
                        icon: FaRegCircle,
                        subMenu: false
                    },
                    {
                        link: '/Pricing',
                        menu: 'Pricing',
                        icon: FaRegCircle,
                        subMenu: false
                    },
                    {
                        link: '/Payment',
                        menu: 'Payment',
                        icon: FaRegCircle,
                        subMenu: false
                    },
                    {
                        link: '/Checkout',
                        menu: 'Checkout',
                        icon: FaRegCircle,
                        subMenu: false
                    },
                    {
                        link: '/Help-Center',
                        menu: 'Help Center',
                        icon: FaRegCircle,
                        subMenu: false
                    },
                ]
            },
        ]
    },
    {
        title: 'apps & pages',
        NavItems: [
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
                link: '/Calendar',
                menu: 'Calendar',
                icon: CiCalendarDate,
                dropDown: false
            },
            {
                link: '/Kanban',
                menu: 'Kanban',
                icon: TbLayoutKanban,
                dropDown: false
            },
            {
                link: false,
                menu: 'eCommerce',
                icon: HiOutlineShoppingCart,
                dropDown: [
                    {
                        link: '/',
                        menu: 'Dashboard',
                        icon: FaRegCircle,
                        subMenu: false
                    },
                    {
                        link: false,
                        menu: 'Products',
                        icon: FaRegCircle,
                        subMenu: [
                            {
                                link: '/Product-List',
                                menu: 'Product List',
                                icon: FaRegCircle,
                                subMenu2: false
                            },
                            {
                                link: '/Add-Product',
                                menu: 'Add Product',
                                icon: FaRegCircle,
                                subMenu2: false
                            },
                            {
                                link: '/Category-List',
                                menu: 'Category List',
                                icon: FaRegCircle,
                                subMenu2: false
                            },
                        ]
                    },
                    {
                        link: false,
                        menu: 'Order',
                        icon: FaRegCircle,
                        subMenu: [
                            {
                                link: '/Order-List',
                                menu: 'Order List',
                                icon: FaRegCircle,
                                subMenu2: false
                            },
                            {
                                link: '/Order-List',
                                menu: 'Order Details',
                                icon: FaRegCircle,
                                subMenu2: false
                            },
                        ]
                    },
                    {
                        link: false,
                        menu: 'Customer',
                        icon: FaRegCircle,
                        subMenu: [
                            {
                                link: '/All-Customers',
                                menu: 'All Customers',
                                icon: FaRegCircle,
                                subMenu2: false
                            },
                            {
                                link: false,
                                menu: 'Customer-Details',
                                icon: FaRegCircle,
                                subMenu2: [
                                    {
                                        link: '/Overview',
                                        menu: 'Overview',
                                        icon: FaRegCircle,
                                    },
                                    {
                                        link: '/Security-Customers',
                                        menu: 'Security',
                                        icon: FaRegCircle,
                                    },
                                    {
                                        link: '/Address-&-Billing',
                                        menu: 'Address & Billing',
                                        icon: FaRegCircle,
                                    },
                                    {
                                        link: '/Notifications',
                                        menu: 'Notifications',
                                        icon: FaRegCircle,
                                    },
                                ]
                            },
                            {
                                link: '/Manage-Reviews',
                                menu: 'Manage Reviews',
                                icon: FaRegCircle,
                                subMenu2: false
                            },
                            {
                                link: '/Referrals',
                                menu: 'Referrals',
                                icon: FaRegCircle,
                                subMenu2: false
                            },
                            {
                                link: '/Settings',
                                menu: 'Settings',
                                icon: FaRegCircle,
                                subMenu2: false
                            },
                        ]
                    },
                ]
            },
            {
                link: false,
                menu: 'Academy',
                icon: IoBookOutline,
                dropDown: [
                    {
                        link: '/Dashboard',
                        menu: 'Dashboard',
                        icon: FaRegCircle,
                        subMenu: false
                    },
                    {
                        link: '/My-Course',
                        menu: 'My Course',
                        icon: FaRegCircle,
                        subMenu: false
                    },
                    {
                        link: '/Course-Details',
                        menu: 'Course Details',
                        icon: FaRegCircle,
                        subMenu: false
                    },
                ]
            },
            {
                link: false,
                menu: 'Logistics',
                icon: HiOutlineTruck,
                dropDown: [
                    {
                        link: '/Dashboard',
                        menu: 'Dashboard',
                        icon: FaRegCircle,
                        subMenu: false
                    },
                    {
                        link: '/Fleet',
                        menu: 'Fleet',
                        icon: FaRegCircle,
                        subMenu: false
                    },
                ]
            },
            {
                link: false,
                menu: 'Invoice',
                icon: TbFileDollar,
                dropDown: [
                    {
                        link: '/List',
                        menu: 'List',
                        icon: FaRegCircle,
                        subMenu: false
                    },
                    {
                        link: '/Preview',
                        menu: 'Preview',
                        icon: FaRegCircle,
                        subMenu: false
                    },
                    {
                        link: '/Edit',
                        menu: 'Edit',
                        icon: FaRegCircle,
                        subMenu: false
                    },
                    {
                        link: '/Add',
                        menu: 'Add',
                        icon: FaRegCircle,
                        subMenu: false
                    },
                ]
            },

        ]
    },
]