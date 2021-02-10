import { Component, OnInit } from '@angular/core';
import { NavParams,LoadingController,NavController, AlertController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { environment } from "../../environments/environment";

@Component({
  selector: 'app-distribuyen',
  templateUrl: './distribuyen.page.html',
  styleUrls: ['./distribuyen.page.scss'],
})
export class DistribuyenPage implements OnInit {

  isLoadingPresent = false
  loading
  mostrarGif=true

  constructor(private navCtrl: NavController,private alertContrl: AlertController,public loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {

    // this.loadDistribuyen()

    }


    async loadDistribuyen(){
      // this.displayLoading();
      this.mostrarGif=true
      // await this.AQUIVAELSERVICIO.ObtenerDistribuyen({id:data}).subscribe((res)=>{
      //   // this.dismissLoading();

      //     if(res){
         
      //       this.mostrarGif=false
      //     }else{
      //       this.mostrarGif=false
      //     }
      //   console.log('lista',res)
   
      // },(error)=>{
      //   // this.dismissLoading();
      //   console.log(error);
      //   this.presentAlert("Error Inseperado", "Contacte con soporte")
      // })
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
      const alert = await this.alertContrl.create({
        cssClass: 'my-custom-class',
        header: titulo,
        subHeader: contenido,
        buttons: ['OK']
      });
  
      await alert.present();
    }

}
