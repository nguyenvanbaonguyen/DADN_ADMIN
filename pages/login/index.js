import handleCheckError from '@/helpers/handleCheckError';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from "react-redux";
// import {loginUserAsync} from "@/redux/user";
const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm();

    const dispatch = useDispatch();

    const onSubmit = async (data) => {
        // try {
        //     await dispatch(loginUserAsync(data));
        // } catch (error) {
        //     console.log(error);
        // }
    };

    return (
        <div className="bg-primary layout-out centreFlex flex-col w-full min-h-[100vh] px-base ">
            <h1 className="text-[36px] leading-[44px] tablet:text-[96px] tablet:leading-[120px] font-bold">
                <span className="text-select">GrowFi</span> Admin
            </h1>

            <form
                className="mt-[10px] tablet:mt4 w-full centreFlex  flex-col text-16-20 tablet:text-18-22"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="max-w-[450px] mt2 bg-secondary w-full  p-[20px] shadow-login rad-base">
                    <input
                        className="bg-secondary w-full outline-none "
                        placeholder="Your email*"
                        {...register('email', {
                            required: true,
                            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                        })}
                    />
                </div>
                {errors.email && (
                    <span className="max-w-[450px] mt1 w-full font-semibold text-red-400">
                        {handleCheckError(errors.email, 'Email')}
                    </span>
                )}
                <div className="max-w-[450px] mt2 bg-secondary w-full  p-[20px] shadow-login rad-base">
                    <input
                        type="text"
                        className="bg-secondary w-full outline-none "
                        placeholder="Your password*"
                        {...register('password', {
                            required: true,
                            minLength: 8,
                        })}
                    />
                </div>
                {errors.password && (
                    <span className="max-w-[450px] mt1 w-full font-semibold  text-red-400">
                        {handleCheckError(errors.password, 'Password', 8)}
                    </span>
                )}
                <button
                    className={`max-w-[450px] mt2 w-full  p-[20px]  rounded-[100px] centreFlex text-14-17 font-bold text-white ${isValid ? 'bg-blue-sky' : 'bg-[#7A8286]'
                        }`}
                >
                    Continue
                </button>
            </form>
        </div>
    );
};

export default Login;
