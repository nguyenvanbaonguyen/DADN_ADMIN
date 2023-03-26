import React, { useEffect, useRef, useState } from 'react';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import MonthSelect from './MonthSelect';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend
);

const options = {
	responsive: true,
	elements: {
		point: {
			radius: 1,
			borderWidth: 4,
			backgroundColor: '#4880FF',
			hoverRadius: 1,
			hoverBorderWidth: 5,
		},
		line: {
			borderWidth: 1,
			fill: false,
		},
	},
	scales: {
		x: {
			grid: {
				display: false,
			},
			ticks: {
				padding: 5,
			},
		},
		y: {
			grid: {
				drawTicks: false,
				tickWidth: 0,
			},
			ticks: {
				callback: function (value) {
					return value + '%';
				},
				stepSize: 20,
				padding: 5,
			},
			border: {
				display: false,
			},
			min: 0,
			max: 100,
		},
	},
	plugins: {
		legend: {
			display: false,
		},
	},
};

const labels = ['10', '20', '30', '40', '50', '60', '70', '80', '90'];

function createGradient(ctx, area) {
	const colorStart = 'rgba(67, 121, 238, 0.01)';
	const colorEnd = 'rgba(67, 121, 238, 0.3)';

	const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);

	gradient.addColorStop(0, colorStart);
	gradient.addColorStop(1, colorEnd);

	return gradient;
}

const data = {
	labels,
	datasets: [
		{
			fill: true,
			label: 'Dataset 2',
			data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
			borderColor: '#4379EE',
		},
	],
};

const DataTransmission = () => {
	const chartRef = useRef();
	const [chartData, setChartData] = useState({
		datasets: [],
	});
	useEffect(() => {
		const chart = chartRef.current;
		if (!chart) {
			return;
		}
		const chartData = {
			...data,
			datasets: data.datasets.map((dataset) => ({
				...dataset,
				backgroundColor: createGradient(chart.ctx, chart.chartArea),
			})),
		};

		setChartData(chartData);
	}, []);
	return (
		<div className={` px-[10px] duration-500 laptop:px-[30px] pb-[50px] `}>
			<div className="h-[100px] flex items-center justify-between ">
				<h2 className="text-24-20 font-bold">Data Transmission</h2>
				<MonthSelect />
			</div>
			<Line ref={chartRef} options={options} data={chartData} height={180} />
		</div>
	);
};

export default DataTransmission;
