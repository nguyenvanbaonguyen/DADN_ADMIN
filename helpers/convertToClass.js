// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

const convertElement = (el) => {
	if (!el) return '';
	if (typeof el === 'string') return el;
	if (el.length === 2) return el[0] ? el[1] : '';
	if (el.length === 3) return el[0] ? el[1] : el[2];
	return '';
};

const cl = (...els) => {
	return els.map((el) => convertElement(el)).join(' ');
};

export default cl;
