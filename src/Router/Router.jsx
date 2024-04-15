import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Notice from "../Pages/Notice/Notice";
import Profile from "../Pages/Profile/Profile";
import ExpenseReceipt from "../Pages/ExpenseReceipt/ExpenseReceipt";
import NewExpenseReceipt from "../Pages/ExpenseReceipt/NewExpenseReceipt/NewExpenseReceipt";
import ServiceList from "../Pages/Services/ServiceList/ServiceList";
import YearlyInvoice from "../Pages/Reports/YearlyInvoice/YearlyInvoice";
import TableTanStack from "../Pages/ReactDataTable/TableTanStack";

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
            // tanstack table
            {
                path: '/tableTanStack',
                element: <TableTanStack></TableTanStack>
            }

        ]
    }
])

export default Router;