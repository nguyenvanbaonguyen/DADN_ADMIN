import { configureStore } from '@reduxjs/toolkit';
import sidebarSlice from '../components/Sidebar/sidebarSlice';
import tableSlice from './table/tableSlice';
import userSlice from '@/components/UserTable/userSlice';
import deviceSlice from '@/components/DeviceTable/deviceSlice';


const store = configureStore({
	reducer: {
		sidebar: sidebarSlice,
		table: tableSlice,
		user: userSlice,
		device: deviceSlice,
	},
});

export default store;
