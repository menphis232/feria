import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { TOKEN_KEY } from '../app.config';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentJwToken: string;

  constructor(
    private router: Router,
    private storage: Storage,
    private readonly apiService: ApiService
  ) { }

  async login(username: string, password: string) {
    const auth = await this.apiService.login(username, password);
    if (auth.token) {
      this.currentJwToken = auth.token;
      await this.storage.set(TOKEN_KEY, auth.token);
    }
    return !!auth.token;
  }

  async logout() {
    this.storage.remove(TOKEN_KEY);
    this.router.navigateByUrl('/login');
  }

  async refreshJwToken() {
    const authData = await this.apiService.requestToken();
    if (authData.token) {
      this.currentJwToken = authData.token;
      await this.storage.set(TOKEN_KEY, authData.token);
    } else {
      this.logout();
    }
  }

  async loadJwToken() {
    this.currentJwToken = await this.storage.get(TOKEN_KEY).catch(() => undefined);
  }

  getJwToken(): string {
    return this.currentJwToken;
  }
}