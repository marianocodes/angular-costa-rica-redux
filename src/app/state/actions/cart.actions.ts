import { createAction } from '@ngrx/store';

export const AddProduct = createAction('[Cart] AddProduct Product', (payload: string) => ({ payload }));
export const RemoveProduct = createAction('[Cart] Remove Product', (payload: number) => ({ payload }));
 // TODO: Create filter action

// OLD WAY

// export enum CartActionTypes {
//   AddProduct = '[Cart] AddProduct Product',
//   RemoveProduct = '[Cart] Remove Product',
//   FilterCart = '[Cart] Filter Product',
// }

// export class AddProduct implements Action {
//   readonly type = CartActionTypes.AddProduct;
//   constructor(public payload: string) {}
// }

// export class RemoveProduct implements Action {
//   readonly type = CartActionTypes.RemoveProduct;
//   constructor(public payload: number) {}
// }

// export class FilterCart implements Action {
//   readonly type = CartActionTypes.FilterCart;
//   constructor(public payload: string) {}
// }

// export type CartActions = AddProduct | RemoveProduct | FilterCart;

































// Solution:
// export const FilterCart = createAction('[Cart] Filter Product', (payload: string) => ({ payload }));
