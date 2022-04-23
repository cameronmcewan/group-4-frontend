import React, { useEffect, useState } from "react";
import { PieChart } from "react-minimal-pie-chart";

const CustomPieChart = (props) => {
  const lineWidth = 60;

  function getData() {
    const addresses = {
      "0xd0A1E359811322d97991E03f863a0C30C2cF029C": "WETH",
      "0xA0A5aD2296b38Bd3e3Eb59AAEAF1589E8d9a29A9": "WBTC",
      "0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa": "DAI",
      "0xa36085F69e2889c224210F603D836748e7dC0088": "LINK",
    };
    const colours = ["#E38627", "#C13C37", "#6A2135"];
    let data = [];
    for (let i = 0; i < props.tokenAddresses.length; i++) {
      let asset = {
        color: colours[i],
        title: addresses[props.tokenAddresses[i]],
        value: props.percentageHoldings[i],
      };
      data.push(asset);
    }
    return data;
  }

  return (
    <PieChart
      animate
      animationDuration={500}
      data={getData()}
      radius={50}
      lineWidth={60}
      label={({ dataEntry }) => `${dataEntry.value}% ${dataEntry.title}`}
      labelPosition={100 - lineWidth / 2}
      labelStyle={{
        fill: "#fff",
        opacity: 0.75,
        fontSize: "5px",
      }}
    />
  );
};

export default CustomPieChart;
