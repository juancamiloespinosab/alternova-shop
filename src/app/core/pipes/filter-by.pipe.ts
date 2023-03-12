import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy',
})
export class FilterByPipe implements PipeTransform {
  transform(list: any, key: string, value: string): any {
    if (value && value !== '') {
      return list.filter((item: any) =>
        item[key].toLowerCase().includes(value.toLowerCase())
      );
    }
    return list;
  }
}
