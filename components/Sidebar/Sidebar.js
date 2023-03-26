import { useDispatch, useSelector } from 'react-redux';
import {
	getSite,
	getSidebarContents,
	getIsOpen,
	changeContent,
} from './sidebarSlice';
import ButtonSide from './ButtonSide';
import HeaderSide from './HeaderSide';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ICONS_SIZES = [
	[12.5, 14],
	[14, 14],
	[12.5, 12],
	[14.5, 16],
	[16, 14.5],
];

const Sidebar = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const sidebarContents = useSelector(getSidebarContents);
	const selectedContent = useSelector(getSite);
	const isOpen = useSelector(getIsOpen);
	useEffect(() => {
		if (!router) return;
		let content = router.pathname.substring(1);
		if (content === 'addpost') content = 'posts';
		if (content === '') content = 'dashboard';
		dispatch(changeContent(content));
	}, [router.pathname]);
	return (
		<div
			// className={`${
			// 	isOpen
			// 		? 'w-[260px] min-w-[260px]'
			// 		: 'w-[100px] translate-x-[-260px] laptop:translate-x-0'
			// }  h-[100vh] shadow-sidebar transition-all duration-300 fixed  z-10 laptop:relative bg-primary`}
			className='w-[260px] min-w-[260px] h-[100vh] shadow-sidebar transition-all duration-300 fixed  z-10 laptop:relative bg-primary'
		>
			<HeaderSide />
			<div className="mx-[20px] pt-[10px]">
				{sidebarContents.map((content, index) => (
					<div key={index}>
						<ButtonSide
							content={content}
							isSelect={selectedContent === content}
							width={ICONS_SIZES[index][0]}
							height={ICONS_SIZES[index][1]}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Sidebar;
