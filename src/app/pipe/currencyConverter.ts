import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'currencyConverter'
})
export class CurrencyConverterPipe implements PipeTransform {

  // tslint:disable-next-line:typedef
  transform(value: number, unit: string) {
    if (value && !isNaN(value)) {
      if (unit === 'Eu') {
        const currency = value / 493 ;
        return currency.toFixed(2);
      } else if (unit === 'Tg'){
        const currency = value * 493;
        return currency.toFixed(2);
      }
    }
    return;

  }
}
