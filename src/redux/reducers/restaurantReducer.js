import actionTypes from "../actionTypes";

const initialState = {
  isLoading: false,
  error: false,
  restaurants: [],
};

const restaurantReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.REST_LOADING:
      return { ...state, isLoading: true };
    case actionTypes.REST_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case actionTypes.REST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        restaurants: action.payload,
      };
    default:
      return state;
  }
};

export default restaurantReducer;
