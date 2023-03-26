import { createSlice } from '@reduxjs/toolkit';

export const sibarSlice = createSlice({
	name: 'sidebar',
	initialState: {
		site: 'dashboard',
		sidebarContents: ['dashboard', 'users', 'devices', 'posts'],
		isOpen: true,
	},
	reducers: {
		changeContent: (state, action) => {
			state.site = action.payload;
		},
		toggleOpen: (state) => {
			state.isOpen = !state.isOpen;
		},
		closeOpen: (state) => {
			state.isOpen = false;
		},
	},
});

export const { changeContent, toggleOpen, closeOpen } = sibarSlice.actions;

export const getSite = (state) => state.sidebar.site;

export const getSidebarContents = (state) => state.sidebar.sidebarContents;

export const getIsOpen = (state) => state.sidebar.isOpen;

export default sibarSlice.reducer;
