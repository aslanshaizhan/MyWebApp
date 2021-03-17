import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-video-tv',
  templateUrl: './video-tv.component.html',
  styleUrls: ['./video-tv.component.scss']
})
export class VideoTvComponent implements OnInit {

  @ViewChild('videoPlayer') videoplayer: any;
  @ViewChild('videoPlayer1') videoplayer1: any;
  @ViewChild('videoPlayer2') videoplayer2: any;

  // tslint:disable-next-line:typedef
  toggleVideo() {
    this.videoplayer.play();
    this.videoplayer1.play();
    this.videoplayer2.play();
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
