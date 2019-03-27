import * as actionTypes from "../actions/types";

const initialState = {
  coffeeShops: [],
  orderHistory: [{ Order1: "Order1", Order2: "Order2", Order3: "Order3" }],
  loading: true
};

const coffeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_COFFEESHOPS:
      return {
        ...state,
        coffeeShops: action.payload,
        loading: false
      };
    case actionTypes.COFFEESHOPS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default coffeeReducer;
