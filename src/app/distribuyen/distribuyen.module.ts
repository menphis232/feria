import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DistribuyenPageRoutingModule } from './distribuyen-routing.module';

import { DistribuyenPage } from './distribuyen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DistribuyenPageRoutingModule
  ],
  declarations: [DistribuyenPage]
})
export class DistribuyenPageModule {}
