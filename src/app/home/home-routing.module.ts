import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
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
        path: 'market',
        children: [
          {
            path: '',
            loadChildren: () => import('../ink/ink.module').then( m => m.InkPageModule)
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () => import('../ink/ink.module').then( m => m.InkPageModule)
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
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: () => import('../ink/ink.module').then( m => m.InkPageModule)
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
