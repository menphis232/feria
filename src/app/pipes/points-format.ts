import {Pipe} from '@angular/core';
 
@Pipe({
    name: 'pointsFormat'
})
export class PointsFormat {
    transform(value: number): string {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
}