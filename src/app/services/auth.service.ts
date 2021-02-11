import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { TOKEN_KEY } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentJwToken: string;

  constructor(
    private storage: Storage
  ) { }

  async loadJwToken() {
    this.currentJwToken = await this.storage.get(TOKEN_KEY).catch(() => undefined);
  }

  async refreshJwToken() {
    const token = "123";
    // HTTP GET NEW TOKEN
    this.currentJwToken = token;
    await this.storage.set(TOKEN_KEY, token);
  }

  getJwToken(): string {
    return this.currentJwToken;
  }
}
