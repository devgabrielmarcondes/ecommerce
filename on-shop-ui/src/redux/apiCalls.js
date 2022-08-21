import {
  loginFailure,
  loginStart,
  loginSuccess,
  registerStart,
  registerSuccess,
  registerFailure,
} from "./userRedux";
import { publicRequest } from "../requestMethods";
import { addToWishlist, createWishlist, updateWishlist } from "./wishRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    const userId = await res.data._id;
    const wishlistResponse = await publicRequest.get(`wishlist/${userId}`);
    dispatch(loginSuccess(res.data));
    dispatch(addToWishlist(wishlistResponse.data));
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
    dispatch(registerSuccess(res.data));
    dispatch(createWishlist(wishlistResponse.data));
  } catch (err) {
    dispatch(registerFailure());
  }
};

// WISHLIST

export async function updateWishlistProducts(id, item, dispatch) {
  try {
    const response = await publicRequest.patch(`wishlist/${id}`, item);
    dispatch(updateWishlist(response.data));
  } catch (error) {
    console.error(error);
  }
}
