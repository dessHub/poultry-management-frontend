import {FC} from 'react';
import { Pie } from 'react-chartjs-2';

interface Props {
  labels: Array<unknown>
  data: Array<number>
}

const PieChart: FC<Props> = ({labels, data}) => {
  const pieObject = {
    labels: [...labels],
    datasets: [
      {
        label: 'Conversion rate',
        data: [...data],
        borderWidth: 1,
      },
    ],
  };
  return <Pie data={pieObject} />;
}

export default PieChart;
