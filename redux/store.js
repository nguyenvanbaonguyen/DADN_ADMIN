import { configureStore } from '@reduxjs/toolkit';
import sidebarSlice from '../components/Sidebar/sidebarSlice';
import tableSlice from './table/tableSlice';
import userSlice from '@/components/UserTable/userSlice';
import deviceSlice from '@/components/DeviceTable/deviceSlice';
import loginSlice from './login/loginSlice';
import modalSlice from './modal/modalSlice';
import petSlice from '@/components/PetTable/petSlice';


const store = configureStore({
	reducer: {
		sidebar: sidebarSlice,
		table: tableSlice,
		user: userSlice,
		device: deviceSlice,
		login: loginSlice,
		modal: modalSlice,
		pet: petSlice,
	},
});

export default store;
