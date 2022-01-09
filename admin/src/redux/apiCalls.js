import { loginFailure, loginStart, loginSuccess } from "./userRedux"
import { publicRequest } from "../redux/requestMethods"
import { deleteProductStart, deleteProductSuccess, deleteProductFailure, getProductFailure, getProductStart, getProductSuccess, updateProductStart, updateProductSuccess, updateProductFailure, addProductStart, addProductSuccess, addProductFailure } from "./productRedux";


export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const response = await publicRequest.post("/auth/login", user)
        dispatch(loginSuccess(response.data))
    } catch (error) {
        dispatch(loginFailure())
    }
}

export const getProducts = async (dispatch) => {
    dispatch(getProductStart());
    try {
        const response = await publicRequest.get("/products");
        dispatch(getProductSuccess(response.data))
    } catch (error) {
        dispatch(getProductFailure());
    }
}

export const deleteProduct = async (id, dispatch) => {
    dispatch(deleteProductStart());
    try {
        const response = await userRequest.delete(`/products/${id}`);
        dispatch(deleteProductSuccess(id))
    } catch (error) {
        dispatch(deleteProductFailure());
    }
}

export const updateProduct = async (id, product, dispatch) => {
    dispatch(updateProductStart());
    try {
        // const response = await userRequest.delete(`/products/${id}`);
        dispatch(updateProductSuccess({id, product}))
    } catch (error) {
        dispatch(updateProductFailure());
    }
}

export const addProduct = async (product, dispatch) => {
    dispatch(addProductStart());
    try {
        const response = await userRequest.post(`/products`, product);
        dispatch(addProductSuccess(response.data))
    } catch (error) {
        dispatch(addProductFailure());
    }
};