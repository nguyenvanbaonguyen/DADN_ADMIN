import { createSlice } from '@reduxjs/toolkit';
import authApi from '@/api/auth/authApi';


export const deviceSlice = createSlice({
    name: 'device',
    initialState: {
        isDeltail: false,
        device: [],
        allDevice: [],
        deviceDetail: '',
    },
    reducers: {
        toggleDetail: (state) => {
            state.isDeltail = !state.isDeltail;
        },
        setAllDevice: (state, actions) => {
            state.allDevice = actions.payload;
        },
        setDevice: (state, actions) => {
            state.device = actions.payload;
        },
        setDeviceDetail: (state, actions) => {
            state.deviceDetail = actions.payload;
        },
    },
});
export const apiGetDeviceDetail = (id) => async (dispatch) => {
    const res = await authApi.getDevice(id)
    const device = res?.data?.data.data;
    dispatch(setDeviceDetail(device));
    return device;
};
export const apiGetAllDevice = () => async (dispatch) => {
    const res = await authApi.getAllDevice();
    const device = res?.data?.data.data;
    dispatch(setAllDevice(device));
    dispatch(setDevice(device));
    return device;
};

export const { toggleDetail, setAllDevice, setDevice, setDeviceDetail } = deviceSlice.actions;

export const getDevice = (state) => state?.device.device;
export const getDeviceDetail = (state) => state?.device.deviceDetail;
export const getAllDevice = (state) => state.device.allDevice;
export const getIsDetail = (state) => state.device.isDeltail;


export default deviceSlice.reducer;
