import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { NavController } from '@ionic/angular';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { environment } from "../../environments/environment";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate  {

  constructor(private navCtrl: NavController,private http: HttpClient,private alertCtrl:AlertController) { }

  canActivate() {
    //Validamos que existe un usuario en el localstorage almacenado
    let token = localStorage.getItem("token"); 
    if (token) {
        return true;
    } else {
      this.navCtrl.navigateRoot('/login');
      return false;  
    }
  }

  login(){}
}
