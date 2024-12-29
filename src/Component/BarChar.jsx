// BarChart.js
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

// Register required components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  // Data for the Bar Chart
  const data = {
    labels: ['Agriculture', 'Manufacturing and Construction', 'Private sector', 'Public servants', 'Other'],
    datasets: [
      {
        label: 'Man',
        data: [15.5, 22.5, 23.3, 35.2, 2.6],
        backgroundColor: [
          'rgba(54, 162, 235, 0.4)',
          'rgba(54, 162, 235, 0.4)',
          'rgba(54, 162, 235, 0.4)',
          'rgba(54, 162, 235, 0.4)',
          'rgba(54, 162, 235, 0.4)'
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)'
         
        ],
        borderWidth: 1,
      },
      {
        label: 'Women',
        data: [17, 4, 12.6, 66, 0.5],
        backgroundColor: [
          'rgba(255, 99, 132, 0.4)',
          'rgba(255, 99, 132, 0.4)',
          'rgba(255, 99, 132, 0.4)',
          'rgba(255, 99, 132, 0.4)',
          'rgba(255, 99, 132, 0.4)'
         
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 99, 132, 1)'
         
        ],
        borderWidth: 1
      }
    ],
  };

  // Options for the Bar Chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top', // Position of the legend
      },
      title: {
        display: true,
        text: 'Employment by Sector', // Chart title
      },
    },
    scales: {
      x: {
        title: {
            display: true,
            text: 'Source: Central Statistical Organization, 2010 ( as cited in Demographic and Labour Markettrends in Yemen, ILO)',
          }, // Enable stacking on the x-axis
      },
      y: {
        
        title: {
            display: true,
            text: 'Percentage',
          },// Enable stacking on the y-axis
      },
    },
  };

  return (
   
      <Bar data={data} options={options} />

  );
};

export default BarChart;
