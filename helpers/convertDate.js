const convertDate = (date) => {
	const event = new Date(date);
	const day = event.getDate();
	const month = event.getMonth() + 1;
	const year = event.getFullYear() + 1;
	return `${day}/${month}/${year}`;
};

export { convertDate };
