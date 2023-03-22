import Image from 'next/image';
import React from 'react';
import ButtonSort from '../ButtonList/ButtonSort';
import ButtonTick from '../ButtonList/ButtonTick';

const AssetHeader = () => {
	return (
		<div className="grid mt2 grid-cols-10 px-base py-base bg-primary text-16-20 font-bold  shadow-block rounded-[5px] w-full">
			<div className="flex items-center">
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
			<div className="col-span-2">Name</div>
			<div className="col-span-1 ">Type</div>
			<div className="col-span-1 text-right">StartDate</div>
			<div className="col-span-1 flex justify-end">
				<ButtonSort content="Rank" nameSort="marketCapRank" />
			</div>
			<div className="col-span-2 text-right">MarketCap</div>
			<div className="col-span-1 text-right">Enable</div>
		</div>
	);
};

export default AssetHeader;
