import { Component } from '@angular/core';
import { ProductsStateService } from '@core/services/state/products-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'alternova-shop';

  constructor(private productsStateService: ProductsStateService) {}
}
