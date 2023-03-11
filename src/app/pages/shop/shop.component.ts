import { Component } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { ProductsStateService } from '@core/services/state/products-state.service';
import { SharedModule } from '@shared/shared.module';
import { ResponsiveService } from '@core/services/app/responsive.service';
import { CartComponent } from '@components/organisms/cart/cart.component';
import { ProductsComponent } from '@components/organisms/products/products.component';

@Component({
  imports: [SharedModule, CartComponent, ProductsComponent],
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  standalone: true,
})
export class ShopComponent {
  drawerState = 'close';
  constructor(
    public productsStateService: ProductsStateService,
    public responsiveService: ResponsiveService
  ) {}

  drawerToggle(drawer: MatDrawer) {
    drawer.toggle().then((newState: string) => (this.drawerState = newState));
  }
}
