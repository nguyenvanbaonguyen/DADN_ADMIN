import userToken from './storage';
import { isTokenExpired } from '@/helpers/auth';
import authApi from '@/api/auth/authApi';

export const callAccessToken = async () => {
	const { token, expires } = await userToken.getRefreshToken();

	if (isTokenExpired(expires)) return null;

	try {
		const res = await authApi.getAccessToken({
			refreshToken: token,
		});
		if (!res.success) return null;
		const { access } = res.payload;
		userToken.setAccessToken(access);
		return access.token;
	} catch (err) {
		console.log(err);
	}
};
