import {
  loginFailure,
  loginStart,
  loginSuccess,
  registerStart,
  registerSuccess,
  registerFailure,
} from "./userRedux";

import {
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  getProductFailure,
  getProductStart,
  getProductSuccess,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
  addProductStart,
  addProductSuccess,
  addProductFailure,
} from "./productRedux";

import { publicRequest, userRequest } from "../requestMethods";

// LOGIN
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

// REGISTER
export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure());
  }
};

// PRODUCTS
export async function getProducts(dispatch) {
  dispatch(getProductStart());
  try {
    const response = await publicRequest.get("products/");
    dispatch(getProductSuccess(response.data));
  } catch (error) {
    dispatch(getProductFailure());
    console.error(error);
  }
}

export async function deleteProduct(id, dispatch) {
  dispatch(deleteProductStart());
  try {
    const response = await userRequest.delete(`products/${id}`);
    dispatch(deleteProductSuccess(response.data));
  } catch (error) {
    dispatch(deleteProductFailure());
    console.error(error);
  }
}

export async function updateProduct(id, dispatch, product) {
  dispatch(updateProductStart());
  try {
    const response = await userRequest.patch(`/products/${id}`, product);
    dispatch(updateProductSuccess(response.data));
  } catch (error) {
    dispatch(updateProductFailure());
  }
}

export async function addProduct(product, dispatch) {
  dispatch(addProductStart());
  try {
    const response = await userRequest.post("/products/", product);
    dispatch(addProductSuccess(response.data));
  } catch (error) {
    dispatch(addProductFailure());
  }
}
