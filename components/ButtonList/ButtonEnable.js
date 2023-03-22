import assetsApi from '@/api/assets/assetsApi';
import { setEl } from '@/redux/table/tableSlice';
import React from 'react';
import { useDispatch } from 'react-redux';

const ButtonEnable = ({ isEnable, index, id }) => {
	const dispatch = useDispatch();

	const handleEnable = async () => {
		try {
			const data = { enableSocket: !isEnable };
			await assetsApi.enableSocket(id);
			dispatch(setEl({ index, data }));
		} catch (err) {
			console.log(err);
		}
	};

	if (!isEnable)
		return (
			<div
				className="w-[80px] text-center py-2 bg-[#00B69B] hover:bg-[#239584] text-white rounded-lg cursor-pointer noselect"
				onClick={handleEnable}
			>
				Enable
			</div>
		);
	if (isEnable)
		return (
			<div className="w-[80px] text-center py-2 bg-slate-500 text-white rounded-lg cursor-pointer noselect opacity-70">
				Enabled
			</div>
		);
};

export default ButtonEnable;
