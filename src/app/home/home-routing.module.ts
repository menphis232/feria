import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'organizan',
        children: [
          {
            path: '',
            loadChildren: () => import('../organizan/organizan.module').then( m => m.OrganizanPageModule)
          }
        ]
      },
      {
        path: 'ink',
        children: [
          {
            path: '',
            loadChildren: () => import('../ink/ink.module').then( m => m.InkPageModule)
          }
        ]
      },
      {
        path: 'distribuyen',
        children: [
          {
            path: '',
            loadChildren: () => import('../distribuyen/distribuyen.module').then( m => m.DistribuyenPageModule)
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () => import('../perfil/perfil.module').then( m => m.PerfilPageModule)
          }
        ]
      },
      {
        path: 'map',
        children: [
          {
            path: '',
            loadChildren: () => import('../ink/ink.module').then( m => m.InkPageModule)
          }
        ]
      },
      {
        path: 'compras',
        children: [
          {
            path: '',
            loadChildren: () => import('../compras/compras.module').then( m => m.ComprasPageModule)
          }
        ]
      },
    ]
  },
  {
    path: '',
    redirectTo: '/home/ink',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
