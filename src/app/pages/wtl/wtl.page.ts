import { Component, OnInit, ViewChild  } from '@angular/core';
import { NavParams, IonSlides, Platform } from '@ionic/angular';

@Component({
  selector: 'app-wtl',
  templateUrl: './wtl.page.html',
  styleUrls: ['./wtl.page.scss'],
})
export class WtlPage implements OnInit {
  @ViewChild('slideHistoria') slider: IonSlides;
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 3,
    speed: 400,
    slidesPerGroup: 3,
    grabCursor: true,
    spaceBetween: 3
   
   
  };

  slideOpts2 = {
    initialSlide: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
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
