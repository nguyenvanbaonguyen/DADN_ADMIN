import { createSlice } from '@reduxjs/toolkit';
import authApi from '@/api/auth/authApi';


export const petSlice = createSlice({
    name: 'pet',
    initialState: {
        isDeltail: false,
        pet: [],
    },
    reducers: {
        toggleDetail: (state) => {
            state.isDeltail = !state.isDeltail;
        },
        setAllPet: (state, actions) => {
            state.pet = actions.payload;
        },
    },
});

export const getAllPet = () => async (dispatch) => {
    const res = await authApi.getAllPet();
    const pet = res?.data?.data.data;
    dispatch(setAllPet(pet));
    console.log('allPet', res);
    return pet;
};

export const { toggleDetail, setAllPet } = petSlice.actions;

export const getPet = (state) => state?.pet.pet;
export const getIsDetail = (state) => state.pet.isDeltail;


export default petSlice.reducer;
