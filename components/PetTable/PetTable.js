import React from 'react';
import Paginate from '../Paginate/Paginate';
import PetAdd from './PetAdd';
import PetContents from './PetContents';
import PetHeader from './PetHeader';
import PetSearch from './PetSearch';

const PetTable = () => {
	return (
		<div>
			<div
				className={`flex px-base py-[25px] justify-between bg-primary bg-primary rad-small items-center mt4 w-full `}
			>
				<PetSearch />
				<PetAdd />
			</div>

			<div className="overflow-auto hide-scroll max-w-[calc(100vw-20px)] tablet:max-w-auto">
				<div className="min-w-[1100px]">
					<PetHeader />
					<PetContents />
				</div>
			</div>
			<Paginate />
		</div>
	);
};

export default PetTable;
