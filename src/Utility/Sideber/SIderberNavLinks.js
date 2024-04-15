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
                link: '/',
                menu: 'Dashboards', //accordion  parent
                icon: RiHomeSmile2Line,
                dropDown: false,

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
                menu: 'Report',
                icon: RiHomeSmile2Line,
                dropDown: [
                    {
                        link: '/yearlyInvoiceList',
                        menu: 'Report List',
                        access: 'expense-report-list',
                        icon: FaRegCircle,
                        subMenu: false
                    },
                ]
            },
            {
                link: false,
                menu: 'Expense',
                icon: RiHomeSmile2Line,
                dropDown: [
                    {
                        link: '/without-navbar',
                        menu: 'Expense List',
                        access: 'expense-list',
                        icon: FaRegCircle,
                        subMenu: false
                    },
                    {
                        link: '/fluid',
                        menu: 'Expense Category',
                        access: 'expense-category-list',
                        icon: FaRegCircle,
                        subMenu: false
                    },
                    {
                        link: '/container',
                        menu: 'Expense Receipt',
                        access: 'expense-receipt-list',
                        icon: FaRegCircle,
                        subMenu: false
                    }

                ]
            },
            {
                link: false,
                menu: 'Blog',
                icon: VscFiles,
                dropDown: [
                    {
                        link: '/landing',
                        access: 'blog-create',
                        menu: 'Blog List',
                        icon: FaRegCircle,
                        subMenu: false
                    },
                ]
            },
            {
                link: false,
                menu: 'Setting',
                icon: RiHomeSmile2Line,
                dropDown: [
                    {
                        link: '/setting',
                        access: 'general-setting-access',
                        menu: 'General Setting',
                        icon: FaRegCircle,
                        subMenu: false
                    },
                    {
                        link: '/role',
                        access: 'role-list',
                        menu: 'Role',
                        icon: FaRegCircle,
                        subMenu: false
                    },
                    {
                        link: '/user',
                        menu: 'User',
                        access: 'user-list',
                        icon: FaRegCircle,
                        subMenu: false
                    },
                ]
            },
        ]
    }
]