import Image from 'next/image';
import React from 'react';
import MonthSelect from '../SaleChart/MonthSelect';

const LineDetail = ({ isPending = false }) => {
	return (
		<>
			<div className="grid px-[30px]  grid-cols-9 font-semibold py-[22px] ">
				<div className="col-span-2 flex items-center ">
					<Image
						alt=""
						height={35}
						width={35}
						src="/images/photos/apple-watch.png"
					/>
					<p className="ml-4">Apple watch</p>
				</div>
				<div className="col-span-2 self-center">6096 Marjolaine Landing</div>
				<div className="col-span-2 self-center">12.09.2019 - 12.53 PM</div>
				<div className="col-span-1 self-center text-center">423</div>
				<div className="col-span-1 text-center self-center">$34,295</div>
				<div className="col-span-1 centreFlex ">
					<div
						className={`w-[100px] py-1  text-center rounded-[14px] text-white ${
							isPending ? 'bg-[#FCBE2D]' : 'bg-[#00B69B]'
						}`}
					>
						{isPending ? 'Pending' : 'Delivered'}
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
					<h2 className="text-24-20 font-bold">Sales Details</h2>
					<MonthSelect />
				</div>
				<div className="mt-[30px] text-14-19 ">
					<div className="grid px-[30px]  grid-cols-9 bg-[#F1F4F9] rounded-[12px] py-[15px] font-bold">
						<div className="col-span-2">Product Name</div>
						<div className="col-span-2">Location</div>
						<div className="col-span-2">Date - Time</div>
						<div className="col-span-1 text-center">Piece</div>
						<div className="col-span-1 text-center">Amount</div>
						<div className="col-span-1 text-center">Status</div>
					</div>
				</div>

				<LineDetail />
				<LineDetail isPending />
				<LineDetail />
			</div>
		</div>
	);
};

export default DealDetails;
