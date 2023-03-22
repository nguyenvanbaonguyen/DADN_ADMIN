export const isTokenExpired = (dateExpired) => {
	if (!dateExpired) return true;

	return +dateExpired < Date.now();
};
