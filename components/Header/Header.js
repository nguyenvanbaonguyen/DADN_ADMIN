import Image from 'next/image';
import { toggleOpen } from '../Sidebar/sidebarSlice';
import { useDispatch } from 'react-redux';
import { setLogin, setNoWrong } from '@/redux/login/loginSlice';

const Header = () => {
	const dispatch = useDispatch();
	const handleOnClick = () => {
		dispatch(setLogin());
		dispatch(setNoWrong());
	}
	return (
		<div className="w-full h-[60px] px-base flex justify-between items-center bg-primary ">
			<div className="" onClick={() => handleOnClick()}>
				<Image
					src="/images/icons/menu.svg"
					height={24}
					width={24}
					className="laptop:hidden"
					alt=""
				/>
			</div>
			<div className="flex">
				{/* <p className="text-16-20 font-bold">Bao Nguyen</p> */}


				<div className="p-[6px] ml-[10px] cursor-pointer" onClick={() => handleOnClick()}>
					<div className="items-center  p-[6px] bg-select hover:bg-[#00B7C2] text-white font-bold rounded "
					>Log out</div>
				</div>
			</div>

		</div >
	);
};

export default Header;
