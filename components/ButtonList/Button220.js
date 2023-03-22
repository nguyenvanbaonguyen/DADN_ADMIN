import React from 'react';

const Button220 = ({ className = '', content = 'Publish', ...props }) => {
	return (
		<div
			className={`centreFlex w-[220px] h-[60px] text-white font-bold rounded-[100px] cursor-pointer hover:opacity-80 ${
				className || 'bg-blue-sky'
			}`}
			{...props}
		>
			{content}
		</div>
	);
};

export default Button220;
