import Image from 'next/image';
import ButtonTick from '../ButtonList/ButtonTick';

const PostHeader = () => {
	return (
		<div className="grid mt2 grid-cols-12 px-base py-base bg-primary text-16-20 font-bold  shadow-block rounded-[5px] w-full">
			<div className="flex items-center col-span-1">
				<ButtonTick />
				<Image
					alt=""
					width={12}
					height={6}
					className="ml-1"
					src="/images/icons/select.svg"
				/>
			</div>
			<div className="">#</div>
			<div className="col-span-7 text-center">Title</div>
			<div className="col-span-2 text-center">Date</div>
			<div className="col-span-1 text-center">Action</div>
		</div>
	);
};

export default PostHeader;
