import { createReducer, on, Action } from '@ngrx/store';
import * as CartActions from '../actions/cart.actions';

export interface State {
  list: string[];
  items: string[];
}

export const initialState: State = {
  list: [],
  items: [],
};

const cartReducer = createReducer(
  initialState,
  on(CartActions.AddProduct, (state, action) => ({ ...state, list: [ ...state.list, action.payload ] })),

  on(CartActions.RemoveProduct,
    (state, action) => ({ ...state, list: [ ...state.list.slice(0, action.payload), ...state.list.slice(action.payload + 1)] })),

  on(CartActions.FilterCart, (state, action) => ({ ...state, list: [ ...state.list.filter((value) => value !== action.payload)] })),

  on(CartActions.GetListSuccess,
      (state, action) => ({ ...state, items: [ ...action.payload ] })),
  // TODO: reducer to filter data
);

export function reducer(state: State | undefined, action: Action) {
  return cartReducer(state, action);
}

// OLD WAY

// export function reducer(state = initialState, action: CartActions): State {
//   switch (action.type) {

//     case CartActionTypes.AddProduct: {
//       return { list: [ ...state.list, action.payload ] };
//     }

//     case CartActionTypes.RemoveProduct: {
//       return { list: [ ...state.list.slice(0, action.payload), ...state.list.slice(action.payload + 1)] };
//     }

//     case CartActionTypes.FilterCart: {
//       return { list: [ ...state.list.filter((value) => value !== action.payload)] };
//     }

//     default:
//       return state;
//   }
// }

































// Solution:

  // on(CartActions.GetListSuccess,
  //   (state, action) => ({ ...state, items: [ ...action.payload ] })),
