import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { State, selectList } from './state/reducers';
import { RemoveProduct, AddProduct } from './state/actions/cart.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public list$: Observable<string[]>;

  constructor(public store: Store<State>) {
    this.list$ = store.pipe(select(selectList));
  }

  public addProduct(product: string) {
    this.store.dispatch(AddProduct(product));
  }

  public removeProduct(position: number) {
    this.store.dispatch(RemoveProduct(position));
  }

  // TODO: Create filter function
}






























// Solution
// import { RemoveProduct, AddProduct, FilterCart } from './state/actions/cart.actions';
// public filterList(product: string) {
//   this.store.dispatch(FilterCart(product));
// }
