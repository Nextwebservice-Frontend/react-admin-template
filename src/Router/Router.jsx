import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Notice from "../Pages/Notice/Notice";
import Profile from "../Pages/Profile/Profile";
import NewExpenseReceipt from "../Pages/ExpenseReceipt/NewExpenseReceipt/NewExpenseReceipt";
import ServiceList from "../Pages/Services/ServiceList/ServiceList";
import YearlyInvoice from "../Pages/Reports/YearlyInvoice/YearlyInvoice";
import GeneralSetting from "../Pages/Settings/GeneralSetting/GeneralSetting";
import Button from "../Pages/Button/Button";
import Provider from "../Pages/Others/Provider";
import ExpenseReceipt from "../Pages/ExpenseReceipt/ExpenseReceipt/ExpenseReceipt";
import CategoryList from "../Pages/Expense/CategoryList/CategoryList";
import ExpenseList from "../Pages/Expense/ExpenseList/ExpenseList";
import NewRole from "../Pages/NewRole/NewRole";
import Login from "../Pages/Login/Login";
import LoginPage from "../Pages/LoginPage/LoginPage";
import TinyMCE from "../Components/dashboard/TinyMCE/TinyMCE";

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
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/TinyMCE',
                element: <TinyMCE></TinyMCE>
            },
        ]
    },
    {
        path: '/LoginPage',
        element: <LoginPage></LoginPage>
    }
])

export default Router;