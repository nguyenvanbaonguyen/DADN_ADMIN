import React from 'react';
import { getIsOpen, toggleOpen } from './sidebarSlice';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
const HeaderSide = () => {
	const dispatch = useDispatch();
	const isOpen = useSelector(getIsOpen);
	return (
		<div className="h-[60px] centreFlex border-b-[1px] border-[#F5F5F5] relative w-full transition-all">
			<>
				<div className="flex">
					<Image
						src="/images/logos/growFi.svg"
						height={23}
						width={95}
						alt=""
					/>
				</div>
			</>

			{/* {!isOpen && (
				<div
					onClick={() => dispatch(toggleOpen())}
					className="hidden laptop:block cursor-pointer"
				>
					<Image src="/images/icons/menu.svg" height={24} width={24} alt="" />
				</div>
			)} */
			}
		</div>
	);
};

export default HeaderSide;
