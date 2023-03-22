import { createSlice } from '@reduxjs/toolkit';
import authApi from '@/api/auth/authApi';
import userToken from '@/utils/storage';

const initialState = null;

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action) => (state = action.payload),
	},
});

export const fetchUserDataAsync = () => async (dispatch) => {
	const res = await authApi.getUserInfo();
	const user = res.payload;
	dispatch(setUser(user));
	return user;
};

export const loginUserAsync = (userLogin) => async (dispatch) => {
	const res = await authApi.login(userLogin);
	if (!res.success) return res;
	const { user, token } = res.payload;

	userToken.setAccessToken(token.access);
	userToken.setRefreshToken(token.refresh);
	dispatch(setUser(user));
	return user;
};

export const getUser = (state) => state?.user;

export const getIsAdmin = (state) => state?.user?.role === 'ADMIN';

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
