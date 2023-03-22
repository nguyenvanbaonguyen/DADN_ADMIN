import Image from 'next/image';
import { changeContent, closeOpen, getIsOpen } from './sidebarSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const ButtonSide = ({
	content = 'dashboard',
	isSelect = false,
	width = 0,
	height = 0,
}) => {
	const dispatch = useDispatch();
	const router = useRouter();
	const isOpen = useSelector(getIsOpen);
	const handleChangeContent = () => {
		dispatch(changeContent(content));
		const path = content === 'dashboard' ? '/' : `/${content}`;
		router.push(path);
		dispatch(closeOpen());
	};
	return (
		<div
			className={`flex items-center px-[20px] text-16-20 font-medium   h-[60px] rounded-[50px] mt1 cursor-pointer ${
				isSelect ? 'bg-select text-white' : 'text-primary'
			}`}
			onClick={handleChangeContent}
		>
			<div className="w-[20px] centreFlex">
				<Image
					src={`/images/icons/${content}${isSelect ? '1' : ''}.svg`}
					height={height}
					width={width}
					alt=""
					className=""
				/>
			</div>
			<div
				className={`ml-[20px] capitalize translate-x-0   ${
					!isOpen && 'translate-x-[-100px] opacity-0 ml-0 w-0'
				}`}
			>
				{content}
			</div>
		</div>
	);
};

export default ButtonSide;
