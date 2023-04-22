import dynamic from 'next/dynamic';
import React from 'react';
import Loading from '../Loading/Loading';
import BlockStat from './BlockStat';
import DealDetails from './DealDetails';
import { getAllDevice } from '../DeviceTable/deviceSlice';
import { useSelector } from 'react-redux';
import { getAllUser } from '../UserTable/userSlice';
import { getAllPet } from '../PetTable/petSlice';
const DynamicDataTransmission = dynamic(() => import('../DataTransmission/DataTransmission'), {
	loading: Loading,
});
const Dashboard = () => {
	const Stats = ['user', 'device', 'pet'];
	const allDevcie = useSelector(getAllDevice);
	const allPet = useSelector(getAllPet);
	const allUser = useSelector(getAllUser);
	const data = [allUser, allDevcie, allPet];

	return (
		<div>
			<h1 className="text-24-29 text-select font-bold">Dashboard</h1>
			<div className="grid grid-cols-2 laptop:grid-cols-3 gap-x-[15px] tablet:gap-x-[30px] mt-[38px] gap-y-5">
				{Stats.map((stat, index) => (
					<BlockStat stat={stat} key={index} data={data[index]} />
				))}
			</div>
			<div className="mt-[30px] bg-primary rad-base ">
				<DynamicDataTransmission />
			</div>
			<div className="mt-[30px] bg-primary rad-base ">
				<DealDetails />
			</div>
		</div>
	);
};

export default Dashboard;
