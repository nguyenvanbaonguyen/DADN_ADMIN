import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Avatar = ({ setFile, file = undefined, thumbnail }) => {
	const [url, setUrl] = useState(thumbnail);

	useEffect(() => {
		if (!file) return;
		const url = URL.createObjectURL(file);
		setUrl(url);
		return () => {
			URL.revokeObjectURL(url);
		};
	}, [file]);

	const changeFile = (e) => {
		setFile(e.target.files[0]);
	};

	return (
		<>
			<label
				htmlFor="upload-new"
				className="mt1 tablet:mt-0 w-full max-w-[390px]"
			>
				{!url && (
					<div className="w-full h-[200px]  bg-secondary  tablet:h-[230px]  rad-small p-[10px] noselect cursor-pointer">
						<div className="border-dash rad-small w-full h-full centreFlex flex-col">
							<Image
								alt=""
								src="/images/icons/upload.svg"
								height={28}
								width={28}
							/>
							<p className="text-12-16 font-normal text-[#7A8286] mt-[14px]">
								Upload picture
							</p>
						</div>
					</div>
				)}

				{!!url && (
					<div className="w-full h-[230px] rad-small noselect cursor-pointer centreFlex flex-col bg-secondary relative">
						<div className=" w-full h-full hover:opacity-50 ">
							<Image
								src={url}
								width={800}
								height={500}
								alt=""
								className="w-full h-full  object-contain rad-small"
							/>
						</div>
						<div className="centreFlex flex-col absolute bg-black w-full h-full opacity-0 hover:opacity-50 rad-small">
							<Image
								alt=""
								src="/images/icons/upload.svg"
								height={28}
								width={28}
							/>
							<p className="text-12-16 font-normal text-[#7A8286] mt-[14px] ">
								Upload picture
							</p>
						</div>
					</div>
				)}
			</label>
			<input
				type="file"
				id="upload-new"
				className="hidden"
				accept="image/png, image/jpeg"
				onChange={changeFile}
			/>
		</>
	);
};

export default Avatar;
