import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  dol: number = 433;
  eu: number = 493;
  rub: number = 5.6;

  constructor() { }

  ngOnInit(): void {
  }

}
