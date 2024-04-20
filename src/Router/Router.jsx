import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Notice from "../Pages/Notice/Notice";
import Profile from "../Pages/Profile/Profile";
import NewExpenseReceipt from "../Pages/ExpenseReceipt/NewExpenseReceipt/NewExpenseReceipt";
import ServiceList from "../Pages/Services/ServiceList/ServiceList";
import YearlyInvoice from "../Pages/Reports/YearlyInvoice/YearlyInvoice";
import GeneralSetting from "../Pages/Settings/GeneralSetting/GeneralSetting";
import ExpenseReceipt from "../Pages/ExpenseReceipt/ExpenseReceipt/ExpenseReceipt";
import CategoryList from "../Pages/Expense/CategoryList/CategoryList";
import NewRole from "../Pages/NewRole/NewRole";
import Login from "../Pages/Login/Login";
import LoginPage from "../Pages/LoginPage/LoginPage";
import TinyMCE from "../Components/dashboard/TinyMCE/TinyMCE";
import RoleTable from "../Pages/Role/RoleTable";
const Router = createBrowserRouter([
    {
        path: '/',
        element: <DashboardLayout />,
        children: [
            {
                path: '/',
                element: <Notice />
            }
            ,
            {
                path: '/profile',
                element: <Profile />
            }
          ,
            {
                path: '/newExpenseReceipt',
                element: <NewExpenseReceipt />
            },
            
            {
                path: '/ExpenseReceipt',
                element: <ExpenseReceipt />
            },
            {
                path: '/serviceList',
                element: <ServiceList />
            },
            {
                path: '/yearlyInvoiceList',
                element: <YearlyInvoice />
            },
            {
                path: '/generalSetting',
                element: <GeneralSetting />
            }
            ,
            {
                path: '/categoryList',
                element: <CategoryList></CategoryList>
            },
        
            {
                path: '/newrole',
                element: <NewRole></NewRole>
            },
            {
                path: '/TinyMCE',
                element: <TinyMCE></TinyMCE>
            },
            {
                path: '/role',
                element: <RoleTable></RoleTable>
            },
        ]
    },
    {
        path: '/login',
        element: <LoginPage></LoginPage>
    }
])

export default Router;