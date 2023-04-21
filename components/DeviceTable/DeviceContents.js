import Image from 'next/image';
import React from 'react';

import ButtonActive from '../ButtonList/ButtonActive';
import ButtonIcon from '../ButtonList/ButtonIcon';
import ButtonTick from '../ButtonList/ButtonTick';
import LoadingWrapper from '../Loading/LoadingWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { getDevice, toggleDetail } from './deviceSlice';

const DeviceContents = () => {
	const device = {
		code: 'APF-1234',
		type: 'Auto Pet Feeder',
		petName: 'Gau Gau',
		userEmail: 'nguyenvanbaonguyen@gmail.com',
		status: 'ACTIVE',
	};
	const dispatch = useDispatch();
	const allDevice = useSelector(getDevice);
	const list = new Array(10).fill(0);
	const handleOnClick = () => {
		dispatch(toggleDetail());
	}
	return (
		<LoadingWrapper isLoading={false}>
			{allDevice.map((value, index) => (
				<div
					className="grid grid-cols-11 px-base mt2 py-base bg-primary text-14-17 w-full rounded-[5px] shadow-block"
					key={index}
				>

					<div className="col-span-1 self-center">{1 + index}</div>
					<div className="col-span-1 text-center self-center">{value.name}</div>
					<div className="col-span-1 text-center self-center">{value.type}</div>
					<div className="col-span-3 text-center self-center">{value.userID}</div>
					<div className="col-span-2 text-center self-center">{value.petID}</div>
					<div className="col-span-2 flex justify-center">
						<ButtonActive status={value.status} id={value._id} />
					</div>
					<div className="col-span-1 flex justify-center items-center">
						<ButtonIcon icon="pen" action={() => handleOnClick()} />
					</div>
				</div>
			))}
		</LoadingWrapper>
	);
};

export default DeviceContents;
