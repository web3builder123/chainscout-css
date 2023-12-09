import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Buffer } from "buffer";
import axios from "axios";

const GasHistory = () => {
  const [data, setData] = useState();

  const Auth = Buffer.from(
    process.env.REACT_APP_INFURA_KEY + ":" + process.env.REACT_APP_INFURA_SECRET
  ).toString("base64");

  const getGasEstimate = async (chainId) => {
    const { data } = await axios.get(
      `https://gas.api.infura.io/networks/${chainId}/baseFeeHistory`,
      {
        headers: {
          Authorization: `Basic ${Auth}`,
        },
      }
    );
    const dd = data?.slice(0, 20);
    setData(dd);
  };

  useEffect(() => {
    getGasEstimate(80001);
  }, []);

  const series = [
    {
      name: "base Fee History",
      data: data,
    },
  ];
  const options = {
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [4],
      colors: ["#9568ff"],
      curve: "straight",
    },
    xaxis: {
      type: "numeric", // Change to "numeric" for a numeric x-axis
      categories: data && data.map((_, i) => i + 1), // Assuming x-axis is numeric, adjust as needed
    },
    colors: ["#9568ff"],
    markers: {
      size: [6],
      strokeWidth: [4],
      strokeColors: ["#9568ff"],
      border: 0,
      colors: ["#fff"],
      hover: {
        size: 10,
      },
    },
    yaxis: {
      title: {
        text: "",
      },
    },
  };
  return (
    <div id="chart" className="bar-chart">
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={300}
      />
    </div>
  );
};
export default GasHistory;
