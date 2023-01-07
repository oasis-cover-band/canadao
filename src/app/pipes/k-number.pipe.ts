import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kNumber'
})
export class KNumberPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    if (value < 1000) {
      return value + '';
    } else if (value < 1000000) {
      return (value / 1000).toFixed(1) + 'K';
    } else if (value < 1000000000) {
      return (value / 1000000).toFixed(1) + 'M';
    } else {
      return (value / 1000000000).toFixed(1) + 'B';
    }
  }

}
