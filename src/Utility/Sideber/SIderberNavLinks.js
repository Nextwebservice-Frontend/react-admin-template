import { RiHomeSmile2Line } from "react-icons/ri";
import { FaRegCircle } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { GrChatOption } from "react-icons/gr";
import { HiOutlineShoppingCart, HiOutlineTruck } from "react-icons/hi";
import { VscFiles } from "react-icons/vsc";
import { CiCalendarDate } from "react-icons/ci";
import { TbFileDollar, TbLayoutKanban } from "react-icons/tb";
import { IoBookOutline } from "react-icons/io5";

const permission = JSON.parse(localStorage.getItem("access"));
// console.log(permission);

export const SIderberNavLinks = [
  //groups
  {
    title: false, //group title
    NavItems: [
      //group links
      {
        link: false,
        menu: "Dashboards", //accordion  parent
        icon: RiHomeSmile2Line,
        dropDown: [
          //accordion child
          permission && {
            link: "/Analytice",
            menu: "Analytice",
            subMenu: false,
          },
          {
            link: "/CRM",
            menu: "CRM",
            subMenu: false,
          },
          {
            link: "/eCommerce",
            menu: "eCommerce",
            subMenu: false,
          },
          {
            link: "/logistice",
            menu: "Logistice",
            subMenu: false,
          },
          {
            link: "/Academy",
            menu: "Academy",
            subMenu: false,
          },
        ],
      },
      {
        link: false,
        menu: "Layouts",
        icon: RiHomeSmile2Line,
        dropDown: [
          {
            link: "/Collapsed-menu",
            menu: "Collapsed menu",
            subMenu: false,
          },
          {
            link: "/Content-Navbar",
            menu: "Content Navbar",
            subMenu: false,
          },
          {
            link: "/Content-Nav-Sidever",
            menu: "Content Nav + Sidever",
            subMenu: false,
          }
        ]
      },
      {
        link: false,
        menu: "Front Pages",
        icon: VscFiles,
        dropDown: [
          {
            link: "/Landing",
            menu: "Landing",
            subMenu: false,
          },
          {
            link: "/Pricing",
            menu: "Pricing",
            subMenu: false,
          },
          {
            link: "/Payment",
            menu: "Payment",
            subMenu: false,
          },
          {
            link: "/Checkout",
            menu: "Checkout",
            subMenu: false,
          },
          {
            link: "/Help-Center",
            menu: "Help Center",
            subMenu: false,
          },
        ],
      },
    ],
  },
  {
    NavItems: [
      {
        link: false,
        menu: "Setting",
        icon: TbFileDollar,
        dropDown: [
          {
            link: "/user",
            menu: "User",
            icon: FaRegCircle,
            subMenu: false,
          },
          {
            link: "/role",
            menu: "Role",
            icon: FaRegCircle,
            subMenu: false,
          },
        ],
      },
    ],
  },
];
