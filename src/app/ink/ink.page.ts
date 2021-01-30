import { Component, OnInit, ViewChild } from '@angular/core';
import { NavParams, NavController, IonSlides, Platform } from '@ionic/angular';

@Component({
  selector: 'app-ink',
  templateUrl: './ink.page.html',
  styleUrls: ['./ink.page.scss'],
})
export class InkPage implements OnInit {
  @ViewChild('slideHistoria') slider: IonSlides;
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 3,
    speed: 400,
   
   
  };

  slideOpts2 = {
    initialSlide: 1,
    speed: 400
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
