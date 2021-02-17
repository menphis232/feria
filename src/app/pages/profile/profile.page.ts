import { Component, OnInit } from '@angular/core';
import { iUser } from 'src/app/app.interfaces';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user: iUser;
  currentSegment: string;
  segment = 'participa'
  
  constructor() { }

  ngOnInit() {
    this.currentSegment = "join";

    this.user = {
      username: "Alvaro_bruss",
      points: 480000,
      following: 14,
      followers: 4
    }
  }

  segmentChanged(event) {
    this.currentSegment = event.detail.value;
  }

}
