import { Pipe, PipeTransform } from '@angular/core';
import { TABLE_ADAPTER_VALUE } from '@core/enums';
import { CartProduct } from '@core/models';

@Pipe({
  name: 'tableAdapterFrom',
})
export class TableAdapterFromPipe implements PipeTransform {
  transform(list: any, value: TABLE_ADAPTER_VALUE): any[] {
    let tableData = [];

    switch (value) {
      case TABLE_ADAPTER_VALUE.CART:
        tableData = list.products.map((cartProduct: CartProduct) => {
          const { product, quantity, totalPrice } = cartProduct;
          const { name, unit_price } = product;

          return {
            product,
            name,
            unit_price,
            quantity,
            totalPrice,
          };
        });
    }

    return tableData;
  }
}
