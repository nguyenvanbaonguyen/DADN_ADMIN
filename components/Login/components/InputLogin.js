import Appear from '@/components/Appear/Appear';
import handleCheckError from '@/helpers/handleCheckError';
import React, { forwardRef, useState } from 'react';
import { BiHide, BiShow } from 'react-icons/bi';

const InputLogin = forwardRef(
	({ errors, name, children, iconShow, ...props }, ref) => {
		const [isShow, setIsShow] = useState(false);
		const Icon = isShow ? BiShow : BiHide;

		return (
			<>
				<div className="w-full flex mt-[22px] relative">
					<input
						className="w-full text-14-17 tablet:text-16-20  outline-none pb-[2px] border-b-2 text-black placeholder:capitalize"
						ref={ref}
						name={name}
						placeholder={name}
						type={!isShow && iconShow ? 'password' : ''}
						{...props}
					/>
					<div className="absolute right-0">{children}</div>
					<Appear condition={iconShow}>
						<div className="absolute right-0">
							<div
								className="cursor-pointer"
								onClick={() => setIsShow((pre) => !pre)}
							>
								<Icon size={20} />
							</div>
						</div>
					</Appear>
				</div>
				{errors[name] && (
					<span className=" mt-1 w-full  text-red-600 text-12-16 first-letter:capitalize">
						{handleCheckError(errors[name], name)}
					</span>
				)}
			</>
		);
	}
);

export default InputLogin;
