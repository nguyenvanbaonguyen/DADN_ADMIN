import Image from 'next/image';
import React from 'react';

import ButtonIcon from '../ButtonList/ButtonIcon';
import LoadingWrapper from '../Loading/LoadingWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { apiGetUserDetail, getUser, toggleDetail } from './userSlice';


const UserContents = () => {

	const dispatch = useDispatch();
	const allUser = useSelector(getUser);

	const handleOnClick = (id) => {
		dispatch(apiGetUserDetail(id));
		dispatch(toggleDetail());
	}
	return (
		<LoadingWrapper isLoading={false}>
			{allUser.map((value, index) => (
				<div
					className="grid grid-cols-10 px-base mt2 py-base bg-primary text-14-17 w-full rounded-[5px] shadow-block"
					key={index}
				>

					<div className="self-center">{1 + index}</div>
					<div className="col-span-3 text-center self-center">
						<p className="capitalize">{value.name}</p>
					</div>
					<div className="col-span-1 text-center self-center">{value.phone}</div>
					<div className="col-span-3 text-center self-center">{value.email}</div>

					<div className="flex justify-center items-center">
						<ButtonIcon icon="pen" action={() => handleOnClick(value._id)} />
						<ButtonIcon icon="trash" />
					</div>

				</div>
			))}
		</LoadingWrapper>
	);
};

export default UserContents;
