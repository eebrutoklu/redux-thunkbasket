import api from "../../utils/api";
import actionTypes from "../actionTypes";

export const getProducts = (restaurantId) => (dispatch) => {
  dispatch({
    type: actionTypes.PRODUCT_LOADING,
  });
  api
    .get(`/products?restaurantId=${restaurantId}`)
    .then((res) =>
      dispatch({
        type: actionTypes.PRODUCT_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({ type: actionTypes.PRODUCT_ERROR, payload: err.message })
    );
};

/* import api from "../../utils/api";
export const setLoading = () => ({
  type: "SET_LOADING",
});

export const setError = (payload) => ({
  type: "SET_ERROR",
  payload,
});

export const setProducts = (payload) => ({
  type: "SET_PRODUCTS",
  payload,
});

export const getProducts = () => {
  return (dispatch) => {
    dispatch(setLoading());
    api
      .get("/products")
      .then((res) => dispatch(setProducts(res.data)))
      .catch((err) => dispatch(setError(err.message)));
  };
};
*/
