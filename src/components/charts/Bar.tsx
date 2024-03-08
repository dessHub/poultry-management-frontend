import { FC } from "react";
import { Bar } from 'react-chartjs-2';
import { BarChartProps } from "types/chart";

const LineChart: FC<BarChartProps> = ({title, chartData}) => {
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            colors: {
                enabled: true
            },
            legend: {
                position: 'top' as const,
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
        <div className="relative h-66 sm:h-70 w-full">
          <Bar  options={options} data={data} />
        </div>
    )
}

export default LineChart;