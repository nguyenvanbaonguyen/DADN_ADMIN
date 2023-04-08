import { createSlice } from '@reduxjs/toolkit';

export const deviceSlice = createSlice({
    name: 'device',
    initialState: {
        isDeltail: false,
    },
    reducers: {
        toggleDetail: (state) => {
            state.isDeltail = !state.isDeltail;
        },
    },
});

export const { toggleDetail } = deviceSlice.actions;

export const getIsDetail = (state) => state.device.isDeltail;


export default deviceSlice.reducer;
