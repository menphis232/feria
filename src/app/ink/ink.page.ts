import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ink',
  templateUrl: './ink.page.html',
  styleUrls: ['./ink.page.scss'],
})
export class InkPage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 3,
    speed: 400,
   
   
  };

  constructor() { }

  ngOnInit() {
  }

}
