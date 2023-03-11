import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Product } from '@core/models';
import { CartManagerService } from '@core/services/app/cart-manager.service';
import { CartStateService } from '@core/services/state/cart-state.service';
import { SharedModule } from '@shared/shared.module';

@Component({
  imports: [SharedModule],
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  standalone: true,
})
export class ProductComponent {
  @Input() product!: Product;

  constructor(private cartManagerService: CartManagerService) {}

  addToCart(product: Product, quantity: string) {
    this.cartManagerService.addProductToCart({
      product: product,
      quantity: +quantity,
      totalPrice: product.unit_price * +quantity,
    });
  }
}
