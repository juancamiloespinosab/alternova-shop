import { CartProduct } from './cart-product.model';

export interface Cart {
  products: CartProduct[];
  totalOrderPrice: number;
  totalOrderProducts: number;
}
