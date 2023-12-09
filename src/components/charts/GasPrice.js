import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts"; 
import { Web3Context } from "../../context/Web3Context";

 const GasPriceEstimate =()=> {  
  const { data} = useContext(Web3Context);
  const series = [
    {
      name: 'Low Gas Fee',
      data: [
        data &&  data?.low.suggestedMaxPriorityFeePerGas,
        data && data?.low.suggestedMaxFeePerGas
      ],
    },
    {
      name: 'Medium Gas Fee',
      data: [
        data &&  data?.medium.suggestedMaxPriorityFeePerGas,
        data &&  data?.medium.suggestedMaxFeePerGas,
      ],
    },
    {
      name: 'High Gas Fee',
      data: [
        data &&  data?.high.suggestedMaxPriorityFeePerGas,
        data &&  data?.high.suggestedMaxFeePerGas,
      ],
    },
  ];
  
   const  options= {
    chart: {
      type: "bar",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },

    legend: {
      show: true,
      fontSize: "12px",
      fontWeight: 300,

      labels: {
        colors: "black",
      },
      position: "bottom",
      horizontalAlign: "center",
      markers: {
        width: 19,
        height: 19,
        strokeWidth: 0,
        radius: 19,
        strokeColor: "#fff",
        fillColors: ["#fc8019", "#9568ff", "#000045"],
        offsetX: 0,
        offsetY: 0,
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#3e4954",
          fontSize: "14px",
          fontFamily: "Poppins",
          fontWeight: 100,
        },
      },
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["1", "2"],
    },
    fill: {
      colors: ["#fc8019", "#9568ff", "#000045"],
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return   val + "  Suggested fee per Gas" ;
        },
      },
    },
  };
  
    return (
      <div id="chart" className="line-chart-style bar-chart">
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={300}
        />
      </div>
    ); 
}

export default GasPriceEstimate;
