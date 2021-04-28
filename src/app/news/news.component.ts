import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(){}

  @Output() public childEvent = new EventEmitter();

  // tslint:disable-next-line:typedef
  sendData() {
    this.childEvent.emit();
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }
}

