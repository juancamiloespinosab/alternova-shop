import { Component, OnDestroy } from '@angular/core';
import { TableComponent } from '@components/molecules/table/table.component';
import { CoreModule } from '@core/core.module';
import { TABLE_ADAPTER_VALUE, TABLE_COLUMN_FORMAT_VALUE } from '@core/enums';
import { TableConfig } from '@core/interfaces';
import { TableAction } from '@core/interfaces/table-action.interface';
import { Cart } from '@core/models';
import { CartManagerService } from '@core/services/app/cart-manager.service';
import { CartStateService } from '@core/services/state/cart-state.service';
import { SharedModule } from '@shared/shared.module';
import { Observable, Subscription } from 'rxjs';

@Component({
  imports: [CoreModule, SharedModule, TableComponent],
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  standalone: true,
})
export class CartComponent implements OnDestroy {
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
    actions: [
      {
        name: 'remove',
        icon: 'delete',
        color: 'warn',
      },
    ],
  };

  actionaObservableSubscription!: Subscription;

  constructor(
    public cartStateService: CartStateService,
    private cartManagerService: CartManagerService
  ) {}

  clearCart() {
    this.cartManagerService.removeAllProducts();
  }

  subscribeToTableActionsObservable(
    actionaObservable: Observable<TableAction>
  ) {
    this.actionaObservableSubscription = actionaObservable.subscribe(
      (tableAction: TableAction) => this.tableActionsHandler(tableAction)
    );
  }

  tableActionsHandler(tableAction: TableAction) {
    const DISPATCH_CART_ACTION_DEFAULT = null;
    const DISPATCH_CART_ACTION: { [key: string]: any } = {
      remove: this.cartManagerService.removeProduct(tableAction.item),
    };
    DISPATCH_CART_ACTION[tableAction.actionName] ||
      DISPATCH_CART_ACTION_DEFAULT;
  }

  isCartEmpty(cart: Cart) {
    return cart.products.length === 0
  }

  ngOnDestroy(): void {
    this.actionaObservableSubscription?.unsubscribe();
  }
}
