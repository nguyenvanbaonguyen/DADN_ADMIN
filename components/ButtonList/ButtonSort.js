import { getSort, getStatusSort } from '@/redux/table/tableSelector';
import { setSort, toggleSign } from '@/redux/table/tableSlice';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaSortDown, FaSortUp, FaSort } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

const Icons = [FaSort, FaSortDown, FaSortUp];

const ButtonSort = ({ content, nameSort }) => {
	const dispatch = useDispatch();
	const statusSort = useSelector(getStatusSort);
	const sort = useSelector(getSort);

	const SortIcon = sort === nameSort ? Icons[statusSort] : FaSort;

	const handleOnClick = () => {
		dispatch(setSort(nameSort));
		dispatch(toggleSign());
	};

	return (
		<div className="flex items-center cursor-pointer" onClick={handleOnClick}>
			<SortIcon className="w-[12px] centreFlex" />
			<div className="ml-1">{content}</div>
		</div>
	);
};

export default ButtonSort;
