const toAction = (status) => {
	if (status == 'ACTIVE') return 'Activate';
	else return 'Deactivate';
};
const switchAction = (action) => {
	return action === 'Activate' ? 'Deactivate' : 'Activate';
};

export { toAction, switchAction };
