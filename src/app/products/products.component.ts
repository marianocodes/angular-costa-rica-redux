import { Component, OnInit, Output, EventEmitter } from '@angular/core';

const data = [
  '🍎',
  '🍐',
  '🧀',
  '🍕',
  '🍬',
  '🥜',
];

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products = data;

  @Output()
  public selected = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  public selectProduct(id: number): void {
    this.selected.emit(id);
  }

}
