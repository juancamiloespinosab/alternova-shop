import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { AnimatedFeedback } from '@core/interfaces';
import { Product } from '@core/models';
import { CartManagerService } from '@core/services/app/cart-manager.service';
import { SnackbarService } from '@core/services/app/snack-bar.service';
import { SharedModule } from '@shared/shared.module';
import { Subject } from 'rxjs';
import { Random } from '@utils/random.util';
import { QuantitySelectorComponent } from '../quantity-selector/quantity-selector.component';

@Component({
  imports: [CoreModule, SharedModule, QuantitySelectorComponent],
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  standalone: true,
})
export class ProductComponent {
  @Input() product!: Product;

  animatedFeedbackError$: Subject<AnimatedFeedback> = new Subject();
  animatedFeedbackSucces$: Subject<AnimatedFeedback> = new Subject();
  randomImageNumber = 1;

  constructor(
    private cartManagerService: CartManagerService,
    private snackbarService: SnackbarService
  ) {
    this.randomImageNumber = Random.until(6);
  }

  addToCart(product: Product, quantity: number) {
    const isAddedSuccessfully = this.cartManagerService.addProduct({
      product: product,
      quantity: quantity,
      totalPrice: product.unit_price * quantity,
    });

    if (!isAddedSuccessfully) {
      this.animatedFeedbackError$.next({
        className: 'shakeError',
        duration: 500,
      });
      this.snackbarService.openSnackBar('Not enough stock  😓');
      return;
    }

    this.animatedFeedbackSucces$.next({
      className: 'addedToCartSuccess',
      duration: 500,
    });
  }
}
