export const getList = (state) => state.table.list;

export const getChoosenIDs = (state) => state.table.choosenIDs;

export const getIds = (state) => {
	const choosenIDs = state.table.choosenIDs;
	const list = state.table.list;
	const ids = list
		.filter((el, index) => choosenIDs[index])
		.map((el) => {
			if (state.table.name === 'post') return el.id;
			return el._id;
		});
	return ids;
};

export const getFlag = (state) => state.table.flag;

export const getLoading = (state) => state.table.loading;

export const getText = (state) => state.table.text;

export const getParams = (state) => {
	const { text, page, rowPerPage, sort, sortDir } = state.table;
	let params = { page, rowPerPage };
	if (text) params = { ...params, text };
	if (sort) params = { ...params, sort, sortDir };
	return params;
};

export const getInfoPage = (state) => {
	const { page, totalItems, totalPage } = state.table;
	return { page, totalItems, totalPage };
};

export const getName = (state) => state.table.name;

export const getStatusSort = (state) => state.table.statusSort;

export const getSort = (state) => state.table.sort;

export const getAll = (state) => state.table;

export const getSign = (state) => state.table.sign;
