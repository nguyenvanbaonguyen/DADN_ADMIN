import React from 'react';
import Paginate from '../Paginate/Paginate';
import UserAdd from './UserAdd';
import UserContents from './UserContents';
import UserHeader from './UserHeader';
import UserSearch from './UserSearch';
import { useDispatch, useSelector } from 'react-redux';

import {
	getIsDetail,
} from './userSlice';
import UserDetail from './UserDetail';

const UserTable = () => {
	const isDetail = useSelector(getIsDetail);

	return (
		<div>
			{isDetail === true ? <UserDetail></UserDetail> : <>
				<div
					className={`flex px-base py-[25px] justify-between bg-primary bg-primary rad-small items-center mt4 w-full `}
				>
					<UserSearch />
				</div>

				<div className="overflow-auto hide-scroll max-w-[calc(100vw-20px)] tablet:max-w-auto">
					<div className="min-w-[1100px]">
						<UserHeader />
						<UserContents />
					</div>
				</div>
				<Paginate />
			</>}
		</div>
	);
};

export default UserTable;
