import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleDetail } from './deviceSlice';

const DeviceDetail = () => {
    const device = {
        name: 'Dispenser F2',
        id: 'TM-12GERMANY',
        type: 'Auto Pet Feeder',
        manufacturer: 'PetCare',
        ver: '2.91',
    };

    const dispatch = useDispatch();


    const handleOnClick = () => {
        dispatch(toggleDetail());
    }
    return (
        <div className="mt-[30px] bg-primary rad-base py-[1px] px-[22px]">
            <div className="mt-5 font-bold">DEVICE INFORMATION</div>
            <div className="max-w mx-auto mt-3">
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                        <label htmlFor="name" className="block  mb-2">Device Name</label>
                        <input
                            type="text"
                            id="name"
                            value={device.name}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div>
                        <label htmlFor="id" className="block mb-2">Device ID</label>
                        <input
                            type="text"
                            id="id"
                            value={device.id}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                        <label htmlFor="type" className="block  mb-2">Device type</label>
                        <input
                            type="text"
                            id="type"
                            value={device.type}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div>
                        <span className="block mb-4">Status</span>
                        <div className="flex ">
                            <label className="inline-flex items-center mr-4">
                                <input
                                    type="radio"
                                    name="options"
                                    value="On"
                                    className="mr-2"
                                    defaultChecked
                                />
                                <span className=" text-16-20">On</span>
                            </label>
                            <label className="inline-flex items-center mr-4">
                                <input
                                    type="radio"
                                    name="options"
                                    value="Off"
                                    className="mr-2"
                                />
                                <span className="text-16-20">Of</span>
                            </label>

                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                        <label htmlFor="manufacturer" className="block  mb-2">Manufacturer</label>
                        <input
                            type="text"
                            id="manufacturer"
                            value={device.manufacturer}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div>
                        <label htmlFor="ver" className="block mb-2">Version</label>
                        <input
                            type="text"
                            id="ver"
                            value={device.ver}
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

export default DeviceDetail;
