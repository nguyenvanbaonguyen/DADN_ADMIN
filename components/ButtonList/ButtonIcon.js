import Image from 'next/image';

const MAP_TYPES = {
	full: 'rounded-[8px]',
	left: 'rounded-l-[8px]',
	right: ' rounded-r-[8px] border-l-0',
	center: 'border-l-0 ',
};

const ButtonIcon = ({
	type = 'full',
	className = '',
	disable = false,
	icon = 'mail',
	action = () => {},
}) => {
	if (disable) action = () => {};

	const baseButton =
		'w-[40px] h-[40px] centreFlex bg-[#FAFBFD] border-[0.6px] border-[#D5D5D5] cursor-pointer';

	const typeClass = MAP_TYPES[type];

	const disableClass = disable ? 'opacity-30' : 'hover:bg-slate-200';

	return (
		<div
			className={`${baseButton} ${typeClass} ${className} ${disableClass}`}
			onClick={action}
		>
			<Image alt="" width={20} height={20} src={`/images/icons/${icon}.svg`} />
		</div>
	);
};
export default ButtonIcon;
