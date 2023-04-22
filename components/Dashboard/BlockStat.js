import Image from 'next/image';
import React from 'react';

const BlockStat = ({ stat, data }) => {
	return (
		<div className="layout-block bg-primary shadow-box rounded-[14px] text-secondary">
			<div className="flex justify-between">
				<div className="flex flex-col">
					<p className=" text-12-16 tablet:text-16-22  opacity-70 font-semibold">
						Total <span className="capitalize">{stat}</span>
					</p>
					<h3 className="text-24-32 tablet:text-28-38 mt-[13px] font-bold">
						{data.length}
					</h3>
				</div>
				<div className="">
					<Image
						src={`/images/icons/${stat}Block.svg`}
						height={60}
						width={60}
						alt=""
						className="w-[40px] h-[40px] tablet:h-[60px] tablet:w-[60px]"
					/>
				</div>
			</div>

			<div className="flex mt-[25px] items-center ">
				<Image src="/images/icons/up.svg" height={23} width={23} alt="" />
				<p className="text-10-14 tablet:text-14-19 font-semibold ml-[5px] tablet:ml-[10px] opacity-70">
					<span className="text-up">10%</span> Up from past week
				</p>
			</div>
		</div>
	);
};

export default BlockStat;
