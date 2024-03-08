
export interface LineChart {
    labels: string[],
    datasets: LineChartDatasets[]
}

export interface LineChartDatasets {
    label: string,
    data: number[],
    [key: string]: unknown
}

export interface LineChartProps {
    title: string,
    chartData: LineChart
}

export interface Chart {
    labels: string[],
    datasets: ChartDatasets[]
}

export interface ChartDatasets {
    label: string,
    data: number[],
    [key: string]: unknown
}

export interface BarChartProps {
    title: string,
    chartData: Chart
}