import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Notice from "../Pages/Notice/Notice";
import Profile from "../Pages/Profile/Profile";
import ExpenseReceipt from "../Pages/ExpenseReceipt/ExpenseReceipt";
import NewExpenseReceipt from "../Pages/ExpenseReceipt/NewExpenseReceipt/NewExpenseReceipt";
import ServiceList from "../Pages/Services/ServiceList/ServiceList";
import YearlyInvoice from "../Pages/Reports/YearlyInvoice/YearlyInvoice";
import Role from "../Pages/Role/Role";
import Login from "../Pages/Login/Login";
import NewRole from "../Pages/Role/NewRole";
import DataTable from "../Pages/DataTable/DataTable";
import DataTable2 from "../Pages/DataTable/DataTable2";





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
                path: '/expenseReceipt',
                element: <ExpenseReceipt />
            }
            ,
            {
                path: '/newExpenseReceipt',
                element: <NewExpenseReceipt />
            },
            {
                path: '/profile',
                element: <Profile />
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
                path: '/role',
                element: <Role />
            },
            {
                path: '/newRole',
                element: <NewRole />
            },
            {
                path: '/dataTable',
                element: <DataTable />
            },
            {
                path: '/dataTable2',
                element: <DataTable2 />
            },
        ]
    },
    {
        path: '/login',
        element: <Login />
    }
])

export default Router;