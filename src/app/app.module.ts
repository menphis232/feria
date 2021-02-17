import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { Camera } from '@ionic-native/camera/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';

import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';
import { ApiService } from './services/api.service';
import { InterceptorService } from './services/interceptor.service';

import { MainTabsComponent } from './pages/main-tabs/main-tabs.component';
import { SplashPageModule } from './pages/splash/splash.module'

import { AndroidExoplayer } from '@ionic-native/android-exoplayer/ngx';

@NgModule({
  declarations: [AppComponent, MainTabsComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot({
      name: '__tattoo',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    HttpClientModule
  ],
  providers: [
    FCM,
    Camera,
    StatusBar,
    AndroidExoplayer,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    AuthService,
    DataService,
    ApiService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
