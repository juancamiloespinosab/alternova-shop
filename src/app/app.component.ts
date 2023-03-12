import { Component } from '@angular/core';
import { ProductCategoriesStateService } from '@core/services/state/product-categories-state.service';
import { ProductsStateService } from '@core/services/state/products-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'alternova-shop';

  constructor(
    private productsStateService: ProductsStateService,
    private productCategoriesStateService: ProductCategoriesStateService
  ) {}
}
