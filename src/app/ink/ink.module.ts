import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InkPageRoutingModule } from './ink-routing.module';

import { InkPage } from './ink.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InkPageRoutingModule
  ],
  declarations: [InkPage]
})
export class InkPageModule {}
