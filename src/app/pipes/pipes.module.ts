import { NgModule } from '@angular/core';
import { PointsFormat } from './points-format';
import { NumberPad } from './number-pad';

@NgModule({
  imports: [
    // dep modules
  ],
  declarations: [ 
    PointsFormat,
    NumberPad
  ],
  exports: [
    PointsFormat,
    NumberPad
  ]
})
export class PipesModule {}