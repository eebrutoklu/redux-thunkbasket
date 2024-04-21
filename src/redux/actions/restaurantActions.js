import api from "../../utils/api";
import actionTypes from "../actionTypes";

export const getRestaurants = (restaurantId) => (dispatch) => {
  dispatch({ type: actionTypes.REST_LOADING });
  const url = restaurantId ? `/restaurants/${restaurantId}` : `/restaurants`;

  api
    .get(url)
    .then((res) =>
      dispatch({
        type: actionTypes.REST_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: actionTypes.REST_ERROR,
        payload: err.message,
      })
    );
};
