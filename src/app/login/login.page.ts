import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NavParams,LoadingController, Platform, AlertController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  password = '';
  email = '';

  isLoadingPresent = false
  loading

  constructor(public router: Router,public alertCtrl: AlertController,public loadingCtrl: LoadingController,public auth: AuthService) {

   }

  ngOnInit() {
  }

  
  login() {
    if (this.email === '' || this.password === '') {
   console.log('campos vacios')
      return;
    }else{


      this.displayLoading();
      let data = {email:this.email,password:this.password};
      // this.service.loginp(data);
      try {
        // Iniciamos la consulta
        // this.auth.login(data).subscribe((res: any) => {
        //   //Almacenamos en local storage el nombre del usuario
      
        //   localStorage.setItem('token', res.access_token);
        //   localStorage.setItem('user', JSON.stringify(res.user));
        //    this.router.navigateRoot('/');
        //   this.dismissLoading();
        // }, e => {
        //   //En caso de error
        //   this.dismissLoading();
        //   this.presentAlert("Error Inseperado", e.error.message ? e.error.message : "Contacte con soporte");
        //   console.error(e);
        // })
  
      }
      catch (e) {
        this.dismissLoading();
        this.presentAlert("Error Inseperado", e.error.message ? e.error.message : "Contacte con soporte");
        console.error(e);
      }
    }
    
  }

  async displayLoading(message?: string, duration?: number) {
    if(!this.isLoadingPresent){
    try {
      this.loading = await this.loadingCtrl.create({
        message: message ? message : 'Cargando',
         duration: duration ? duration : 2000
      });
      await this.loading.present();
      this.isLoadingPresent = true;
    } catch (error) {
      console.error(error);
    }
  }

  }
  async dismissLoading() {
    if(this.isLoadingPresent){
    try {
      await this.loading.dismiss();
      this.isLoadingPresent = false;
    } catch (error) {
    }
  }
  }
  async presentAlert(titulo,contenido) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: titulo,
      subHeader: contenido,
      buttons: ['OK']
    });

    await alert.present();
  }
}
