import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { NavParams,LoadingController, Platform, NavController, AlertController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  password = '';
  email = '';
  public formGroup: FormGroup;
  isLoadingPresent = false
  loading

  constructor(private navCtrl: NavController,public alertCtrl: AlertController,public loadingCtrl: LoadingController,public auth: AuthService,private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });
   }

  ngOnInit() {
  }

  
  login() {
    if (this.email === '' || this.password === '') {
   console.log('campos vacios')
      return;
    }else{

       console.log('email',this.email)
       console.log('password',this.password)

       this.formGroup.controls['email'].setValue(this.email);
       this.formGroup.controls['password'].setValue(this.password);
      this.displayLoading();
      let data = this.formGroup.value;
      // this.service.loginp(data);
      try {
        // Iniciamos la consulta
        // this.auth.login(data).subscribe((res: any) => {
        //   //Almacenamos en local storage el nombre del usuario
      
        //   localStorage.setItem('token', res.access_token);
        //   localStorage.setItem('user', JSON.stringify(res.user));
        //    this.navCtrl.navigateRoot('/');
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
