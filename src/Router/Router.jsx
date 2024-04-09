import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Notice from "../Pages/Notice/Notice";
import Profile from "../Pages/Profile/Profile";
import ExpanseReceipt from "../Pages/ExpanseReceipt/ExpanseReceipt";
import NewExpanseReceipt from "../Pages/ExpanseReceipt/NewExpanseReceipt/NewExpanseReceipt";


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
            }
            ,
            {
                path: '/newExpenseReceipt',
                element: <NewExpanseReceipt />
            },
            {
                path: '/profile',
                element: <Profile />
            }
        ]
    }
])

export default Router;