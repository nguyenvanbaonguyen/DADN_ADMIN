import { createSlice } from '@reduxjs/toolkit';
import authApi from '@/api/auth/authApi';


export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isDeltail: false,
        user: [],
    },
    reducers: {
        toggleDetail: (state) => {
            state.isDeltail = !state.isDeltail;
        },
        setAllUser: (state, actions) => {
            state.user = actions.payload;
        },
    },
});

export const getAllUser = () => async (dispatch) => {
    const res = await authApi.getAllUser();
    const user = res?.data?.data.data;
    dispatch(setAllUser(user));
    console.log('allUser', res);
    return user;
};

export const { toggleDetail, setAllUser } = userSlice.actions;

export const getUser = (state) => state?.user.user;
export const getIsDetail = (state) => state.user.isDeltail;


export default userSlice.reducer;
