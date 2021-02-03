import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor() { }
  segment = 'participa'
  ngOnInit() {
  }
  segmentChanged(event){
    console.log(event)
  }
}
