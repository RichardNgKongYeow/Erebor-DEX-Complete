import React, { useRef } from "react";
import { Line } from "react-chartjs-2";

function Charting({ price, data }) {
  const opts = {
    tooltips: {
      intersect: false,
      mode: "index"
    },
    responsive: true,
    maintainAspectRatio: false
  };
  if (price === "0.00") {
    return <h2 style={{color:"white"}}>Please select a currency pair</h2>;
  }
  return (
    <div className="dashboard">
      <h2 style={{color:"white"}}>{`$${price}`}</h2>

      <div className="chart-container">
        <Line data={data} width={100} height={150} options={opts} />
      </div>
    </div>
  );
}

export default Charting;