import Image from 'next/image';
import ButtonTick from '../ButtonList/ButtonTick';

const DeviceHeader = () => {
	return (
		<div className="grid mt2 grid-cols-11 px-base py-base bg-primary text-16-20 font-bold  shadow-block rounded-[5px] w-full">

			<div className="">#</div>
			<div className="col-span-1 text-center">Device Code</div>
			<div className="col-span-1 text-center">Type</div>
			<div className="col-span-3 text-center">User ID</div>
			<div className="col-span-2 text-center">Pet ID</div>
			<div className="col-span-2 text-center">Status</div>
			<div className="col-span-1 text-center">Action</div>
		</div>
	);
};

export default DeviceHeader;
