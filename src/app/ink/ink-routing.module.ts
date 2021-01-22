import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InkPage } from './ink.page';

const routes: Routes = [
  {
    path: 'ink',
    component: InkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InkPageRoutingModule {}
