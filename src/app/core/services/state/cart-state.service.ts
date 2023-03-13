import { Injectable } from '@angular/core';
import { Cart } from '@core/models';
import { State } from './state';

@Injectable({
  providedIn: 'root',
})
export class CartStateService extends State<Cart> {
  private initCart = {
    products: [],
    totalOrderPrice: 0,
    totalOrderProducts: 0,
  };

  constructor() {
    super();
    this.saveState(this.initCart);
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

  getInitCart() {
    return this.initCart;
  }
}
