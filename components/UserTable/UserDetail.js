import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleDetail } from './userSlice';

const UserDetail = () => {
    const user = {
        lastName: 'Nguyen Van Bao',
        firstName: 'Nguyen',
        phone: '0905824884',
        email: 'nguyenvanbaonguyen@gmail.com',
        birthday: '12/01/2002',
    };

    const dispatch = useDispatch();


    const handleOnClick = () => {
        dispatch(toggleDetail());
    }
    return (
        <div className="mt-[30px] bg-primary rad-base py-[1px] px-[22px]">
            <div className="mt-5 font-bold">USER INFORMATION</div>
            <div className="max-w mx-auto mt-3">
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                        <label htmlFor="lastName" className="block  mb-2">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            value={user.lastName}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div>
                        <label htmlFor="firstName" className="block mb-2">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            value={user.firstName}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                        <label htmlFor="birthday" className="block  mb-2">Birthday</label>
                        <input
                            type="text"
                            id="birthday"
                            value={user.birthday}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div>
                        <span className="block mb-4">Gender</span>
                        <div className="flex ">
                            <label className="inline-flex items-center mr-4">
                                <input
                                    type="radio"
                                    name="options"
                                    value="Male"
                                    className="mr-2"
                                    defaultChecked
                                />
                                <span className=" text-16-20">Male</span>
                            </label>
                            <label className="inline-flex items-center mr-4">
                                <input
                                    type="radio"
                                    name="options"
                                    value="Female"
                                    className="mr-2"
                                />
                                <span className="text-16-20">Female</span>
                            </label>
                            <label className="inline-flex items-center mr-4">
                                <input
                                    type="radio"
                                    name="options"
                                    value="Other"
                                    className="mr-2"
                                />
                                <span className="text-16-20">Other</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                        <label htmlFor="phone" className="block  mb-2">PHone</label>
                        <input
                            type="text"
                            id="phone"
                            value={user.phone}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2">Email</label>
                        <input
                            type="text"
                            id="email"
                            value={user.email}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                </div>
                <div className="mt-4 text-center ">
                    <button className="items-center mt-4 mb-4 py-2 px-4 bg-select hover:bg-[#00B7C2] text-white font-bold rounded "
                        onClick={() => handleOnClick()}>Save</button>
                </div>
            </div>
        </div>
    );
};

export default UserDetail;
