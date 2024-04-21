

import PieChart from "react-apexcharts";
import { useState } from "react";
const Piechart = () => {
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: "donut"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      },
      legend: {
        position: 'bottom'
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              value: {
                show: true
              },
              name: {
                show: true
              },

            }
          }
        }
      }
    },
    series: [44, 55, 13, 33],
    colors: ['#F44336', '#F44336', '#F44336', '#FCA5C5'],
    labels: ['Apple', 'Mango', 'Orange', 'Watermelon'],

  });

  return (
    <div className=" w-full">
      <div className="mb-5">
        <h1 className="text-gray-500 text-xl">Reasons for delivery exceptions</h1>
      </div>


      <div className="w-full">
        <PieChart
          options={chartData.options}
          series={chartData.series}
          colors={chartData.colors}
          type="donut"
        />
      </div>
    </div>
  )
}

export default Piechart; 