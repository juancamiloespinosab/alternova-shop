import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy',
})
export class FilterByPipe implements PipeTransform {
  transform(list: any, key: string, value: string | string[]): any {
    if (!value || value === '') return list;

    /* Filtrar por un string */
    if (typeof value === 'string') {
      return list.filter((item: any) =>
        item[key].toLowerCase().includes(value.toLowerCase())
      );
    }

    /* Filtrar por un array de strings */
    if (value instanceof Array && value.length) {
      return list.filter((item: any) => {
        return value.includes(item[key]);
      });
    }

    return list;
  }
}
