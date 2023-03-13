import { Component } from '@angular/core';
import { TableComponent } from '@components/molecules/table/table.component';
import { CoreModule } from '@core/core.module';
import { TABLE_ADAPTER_VALUE, TABLE_COLUMN_FORMAT_VALUE } from '@core/enums';
import { TableConfig } from '@core/interfaces';
import { CartManagerService } from '@core/services/app/cart-manager.service';
import { CartStateService } from '@core/services/state/cart-state.service';
import { SharedModule } from '@shared/shared.module';

@Component({
  imports: [CoreModule, SharedModule, TableComponent],
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  standalone: true,
})
export class CartComponent {
  TABLE_ADAPTER_VALUE = TABLE_ADAPTER_VALUE;

  tableConfig: TableConfig = {
    headersLabel: ['Product', 'Quantity', 'Unit Price', 'Total Price'],
    columns: [
      {
        dataKey: 'name',
        align: 'left',
        format: '',
      },
      {
        dataKey: 'quantity',
        align: 'center',
        format: '',
      },
      {
        dataKey: 'unit_price',
        align: 'left',
        format: TABLE_COLUMN_FORMAT_VALUE.CURRENCY,
      },
      {
        dataKey: 'totalPrice',
        align: 'left',
        format: TABLE_COLUMN_FORMAT_VALUE.CURRENCY,
      },
    ],
  };

  constructor(
    public cartStateService: CartStateService,
    private cartManagerService: CartManagerService
  ) {}

  clearCart() {
    this.cartManagerService.clearCart();
  }
}
