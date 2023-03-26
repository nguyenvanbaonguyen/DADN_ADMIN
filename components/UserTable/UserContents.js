import Image from 'next/image';
import React from 'react';

import ButtonActive from '../ButtonList/ButtonActive';
import ButtonIcon from '../ButtonList/ButtonIcon';
import ButtonTick from '../ButtonList/ButtonTick';
import LoadingWrapper from '../Loading/LoadingWrapper';

const UserContents = () => {
	const user = {
		fullName: 'Nguyen Van Bao Nguyen',
		phone: '0905824884',
		email: 'nguyenvanbaonguyen@gmail.com',
		status: 'ACTIVE',
	};
	const list = new Array(10).fill(0);
	return (
		<LoadingWrapper isLoading={false}>
			{list.map((_, index) => (
				<div
					className="grid grid-cols-12 px-base mt2 py-base bg-primary text-14-17 w-full rounded-[5px] shadow-block"
					key={index}
				>
					<div className="flex items-center">
						<ButtonTick index={index} />
					</div>
					<div className="self-center">{1 + index}</div>
					<div className="col-span-3 flex items-center">
						<Image
							width={100}
							height={100}
							className="rounded-full w-[30px] h-[30px]"
							alt=""
							src={`/images/photos/avatar1.png`}
						/>
						<p className="ml-4 font-bold capitalize">{user.fullName}</p>
					</div>
					<div className="col-span-1 text-center self-center">{user.phone}</div>
					<div className="col-span-3 text-center self-center">{user.email}</div>
					<div className="col-span-2 flex justify-center">
						<ButtonActive status={user.status} id={user._id} />
					</div>
					<div className="flex justify-center items-center">
						<ButtonIcon icon="pen" />
					</div>
				</div>
			))}
		</LoadingWrapper>
	);
};

export default UserContents;
