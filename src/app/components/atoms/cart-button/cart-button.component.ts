import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { DrawerService } from '@core/services/app/drawer.service';
import { CartStateService } from '@core/services/state/cart-state.service';

@Component({
  selector: 'app-cart-button',
  standalone: true,
  imports: [CommonModule, CoreModule, SharedModule],
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.scss'],
})
export class CartButtonComponent implements OnInit {
  constructor(public drawerService: DrawerService, public cartStateService: CartStateService) {}

  ngOnInit(): void {}

  drawerToggle() {
    this.drawerService.toggleDrawer$.next(true);
  }
}
