import { RiHomeSmile2Line, RiPagesLine } from "react-icons/ri";
import { FaRegCircle } from "react-icons/fa";
import { MdEmojiObjects, MdOutlineDashboard, MdOutlineLocalMall, MdOutlineMail } from "react-icons/md";
import { GrChatOption } from "react-icons/gr";
import { HiOutlineShoppingCart, HiOutlineTruck } from "react-icons/hi";
import { VscFiles } from "react-icons/vsc";
import { CiCalendarDate } from "react-icons/ci";
import { TbFileDollar, TbLayoutKanban } from "react-icons/tb";
import { IoBookOutline, IoSettingsOutline } from "react-icons/io5";
import { AiFillAppstore } from "react-icons/ai";
import { LuUsers2 } from "react-icons/lu";
import { BiPrinter } from "react-icons/bi";
export const SIderberNavLinks = [
    //groups
    {
        title: false,//group title 
        NavItems: [ //group links
            {
                link: '/',
                menu: 'Dashboard',
                access: 'Collapsed-menu',
                icon: MdOutlineDashboard,
                dropDown: false,
            },
            {
                link: '/Client',
                menu: 'Client',
                access: 'Collapsed-menu',
                icon: LuUsers2,
                dropDown: false,
            },
            {
                link: false,
                menu: 'Expense',
                access: 'Collapsed-menu',
                icon: MdOutlineLocalMall,
                dropDown: [
                    {
                        link: '/Catrgoty-list',
                        menu: 'Categoty list',
                        icon: FaRegCircle,
                        access: 'Collapsed-menu',
                        subMenu: false
                    },
                    {
                        link: '/Expense-list',
                        menu: 'Expense list',
                        icon: FaRegCircle,
                        access: 'Collapsed-menu',
                        subMenu: false
                    },
                    {
                        link: '/Expense-list',
                        menu: 'Expense Receipt',
                        icon: FaRegCircle,
                        access: 'Collapsed-menu',
                        subMenu: false
                    },
                ]
            },
            {
                link: false,
                menu: 'Reports',
                access: 'Collapsed-menu',
                icon: BiPrinter,
                dropDown: [
                    {
                        link: '/Yearly-Expense',
                        menu: 'Yearly Expense',
                        icon: FaRegCircle,
                        access: 'Collapsed-menu',
                        subMenu: false
                    },
                    {
                        link: '/Monthly-Expense',
                        menu: 'Monthly Expense',
                        icon: FaRegCircle,
                        access: 'Collapsed-menu',
                        subMenu: false
                    },
                    {
                        link: '/Between Expense',
                        menu: 'Between Expense',
                        icon: FaRegCircle,
                        access: 'Collapsed-menu',
                        subMenu: false
                    },
                ]
            },
            {
                link: false,
                menu: 'Settings',
                access: 'Collapsed-menu',
                icon: IoSettingsOutline,
                dropDown: [
                    {
                        link: '/General-Setting',
                        menu: 'General Setting',
                        icon: FaRegCircle,
                        access: 'Collapsed-menu',
                        subMenu: false
                    },
                    {
                        link: '/Role',
                        menu: 'Role',
                        icon: FaRegCircle,
                        access: 'Collapsed-menu',
                        subMenu: false
                    },
                    {
                        link: '/User',
                        menu: 'User',
                        icon: FaRegCircle,
                        access: 'Collapsed-menu',
                        subMenu: false
                    },
                ]
            },
            {
                link: false,
                menu: 'Blogs',
                access: 'Collapsed-menu',
                icon: RiPagesLine ,
                dropDown: [
                    {
                        link: '/Blog-list',
                        menu: 'Blog list',
                        icon: FaRegCircle,
                        access: 'Collapsed-menu',
                        subMenu: false
                    },
                    {
                        link: '/New-Blog',
                        menu: 'New Blog',
                        icon: FaRegCircle,
                        access: 'Collapsed-menu',
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
                        access: 'Collapsed-menu',
                        subMenu: false
                    },
                    {
                        link: '/Content-Navbar',
                        menu: 'Content Navbar',
                        icon: FaRegCircle,
                        access: 'Content-Navbar',
                        subMenu: false
                    },
                    {
                        link: '/Content-Nav-Sidever',
                        menu: 'Content Nav + Sidever',
                        icon: FaRegCircle,
                        access: 'Content-Nav-Sidever',
                        subMenu: false
                    },
                    {
                        link: '/Horizontal',
                        menu: 'Horizontal',
                        icon: FaRegCircle,
                        access: 'Horizontal',
                        subMenu: false
                    },
                    {
                        link: '/Without-menu',
                        menu: 'Without menu',
                        icon: FaRegCircle,
                        access: 'Without-menu',
                        subMenu: false
                    },
                    {
                        link: '/Without-navbar',
                        menu: 'Without navbar',
                        icon: FaRegCircle,
                        access: 'Without-navbar',
                        subMenu: false
                    },
                    {
                        link: '/Fluid',
                        menu: 'Fluid',
                        icon: FaRegCircle,
                        access: 'Fluid',
                        subMenu: false
                    },
                    {
                        link: '/Container',
                        menu: 'Container',
                        icon: FaRegCircle,
                        access: 'Container',
                        subMenu: false
                    },
                    {
                        link: '/Blank',
                        menu: 'Blank',
                        icon: FaRegCircle,
                        access: 'Blank',
                        subMenu: false
                    },

                ]
            },
            {
                link: false,
                menu: 'Pages',
                icon: RiPagesLine,
                dropDown: [
                    {
                        link: '/',
                        menu: 'Dashboard',
                        icon: FaRegCircle,
                        access: 'Collapsed-menu',
                        subMenu: false
                    },
                    {
                        link: '/profile',
                        menu: 'Profile',
                        icon: FaRegCircle,
                        access: 'Content-Navbar',
                        subMenu: false
                    },
                    {
                        link: '/newExpenseReceipt',
                        menu: 'New Expense Receipt',
                        icon: FaRegCircle,
                        access: 'Content-Nav-Sidever',
                        subMenu: false
                    },
                    {
                        link: '/serviceList',
                        menu: 'Service List',
                        icon: FaRegCircle,
                        access: 'Horizontal',
                        subMenu: false
                    },
                    {
                        link: '/yearlyInvoiceList',
                        menu: 'Yearly Invoice',
                        icon: FaRegCircle,
                        access: 'Without-menu',
                        subMenu: false
                    },
                    {
                        link: '/generalSetting',
                        menu: 'General Setting',
                        icon: FaRegCircle,
                        access: 'Without-navbar',
                        subMenu: false
                    },
                    {
                        link: '/provider',
                        menu: 'provider',
                        icon: FaRegCircle,
                        access: 'Fluid',
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
                        access: 'Landing',
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
                        access: 'Payment',
                        subMenu: false
                    },
                    {
                        link: '/Checkout',
                        menu: 'Checkout',
                        icon: FaRegCircle,
                        access: 'Checkout',
                        subMenu: false
                    },
                    {
                        link: '/Help-Center',
                        menu: 'Help Center',
                        icon: FaRegCircle,
                        access: 'Help-Center',
                        subMenu: false
                    },
                ]
            },
        ]
    },
    {
        title: 'demos',
        NavItems: [
            {
                link: '/demo',
                menu: 'Demo',
                icon: AiFillAppstore,
                access: 'Email',
                dropDown: false
            },
            {
                link: false,
                menu: 'Demo dropdowns',
                icon: AiFillAppstore,
                dropDown: [
                    {
                        link: '/Demo dropdown',
                        menu: 'Demo dropdown',
                        icon: FaRegCircle,
                        access: 'Dashboard',
                        subMenu: false
                    },
                    {
                        link: '/Demo dropdown',
                        menu: 'Demo dropdown',
                        icon: FaRegCircle,
                        access: 'Dashboard',
                        subMenu: false
                    },
                    {
                        link: false,
                        menu: 'Demo submenus',
                        icon: FaRegCircle,
                        access: 'Dashboard',
                        subMenu: [
                            {
                                link: '/Dashboard',
                                menu: 'Demo submenu',
                                icon: FaRegCircle,
                                access: 'Dashboard',
                                subMenu2: false
                            },
                            {
                                link: '/btn',
                                menu: 'Demo submenu',
                                icon: FaRegCircle,
                                access: 'Dashboard',
                                subMenu2: false
                            },
                            {
                                link: '/Dashboard',
                                menu: 'Demo submenu',
                                icon: FaRegCircle,
                                access: 'Dashboard',
                                subMenu2: false
                            },
                            {
                                link: false,
                                menu: 'Demo submenu2',
                                icon: FaRegCircle,
                                subMenu2: [
                                    {
                                        link: '/Dashboard',
                                        menu: 'Demo submenu2',
                                        access: 'Dashboard',
                                        icon: FaRegCircle,
                                    },
                                    {
                                        link: '/btn',
                                        menu: 'Demo submenu2',
                                        access: 'Dashboard',
                                        icon: FaRegCircle,
                                    },
                                    {
                                        link: '/Dashboard',
                                        menu: 'Demo submenu2',
                                        access: 'Dashboard',
                                        icon: FaRegCircle,
                                    },
                                    {
                                        link: '/Dashboard',
                                        menu: 'Demo submenu2',
                                        access: 'Dashboard',
                                        icon: FaRegCircle,
                                    },
                                ]
                            },
                        ]
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
                access: 'Email',
                dropDown: false
            },
            {
                link: '/Chat',
                menu: 'Chat',
                icon: GrChatOption,
                access: 'Chat',
                dropDown: false
            },
            {
                link: '/Calendar',
                menu: 'Calendar',
                icon: CiCalendarDate,
                access: 'Calendar',
                dropDown: false
            },
            {
                link: '/Kanban',
                menu: 'Kanban',
                icon: TbLayoutKanban,
                access: 'Kanban',
                dropDown: false
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
                        access: 'Dashboard',
                        subMenu: false
                    },
                    {
                        link: '/My-Course',
                        menu: 'My Course',
                        icon: FaRegCircle,
                        access: 'My-Course',
                        subMenu: false
                    },
                    {
                        link: '/Course-Details',
                        menu: 'Course Details',
                        icon: FaRegCircle,
                        access: 'Course-Details',
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
                        access: 'Dashboard',
                        subMenu: false
                    },
                    {
                        link: '/Fleet',
                        menu: 'Fleet',
                        icon: FaRegCircle,
                        access: 'Fleet',
                        subMenu: false
                    },
                    {
                        link: false,
                        menu: 'Fleet',
                        icon: FaRegCircle,
                        subMenu: [
                            {
                                link: '/Dashboard',
                                menu: 'Dashboard',
                                icon: FaRegCircle,
                                access: 'Dashboard',
                                subMenu2: false
                            },
                            {
                                link: false,
                                menu: 'Dashboard',
                                icon: FaRegCircle,
                                subMenu2: false
                            },
                        ]
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
                        access: 'List',
                        subMenu: false
                    },
                    {
                        link: '/Preview',
                        menu: 'Preview',
                        icon: FaRegCircle,
                        access: 'Preview',
                        subMenu: false
                    },
                    {
                        link: '/Edit',
                        menu: 'Edit',
                        icon: FaRegCircle,
                        access: 'Edit',
                        subMenu: false
                    },
                    {
                        link: '/Add',
                        menu: 'Add',
                        icon: FaRegCircle,
                        access: 'Add',
                        subMenu: false
                    },
                ]
            },

        ]
    },
]