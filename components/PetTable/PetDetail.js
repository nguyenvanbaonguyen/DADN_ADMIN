import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPetDetail, toggleDetail } from './petSlice';

const PetDetail = () => {
    const pet = useSelector(getPetDetail);

    const dispatch = useDispatch();


    const handleOnClick = () => {
        console.log(pet);
        dispatch(toggleDetail());
    }
    return (
        <div className="mt-[30px] bg-primary rad-base py-[1px] px-[22px]">
            <div className="mt-5 font-bold">PET INFORMATION</div>
            <div className="max-w mx-auto mt-3">
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                        <label htmlFor="lastName" className="block  mb-2">Name</label>
                        <input
                            type="text"
                            id="lastName"
                            value={pet.name}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div>
                        <label htmlFor="birthday" className="block  mb-2">Type</label>
                        <input
                            type="text"
                            id="birthday"
                            value={pet.type}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                        <label htmlFor="phone" className="block  mb-2">User ID</label>
                        <input
                            type="text"
                            id="phone"
                            value={pet.userID}
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

export default PetDetail;
