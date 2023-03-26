import Image from 'next/image';
import React from 'react';

import ButtonActive from '../ButtonList/ButtonActive';
import ButtonIcon from '../ButtonList/ButtonIcon';
import ButtonTick from '../ButtonList/ButtonTick';
import LoadingWrapper from '../Loading/LoadingWrapper';

const PostContents = () => {
	const post = {
		title: 'abc',
		date: '01/02/2003',
	};
	const list = new Array(10).fill(0);
	return (
		<LoadingWrapper isLoading={false}>
			{list.map((_, index) => (
				<div
					className="grid grid-cols-12 px-base mt2 py-base bg-primary text-14-17 w-full rounded-[5px] shadow-block"
					key={index}
				>
					<div className="col-span-1 flex items-center">
						<ButtonTick index={index} />
					</div>
					<div className="col-span-1 self-center">{1 + index}</div>
					<div className="col-span-7 text-center self-center">{post.title}</div>
					<div className="col-span-2 text-center self-center">{post.date}</div>
					<div className="col-span-1 flex justify-center items-center">
						<ButtonIcon icon="pen" />
					</div>
				</div>
			))}
		</LoadingWrapper>
	);
};

export default PostContents;
