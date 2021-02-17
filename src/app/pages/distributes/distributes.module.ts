import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DistributesPageRoutingModule } from './distributes-routing.module';

import { DistributesPage } from './distributes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DistributesPageRoutingModule
  ],
  declarations: [DistributesPage]
})
export class DistributesPageModule {}
