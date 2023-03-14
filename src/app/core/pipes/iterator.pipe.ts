import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iterator',
})
export class IteratorPipe implements PipeTransform {
  transform(value: unknown, length: number): Array<number> {
    let array = [];
    for (let i = 1; i <= length; i++) {
      array.push(i);
    }
    return array;
  }
}
