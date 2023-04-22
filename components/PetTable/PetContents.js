import Image from 'next/image';
import React from 'react';

import ButtonActive from '../ButtonList/ButtonActive';
import ButtonIcon from '../ButtonList/ButtonIcon';
import ButtonTick from '../ButtonList/ButtonTick';
import LoadingWrapper from '../Loading/LoadingWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { apiGetPetDetail, getPet, toggleDetail } from './petSlice';

const PetContents = () => {

	const allPet = useSelector(getPet);
	const dispatch = useDispatch();
	const handleOnClick = (id) => {
		dispatch(apiGetPetDetail(id));
		dispatch(toggleDetail());
	}
	return (
		<LoadingWrapper isLoading={false}>
			{allPet.map((value, index) => (
				<div
					className="grid grid-cols-10 px-base mt2 py-base bg-primary text-14-17 w-full rounded-[5px] shadow-block"
					key={index}
				>

					<div className="self-center">{1 + index}</div>
					<div className="col-span-3 text-center self-center">{value.name}</div>
					<div className="col-span-1 text-center self-center">{value.type}</div>
					<div className="col-span-3 text-center self-center">{value.userID}</div>

					<div className="flex justify-center items-center">
						<ButtonIcon icon="pen" action={() => handleOnClick(value._id)} />
						<ButtonIcon icon="trash" />
					</div>
				</div>
			))}
		</LoadingWrapper>
	);
};

export default PetContents;
