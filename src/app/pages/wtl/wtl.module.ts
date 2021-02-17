import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WtlPageRoutingModule } from './wtl-routing.module';

import { WtlPage } from './wtl.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WtlPageRoutingModule
  ],
  declarations: [WtlPage]
})
export class WtlPageModule {}
