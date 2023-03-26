import React from 'react';
import Paginate from '../Paginate/Paginate';
import DeviceAdd from './DeviceAdd';
import DeviceContents from './DeviceContents';
import DeviceHeader from './DeviceHeader';
import DeviceSearch from './DeviceSearch';

const DeviceTable = () => {
	return (
		<div>
			<div
				className={`flex px-base py-[25px] justify-between bg-primary bg-primary rad-small items-center mt4 w-full `}
			>
				<DeviceSearch />
				<DeviceAdd />
			</div>

			<div className="overflow-auto hide-scroll max-w-[calc(100vw-20px)] tablet:max-w-auto">
				<div className="min-w-[1100px]">
					<DeviceHeader />
					<DeviceContents />
				</div>
			</div>
			<Paginate />
		</div>
	);
};

export default DeviceTable;
