import {} from 'react';
import { Pie } from 'react-chartjs-2';

export const data = {
  labels: ['No Of Times Recommended', 'Conversion Rate'],
  datasets: [
    {
      label: 'Conversion rate',
      data: [50, 19],
      backgroundColor: [
        '#2C5282',
        '#2C7A7B'
      ],
      borderColor: [
        '#2C5282',
        '#234E52'
      ],
      borderWidth: 1,
    },
  ],
};

const PieChart = () => {
  return <Pie data={data} />;
}

export default PieChart;
