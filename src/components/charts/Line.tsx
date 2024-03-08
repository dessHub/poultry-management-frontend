import { FC } from "react";
import { Line } from 'react-chartjs-2';
import { LineChartProps } from "types/chart";

const LineChart: FC<LineChartProps> = ({title, chartData}) => {
    const options = {
        responsive: true,
        plugins: {
            colors: {
                enabled: true
            },
            legend: {
                position: 'right' as const,
            },
            title: {
                display: true,
                text: title,
            },
        },
    };
    const data = {
    labels: chartData.labels,
    datasets: [...chartData.datasets]
    };

    return  (
        <>
          <Line  options={options} data={data} />
        </>
    )
}

export default LineChart;