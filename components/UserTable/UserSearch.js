import { useDispatch, useSelector } from 'react-redux';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { getAllUser, setUser } from './userSlice';


const UserSearch = () => {
	const dispatch = useDispatch();
	const debounceRef = useRef();
	const [value, setValue] = useState('');
	const allUser = useSelector(getAllUser);
	const handleChangeInput = (e) => {
		setValue(e.target.value);
	};
	const handleClick = () => {
		if (value == '') {
			dispatch(setUser(allUser));
		} else {
			const user = allUser.filter((val) => {
				return val.name.search(value) != -1;
			})
			dispatch(setUser(user));
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

export default UserSearch;
