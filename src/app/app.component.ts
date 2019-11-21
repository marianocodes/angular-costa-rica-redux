import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { State, selectList, selectItems } from './state/reducers';
import { RemoveProduct, AddProduct, GetList, FilterCart } from './state/actions/cart.actions';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public list$: Observable<string[]>;
  public items$: Observable<string[]>;

  constructor(
    public store: Store<State>,
    public service: AppService
  ) {
    this.list$ = store.pipe(select(selectList));    
    this.items$ = store.pipe(select(selectItems));   
  }

  public ngOnInit() {   
    this.store.dispatch(GetList());
  }

  public addProduct(product: string) {
    this.store.dispatch(AddProduct(product));
  }

  public removeProduct(position: number) {
    this.store.dispatch(RemoveProduct(position));
  }

  public filterList(product: string) {
    this.store.dispatch(FilterCart(product));
  }


  // TODO: Create filter function
}






























// Solution
// import { RemoveProduct, AddProduct, FilterCart } from './state/actions/cart.actions';
// public filterList(product: string) {
//   this.store.dispatch(FilterCart(product));
// }


// public ngOnInit() {
//   this.store.dispatch(GetList())
// }
// this.items$ = store.pipe(select(selectItems));
