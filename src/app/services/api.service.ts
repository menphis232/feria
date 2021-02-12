import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { emptyToken, iToken } from '../app.interfaces';
import { API_URL } from '../app.config'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  /* AUTH */

  async login(email: string, password: string) {
    try {
      return await this.http.post<iToken>(`${API_URL}auth/login`, {
        email: email, password: password
      }).toPromise();
    } catch (e) {
      return emptyToken;
    }
  }

  async requestToken() {
    try {
      return await this.http.get<iToken>(`${API_URL}auth/token`).toPromise();
    } catch (e) {
      return emptyToken;
    }
  }
}
