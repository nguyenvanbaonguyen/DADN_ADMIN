export default function (err) {
	const baseErrors = err.response.data.errors;

	const newErrors = baseErrors.reduce((pre, err) => {
		pre[err.param] = err.msg;
		return pre;
	}, {});

	return newErrors;
}
