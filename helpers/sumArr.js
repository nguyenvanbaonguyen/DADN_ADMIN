function sumArray(arr) {
	const sum = arr.reduce(function (a, b) {
		return a + b;
	}, 0);
	return sum;
}

export default sumArray;
