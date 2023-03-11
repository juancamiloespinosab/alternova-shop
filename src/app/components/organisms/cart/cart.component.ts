import { Component } from '@angular/core';
import { CartStateService } from '@core/services/state/cart-state.service';
import { SharedModule } from '@shared/shared.module';

@Component({
  imports: [SharedModule],
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  standalone: true,
})
export class CartComponent {
  constructor(public cartStateService: CartStateService) {}
}
