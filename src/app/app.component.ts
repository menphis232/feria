import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { INotificationPayload } from 'cordova-plugin-fcm-with-dependecy-updated';
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  private dark: boolean;

  private hasPermission: boolean;
  private token: string;
  private pushPayload: INotificationPayload;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private fcm: FCM,
    public authService: AuthService
  ) {
    this.dark = true;
    this.initializeApp();
  }

  private initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.authService.loadJwToken();
      this.setupFCM();

      document.body.classList.toggle('dark', true);

      /* prefersColor.addEventListener(
        'change',
        mediaQuery => {
          this.dark = mediaQuery.matches;
          this.updateDarkMode();
        }
      ); */
    });
  }

  private async setupFCM() {
    if (!this.platform.is('cordova'))
      return;

    this.fcm.onTokenRefresh().subscribe((newToken) => {
      this.token = newToken;
      // SEND TOKEN TO API
    });

    this.fcm.onNotification().subscribe((payload) => {
      this.pushPayload = payload;
      // NEW PUSH NOTIFICATION
    });

    this.hasPermission = await this.fcm.requestPushPermission();
    this.pushPayload = await this.fcm.getInitialPushPayload();
    this.token = await this.fcm.getToken();
    
    // STORE TOKEN IF NOT EXIST TO API
  }

  public get pushPayloadString() {
    return JSON.stringify(this.pushPayload, null, 4);
  }
}
