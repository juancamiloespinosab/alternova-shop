import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { TABLE_COLUMN_FORMAT_VALUE } from '@core/enums';

@Pipe({
  name: 'tableColumnFormat',
})
export class TableColumnFormatPipe implements PipeTransform {
  transform(value: string, format: TABLE_COLUMN_FORMAT_VALUE | string) {
    switch (format) {
      case TABLE_COLUMN_FORMAT_VALUE.CURRENCY:
        return new CurrencyPipe('en').transform(value, 'USD', 'symbol', '4.0');
    }

    return value;
  }
}
