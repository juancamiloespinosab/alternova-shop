import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { Product } from '@core/models';
import { CartManagerService } from '@core/services/app/cart-manager.service';
import { SnackbarService } from '@core/services/app/snack-bar.service';
import { SharedModule } from '@shared/shared.module';
import { Subject } from 'rxjs';

@Component({
  imports: [CoreModule, SharedModule],
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  standalone: true,
})
export class ProductComponent {
  @Input() product!: Product;

  showStockError$: Subject<string> = new Subject();

  constructor(
    private cartManagerService: CartManagerService,
    private snackbarService: SnackbarService
  ) {}

  addToCart(product: Product, quantity: string) {
    const isAddedSuccessfully = this.cartManagerService.addProductToCart({
      product: product,
      quantity: +quantity,
      totalPrice: product.unit_price * +quantity,
    });

    if (!isAddedSuccessfully) {
      this.showStockError$.next('stockError');
      this.snackbarService.openSnackBar('Not enough stock  😓');
    }
  }
}
