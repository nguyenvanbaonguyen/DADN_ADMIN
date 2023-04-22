import { useDispatch, useSelector } from 'react-redux';
import SearchInput from '../Search/SearchInput';
import { getAllPet, setPet } from './petSlice';
import { useState } from 'react';
import Image from 'next/image';

const PetSearch = () => {
	const dispatch = useDispatch();
	const [value, setValue] = useState('');
	const allPet = useSelector(getAllPet);
	const handleChangeInput = (e) => {
		setValue(e.target.value);
	};
	const handleClick = () => {
		if (value == '') {
			dispatch(setPet(allPet));
		} else {
			const pet = allPet.filter((val) => {
				return val.name.search(value) != -1;
			})
			dispatch(setPet(pet));
		}

	}

	return (
		<>
			<div className="px-[20px] py-[8px] flex items-center bg-secondary   w-[200px] tablet:w-[350px] rad-small">
				<label htmlFor="search-waitlist" className="cursor-pointer" onClick={handleClick}>
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


		</>
	);
};

export default PetSearch;
