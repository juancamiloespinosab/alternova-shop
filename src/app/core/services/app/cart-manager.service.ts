import { Injectable } from '@angular/core';
import { Cart, CartProduct, Product } from '@core/models';
import { CartStateService } from '../state/cart-state.service';
import { StockValidatorService } from './stock-validator.service';

@Injectable({
  providedIn: 'root',
})
export class CartManagerService {
  constructor(
    private cartStateService: CartStateService,
    private stockValidatorService: StockValidatorService
  ) {}

  addProductToCart(newProduct: CartProduct): boolean {
    if (!this.isEnoughProductInStock(newProduct)) {
      return false;
    }

    if (!this.isProductAlreadyInCartState(newProduct)) {
      this.saveNewProductInCartState(newProduct);
      return true;
    }

    const updatedCart: Cart = this.updateCartTotalPrice(
      this.updateProductInCartState(newProduct)
    );

    this.saveCartState(updatedCart);
    return true;
  }

  private saveNewProductInCartState(newProduct: CartProduct) {
    const newCart: Cart = structuredClone(this.getCartState());

    newCart.products.push(newProduct);
    const updatedCart: Cart = this.updateCartTotalPrice(newCart);
    this.saveCartState(updatedCart);
  }

  private saveCartState(newCartState: Cart) {
    this.cartStateService.saveState(newCartState);
  }

  private isEnoughProductInStock(newProduct: CartProduct): boolean {
    return this.stockValidatorService.isEnoughProductInStock(newProduct);
  }

  private isProductAlreadyInCartState(newProduct: CartProduct): boolean {
    const cartState: Cart = this.getCartState();
    const newProductName: string = newProduct.product.name;

    return cartState.products.some(
      (cartProduct: CartProduct) => cartProduct.product.name === newProductName
    );
  }

  private updateProductInCartState(newProduct: CartProduct): Cart {
    const cartState: Cart = this.getCartState();
    const updatedCart: Cart = structuredClone(cartState);
    const newProductName: string = newProduct.product.name;

    updatedCart.products = cartState.products.map(
      (cartProduct: CartProduct) => {
        if (cartProduct.product.name === newProductName) {
          const newQuantity: number = newProduct.quantity + cartProduct.quantity;
          const newTotalPrice: number = newQuantity * newProduct.product.unit_price;

          return {
            ...newProduct,
            quantity: newQuantity,
            totalPrice: newTotalPrice,
          };
        } else {
          return cartProduct;
        }
      }
    );

    return updatedCart;
  }

  private updateCartTotalPrice(cart: Cart): Cart {
    const updatedCartTotalPrice: Cart = structuredClone(cart);
    let totalOrderPrice = 0;

    cart.products.forEach(
      (cartProduct: CartProduct) => (totalOrderPrice += cartProduct.totalPrice)
    );

    updatedCartTotalPrice.totalOrderPrice = totalOrderPrice;
    return updatedCartTotalPrice;
  }

  getCartState(): Cart {
    return structuredClone(this.cartStateService.getCart());
  }
}
