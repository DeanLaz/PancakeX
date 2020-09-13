import * as actionTypes from "../actions/actionTypes";

const initialState = {
  ingredients: {
    syrup: 0,
    strawberry: 0,
    banana: 0,
    nutella: 0,
    butter: 0,
  },
  totalPrice: 4,
  error: false,
};

const INGREDIENT_PRICES = {
  syrup: 1,
  strawberry: 2.5,
  banana: 2.5,
  nutella: 3,
  butter: 1.5,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
      };
    case actionTypes.SET_INGREDIENTS:
      return {
        ...state,
        ingredients: {
          syrup: action.ingredients.syrup,
          strawberry: action.ingredients.strawberry,
          banana: action.ingredients.banana,
          nutella: action.ingredients.nutella,
          butter: action.ingredients.butter,
        },
        totalPrice: 4,
        error: false,
      };
    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
