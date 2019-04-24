import { Action } from '@ngrx/store';
import { CartActionTypes, CartActions } from '../actions/cart.actions';

export interface State {
  list: string[];
}

export const initialState: State = {
  list: []
};

export function reducer(state = initialState, action: CartActions): State {
  switch (action.type) {

    case CartActionTypes.AddProduct: {
      return { list: [ ...state.list, action.payload ] };
    }

    case CartActionTypes.RemoveProduct: {
      return { list: [ ...state.list.slice(0, action.payload), ...state.list.slice(action.payload + 1)] };
    }

    default:
      return state;
  }
}

































// Solution:
// case CartActionTypes.FilterCart: {
//   return { list: [ ...state.list.filter((value) => value !== action.payload)] };
// }
