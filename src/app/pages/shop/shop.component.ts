import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { ProductsStateService } from '@core/services/state/products-state.service';
import { SharedModule } from '@shared/shared.module';
import { ResponsiveService } from '@core/services/app/responsive.service';
import { CartComponent } from '@components/organisms/cart/cart.component';
import { ProductsComponent } from '@components/organisms/products/products.component';
import { CoreModule } from '@core/core.module';
import { FiltersComponent } from '@components/molecules/filters/filters.component';
import { DrawerService } from '@core/services/app/drawer.service';
import { Subscription } from 'rxjs';
import { CartButtonComponent } from '@components/atoms/cart-button/cart-button.component';

@Component({
  imports: [
    CoreModule,
    SharedModule,
    CartComponent,
    ProductsComponent,
    FiltersComponent,
    CartButtonComponent,
  ],
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  standalone: true,
})
export class ShopComponent implements OnInit, OnDestroy {
  @ViewChild('drawer') drawer!: MatDrawer;

  toggleDrawerSubscription!: Subscription;

  constructor(
    public productsStateService: ProductsStateService,
    public responsiveService: ResponsiveService,
    private drawerService: DrawerService
  ) {}

  ngOnInit(): void {
    this.initDrawerState();
  }

  initDrawerState() {
    this.toggleDrawerSubscription = this.drawerService.toggleDrawer$.subscribe(
      () => {
        this.drawer
          .toggle()
          .then((status: string) =>
            this.drawerService.drawerState$.next(status)
          );
      }
    );
  }

  ngOnDestroy(): void {
    this.toggleDrawerSubscription?.unsubscribe();
  }
}
