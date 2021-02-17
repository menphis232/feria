import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WtlPage } from './wtl.page';

const routes: Routes = [
  {
    path: '',
    component: WtlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WtlPageRoutingModule {}
