// StackedBarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registering required components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StackedBarChart = () => {
  // Chart.js data configuration
  const data = {
    labels: ['2021', '2022', '2023', '2024'], // X-axis labels
    datasets: [
      {
        label: 'Ras Isa',
        data: [0, 0, 5, 11],
        backgroundColor: 'rgba(75, 192, 192, 0.4)',//green-l
        borderColor: 'rgba(255, 99, 132, 1)', // Color of bars in Dataset 1
        stack: 'Stack 0',
      },
      {
        label: 'Saleef',
        data: [10, 12, 25, 25],
        backgroundColor:  'rgba(75, 192, 192, 0.7)',//green-d
        borderColor:  'rgba(54, 162, 235, 1)', 
        stack: 'Stack 0',
      },
      {
        label: 'Al Hudaydah',
        data: [27, 40, 46, 40],
        backgroundColor: 'rgba(255, 206, 86, 0.4)',//yallow
        borderColor:'rgba(255, 206, 86, 1)',  // Color of bars in Dataset 3
        stack: 'Stack 0',
      },
      {
        label: 'Mukalla',
        data: [11, 6, 4, 4],
        backgroundColor:  'rgba(255, 99, 132, 0.4)',//red-l
        borderColor:  '	rgba(75, 192, 192, 1)',// Color of bars in Dataset 4
        stack: 'Stack 0',
      },
      {
        label: 'Aden',
        data: [52, 42, 20, 20],
        backgroundColor: 'rgba(255, 99, 132, 0.7)',//red-d
        borderColor:'rgba(153, 102, 255, 1)',// Color of bars in Dataset 4
        stack: 'Stack 0',
      },
    ],
  };

  // Chart.js options configuration
  const options = {
    responsive: true, // Makes the chart responsive
    maintainAspectRatio: false, // Allows the chart to fill the container
    plugins: {
      legend: {
        position: 'top', // Position of the legend
      },
      title: {
        display: true,
        text: 'Share of Goods Imports Through Ports (in percent of total)',
      },
    },
    scales: {
      x: {
        stacked: true,
        title: {
            display: true,
            text: 'Source: Dataset of Yemen Economic Tracking Initiative',
          }, // Enable stacking on the x-axis
      },
      y: {
        stacked: true, 
        title: {
            display: true,
            text: 'Approximated percentage',
          },// Enable stacking on the y-axis
      },
    },
  };

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Bar data={data} options={options} />
      </div>
  );
};

export default StackedBarChart;
