import { createSlice } from '@reduxjs/toolkit';
import sumArray from '@/helpers/sumArr';

export const tableSlice = createSlice({
	name: 'table',
	initialState: {
		name: '',
		length: 0,
		list: [],
		choosenIDs: [],
		flag: 0,

		text: '',

		page: 1,
		totalPage: 1,
		totalItems: 0,
		rowPerPage: 10,

		statusSort: 0,
		sort: '',
		sortDir: '',

		sign: false,
		loading: 0,
	},
	reducers: {
		toggleId: (state, action) => {
			state.choosenIDs[action.payload] = 1 - state.choosenIDs[action.payload];
			if (sumArray(state.choosenIDs) === state.choosenIDs.length)
				state.flag = 1;
			else state.flag = 0;
		},
		toggleFlag: (state) => {
			let newFlag = 1 - state.flag;
			state.choosenIDs = Array(state.length).fill(newFlag);
			state.flag = newFlag;
		},
		toggleSign: (state) => {
			state.sign = !state.sign;
		},

		setList: (state, action) => {
			const list = action.payload?.data;
			state.list = list;
			state.length = list.length;
			state.choosenIDs = Array(list.length).fill(0);
			state.page = action.payload.currentPage;
			state.totalItems = action.payload.totalItems;
			state.totalPage = action.payload.totalPage;

			state.loading = 0;
			state.flag = 0;
		},
		setLoading: (state, action) => {
			state.loading = action.payload;
		},
		setText: (state, action) => {
			state.text = action.payload;
			state.page = 1;
			state.sign = !state.sign;
		},
		setPage: (state, action) => {
			state.page = action.payload;
			state.sign = !state.sign;
		},
		setSort: (state, action) => {
			const nameSort = action.payload;
			let newStatus;

			if (nameSort !== state.sort) newStatus = 1;
			else if (state.statusSort === 2) newStatus = 0;
			else newStatus = state.statusSort + 1;

			state.statusSort = newStatus;
			state.sort = newStatus === 0 ? '' : nameSort;
			state.sortDir = newStatus === 1 ? 'desc' : 'asc';
		},
		setName: (state, action) => {
			state.name = action.payload;
			state.rowPerPage = action.payload === 'post' ? 5 : 10;
			state.page = 1;
			state.sort = '';
			state.text = '';
		},
		setEl: (state, action) => {
			const { index, data } = action.payload;
			state.list[index] = { ...state.list[index], ...data };
		},
	},
});

export const {
	toggleId,
	toggleFlag,
	setList,
	setLoading,
	setText,
	setSort,
	setEl,
	setName,
	toggleSign,
	setPage,
} = tableSlice.actions;

// Redux thunk
export const callApi = (api) => (params) => async (dispatch) => {
	try {
		dispatch(setLoading(1));

		const res = await api.getAll(params);

		const data = res?.payload;
		dispatch(setList(data));
		return res;
	} catch (err) {
		console.log(err);
		dispatch(setLoading(0));
	}
};

export default tableSlice.reducer;
