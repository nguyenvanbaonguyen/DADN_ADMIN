import Image from 'next/image';
import { Popover } from '@headlessui/react';
import { useState } from 'react';

const MonthSelect = () => {
	const MONTHS = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];
	const [month, setMonth] = useState('October');
	const handleChange = (month, cb) => (e) => {
		setMonth(month);
		cb();
	};
	return (
		<Popover className="relative text-12-10 font-semibold">
			<Popover.Button
				as="div"
				className="flex items-center px-[10px] py-[8px] bg-[#FCFDFD] border-[#D5D5D5] border-[1px] rounded-[4px] cursor-pointer hover:bg-slate-100"
			>
				<p>{month}</p>
				<Image
					alt=""
					src="/images/icons/button-down.svg"
					width={11}
					height={9}
					className="ml-4 w-[11px] h-[9px]"
				/>
			</Popover.Button>
			<Popover.Panel as="div" className="absolute w-full">
				{({ close }) => (
					<ul className=" bg-[#FCFDFD] border-t-[1px] mt-[5px]">
						{MONTHS.map((el) => (
							<li
								className="px-[10px] py-[8px] border-[#D5D5D5] border-b-[1px] border-x-[1px] hover:bg-slate-200 cursor-pointer"
								onClick={handleChange(el, close)}
							>
								{el}
							</li>
						))}
					</ul>
				)}
			</Popover.Panel>
		</Popover>
	);
};

export default MonthSelect;
