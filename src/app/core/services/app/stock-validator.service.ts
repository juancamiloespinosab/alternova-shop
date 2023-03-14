import { Injectable } from '@angular/core';
import { Cart, CartProduct, Product } from '@core/models';
import { CartStateService } from '@core/services/state/cart-state.service';
import { ProductsStateService } from '@core/services/state/products-state.service';

@Injectable({
  providedIn: 'root',
})
export class StockValidatorService {
  constructor(
    private cartStateService: CartStateService,
    private productsStateService: ProductsStateService
  ) {}

  isEnoughProductInStock(newProduct: CartProduct): boolean {
    const stateProduct: Product | undefined =
      this.findProductInProductsState(newProduct);
    const cartProduct: CartProduct | undefined =
      this.findProductInCartState(newProduct);

    if (stateProduct) {
      return this.isQuantityOfStockHigherThanRequested({
        actualStock: stateProduct.stock,
        requestedQuantity: newProduct.quantity + (cartProduct?.quantity || 0),
      });
    }

    return false;
  }

  isQuantityOfStockHigherThanRequested = ({
    actualStock,
    requestedQuantity,
  }: {
    actualStock: number;
    requestedQuantity: number;
  }): boolean => {
    return actualStock >= requestedQuantity;
  };

  private findProductInProductsState(
    product: CartProduct
  ): Product | undefined {
    const productsState: Product[] = this.getProductsState();
    const newProductId: string = this.getCartProductId(product);

    return productsState.find((stateProduct: Product) => {
      const stateProductId: string = stateProduct.name + stateProduct.type;
      return stateProductId === newProductId;
    });
  }

  private findProductInCartState(
    product: CartProduct
  ): CartProduct | undefined {
    const cartState: Cart = this.getCartState();
    const newProductId: string = this.getCartProductId(product);

    return cartState.products.find((cartProduct: CartProduct) => {
      const cartProductId: string = this.getCartProductId(cartProduct);
      return cartProductId === newProductId;
    });
  }

  private getCartState() {
    return this.cartStateService.getCart();
  }

  private getCartProductId(cartProduct: CartProduct): string {
    return cartProduct.product.name + cartProduct.product.type;
  }

  private getProductsState() {
    return this.productsStateService.getProducts();
  }
}
