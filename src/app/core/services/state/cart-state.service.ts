import { Injectable } from '@angular/core';
import { Cart } from '@core/models';
import { State } from './state';

@Injectable({
  providedIn: 'root',
})
export class CartStateService extends State<Cart> {
  constructor() {
    super();
    this.saveState({
      products: [],
      totalOrderPrice: 0,
      totalOrderProducts: 0,
    });
  }

  saveState(cart: Cart) {
    this.observableData = cart;
  }

  getCart() {
    return this.observableValue;
  }

  getCart$() {
    return this.observable;
  }
}
