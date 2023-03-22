import Image from 'next/image';
import { Popover } from '@headlessui/react';
import { useState } from 'react';
import { switchAction, toAction } from '@/helpers/convertAction';

const ButtonActive = ({ status, id, api }) => {
	const [action, setAction] = useState(toAction(status));

	const switchActive = async (action) => {
		if (action === 'Activate') await api.activate(id);
		else await api.deactivate(id);
	};

	const handleChange = (closePanel) => async () => {
		try {
			const newAction = switchAction(action);
			await switchActive(newAction);
			setAction(newAction);
			closePanel();
		} catch (err) {
			console.log(err);
		}
	};

	const colorTextClass =
		action === 'Activate' ? 'text-select' : 'text-[#FD5454]';

	return (
		<Popover className="relative font-semibold capitalize">
			<Popover.Button
				as="div"
				className="flex items-center  justify-between px-[15px] py-[10px] w-[130px] bg-[#FAFBFD] border-[#D5D5D5] border-[0.6px] rounded-[8px] cursor-pointer hover:bg-slate-100"
			>
				<p className={colorTextClass}>{action}</p>
				<Image
					alt=""
					src="/images/icons/button-active-down.svg"
					width={11}
					height={6}
					className="ml-4 w-[11px] h-[6px]"
				/>
			</Popover.Button>
			<Popover.Panel as="div" className="absolute w-full">
				{({ close }) => (
					<ul className=" bg-[#FCFDFD] border-[0.6px]  mt-[5px] rounded-[8px] shadow-block">
						<li
							className=" px-[15px] py-[10px] border-[#D5D5D5]  rounded-[7px] hover:bg-slate-200 cursor-pointer"
							onClick={handleChange(close)}
						>
							{switchAction(action)}
						</li>
					</ul>
				)}
			</Popover.Panel>
		</Popover>
	);
};

export default ButtonActive;
