import { createSlice } from '@reduxjs/toolkit';
import authApi from '@/api/auth/authApi';


export const deviceSlice = createSlice({
    name: 'device',
    initialState: {
        isDeltail: false,
        device: [],
    },
    reducers: {
        toggleDetail: (state) => {
            state.isDeltail = !state.isDeltail;
        },
        setAllDevice: (state, actions) => {
            state.device = actions.payload;
        },
    },
});

export const getAllDevice = () => async (dispatch) => {
    const res = await authApi.getAllDevice();
    const device = res?.data?.data.data;
    dispatch(setAllDevice(device));
    console.log('allDevice', res);
    return device;
};

export const { toggleDetail, setAllDevice } = deviceSlice.actions;

export const getDevice = (state) => state?.device.device;
export const getIsDetail = (state) => state.device.isDeltail;


export default deviceSlice.reducer;
