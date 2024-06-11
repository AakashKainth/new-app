import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
  standalone: true
})
export class CustomPipe implements PipeTransform {

    transform(value: number, num:number): unknown {
    return value * num
      //return value + num;

  }

  // transform(value: number, ...args: number[]): unknown {

  //   const [a,b] = args;
  //   return value + a + b;
  //   return value + 10;
  //   const [a] = args;
  //   return Math.pow(value, a);
  //   return value * value * value;

  // }

}
