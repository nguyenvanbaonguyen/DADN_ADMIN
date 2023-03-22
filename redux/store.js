import { configureStore } from '@reduxjs/toolkit';
import sidebarSlice from '../components/Sidebar/sidebarSlice';
import tableSlice from './table/tableSlice';

const store = configureStore({
	reducer: {
		sidebar: sidebarSlice,
		table: tableSlice,
	},
});

export default store;
