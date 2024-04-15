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
                        link: '/analytice',
                        menu: 'Analytice',
                        icon: FaRegCircle,
                        subMenu: false
                    },
                    {
                        link: '/crm',
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
                        link: '/academy',
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
                menu: 'Expanse',
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
                        link: '/collapsed-menu',
                        menu: 'Collapsed menu',
                        icon: FaRegCircle,
                        subMenu: false
                    },
                    {
                        link: '/content-Navbar',
                        menu: 'Content Navbar',
                        icon: FaRegCircle,
                        subMenu: false
                    },
                    {
                        link: '/content-Nav-Sidever',
                        menu: 'Content Nav + Sidever',
                        icon: FaRegCircle,
                        subMenu: false
                    },
                    {
                        link: '/corizontal',
                        menu: 'Horizontal',
                        icon: FaRegCircle,
                        subMenu: false
                    },
                    {
                        link: '/without-menu',
                        menu: 'Without menu',
                        icon: FaRegCircle,
                        subMenu: false
                    },
                    {
                        link: '/without-navbar',
                        menu: 'Without navbar',
                        icon: FaRegCircle,
                        subMenu: false
                    },
                    {
                        link: '/fluid',
                        menu: 'Fluid',
                        icon: FaRegCircle,
                        subMenu: false
                    },
                    {
                        link: '/container',
                        menu: 'Container',
                        icon: FaRegCircle,
                        subMenu: false
                    },
                    {
                        link: '/blank',
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
                        link: '/landing',
                        menu: 'Landing',
                        icon: FaRegCircle,
                        subMenu: false
                    },
                    {
                        link: '/pricing',
                        menu: 'Pricing',
                        icon: FaRegCircle,
                        subMenu: false
                    },
                    {
                        link: '/payment',
                        menu: 'Payment',
                        icon: FaRegCircle,
                        subMenu: false
                    },
                    {
                        link: '/checkout',
                        menu: 'Checkout',
                        icon: FaRegCircle,
                        subMenu: false
                    },
                    {
                        link: '/help-Center',
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
                link: '/email',
                menu: 'Email',
                icon: MdOutlineMail,
                dropDown: false
            },
            {
                link: '/chat',
                menu: 'Chat',
                icon: GrChatOption,
                dropDown: false
            },
            {
                link: '/calendar',
                menu: 'Calendar',
                icon: CiCalendarDate,
                dropDown: false
            },
            {
                link: '/kanban',
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
                        menu: 'dashboard',
                        icon: FaRegCircle,
                        subMenu: false
                    },
                    {
                        link: false,
                        menu: 'Products',
                        icon: FaRegCircle,
                        subMenu: [
                            {
                                link: '/product-List',
                                menu: 'Product List',
                                icon: FaRegCircle,
                                subMenu2: false
                            },
                            {
                                link: '/add-Product',
                                menu: 'Add Product',
                                icon: FaRegCircle,
                                subMenu2: false
                            },
                            {
                                link: '/category-List',
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
                                link: '/order-List',
                                menu: 'Order List',
                                icon: FaRegCircle,
                                subMenu2: false
                            },
                            {
                                link: '/order-List',
                                menu: 'Order Details',
                                icon: FaRegCircle,
                                subMenu2: false
                            },
                        ]
                    },
                    {
                        link: false,
                        menu: 'customer',
                        icon: FaRegCircle,
                        subMenu: [
                            {
                                link: '/all-Customers',
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
                                        link: '/overview',
                                        menu: 'Overview',
                                        icon: FaRegCircle,
                                    },
                                    {
                                        link: '/security-Customers',
                                        menu: 'Security',
                                        icon: FaRegCircle,
                                    },
                                    {
                                        link: '/address-&-Billing',
                                        menu: 'Address & Billing',
                                        icon: FaRegCircle,
                                    },
                                    {
                                        link: '/notifications',
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
                                link: '/referrals',
                                menu: 'Referrals',
                                icon: FaRegCircle,
                                subMenu2: false
                            },
                            {
                                link: '/settings',
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