
import { IoCartOutline } from "react-icons/io5";
import { TiChartBarOutline } from "react-icons/ti";
import { FaDollarSign } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import Chart from "react-apexcharts";
import { useState } from "react";
const BarChart = () => {
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: "bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997,]
      },

    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60,]
      }
    ]

  });

  return (
    <div className=" w-full">
      <div className="mb-5">
        <h1 className="text-gray-500 text-xl">Earning Reports</h1>
        <h1 className="text-gray-500 text-sm">Yearly Earnings Overview</h1>
      </div>
      {/*Tabs  */}
      {/* <div className="flex items-center gap-6 overflow-x-auto pb-4">
        <div className="flex flex-col items-center justify-center border-none md:border-dashed md:border md:py-3 md:px-5">
          <div className="bg-indigo-100 p-1 rounded-md">
            <IoCartOutline className="text-xl text-indigo-500 " />
          </div>
          <h1 className="text-gray-500 text-xl hidden md:block">Orders</h1>
        </div>
        <div className="flex flex-col items-center justify-center  md:border-dashed md:border md:py-3 md:px-5">
          <div className="bg-indigo-100 p-1 rounded-md">
            <TiChartBarOutline className="text-xl text-indigo-500 " />
          </div>
          <h1 className="text-gray-500 text-xl hidden md:block">Sales</h1>
        </div>
        <div className="flex flex-col items-center justify-center  md:border-dashed md:border md:py-3 md:px-5">
          <div className="bg-indigo-100 p-1 rounded-md">
            <FaDollarSign className="text-xl text-indigo-500 " />
          </div>
          <h1 className="text-gray-500 text-xl hidden md:block">Profit</h1>
        </div>
        <div className="flex flex-col items-center justify-center  md:border-dashed md:border md:py-3 md:px-5">
          <div className="bg-indigo-100 p-1 rounded-md">
            <FaRegClock className="text-xl text-indigo-500 " />
          </div>
          <h1 className="text-gray-500 text-xl hidden md:block">Income</h1>
        </div>
      </div> */}

      <div className="w-full ">
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="bar"
        />
      </div>
    </div>
  )
}

export default BarChart; 