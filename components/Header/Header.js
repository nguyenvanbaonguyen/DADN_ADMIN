import { getName } from '@/redux/table/tableSelector';
import { getUser } from '@/redux/user';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { toggleOpen } from '../Sidebar/sidebarSlice';

const Header = () => {
	const dispatch = useDispatch();

	const user = useSelector(getUser);

	return (
		<div className="w-full h-[60px] px-base flex justify-between items-center bg-primary">
			<div className="" onClick={() => dispatch(toggleOpen())}>
				<Image
					src="/images/icons/menu.svg"
					height={24}
					width={24}
					className="laptop:hidden"
					alt=""
				/>
			</div>
			<div className="flex">
				<p className="text-16-20 font-bold">{user.fullName}</p>
				<div className="p-[6px] bg-[#D9D9D9] rounded-full ml-[10px]">
					<Image src="/images/icons/user.svg" height={18} width={18} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Header;
