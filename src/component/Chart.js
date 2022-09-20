import React from "react";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement);

const Chart = () => {
  var data = {
    labels: ["1", "2", "3", "4", "5", "6","7", "8", "9", "10", "11", "12", "13", "14", "15", "16","17", "18", "19", "20", "21", "22","23", "24", "25", "26","27", "28", "29", "30"],
    datasets: [
      {
        label:'Renteds',
        data: [70, 122, 50, 5, 2, 3],
        backgroundColor: "#586B90",
        // borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)"],
        borderWidth: 1,
      },
    ],
  };

  var options = {
    maintainAspecRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    legend: {
      label: {
        fontSize: 26,
      },
    },
  };
  return (
    <div>
      <Bar data={data} height={100} options={options} />
    </div>
  );
};

export default Chart;