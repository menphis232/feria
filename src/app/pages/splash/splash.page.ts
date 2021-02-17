import { Component, OnInit } from '@angular/core';
import { AndroidExoplayer, AndroidExoPlayerParams } from '@ionic-native/android-exoplayer/ngx';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(private androidExoPlayer: AndroidExoplayer,) { }

  ngOnInit() {
    this. start_video()
  }


  start_video(){
    const params: AndroidExoPlayerParams = {
      url: '../../../assets/presentacion.mp4',
      hideTimeout: 100,
      autoPlay: true,
    }

    this.androidExoPlayer.show(params).subscribe(res => {
      if (res.eventType == 'KEY_EVENT' || (res.eventType == 'STATE_CHANGED_EVENT' && res.playbackState == 'STATE_ENDED')) {
        this.androidExoPlayer.close();
 
      }
    });
  }

}
