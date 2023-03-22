import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setText } from '@/redux/table/tableSlice';

const SearchInput = ({ className, children }) => {
	const dispatch = useDispatch();
	const debounceRef = useRef();
	const [value, setValue] = useState('');

	const handleChangeInput = (e) => {
		setValue(e.target.value);
		if (debounceRef.current) clearTimeout(debounceRef.current);
		debounceRef.current = setTimeout(() => {
			dispatch(setText(e.target.value));
		}, [500]);
	};

	return (
		<div
			className={`flex px-base py-[25px] justify-between bg-primary bg-primary rad-small items-center mt4 w-full ${className}`}
		>
			<div className="px-[20px] py-[8px] flex items-center bg-secondary   w-[200px] tablet:w-[350px] rad-small">
				<label htmlFor="search-waitlist" className="cursor-pointer">
					<Image alt="" width={24} height={24} src="/images/icons/search.svg" />
				</label>
				<input
					type="text"
					className="h-[20px] text-14-17 ml-[10px] outline-none  bg-secondary w-full"
					placeholder="Search"
					id="search-waitlist"
					onChange={handleChangeInput}
					value={value}
				/>
			</div>

			{children}
		</div>
	);
};

export default SearchInput;
