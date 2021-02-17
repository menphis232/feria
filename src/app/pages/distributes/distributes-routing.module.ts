import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DistributesPage } from './distributes.page';

const routes: Routes = [
  {
    path: '',
    component: DistributesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DistributesPageRoutingModule {}
