import { v4 } from "uuid";
import api from "../../utils/api";
import actionTypes from "../actionTypes";

//sepetteki elemanları getirir
export const getCart = () => (dispatch) => {
  dispatch({
    type: actionTypes.CART_LOADING,
  });

  api
    .get(`/cart`)
    .then((res) => {
      dispatch({
        type: actionTypes.CART_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.CART_ERROR,
        payload: err.message,
      });
    });
};

//sepete eleman ekleme
export const addToCart = (product, restaurant) => (dispatch) => {
  const newItem = {
    id: v4(),
    productId: product.id,
    title: product.title,
    price: product.price,
    img: product.img,
    restaurantName: restaurant.name,
    amount: 1,
  };
  api.post(`/cart`, newItem).then((res) =>
    dispatch({
      type: actionTypes.ADD_TO_CART,
      payload: newItem,
    })
  );
  console.log(product, restaurant);
};

// updateCart action'ında fiyat güncellemesi yapılırken doğru fiyatın alındığından emin olalım
export const updateCart = (id, newAmount) => (dispatch) => {
  api.patch(`/cart/${id}`, { amount: newAmount }).then((res) => {
    const updatedCartItem = res.data;
    const newPrice = updatedCartItem.price;
    dispatch({
      type: actionTypes.UPDATE_CART,
      payload: { updatedCartItem, newAmount, newPrice },
    });
  });
};

// deleteCart  ürünü skaldıralım
export const deleteCart = (id) => (dispatch) => {
  api.delete(`/cart/${id}`).then((res) =>
    dispatch({
      type: actionTypes.DELETE_FROM_CART,
      payload: id,
    })
  );
};
