import { Pipe } from '@angular/core';

@Pipe({
    name: 'numberPad'
})
export class NumberPad {
    transform(
        value: number,
        count: number = 5,
        digit: string = "0",
        order: string = "left"
    ): string {
        const number = value.toString().replace(/\D+/g, '');
        return order == "left" ? number.padStart(count, digit) : number.padEnd(count, digit);
    }
}