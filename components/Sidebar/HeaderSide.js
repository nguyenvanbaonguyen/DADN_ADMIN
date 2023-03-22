import React from 'react';
import { getIsOpen, toggleOpen } from './sidebarSlice';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
const HeaderSide = () => {
	const dispatch = useDispatch();
	const isOpen = useSelector(getIsOpen);
	return (
		<div className="h-[60px] centreFlex border-b-[1px] border-[#F5F5F5] relative w-full transition-all">
			{isOpen && (
				<>
					<div className="flex">
						<Image
							src="/images/logos/growFi.svg"
							height={23}
							width={95}
							alt=""
						/>
					</div>

					<div
						className="right-[20px] top-[15px] absolute cursor-pointer"
						onClick={() => dispatch(toggleOpen())}
					>
						<Image src="/images/icons/back.svg" height={30} width={30} alt="" />
					</div>
				</>
			)}

			{!isOpen && (
				<div
					onClick={() => dispatch(toggleOpen())}
					className="hidden laptop:block cursor-pointer"
				>
					<Image src="/images/icons/menu.svg" height={24} width={24} alt="" />
				</div>
			)}
		</div>
	);
};

export default HeaderSide;
