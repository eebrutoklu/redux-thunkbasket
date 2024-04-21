import actionTypes from "../actionTypes";

const initialState = {
  isLoading: false,
  error: false,
  data: [],
};

const baskerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CART_LOADING:
      return { ...state, isLoading: true };
    case actionTypes.CART_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case actionTypes.CART_SUCCESS:
      return { ...state, isLoading: false, error: false, data: action.payload };

    case actionTypes.ADD_TO_CART:
      return { ...state, data: state.data.concat(action.payload) };

    case actionTypes.UPDATE_CART:
      const updatedArr = state.data.map((item) =>
        item.id === action.payload.updatedCartItem.id
          ? {
              ...action.payload.updatedCartItem,
              amount: action.payload.newAmount,
              price: action.payload.newPrice,
            }
          : item
      );
      return { ...state, data: updatedArr };

    case actionTypes.DELETE_FROM_CART:
      const filtred = state.data.filter((i) => i.id !== action.payload);
      return { ...state, data: filtred };
    default:
      return state;
  }
};

export default baskerReducer;
