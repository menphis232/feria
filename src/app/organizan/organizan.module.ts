import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrganizanPageRoutingModule } from './organizan-routing.module';

import { OrganizanPage } from './organizan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrganizanPageRoutingModule
  ],
  declarations: [OrganizanPage]
})
export class OrganizanPageModule {}
