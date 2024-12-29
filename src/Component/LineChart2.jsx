
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

const xData = ['2020.01', '2020.02', '2020.03', '2020.04', '2020.05', '2020.06', '2020.07', '2020.08', '2020.09', '2020.10', '2020.11', '2020.12', '2021.01', '2021.02', '2021.03', '2021.04', '2021.05', '2021.06', '2021.07', '2021.08', '2021.09', '2021.10', '2021.11', '2021.12', '2022.01', '2022.02', '2022.03', '2022.04', '2022.05', '2022.06', '2022.07', '2022.08', '2022.09', '2022.10', '2022.11', '2022.12', '2023.01', '2023.02', '2023.03', '2023.04', '2023.05', '2023.06', '2023.07', '2023.08', '2023.09', '2023.10', '2023.11', '2023.12', '2024.01', '2024.02', '2024.03', '2024.04', '2024.05', '2024.06', '2024.07', '2024.08', '2024.09', '2024.10']

const yData = [0.5171843421956245, 0.44536082474226807, 0.45555413850274207, 0.2911681803946132, 0.27916018662519443, 0.2755652912165184, 0.40843031349184256, 0.4286240384090785, 0.40250112141332584, 0.45670225385527874, 0.39216379705224585, 0.4122100030129557, 0.4177701582871717, 0.44578983753223067, 0.5344625403714863, 0.600277819276693, 0.5925083626809154, 0.5688882695935518, 0.5493816781057491, 0.5592395804581838, 0.6020475401379827, 0.686265162530064, 0.7462578781512607, 0.7305632827996827, 0.912359559435184, 1.0058192339372332, 0.9856461752280322, 1.2068515256408678, 0.9658320507694267, 1.1363386611662045, 1.1562898855567607, 1.0521711926111432, 0.9202920692319735, 0.9983014741137912, 0.8289649536406615, 0.773735948477192, 0.7672756606442876, 0.8554810272356281, 0.7376878850157799, 0.8390810905776129, 0.762285188653475, 0.7021517220255519, 0.7976748561959659, 0.721064501215246, 0.7311664009979901, 0.7335668367947501, 0.8403738388410616, 0.8191265020788661, 0.8306045328459226, 0.6997487905646923, 0.7407141887417678, 0.794839315723016, 1.8503284121409658, 0.7502515938926105, 0.7375275471327993, 0.6192062328372694, 0.6526977911651881, 0.6273870387584367]
const Huthisy = [0.5182301207495164, 0.5659194778029251, 0.6175260046396768, 0.4937031923350488, 0.4852094766430196, 0.48285567061777, 1.0181456645090436, 0.8071936428272689, 0.7477049191961243, 0.643417533362608, 0.5786375416804321, 0.5889508127668087, 0.6768210915163322, 1.2439534414995466, 1.1714747461284063, 1.0588468808166869, 0.9724314151163019, 0.9485940381284436, 0.9790977252631653, 1.0423815821043763, 0.9890858342876412, 0.9309318071609498, 0.7798396996173009, 0.9302429626132284, 1.2596329777152115, 1.1548241669165082, 1.686421852592742, 1.2906397885809109, 1.1436057881534205, 1.1538204991380019, 1.2566003574899793, 1.1363908227469557, 1.1844938711611481, 0.9800757765905315, 0.940399565326423, 0.9308258824613211, 0.9006845202353789, 0.9212684023363367, 0.9181522369861104, 0.9029715464116186, 0.8955026912212458, 0.8852640893776835, 0.8560992314131345, 0.8529134893006741, 0.8586966892472091, 0.860680664521978, 0.9025896116494232, 0.9100419568909168, 0.9022984866713102, 0.9079147882405232, 0.8983366587549999, 0.9061713466961823, 0.907258064516129]



const LineChart2 = () => {

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
        text: 'Fuel Price Gap',
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
          text: '                 Source: Dataset of Yemen Economic Tracking Initiative',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Price of 1 L of Gasoline in USD',
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

export default  LineChart2;
