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

  addProduct(newProduct: CartProduct): boolean {
    if (!this.isEnoughProductInStock(newProduct)) {
      return false;
    }

    if (!this.isProductAlreadyInCartState(newProduct)) {
      this.saveNewProductInCartState(newProduct);
      return true;
    }

    const updatedCart: Cart = this.updateCartTotalValues(
      this.updateProductInCartState(newProduct)
    );

    this.saveCartState(updatedCart);
    return true;
  }

  removeProduct(product: CartProduct): void {
    const newCart: Cart = this.removeProductFromCart(product);
    const updatedCart: Cart = this.updateCartTotalValues(newCart);
    this.saveCartState(updatedCart);
  }

  removeAllProducts(): void {
    const newCart: Cart = this.cartStateService.getInitCart();
    this.saveCartState(newCart);
  }

  private removeProductFromCart(removeCartProduct: CartProduct): Cart {
    const newCart: Cart = this.cartStateService.getCart();
    const removeCartProductId: string =
      this.getCartProductId(removeCartProduct);

    newCart.products = newCart.products.filter((cartProduct: CartProduct) => {
      const cartProductId: string = this.getCartProductId(cartProduct);

      return cartProductId !== removeCartProductId;
    });

    return newCart;
  }

  private saveNewProductInCartState(newProduct: CartProduct) {
    const newCart: Cart = this.getCartState();

    newCart.products.push(newProduct);
    const updatedCart: Cart = this.updateCartTotalValues(newCart);
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
    const updatedCart: Cart = cartState;
    const newProductId: string = this.getCartProductId(newProduct);

    updatedCart.products = cartState.products.map(
      (cartProduct: CartProduct) => {
        const cartProductId: string = this.getCartProductId(cartProduct);

        if (cartProductId === newProductId) {
          const newQuantity: number =
            newProduct.quantity + cartProduct.quantity;
          const newTotalPrice: number =
            newQuantity * newProduct.product.unit_price;

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

  private updateCartTotalValues(cart: Cart): Cart {
    const updatedCartTotalValues: Cart = cart;
    let totalOrderPrice = 0;
    let totalOrderProducts = 0;

    cart.products.forEach((cartProduct: CartProduct) => {
      totalOrderPrice += cartProduct.totalPrice;
      totalOrderProducts += cartProduct.quantity;
    });

    updatedCartTotalValues.totalOrderPrice = totalOrderPrice;
    updatedCartTotalValues.totalOrderProducts = totalOrderProducts;

    return updatedCartTotalValues;
  }

  private getCartProductId(cartProduct: CartProduct): string {
    return cartProduct.product.name + cartProduct.product.type;
  }

  private getCartState(): Cart {
    return this.cartStateService.getCart();
  }
}
