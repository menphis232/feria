import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrganizanPage } from './organizan.page';

const routes: Routes = [
  {
    path: '',
    component: OrganizanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrganizanPageRoutingModule {}
