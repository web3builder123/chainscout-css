import React, { useContext, useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Buffer } from "buffer";
import axios from "axios";
import { Web3Context } from "../../context/Web3Context";

const GasHistory = () => { 
  const { historydata} = useContext(Web3Context);
  

  const series = [
    {
      name: "base Fee History",
      data: historydata && historydata,
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
      categories: historydata && historydata.map((_, i) => i + 1), // Assuming x-axis is numeric, adjust as needed
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
