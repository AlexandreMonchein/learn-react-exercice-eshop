import { STORE_SHOES } from "./state.actions";

const initialState = {
  shoes: [],
};

export function stateReducer(state = initialState, action) {
  switch (action.type) {
    case STORE_SHOES:
      return {
        ...state,
        shoes: action.shoes,
      };

    default:
      return state;
  }
}
