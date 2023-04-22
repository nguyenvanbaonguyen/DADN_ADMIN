import { createSlice } from '@reduxjs/toolkit';
import authApi from '@/api/auth/authApi';
import { USER_TOKEN } from '@/helpers/auth';
import { apiGetAllDevice } from '@/components/DeviceTable/deviceSlice';
import { apiGetAllPet } from '@/components/PetTable/petSlice';
import { apiGetAllUser } from '@/components/UserTable/userSlice';


const loginSlice = createSlice({
	name: 'login',
	initialState: {
		login: false,
		user_info: '',
		isWrong: false,
	},
	reducers: {
		setLogin: (state, action) => { state.login = !state.login },
		setUser: (state, action) => { state.user_info = action.payload },
		setIsWrong: (state, action) => { state.isWrong = true },
		setNoWrong: (state, action) => { state.isWrong = false },
	},
});

export const callMe = () => async (dispatch) => {
	const res = await authApi.getUserInfo();
	const user = res?.data?.data;
	if (user.role === 'admin') {
		dispatch(setLogin());
		await dispatch(apiGetAllDevice());
		await dispatch(apiGetAllPet());
		await dispatch(apiGetAllUser());
	} else {
		throw "Role must admin";
	}
	dispatch(setUser(user));
	return user;
};

export const loginUser = (userLogin) => async (dispatch) => {
	try {
		const res = await authApi.login(userLogin);
		if (res.status !== 200) return;
		const { token, refresh_token, expiredRefresh, expiredToken } =
			res.data.data;
		const user_info = res.data.data.data.id;
		USER_TOKEN.set({
			token,
			expiredToken,
			refresh_token,
			expiredRefresh,
		});

		return user_info;
	} catch (err) {
		throw err;
	}
};


export const getUser = (state) => state?.login.user_info;
export const getLogin = (state) => state.login.login;
export const getIsWrong = (state) => state.login.isWrong;

export const getIsAdmin = (state) => state?.login?.partner_role === 100;

export const { setUser, setLogin, setIsWrong, setNoWrong } = loginSlice.actions;

export default loginSlice.reducer;
