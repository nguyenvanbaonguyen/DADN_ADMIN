import { createSlice } from '@reduxjs/toolkit';
import authApi from '@/api/auth/authApi';


export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isDeltail: false,
        user: [],
        allUser: [],
    },
    reducers: {
        toggleDetail: (state) => {
            state.isDeltail = !state.isDeltail;
        },
        setUser: (state, actions) => {
            state.user = actions.payload;
        },
        setAllUser: (state, actions) => {
            state.allUser = actions.payload;
        },
    },
});

export const apiGetAllUser = () => async (dispatch) => {
    const res = await authApi.getAllUser();
    const user = res?.data?.data.data;
    dispatch(setAllUser(user));
    dispatch(setUser(user));
    console.log('allUser', res);
    return user;
};

export const { toggleDetail, setAllUser, setUser } = userSlice.actions;

export const getUser = (state) => state?.user.user;
export const getAllUser = (state) => state?.user.allUser;
export const getIsDetail = (state) => state.user.isDeltail;


export default userSlice.reducer;
