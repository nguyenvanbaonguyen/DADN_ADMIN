const getAccessToken = async () => {
	const accessToken = await JSON.parse(localStorage.getItem('access') || '{}');
	return accessToken;
};

const getRefreshToken = async () => {
	const refreshToken = await JSON.parse(
		localStorage.getItem('refresh') || '{}'
	);
	return refreshToken;
};

const setAccessToken = (accessToken) => {
	localStorage.setItem('access', JSON.stringify(accessToken));
};

const setRefreshToken = (refreshToken) => {
	localStorage.setItem('refresh', JSON.stringify(refreshToken));
};

const userToken = {
	getAccessToken,
	getRefreshToken,
	setAccessToken,
	setRefreshToken,
};

export default userToken;
