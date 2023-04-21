import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import InputLogin from './components/InputLogin';
import { getIsWrong, getUser, loginUser, setIsWrong } from '@/redux/login/loginSlice';
import { getAllUser } from '../UserTable/userSlice';
import { getAllDevice } from '../DeviceTable/deviceSlice';
import { getAllPet } from '../PetTable/petSlice';

const LoginPage = () => {
	const dispatch = useDispatch();
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm();
	const user_info = useSelector(getUser);
	const isWrong = useSelector(getIsWrong);
	const onSubmit = async (data) => {
		const callLogin = async () => {
			const { email, password } = data;
			await dispatch(loginUser({ email, password }));

		};
		try {
			await callLogin();
			await dispatch(getAllUser());
			await dispatch(getAllDevice());
			await dispatch(getAllPet());

		} catch (err) {
			dispatch(setIsWrong());
			console.log(err)
		}
	};

	return (
		<div className="bg-primary layout-out centreFlex flex-col w-full min-h-[100vh] px-base ">
			<h1 className="text-[36px] leading-[44px] tablet:text-[96px] tablet:leading-[120px] font-bold">
				<span className="text-select">PetCare</span> Admin
			</h1>
			<form
				className=" w-full mt-[30px] px-[60px] pt-[20px] pb-[50px] max-w-[450px] centreFlex  flex-col text-18-22 border-[1px]"
				onSubmit={handleSubmit(onSubmit)}
			>
				<p className="text-24-29 font-bold pb-[10px]">Login</p>
				{isWrong && (<p className="text-14-17 text-dan pb-[10px]">Wrong email or password</p>)}

				<InputLogin
					errors={errors}
					{...register('email', {
						required: true,
						pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
					})}
				/>

				<InputLogin
					errors={errors}
					{...register('password', {
						required: true,
						minLength: {
							value: 6,
							message: 'password must have at least 6 characters',
						},
					})}
					iconShow
				/>



				<button
					className={` mt4 w-full py-[12px] centreFlex text-14-17 font-bold text-slate-700 rounded bg-blue-300`}
				>
					Login
				</button>
			</form>
		</div>
	);
};

export default LoginPage;
