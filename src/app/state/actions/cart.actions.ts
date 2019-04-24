import { Action } from '@ngrx/store';

export enum CartActionTypes {
  AddProduct = '[Cart] AddProduct Product',
  RemoveProduct = '[Cart] Remove Product',
  FilterCart = '[Cart] Filter Product',
}

export class AddProduct implements Action {
  readonly type = CartActionTypes.AddProduct;
  constructor(public payload: string) {}
}

export class RemoveProduct implements Action {
  readonly type = CartActionTypes.RemoveProduct;
  constructor(public payload: number) {}
}

export type CartActions = AddProduct | RemoveProduct;



































// Solution:
// export class FilterCart implements Action {
//   readonly type = CartActionTypes.FilterCart;
//   constructor(public payload: string) {}
// }

// export type CartActions = AddProduct | RemoveProduct | FilterCart;

