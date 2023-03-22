import dynamic from 'next/dynamic';
import React from 'react';
import Loading from '../Loading/Loading';
import BlockStat from './BlockStat';
import DealDetails from './DealDetails';
const DynamicSaleChart = dynamic(() => import('../SaleChart/SaleChart'), {
	loading: Loading,
});
const Dashboard = () => {
	const Stats = ['user', 'order', 'sales', 'pending'];
	return (
		<div>
			<h1 className="text-24-29 text-select font-bold">Dashboard</h1>
			<div className="grid grid-cols-2 laptop:grid-cols-4 gap-x-[15px] tablet:gap-x-[30px] mt-[38px] gap-y-5">
				{Stats.map((stat, index) => (
					<BlockStat stat={stat} key={index} />
				))}
			</div>
			<div className="mt-[30px] bg-primary rad-base ">
				<DynamicSaleChart />
			</div>
			<div className="mt-[30px] bg-primary rad-base ">
				<DealDetails />
			</div>
		</div>
	);
};

export default Dashboard;
