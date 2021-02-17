import { Component, OnInit, ViewChild } from '@angular/core';
import { NavParams, IonSlides, Platform,LoadingController, AlertController  } from '@ionic/angular';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {
  @ViewChild('slideHistoria') slider: IonSlides;
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 3,
    speed: 400,
   
   
  };

  constructor() { }

  ngOnInit() {
  }
  slidePrev(){
    this.slider.slidePrev();
  }
  slideNext(){
    this.slider.slideNext();
  }

}
