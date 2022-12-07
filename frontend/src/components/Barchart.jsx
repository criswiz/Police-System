import React from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

function Barchart() {
  return (
    <div className="App">
      <h1>CRIME INDEXES IN REGIONS</h1>
      <div style={{ maxWidth: "1920px" }}>
        <Bar
          style={{ color: "white" }}
          data={{
            // Name of the variables on x-axies for each bar
            labels: ["Greater Accra", "Ashanti Region", "Eastern Region", "Northern Region", "Western Accra", "Oti Region", "Upper East Region", "Upper West Region"],
            datasets: [
              {
                // Label for bars
                label: "total count/value",
                // Data or value of your each variable
                data: [1552, 1319, 613, 1400, 352, 1200, 613, 1400],
                // Color of each bar
                backgroundColor: ["aqua"],
                // Border color of each bar
                borderColor: ["aqua"],
                borderWidth: 0.2,
              },
            ],
          }}
          // Height of graph
          height={200}
          options={{
            maintainAspectRatio: true,
            scales: {
              yAxes: [
                {
                  display: true,
                  ticks: {
                    // The y-axis value will start from zero
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 25,
              },
            },
          }}
        />
      </div>
    </div>
  )
}

export default Barchart
