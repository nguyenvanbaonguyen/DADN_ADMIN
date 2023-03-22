import Image from 'next/image';
import React from 'react';
import { useSelector } from 'react-redux';

import assetsApi from '@/api/assets/assetsApi';
import { getAll } from '@/redux/table/tableSelector';
import ButtonTick from '../ButtonList/ButtonTick';
import LoadingWrapper from '../Loading/LoadingWrapper';
import { convertDate } from '@/helpers/convertDate';
import ButtonEnable from '../ButtonList/ButtonEnable';
import dispatchContent from '@/hoc/dispatchContent';

const AssetContents = () => {
	const { list, loading, page } = useSelector(getAll);

	return (
		<LoadingWrapper isLoading={loading}>
			{list.map((asset, index) => (
				<div
					className="grid grid-cols-10 px-base mt2 py-base bg-primary text-14-17 w-full rounded-[5px] shadow-block items-center"
					key={asset?._id}
				>
					<div className="flex items-center">
						<ButtonTick index={index} />
					</div>
					<div className="">{(page * 1 - 1) * 10 + index}</div>
					<div className="col-span-2 flex items-center ">
						<Image
							width={100}
							height={100}
							className="rounded-full w-[30px] h-[30px]"
							alt=""
							src={asset?.logo || '/images/photos/none-token.webp'}
						/>
						<p className="ml-4 font-bold capitalize ">{asset?.name}</p>
					</div>
					<div className="col-span-1 ">{asset?.type}</div>
					<div className="col-span-1 text-right ">
						{convertDate(asset?.startDate)}
					</div>
					<div className="col-span-1 text-right "> {asset?.marketCapRank}</div>
					<div className="col-span-2 text-right"> {asset?.marketCap} $</div>
					<div className="col-span-1 justify-end flex">
						<ButtonEnable
							isEnable={asset?.enableSocket}
							index={index}
							id={asset.id}
						/>
					</div>
				</div>
			))}
		</LoadingWrapper>
	);
};

export default dispatchContent(AssetContents, 'asset', assetsApi);
