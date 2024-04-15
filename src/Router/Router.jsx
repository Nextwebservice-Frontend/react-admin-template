import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Notice from "../Pages/Notice/Notice";
import Profile from "../Pages/Profile/Profile";
import NewExpenseReceipt from "../Pages/ExpenseReceipt/NewExpenseReceipt/NewExpenseReceipt";
import ExpenseList from "../Pages/ExpenseList/ExpenseList";
import ExpanseReceipt from "../Pages/ExpanseReceipt/ExpanseReceipt";
import MonthlyInvoice from "../Pages/MonthlyInvoice/MonthlyInvoice";


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
                element: <ExpanseReceipt />
            },
            {
                path: '/newExpenseReceipt',
                element: <NewExpenseReceipt />
            },
            {
                path: '/expenseList',
                element: <ExpenseList />
            },
            {
                path: '/profile',
                element: <Profile />
            }
            },
            {
                path: '/monthly-report-list',
                element: <MonthlyInvoice />
            },
        ]
    }
])

export default Router;