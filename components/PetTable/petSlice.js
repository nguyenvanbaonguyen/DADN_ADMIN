import { createSlice } from '@reduxjs/toolkit';
import authApi from '@/api/auth/authApi';


export const petSlice = createSlice({
    name: 'pet',
    initialState: {
        isDeltail: false,
        pet: [],
        allPet: [],
        petDetail: '',
    },
    reducers: {
        toggleDetail: (state) => {
            state.isDeltail = !state.isDeltail;
        },
        setAllPet: (state, actions) => {
            state.allPet = actions.payload;
        },
        setPet: (state, actions) => {
            state.pet = actions.payload;
        },
        setPetDetail: (state, actions) => {
            state.petDetail = actions.payload;
        },
    },
});
export const apiGetPetDetail = (id) => async (dispatch) => {
    const res = await authApi.getPet(id)
    const pet = res?.data?.data.data;
    dispatch(setPetDetail(pet));
    console.log(pet);
    return pet;
};
export const apiGetAllPet = () => async (dispatch) => {
    const res = await authApi.getAllPet();
    const pet = res?.data?.data.data;
    dispatch(setAllPet(pet));
    dispatch(setPet(pet));
    return pet;
};

export const { toggleDetail, setAllPet, setPet, setPetDetail } = petSlice.actions;

export const getPet = (state) => state?.pet.pet;
export const getPetDetail = (state) => state?.pet.petDetail;
export const getIsDetail = (state) => state.pet.isDeltail;
export const getAllPet = (state) => state.pet.allPet;


export default petSlice.reducer;
