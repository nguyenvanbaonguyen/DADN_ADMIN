const handleCheckError = (error, name, minLength = 0) => {
	if (error.type === 'required') return `${name} is required`;
	if (error.type === 'pattern') return `${name} is not valid`;
	if (error.type === 'custom') return error.message;
	return `${name} must be minimum of ${minLength} characters `;
};
module.exports = handleCheckError;
