import Image from 'next/image';
import React from 'react';

const LineDetail = ({ id, isOnline = false }) => {
	return (
		<>
			<div className="grid px-[30px]  grid-cols-10 font-semibold py-[22px] ">
				<div className="col-span-1 self-center text-center">{id}</div>
				<div className="col-span-2 flex items-center ">
					<Image
						alt=""
						height={35}
						width={35}
						src="/images/photos/apple-watch.png"
					/>
					<p className="ml-4">Nguyen Van Bao Nguyen</p>
				</div>
				<div className="col-span-2 self-center text-center">13.5 hours</div>
				<div className="col-span-2 self-center text-center">13.512.453</div>
				<div className="col-span-2 text-center self-center">12.545.469</div>
				<div className="col-span-1 centreFlex ">
					<div
						className={`w-[100px] py-1  text-center rounded-[14px] text-white ${isOnline ? 'bg-[#0172CB]' : 'bg-[#D7331C]'
							}`}
					>
						{isOnline ? 'Online' : 'Offline'}
					</div>
				</div>
			</div>
			<div className="line"></div>
		</>
	);
};

const DealDetails = () => {
	return (
		<div className="px-[35px] pt-[35px] pb-[50px] overflow-scroll hide-scroll w-[calc(100vw-50px)] tablet:w-auto">
			<div className="min-w-[850px]  tablet:min-w-auto">
				<div className="h-[85px] flex items-center justify-between">
					<h2 className="text-24-20 font-bold">Users Details</h2>
				</div>
				<div className="mt-[30px] text-14-19 ">
					<div className="grid px-[30px]  grid-cols-10 bg-[#F1F4F9] rounded-[12px] py-[15px] font-bold">
						<div className="col-span-1 text-center">#</div>
						<div className="col-span-2 text-center">Username</div>
						<div className="col-span-2 text-center">Online Time</div>
						<div className="col-span-2 text-center">Num. of Feeder time</div>
						<div className="col-span-2 text-center">Num. of Cleaner time</div>
						<div className="col-span-1 text-center">Status</div>
					</div>
				</div>

				<LineDetail id={1} />
				<LineDetail id={2} isOnline />
				<LineDetail id={3} isOnline />
				<LineDetail id={4} />
				<LineDetail id={5} isOnline />
				<LineDetail id={6} />
				<LineDetail id={7} isOnline />
				<LineDetail id={8} isOnline />
				<LineDetail id={9} isOnline />

			</div>
		</div>
	);
};

export default DealDetails;
