import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { MainTabsComponent } from './pages/main-tabs/main-tabs.component';

const routes: Routes = [
  /* {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  }, */
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then( m => m.AuthModule)
  },
  {
    path: 'tabs',
    component: MainTabsComponent,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
          }
        ],
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () => import('./pages/distributes/distributes.module').then( m => m.DistributesPageModule)
          }
        ],
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () => import('./pages/wtl/wtl.module').then( m => m.WtlPageModule)
          }
        ],
      },
      {
        path: 'shop',
        children: [
          {
            path: '',
            loadChildren: () => import('./pages/shop/shop.module').then( m => m.ShopPageModule)
          }
        ],
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
          }
        ],
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
 
  {
    path: 'splee',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'wtl',
    loadChildren: () => import('./pages/wtl/wtl.module').then( m => m.WtlPageModule)
  },

  


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
