import { Component } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { CartStateService } from '@core/services/state/cart-state.service';
import { SharedModule } from '@shared/shared.module';

@Component({
  imports: [CoreModule, SharedModule],
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  standalone: true,
})
export class CartComponent {
  constructor(public cartStateService: CartStateService) {}
}
