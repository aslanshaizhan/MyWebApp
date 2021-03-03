import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-mix',
  templateUrl: './news-mix.component.html',
  styleUrls: ['./news-mix.component.scss']
})
export class NewsMixComponent implements OnInit {

  constructor() { }
  public new = '';
  public name = 'Tengri News';

  ngOnInit(): void {
  }

}
