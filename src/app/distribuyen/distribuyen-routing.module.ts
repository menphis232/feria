import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DistribuyenPage } from './distribuyen.page';

const routes: Routes = [
  {
    path: '',
    component: DistribuyenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DistribuyenPageRoutingModule {}
