import React from 'react';
import Paginate from '../Paginate/Paginate';
import PetContents from './PetContents';
import PetHeader from './PetHeader';
import PetSearch from './PetSearch';
import { getIsDetail } from './petSlice';
import PetDetail from './PetDetail';
import { useSelector } from 'react-redux';

const PetTable = () => {
	const isDetail = useSelector(getIsDetail);
	return (
		<div>
			{isDetail === true ? <PetDetail></PetDetail> : <>
				<div
					className={`flex px-base py-[25px] justify-between bg-primary bg-primary rad-small items-center mt4 w-full `}
				>
					<PetSearch />
				</div>

				<div className="overflow-auto hide-scroll max-w-[calc(100vw-20px)] tablet:max-w-auto">
					<div className="min-w-[1100px]">
						<PetHeader />
						<PetContents />
					</div>
				</div>
				<Paginate />
			</>}
		</div>
	);
};

export default PetTable;
