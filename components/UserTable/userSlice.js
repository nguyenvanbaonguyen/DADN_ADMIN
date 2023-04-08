import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isDeltail: false,
    },
    reducers: {
        toggleDetail: (state) => {
            state.isDeltail = !state.isDeltail;
        },
    },
});

export const { toggleDetail } = userSlice.actions;

export const getIsDetail = (state) => state.user.isDeltail;


export default userSlice.reducer;
