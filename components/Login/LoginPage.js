import { useForm } from 'react-hook-form';
import handleCheckError from '@/helpers/handleCheckError';
import { useDispatch } from 'react-redux';

const LoginPage = () => {
	return (
		<div className="bg-primary layout-out centreFlex flex-col w-full min-h-[100vh] px-base ">
			<h1 className="text-[36px] leading-[44px] tablet:text-[96px] tablet:leading-[120px] font-bold">
				<span className="text-select">PetCare</span> Admin
			</h1>

			<form className="mt-[10px] tablet:mt4 w-full centreFlex  flex-col text-16-20 tablet:text-18-22">
				<div className="max-w-[450px] mt2 bg-secondary w-full  p-[20px] shadow-login rad-base">
					<input
						className="bg-secondary w-full outline-none "
						placeholder="Your email*"
					/>
				</div>

				<div className="max-w-[450px] mt2 bg-secondary w-full  p-[20px] shadow-login rad-base">
					<input
						type="password"
						className="bg-secondary w-full outline-none "
						placeholder="Your password*"
					/>
				</div>
				<button
					className={`max-w-[450px] mt2 w-full  p-[20px]  rounded-[100px] centreFlex text-14-17 font-bold text-white ${'bg-blue-sky'}`}
				>
					Continue
				</button>
			</form>
		</div>
	);
};

export default LoginPage;
