import {
  loginFailure,
  loginStart,
  loginSuccess,
  registerStart,
  registerSuccess,
  registerFailure,
  updateUser,
} from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";
import { addToWishlist, createWishlist, updateWishlist } from "./wishRedux";
import { addOrder, updateOrder } from "./orderRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    const userId = await res.data._id;
    const wishlistResponse = await publicRequest.get(`wishlist/${userId}`);
    // const ordersResponse = await publicRequest.get(`orders/${userId}`);
    dispatch(loginSuccess(res.data));
    dispatch(addToWishlist(wishlistResponse.data));
    // dispatch(addOrder(ordersResponse.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    const userId = await res.data._id;
    const wishlistResponse = await publicRequest.post(`wishlist`, {
      userId: userId,
    });
    const ordersResponse = await publicRequest.get(`orders/${userId}`);
    dispatch(registerSuccess(res.data));
    dispatch(createWishlist(wishlistResponse.data));
    dispatch(addOrder(ordersResponse.data));
  } catch (err) {
    dispatch(registerFailure());
  }
};

export async function updateUserInfo(id, user, dispatch) {
  try {
    const response = await userRequest.patch(`users/${id}`, user);
    dispatch(updateUser(response.data));
  } catch (error) {
    console.error(error);
  }
}

// WISHLIST

export async function updateWishlistProducts(id, item, dispatch) {
  try {
    const response = await userRequest.patch(`wishlist/${id}`, item);
    dispatch(updateWishlist(response.data));
  } catch (error) {
    console.error(error);
  }
}

// ORDERS

export async function getOrders(userID, dispatch) {
  try {
    const response = await userRequest.get(`orders/${userID}`);
    dispatch(addOrder(response.data));
  } catch (error) {
    console.error(error);
  }
}
export async function updateOrderStatus(id, item, dispatch) {
  try {
    const response = await userRequest.patch(`orders/${id}`, item);
    dispatch(updateOrder(response.data));
  } catch (error) {
    console.error(error);
  }
}

export async function addComment(desc, dispatch) {
  try{
   const response = await userRequest.post(`/comments/${productId}`, {desc});
  } catch(err) {
    console.error(error);
  }
}