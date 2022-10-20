import { BarElement, CategoryScale, Chart as ChartJS, LinearScale } from "chart.js";
import React, { useState  } from "react";
import { Button, Col, Container } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import { useDispatch} from "react-redux";
import Select from "react-select";

import { getMonthly } from "../redux/features/counter/carSlice";

ChartJS.register(CategoryScale, LinearScale, BarElement);

function Chart() {
  const dispatch = useDispatch();
  const [months, setMonths] = useState([]);
  const [monthsData, setMonthsData] = useState([]);

  const handleMonth = async () => {
    try {
      const response = await dispatch(getMonthly(months))
      setMonthsData((response.payload).map((val) => val.orderCount));
      return response;
    } catch (e) {
      console.error(e);
      return e
    }
  }

  const monthList = [
    { value: ['-'], label: "-" },
    { value: ['2022-06-01', '2022-06-30'], label: "June - 2022" },
    { value: ['2022-07-01', '2022-06-31'], label: "Juli - 2022" },
    { value: ['2022-08-01', '2022-06-31'], label: "Agustus - 2022" },
    { value: ['2022-09-01', '2022-06-30'], label: "September - 2022" },
    { value: ['2022-10-01', '2022-10-31'], label: "Oktober - 2022" }
  ];

  const data = {
    labels: ["1", "2", "3", "4", "5", "6","7", "8", "9", "10", "11", "12", "13", "14", "15", "16","17", "18", "19", "20", "21", "22","23", "24", "25", "26","27", "28", "29", "30"],
    datasets: [
      {
        label:'Renteds',
        data: monthsData,
        backgroundColor: "#586B90",
        // borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspecRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 10,
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
                  <Container className="mt-2 mb-5">
              <div>Month</div>
              <Col md={3} className="d-flex">
                <Select className="selectFont" onChange={(e) => {
                  setMonths(e.value);
                }} options={monthList} placeholder="-" />
                <Button onClick={() => {handleMonth()}}>Go</Button>
              </Col>
            </Container>
      <Bar data={data} height={100} options={options} />
    </div>
  );
}

export default Chart;