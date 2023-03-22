import React from 'react';
import Paginate from '../Paginate/Paginate';
import UserContents from './UserContents';
import UserHeader from './UserHeader';
import UserSearch from './UserSearch';

const UserTable = () => {
	return (
		<div>
			<UserSearch />
			<div className="overflow-auto hide-scroll max-w-[calc(100vw-20px)] tablet:max-w-auto">
				<div className="min-w-[1100px]">
					<UserHeader />
					<UserContents />
				</div>
			</div>
			<Paginate />
		</div>
	);
};

export default UserTable;
