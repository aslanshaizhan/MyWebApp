import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-mix',
  templateUrl: './news-mix.component.html',
  styleUrls: ['./news-mix.component.scss']
})
export class NewsMixComponent implements OnInit {
  tenge: any;
  euro: any;

  colorValue = 'blue';
  colorValue1 = 'red';

  constructor() { }

  ngOnInit(): void {
  }

}
