import { configureStore } from '@reduxjs/toolkit';
import sidebarSlice from '../components/Sidebar/sidebarSlice';
import user from './user';
import tableSlice from './table/tableSlice';

const store = configureStore({
	reducer: {
		sidebar: sidebarSlice,
		table: tableSlice,
		user: user,
	},
});

export default store;
