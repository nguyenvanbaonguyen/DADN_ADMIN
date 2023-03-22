import Image from 'next/image';
import React from 'react';
import { getChoosenIDs, getFlag } from '@/redux/table/tableSelector';
import { toggleFlag, toggleId } from '@/redux/table/tableSlice';
import { useDispatch, useSelector } from 'react-redux';
import cl from '@/helpers/convertToClass';

const ButtonTick = ({ className, index }) => {
	const dispatch = useDispatch();

	const flag = useSelector(getFlag);
	const choosenIDs = useSelector(getChoosenIDs);

	const isActive = index != undefined ? choosenIDs[index] : flag;

	const handleClick = () => {
		if (index != undefined) dispatch(toggleId(index));
		else dispatch(toggleFlag());
	};

	return (
		<div
			className={cl(
				'w-5 h-5 border-[1px] border-[#ABABAB] rad-small cursor-pointer noselect centreFlex',
				[!!isActive, 'bg-select'],
				className
			)}
			onClick={handleClick}
		>
			{!!isActive && (
				<Image alt="" width={13} height={9} src="/images/icons/tick.svg" />
			)}
		</div>
	);
};

export default ButtonTick;
