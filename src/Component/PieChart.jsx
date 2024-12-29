
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';



ChartJS.register(ArcElement, Tooltip, Legend);
const PieChart = () => {
  const data = {
    labels: ['Oil revenues', 'Tax revenues', 'Other','Grants'],
    datasets: [{
      label: ['Oil revenues', 'Tax revenues', 'Other','Grants'],
      data: [45.3,25.6, 18.3,10.8],
      backgroundColor: [
        'rgba(255, 99, 132, 0.4)',
        'rgba(54, 162, 235, 0.4)',
        'rgba(255, 206, 86, 0.4)',
        'rgba(75, 192, 192, 0.4)'
       
        
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 1
    }]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top', // Position of the legend
      },
      title: {
        display: true,
        text: 'Government Revenues 2014', // Chart title
      },
      padding: {
        top: 10,
        bottom: 30
    }
    },
   
   
    animation: {
      animateScale: true, // Animates scaling
      animateRotate: true, // Animates rotatio// Animation duration in ms
      easing: 'easeInOut', // Easing function
    }
  };
  return(
    <div className='max-w-[400px]'>
      <Pie data={data} options={options} />;
  </div>
  
  );
}

export default PieChart;

