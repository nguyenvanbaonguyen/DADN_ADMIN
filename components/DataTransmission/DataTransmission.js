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
import Image from 'next/image';
import { Popover } from '@headlessui/react';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

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
	const MONTHS = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];
	const [month, setMonth] = useState('October');
	const handleChange = (month, cb) => (e) => {
		setMonth(month);
		cb();
	};
	useEffect(() => {
		const chart = chartRef.current;
		if (!chart) {
			return;
		}
		const chartData = {
			...data,
			datasets: [
				{
					fill: true,
					label: 'Dataset 2',
					data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
					borderColor: '#4379EE',
				},
			].map((dataset) => ({
				...dataset,
				backgroundColor: createGradient(chart.ctx, chart.chartArea),
			})),
		};
		console.log(chartData);
		setChartData(chartData);
	}, [month]);
	return (
		<div className={` px-[10px] duration-500 laptop:px-[30px] pb-[50px] `}>
			<div className="h-[100px] flex items-center justify-between ">
				<h2 className="text-24-20 font-bold">Data Transmission</h2>
				<Popover className="relative text-12-10 font-semibold">
					<Popover.Button
						as="div"
						className="flex items-center px-[10px] py-[8px] bg-[#FCFDFD] border-[#D5D5D5] border-[1px] rounded-[4px] cursor-pointer hover:bg-slate-100"
					>
						<p>{month}</p>
						<Image
							alt=""
							src="/images/icons/button-down.svg"
							width={11}
							height={9}
							className="ml-4 w-[11px] h-[9px]"
						/>
					</Popover.Button>
					<Popover.Panel as="div" className="absolute w-full">
						{({ close }) => (
							<ul className=" bg-[#FCFDFD] border-t-[1px] mt-[5px]">
								{MONTHS.map((el) => (
									<li
										className="px-[10px] py-[8px] border-[#D5D5D5] border-b-[1px] border-x-[1px] hover:bg-slate-200 cursor-pointer"
										onClick={handleChange(el, close)}
									>
										{el}
									</li>
								))}
							</ul>
						)}
					</Popover.Panel>
				</Popover>
			</div>
			<Line ref={chartRef} options={options} data={chartData} height={180} />
		</div>
	);
};

export default DataTransmission;
