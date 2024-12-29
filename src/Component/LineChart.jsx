
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const xData =[
    '2016.01', '2016.02', '2016.03', '2016.04', '2016.05', '2016.06', '2016.07', '2016.08',
     '2016.09', '2016.10', '2016.11', '2016.12', '2017.01', '2017.02', '2017.03', '2017.04', '2017.05', '2017.06', 
     '2017.07', '2017.08', '2017.09', '2017.10', '2017.11', '2017.12', '2018.01', '2018.02', '2018.03', '2018.04', '2018.05',
      '2018.06', '2018.07', '2018.08', '2018.09', '2018.10', '2018.11', '2018.12', '2019.01', '2019.02', '2019.03', '2019.04', '2019.05', 
      '2019.06', '2019.07', '2019.08', '2019.09', '2019.10', '2019.11', '2019.12', '2020.01', '2020.02', '2020.03', '2020.04', '2020.05', '2020.06', 
      '2020.07', '2020.08', '2020.09', '2020.10', '2020.11', '2020.12', '2021.01', '2021.02', '2021.03', '2021.04', '2021.05', '2021.06', '2021.07', '2021.08',
       '2021.09', '2021.10', '2021.11', '2021.12', '2022.01', '2022.02', '2022.03', '2022.04', '2022.05', '2022.06', '2022.07', '2022.08', '2022.09', '2022.10', '2022.11', '2022.12',
        '2023.01', '2023.02', '2023.03', '2023.04', '2023.05', '2023.06', '2023.07', '2023.08', '2023.09', '2023.10', '2023.11', '2023.12', '2024.01', '2024.02', '2024.03', '2024.04', 
        '2024.05', '2024.06', '2024.07', '2024.08', '2024.09', '2024.10'
]

const yData = [283.5416666666667, 283.5416666666667, 283.5416666666667, 283.5416666666667, 
  283.5416666666667, 283.5416666666667, 278.225, 292.6666666666667, 291.0, 296.65, 300.90909090909093,
   305.19444444444446, 311.59375, 336.3125, 343.19444444444446, 353.95, 357.8333333333333, 353.57142857142856,
    362.42857142857144, 371.7, 372.5357142857143, 392.55555555555554, 417.67857142857144, 443.39285714285717,
     453.42857142857144, 474.775, 485.75, 558.488, 486.1388888888889, 487.0625, 497.5, 551.2083333333334, 732.9812499999999,
      714.8928571428571, 588.85, 500.14285714285717, 532.7142857142857, 579.28125, 577.25, 506.89285714285717,
       534.5454545454545, 558.15625, 574.6666666666666, 590.5, 608.15, 594.5625, 569.5714285714286,
        594.6666666666666, 637.0625, 651.71875, 653.4166666666666, 665.2083333333334, 688.9285714285714, 688.84375,
         748.2916666666666, 763.7083333333334, 805.0357142857143, 824.2666666666668, 843.4772727272727, 829.75, 828.4310000000002,
          865.505, 891.3744444444443, 870.1700000000001, 905.8100000000001, 932.9599999999999, 981.285, 1006.3888888888889, 1094.7825,
           1258.6242857142859, 1480.8888888888887, 1209.645, 1085.3600000000001, 1116.9377777777777, 1241.6799999999998, 966.4166666666666, 
           994.8244444444445, 1086.1425, 1131.4925, 1147.2875000000001, 1131.4342857142858, 1141.8725, 1144.8011111111111, 1162.2900000000002, 
           1233.4550000000002, 1236.7728571428572, 1241.5616666666667, 1207.17375, 1273.1455555555556, 1347.3888888888891, 1412.14, 1418.2900000000002, 
           1442.9, 1463.1055555555554, 1511.7285714285717, 1526.9314285714283, 1552.2257142857143, 1642.55375, 1649.952, 1670.148888888889, 1707.2044444444446, 
           1793.565, 1864.337142857143, 1907.6842857142858, 1895.977, 1979.44]


const Huthisy=  [288.96875, 288.96875, 288.96875, 288.96875, 288.96875, 288.96875, 287.5, 291.0416666666667,
   298.75, 302.875, 304.35, 307.625, 314.7083333333333, 342.8333333333333, 347.25, 355.6666666666667, 358.875, 354.44444444444446, 
   363.4, 369.25, 371.27777777777777, 386.0625, 419.1666666666667, 439.30555555555554, 459.4166666666667, 472.84375, 482.4166666666667,
    511.7142857142857, 484.1875, 483.0625, 496.89399999999995, 548.145, 625.7633333333333, 726.40625, 595.2916666666666,
     498.9583333333333, 532.4377777777778, 581.285, 570.5, 508.30285714285714, 532.5583333333333, 556.4214285714286, 568.8457142857143,
      582.4375, 601.2866666666667, 584.7466666666667, 565.21, 583.6875, 585.3255555555556, 594.7180000000001, 596.5625, 597.525, 597.6800000000001,
       600.9171428571428, 600.97, 597.75, 603.9314285714287, 608.3585714285715, 603.9433333333333, 607.92125, 592.845, 595.38, 600.2049999999999, 595.5771428571428, 
       594.215, 595.6183333333333, 596.1757142857143, 597.39, 599.038, 599.7575, 600.1233333333333, 600.304, 599.9480000000001, 600.3800000000001, 601.1883333333334, 557.8628571428571,
        556.0519999999999, 556.8457142857143, 557.0585714285714, 557.32, 557.5514285714287, 557.78, 558.2733333333334, 558.26, 555.1333333333333, 542.73, 544.5719999999999, 536.23875, 530.4283333333333,
        527.738, 525.64, 527.6033333333334, 524.0500000000001, 522.842, 522.3066666666667, 526.5325,
        526.4333333333333, 524.9666666666667, 528.755, 527.632, 527.0]




const LineChart = () => {

  const data = {
    labels: xData,
    datasets: [
      {
        label: 'Internationally Recognized Government',
        data: yData,
        borderColor: 'rgba(255, 99, 132, 0.5)',
        backgroundColor: 'rgba(255, 99, 132, 1)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Houthis',
        data: Huthisy, // Example: Adjusted values for a second trend
        borderColor: 'rgba(40, 192, 192, 0.5)',
        backgroundColor: 'rgba(75, 192, 19, 0.5)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  // Chart.js options object
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Exchange Rate',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
      legend: {
        position: 'top',
      },
    },
    scales: {
      x: {
        type: 'category',
        title: {
          display: true,
                   text: '                                                                                     Source: Dataset of Yemen Economic Tracking Initiative',
        },

      },
      y: {
        title: {
          display: true,
          text: 'Price of USD in YR',
        },
        ticks: {
          beginAtZero: false,
        },
      },
    },
  };

  return (
  
    
      <Line data={data} options={options} />
  
  );
};

export default  LineChart;

