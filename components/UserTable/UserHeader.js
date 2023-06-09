import Image from 'next/image';
import ButtonTick from '../ButtonList/ButtonTick';

const UserHeader = () => {
	return (
		<div className="grid mt2 grid-cols-10 px-base py-base bg-primary text-16-20 font-bold  shadow-block rounded-[5px] w-full">

			<div className="">#</div>
			<div className="col-span-3 text-center">User Name</div>
			<div className="col-span-1 text-center">Phone</div>
			<div className="col-span-3 text-center">Email</div>
			<div className="col-span-1 text-center">Action</div>
		</div>
	);
};

export default UserHeader;
