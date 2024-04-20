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
                path: '/profile',
                element: <Profile />
            }
            ,
            {
                path: '/expenseList',
                element: <ExpenseList></ExpenseList>
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
                path: '/monthlyInvoice',
                element: <MonthlyInvoice></MonthlyInvoice>
            },
        
            {
                path: '/btn',
                element: <Button></Button>
            }
            
        ]
    }
])

export default Router;