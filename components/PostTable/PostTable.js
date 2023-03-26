import React from 'react';
import Paginate from '../Paginate/Paginate';
import PostAdd from './PostAdd';
import PostContents from './PostContents';
import PostHeader from './PostHeader';
import PostSearch from './PostSearch';

const PostTable = () => {
	return (
		<div>
			<div
				className={`flex px-base py-[25px] justify-between bg-primary bg-primary rad-small items-center mt4 w-full `}
			>
				<PostSearch />
				<PostAdd />
			</div>

			<div className="overflow-auto hide-scroll max-w-[calc(100vw-20px)] tablet:max-w-auto">
				<div className="min-w-[1100px]">
					<PostHeader />
					<PostContents />
				</div>
			</div>
			<Paginate />
		</div>
	);
};

export default PostTable;
