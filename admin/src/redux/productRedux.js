import {createSlice} from "@reduxjs/toolkit";


export const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        pending: false,
        error: false,
    },
    reducers: {
        //GET ALL
        getProductStart:(state) => {
            state.isFetching = true
            state.error = false
        },
        getProductSuccess:(state, action) => {
            state.isFetching = true
            state.error = false
        }
    },
});

export const {
} = productSlice.actions;

export default productSlice.reducer;